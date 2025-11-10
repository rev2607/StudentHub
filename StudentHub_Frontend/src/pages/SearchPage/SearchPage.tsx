import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome, faUniversity, faBook, faBalanceScale, faGraduationCap, faBriefcase, faNewspaper, faHistory, faEllipsisH, faShare, faFileExport, faPen, faPlus } from "react-icons/fa";

function SearchPage() {
  const [isLeftOpen, setIsLeftOpen] = useState(true);
  const [isRightOpen, setIsRightOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchData, setSearchData] = useState<any>({});
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [followUp, setFollowUp] = useState("");

  const toggleLeftSidebar = () => {
    setIsLeftOpen((prev) => !prev);
  };

  const sidebarRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsLeftOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Load query + results saved by homepage search
  useEffect(() => {
    try {
      const q = localStorage.getItem("searchQuery") || "";
      const dataRaw = localStorage.getItem("searchData");
      setSearchQuery(q);
      if (dataRaw) {
        const parsed = JSON.parse(dataRaw);
        setSearchData(parsed);
        if (q) {
          setMessages([
            { role: 'user', content: q },
            { role: 'assistant', content: parsed?.response || "" },
          ]);
        }
      }
    } catch {}
  }, []);

  const relatedQueries: string[] = searchData?.related_queries || [];
  const answerText: string = searchData?.response || "";

  // Collect image URLs from API field and also fallback by regex from the answer body
  const imageSet = new Set<string>();
  const pushUrl = (u?: string) => {
    if (!u) return;
    try {
      const cleaned = u.replace(/^["'\(\[]+|["'\)\]]+$/g, "");
      // Basic validation: must look like a direct image
      if (/^https?:\/\//.test(cleaned) && /\.(png|jpe?g|gif|webp|svg)$/i.test(cleaned)) {
        imageSet.add(cleaned);
      }
    } catch {}
  };
  (searchData?.images || []).forEach(pushUrl);
  if (searchData?.response) {
    const matches = answerText.match(/https?:\/\/\S+?\.(?:png|jpe?g|gif|webp|svg)/gi) || [];
    matches.forEach(pushUrl);
  }
  const images = Array.from(imageSet).slice(0, 6);

  const sanitizeRelatedLabel = (text: string) => {
    if (!text) return "";
    let t = text.replace(/\*\*/g, ""); // remove markdown bold markers
    t = t.replace(/^\s*\d+\.\s*/, ""); // remove leading numbering like "1. "
    return t.trim();
  };

  const runSearch = async (q: string) => {
    const query = (q || "").trim();
    if (!query || isFetching) return;
    try {
      setIsFetching(true);
      // Build a simple text context from prior messages
      const context = messages.length
        ? messages.map(m => (m.role === 'user' ? `User: ${m.content}` : `Assistant: ${m.content}`)).join("\n\n") + `\n\nUser: ${query}`
        : query;
      setMessages(prev => [...prev, { role: 'user', content: query }]);
      const response = await fetch("/api/search/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: context }),
      });
      const json = await response.json();
      const data = json?.data || {};
      setMessages(prev => [...prev, { role: 'assistant', content: data?.response || "" }]);
      setSearchData(data);
      // keep localStorage in sync with the latest item
      localStorage.setItem("searchQuery", query);
      localStorage.setItem("searchData", JSON.stringify(data));
      // Scroll to bottom after append
      setTimeout(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }), 0);
    } catch (e) {
      // no-op for now
    } finally {
      setIsFetching(false);
    }
  };

  // Very small markdown-ish renderer for headings and bullet lists
  const renderStructuredAnswer = (text: string) => {
    const lines = text.split(/\n+/);
    const blocks: any[] = [];
    let listBuffer: string[] = [];
    let iLine = 0;

    const flushList = () => {
      if (listBuffer.length > 0) {
        blocks.push(
          <ul key={`ul-${blocks.length}`} className="list-disc list-inside text-[13px] text-[#B9B9B9] mb-3">
            {listBuffer.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        );
        listBuffer = [];
      }
    };

    while (iLine < lines.length) {
      const raw = lines[iLine++];
      const line = raw.trim();
      if (!line) {
        flushList();
        blocks.push(<div key={`sp-${blocks.length}`} className="h-2" />);
        continue;
      }
      if (line.startsWith("- ")) {
        listBuffer.push(line.replace(/^\-\s+/, ""));
        continue;
      }
      flushList();

      // Table detection: header row with pipes, followed by a separator row with dashes and pipes
      const isPipeLine = line.includes("|");
      const peek = (idx: number) => (iLine + idx < lines.length ? lines[iLine + idx].trim() : "");
      if (isPipeLine && /^\|?\s*:?\-+.*\|.*$/.test(peek(0))) {
        // header already in `line`, next line is separator; collect rows until a blank or non-pipe line
        const headerCells = line
          .split("|")
          .map(c => c.trim())
          .filter(c => c.length > 0);
        // skip separator row
        iLine += 1;
        const rowEls: any[] = [];
        while (iLine < lines.length) {
          const r = lines[iLine].trim();
          if (!r || !r.includes("|")) break;
          const cells = r
            .split("|")
            .map(c => c.trim())
            .filter(c => c.length > 0);
          rowEls.push(
            <tr key={`tr-${iLine}`} className="border-b border-gray-700">
              {cells.map((c, ci) => (
                <td key={`td-${iLine}-${ci}`} className="px-3 py-2 text-[12px] text-[#B9B9B9] align-top">
                  {c}
                </td>
              ))}
            </tr>
          );
          iLine += 1;
        }
        blocks.push(
          <div key={`tbl-${blocks.length}`} className="overflow-x-auto mb-4">
            <table className="min-w-full border border-gray-700 rounded-md overflow-hidden">
              <thead className="bg-gray-800/40">
                <tr>
                  {headerCells.map((h, hi) => (
                    <th key={`th-${hi}`} className="px-3 py-2 text-left text-white text-[12px] font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>{rowEls}</tbody>
            </table>
          </div>
        );
        continue;
      }

      // Heading heuristic: short line without trailing period
      if (line.length <= 60 && !/[\.!?]$/.test(line)) {
        blocks.push(
          <h3 key={`h-${blocks.length}`} className="text-white font-semibold mt-4 mb-2 text-base">
            {line}
          </h3>
        );
      } else {
        // Bold markers
        const parts = [] as any[];
        const rest = line;
        let i = 0;
        const boldRegex = /\*\*(.+?)\*\*/g;
        let match;
        let lastIndex = 0;
        while ((match = boldRegex.exec(line)) !== null) {
          if (match.index > lastIndex) parts.push(line.slice(lastIndex, match.index));
          parts.push(<strong key={`b-${blocks.length}-${i++}`}>{match[1]}</strong>);
          lastIndex = match.index + match[0].length;
        }
        if (lastIndex < line.length) parts.push(line.slice(lastIndex));
        blocks.push(
          <p key={`p-${blocks.length}`} className="text-[13px] text-[#B9B9B9] leading-relaxed mb-2">
            {parts.length ? parts : rest}
          </p>
        );
      }
    }
    flushList();
    return <div>{blocks}</div>;
  };
  return (
    <div className="bg-[#121916] text-white min-h-screen flex flex-col md:flex-row">
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet" />

      {/* <!-- Mobile top bar with menu icons --> */}
      <header className="flex justify-between items-center bg-[#1B201D] px-4 py-3 md:hidden fixed top-0 left-0 right-0 z-30 border-b border-[#2B3A0B]">
        <button id="leftSidebarToggle" aria-label="Toggle left sidebar" className="text-white text-xl focus:outline-none" onClick={toggleLeftSidebar}>
          <i className="fas fa-bars"></i>
        </button>
        <Link to="/">
          {/* <span className="text-white font-semibold text-lg tracking-wide truncate max-w-[60vw]">STUDENT HUB.IN</span> */}
          <img src="/StudentHub_Logo.svg" className="w-40 sm:w-20 md:w-24 lg:w-32 xl:w-40" alt="StudentHub Logo" />
        </Link>

        <button id="rightSidebarToggle" aria-label="Toggle right sidebar" className="text-white text-xl focus:outline-none" onClick={() => setIsRightOpen((prev) => !prev)}>
          <i className="fas fa-bars"></i>
        </button>
      </header>

      {/* <!-- Sidebar --> */}

      <aside
        ref={sidebarRef}
        className={`fixed inset-y-0 left-0 z-40 w-56 bg-[#1B201D] border-r border-[#2B3A0B] px-4 py-6 md:px-6 md:py-8 transition-transform duration-300 ease-in-out transform ${
          isLeftOpen ? "translate-x-0" : "-translate-x-full"
        } md:static md:translate-x-0 md:flex md:flex-col md:justify-between`}
      >
        <div>
          <div className="flex items-center gap-2 mb-8 md:mb-10">
            <Link to="/">
              {/* <span className="text-white font-semibold text-lg tracking-wide whitespace-nowrap">STUDENT HUB.IN</span> */}
              <img src="/StudentHub_Logo.svg" alt="StudentHub Logo" />
            </Link>
          </div>
          <button className="w-full text-white border border-[#7AC142] rounded-full py-2 text-sm font-semibold flex items-center justify-center gap-2 mb-6 md:mb-8 hover:bg-[#7AC142] hover:text-black transition">
            <i className="fas fa-plus"></i>
            New Thread
          </button>
          <nav id="leftNav" className="flex flex-col gap-4 text-sm font-normal text-white">
            {/* {["Home", "Colleges", "Courses", "College Compare", "Scholarships", "Internship", "News", "History"].map((item, index) => (
              <a key={index} className="flex items-center gap-3 text-white hover:text-white transition whitespace-nowrap" href="#" onClick={closeLeftSidebar}>
                <i className="fas fa-icon-name"></i> {/* You can map icons if needed */}
            {/* {item} */}
            {/* </a> */}
            {/* ))} */}
            <a className="flex items-center gap-3 text-white hover:text-white transition whitespace-nowrap" href="#">
              <i className="fas fa-search text-[#7AC142]"></i>
              Home
            </a>
            <a className="flex items-center gap-3 text-white hover:text-white transition whitespace-nowrap" href="#">
              <i className="fas fa-building text-[#7AC142]"></i>
              Colleges
            </a>
            <a className="flex items-center gap-3 text-white hover:text-white transition whitespace-nowrap" href="#">
              <i className="fas fa-book text-[#7AC142] "></i>
              Courses
            </a>
            <a className="flex items-center gap-3 text-white hover:text-white transition whitespace-nowrap" href="#">
              <i className="fas fa-balance-scale text-[#7AC142]"></i>
              College Compare
            </a>
            <a className="flex items-center gap-3 text-white hover:text-white transition whitespace-nowrap" href="#">
              <i className="fas fa-graduation-cap text-[#7AC142]"></i>
              Mock Tests
            </a>
            <a className="flex items-center gap-3 text-white hover:text-white transition whitespace-nowrap" href="#">
              <i className="fas fa-briefcase text-[#7AC142]"></i>
              Internship
            </a>
            <a className="flex items-center gap-3 text-white hover:text-white transition whitespace-nowrap" href="#">
              <i className="fas fa-newspaper text-[#7AC142]"></i>
              News
            </a>
            <a className="flex items-center gap-3 text-white hover:text-white transition whitespace-nowrap" href="#">
              <i className="fas fa-globe text-[#7AC142]"></i>
              History
            </a>
          </nav>
          <div className="mt-8 md:mt-10 text-[10px] text-white leading-4 space-y-2 max-w-[220px] md:max-w-none">
            <p>
              <span className="text-[#7AC142] font-semibold">Today</span>
              <br />
              Amsterdam trip with the boys
            </p>
            <p>Superconductors: Smooth Roads</p>
            <p>
              <span className="text-[#7AC142] font-semibold">Previous 7 Days</span>
              <br />
              Excited About a Job Opportunity
            </p>
            <p>Fun fact about the Roman Empire</p>
            <p>3 day itinerary in the South of France</p>
            <p>
              <span className="text-[#7AC142] font-semibold">Previous 30 Days</span>
              <br />
              Marble Statue Pizza Cigar.
            </p>
            <p>Gradient Background Pack Giveaway</p>
            <p>Fern Gully, the Chief Leaf Officer</p>
            <p>Design an Uber-like app</p>
            <p>Product team meeting in Barcelona</p>
          </div>
        </div>
        <div className="text-white text-sm space-y-3 mt-6 md:mt-0 max-w-[220px] md:max-w-none">
          <button aria-label="Clear conversations" className="flex items-center gap-2 hover:text-white transition w-full">
            <i className="fas fa-trash-alt"></i>
            Clear conversations
          </button>
          <button aria-label="User Johnwick" className="flex items-center gap-2 hover:text-white transition w-full">
            <img alt="User avatar Johnwick" className="rounded-full" height="20" src="https://storage.googleapis.com/a1aa/image/55ec5250-8d2d-49bb-ca7b-3c845775739d.jpg" width="20" />
            Johnwick
          </button>
          <button aria-label="Log out" className="flex items-center gap-2 hover:text-white transition w-full">
            <i className="fas fa-sign-out-alt text-red-600"></i>
            Log out
          </button>
        </div>
      </aside>

      {/* <!-- Main content --> */}
      <main className="flex-1 p-2 sm:p-4 md:p-6 overflow-y-auto max-w-full mt-14 md:mt-0">
        <div className="flex justify-end items-center gap-4 mb-6">
          <button aria-label="More options" className="text-[#7AC142] bg-[#1B201D] p-2 rounded-md hover:text-white transition">
            <i className="fas fa-ellipsis-h"></i>
          </button>
          <button aria-label="Bookmark" className="text-[#7AC142] bg-[#1B201D] p-2 rounded-md hover:text-white transition">
            <i className="fas fa-bookmark"></i>
          </button>
          <button aria-label="Share" className="bg-[#7AC142] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#6bb22f] transition whitespace-nowrap">
            Share
          </button>
        </div>
        <div className="border-b border-[#2B3A0B] mb-6"></div>
        <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-3">{searchQuery || "Search"}</h1>
        {/* <!-- Green banner 1 --> */}
        <div className="bg-[#7AC142] rounded-xl flex items-center gap-4 max-w-xl mb-6 px-4 py-3">
          <div className="flex flex-col text-xs text-white font-semibold leading-none">
            <span className="uppercase text-[8px] mb-1">Online Course</span>
            <span className="font-bold text-sm leading-tight">
              Sharpen
              <span className="font-normal">Your Skills With Professional Online Courses</span>
            </span>
          </div>
          <button className="bg-black text-white text-[8px] font-semibold rounded-full px-3 py-1 hover:bg-gray-800 transition whitespace-nowrap">Join Now</button>
          <div className="flex-1"></div>
          <svg className="w-12 h-12 opacity-20" fill="none" stroke="#ffffff" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" fill="#7AC142" r="10" stroke="none"></circle>
            <path d="M9 12l2 2 4-4" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
          </svg>
        </div>
        <div className="w-full md:max-w-3xl mb-4 sm:mb-6">
          <div className="prose prose-invert max-w-none">
            {messages.length ? (
              <div className="space-y-2 sm:space-y-3">
                {messages.map((m, idx) => (
                  <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-full md:max-w-3xl rounded-2xl px-3 py-2 border text-sm sm:text-base ${m.role === 'user' ? 'bg-[#7AC142] text-black border-[#90cf56]' : 'bg-transparent text-[#d8e4dc] border-[#2B3A0B]'}`}>
                      {m.role === 'assistant' ? renderStructuredAnswer(m.content || '') : (
                        <p className="whitespace-pre-wrap m-0">{m.content}</p>
                      )}
                    </div>
                  </div>
                ))}
                {isFetching && (
                  <div className="flex justify-start">
                    <div className="rounded-2xl px-3 py-2 border bg-transparent text-[#d8e4dc] border-[#2B3A0B] text-sm flex items-center gap-2">
                      <i className="fas fa-spinner fa-spin" />
                      <span>Generating answer…</span>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-[#888]">Search for a college, exam, or topic to see AI-curated results here.</p>
            )}
          </div>
        </div>
        {/* <!-- Green banner 2 --> */}
        <div className="bg-[#7AC142] rounded-xl flex items-center gap-4 max-w-xl mb-6 px-4 py-3">
          <div className="flex flex-col text-xs text-white font-semibold leading-none">
            <span className="uppercase text-[8px] mb-1">Online Course</span>
            <span className="font-bold text-sm leading-tight">
              Sharpen
              <span className="font-normal">Your Skills With Professional Online Courses</span>
            </span>
          </div>
          <button className="bg-black text-white text-[8px] font-semibold rounded-full px-3 py-1 hover:bg-gray-800 transition whitespace-nowrap">Join Now</button>
          <div className="flex-1"></div>
          <svg className="w-12 h-12 opacity-20" fill="none" stroke="#ffffff" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" fill="#7AC142" r="10" stroke="none"></circle>
            <path d="M9 12l2 2 4-4" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
          </svg>
        </div>
        {/* Additional structured sections from the static template removed to let AI answer take focus */}
        <div className="max-w-xl flex items-center space-x-6 text-gray-500 text-xs mb-6 select-none">
          <button className="flex items-center space-x-1 hover:text-gray-400 cursor-pointer">
            <i className="fas fa-pencil-alt"></i>
            <span>Share</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-gray-400 cursor-pointer">
            <i className="fas fa-file-export"></i>
            <span>Export</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-gray-400 cursor-pointer">
            <i className="fas fa-redo"></i>
            <span>Rewrite</span>
          </button>
          <div className="flex space-x-3 ml-auto text-gray-400">
            <button className="hover:text-gray-300 cursor-pointer">
              <i className="far fa-thumbs-up"></i>
            </button>
            <button className="hover:text-gray-300 cursor-pointer">
              <i className="far fa-thumbs-down"></i>
            </button>
            <button className="hover:text-gray-300 cursor-pointer">
              <i className="far fa-copy"></i>
            </button>
            <button className="hover:text-gray-300 cursor-pointer">
              <i className="fas fa-ellipsis-h"></i>
            </button>
          </div>
        </div>
        {/* <!-- Green banner 3 --> */}
        <div className="bg-[#7AC142] rounded-xl flex items-center gap-4 max-w-xl mb-6 px-4 py-3">
          <div className="flex flex-col text-xs text-white font-semibold leading-none">
            <span className="uppercase text-[8px] mb-1">Online Course</span>
            <span className="font-bold text-sm leading-tight">
              Sharpen
              <span className="font-normal">Your Skills With Professional Online Courses</span>
            </span>
          </div>
          <button className="bg-black text-white text-[8px] font-semibold rounded-full px-3 py-1 hover:bg-gray-800 transition whitespace-nowrap">Join Now</button>
          <div className="flex-1"></div>
          <svg className="w-12 h-12 opacity-20" fill="none" stroke="#ffffff" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" fill="#7AC142" r="10" stroke="none"></circle>
            <path d="M9 12l2 2 4-4" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
          </svg>
        </div>
        {relatedQueries && relatedQueries.length > 0 && (
          <div className="w-full md:max-w-xl mb-6">
            <div className="flex items-center space-x-2 text-gray-300 text-sm mb-2 sm:mb-3">
              <i className="fas fa-list-ul"></i>
              <span className="font-semibold">Related Searches</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {relatedQueries.map((rq, idx) => (
                <button
                  key={idx}
                  className="px-3 py-1 rounded-full text-[11px] sm:text-xs border border-[#7AC142] text-white hover:bg-[#7AC142] hover:text-black transition"
                  title={rq}
                  onClick={() => runSearch(rq)}
                >
                  {sanitizeRelatedLabel(rq)}
                </button>
              ))}
            </div>
          </div>
        )}
        <form onSubmit={(e) => { e.preventDefault(); runSearch(followUp); setFollowUp(''); }} className="max-w-xl border border-[#3B4B1B] rounded-xl p-4 flex items-center space-x-3 text-gray-400 text-xs">
          <button className="text-gray-400 hover:text-gray-300 cursor-pointer" type="button">
            <i className="fas fa-paperclip"></i>
          </button>
          <textarea value={followUp} onChange={(e) => setFollowUp(e.target.value)} className="bg-transparent flex-1 outline-none placeholder:text-gray-600" placeholder="Ask Follow-up" rows={5}></textarea>
          <button className="text-gray-400 hover:text-gray-300 cursor-pointer" type="submit" disabled={isFetching}>
            <i className="fas fa-arrow-up"></i>
          </button>
        </form>
      </main>

      {/* <!-- Right sidebar --> */}
      {/* <aside
        id="rightSidebar"
        className="fixed inset-y-0 right-0 z-40 w-72 bg-[#121916] p-4 md:p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-[#7AC142]/50 scrollbar-track-transparent mt-14 md:mt-0 transform translate-x-full md:translate-x-0 transition-transform duration-300 ease-in-out md:static md:flex md:flex-col md:gap-6"
      > */}
      <aside
        className={`fixed inset-y-0 right-0 z-40 w-72 bg-[#121916] p-4 md:p-6 overflow-y-auto mt-14 md:mt-0 transition-transform duration-300 ease-in-out transform ${
          isRightOpen ? "translate-x-0" : "translate-x-full"
        } md:static md:translate-x-0 md:flex md:flex-col md:gap-6`}
      >
        <div className="relative">
          <img
            alt="College main building exterior daylight view with clear sky and green lawn"
            className="rounded-md w-full object-cover h-36"
            height="140"
            src="https://storage.googleapis.com/a1aa/image/ca66c005-d713-4b7f-044b-c6072db641d6.jpg"
            width="120"
          />
          <button aria-label="More options" className="absolute top-2 right-2 bg-[#1B201D] p-1 rounded-md text-[#7AC142] hover:text-white transition">
            <i className="fas fa-ellipsis-h"></i>
          </button>
          <div className="absolute top-10 right-2 bg-[#1B201D] rounded-md shadow-lg w-48 text-xs text-white hidden group-hover:block" id="dropdown-menu">
            <ul className="py-1">
              <li className="px-3 py-2 hover:bg-[#7AC142] cursor-pointer flex items-center gap-2">
                <i className="fas fa-plus"></i>
                Add to Space
              </li>
              <li className="px-3 py-2 hover:bg-[#7AC142] cursor-pointer flex items-center gap-2">
                <i className="fas fa-file-pdf"></i>
                Export as PDF
              </li>
              <li className="px-3 py-2 hover:bg-[#7AC142] cursor-pointer flex items-center gap-2">
                <i className="fas fa-file-alt"></i>
                Export as Markdown
              </li>
              <li className="px-3 py-2 hover:bg-[#7AC142] cursor-pointer flex items-center gap-2">
                <i className="fas fa-file-word"></i>
                Export as DOCX
              </li>
              <li className="px-3 py-2 hover:bg-red-600 cursor-pointer flex items-center gap-2">
                <i className="fas fa-trash"></i>
                Delete Thread
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-3 sm:mt-4">
          {images && images.length > 0 ? (
            images.map((url, i) => (
              <a key={i} href={url} target="_blank" rel="noopener noreferrer" title={url}>
                <img
                  alt={`result-${i}`}
                  className="rounded-md object-cover w-full h-24 sm:h-20 bg-gray-800/40"
                  height="96"
                  src={url}
                  width="120"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={(e) => {
                    const el = e.currentTarget as HTMLImageElement;
                    el.style.display = "none";
                  }}
                />
              </a>
            ))
          ) : (
            <>
              <div className="col-span-3 text-gray-400 text-xs">Images will appear here for supported searches.</div>
            </>
          )}
        </div>
        <div className="text-[#7AC142] text-xs flex justify-between items-center">
          <span>Search Videos</span>
          <button aria-label="Add video" className="text-[#7AC142] hover:text-white">
            <i className="fas fa-plus"></i>
          </button>
        </div>
        <section aria-label="Students Also Visited" className="bg-white rounded-lg p-4 text-xs text-black max-w-full">
          <h2 className="font-semibold mb-3 text-sm">Students Also Visited</h2>
          <ul className="space-y-3">
            <li className="flex gap-3 items-start">
              <img alt="VIT Vellore Chennai logo" className="w-8 h-8 rounded-full" height="32" src="https://storage.googleapis.com/a1aa/image/36355bcb-d69c-45b2-4e0f-0e54b3dc656a.jpg" width="32" />
              <div>
                <p className="font-semibold text-[11px] text-black">
                  VIT Vellore Chennai
                </p>
                <p className="text-[9px] text-gray-600">BTech CSE: Course Details, Admission</p>
                <p className="text-[9px] text-[#7AC142] font-semibold">242000 First Year Fee</p>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <img alt="VIT Vellore Chennai logo" className="w-8 h-8 rounded-full" height="32" src="https://storage.googleapis.com/a1aa/image/36355bcb-d69c-45b2-4e0f-0e54b3dc656a.jpg" width="32" />
              <div>
                <p className="font-semibold text-[11px] text-black">
                  VIT Vellore Chennai
                </p>
                <p className="text-[9px] text-gray-600">BTech CSE: Course Details, Admission</p>
                <p className="text-[9px] text-[#7AC142] font-semibold">242000 First Year Fee</p>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <img alt="VIT Vellore Chennai logo" className="w-8 h-8 rounded-full" height="32" src="https://storage.googleapis.com/a1aa/image/36355bcb-d69c-45b2-4e0f-0e54b3dc656a.jpg" width="32" />
              <div>
                <p className="font-semibold text-[11px] text-black">
                  VIT Vellore Chennai
                </p>
                <p className="text-[9px] text-gray-600">BTech CSE: Course Details, Admission</p>
                <p className="text-[9px] text-[#7AC142] font-semibold">242000 First Year Fee</p>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <img alt="VIT Vellore Chennai logo" className="w-8 h-8 rounded-full" height="32" src="https://storage.googleapis.com/a1aa/image/36355bcb-d69c-45b2-4e0f-0e54b3dc656a.jpg" width="32" />
              <div>
                <p className="font-semibold text-[11px] text-black">
                  VIT Vellore Chennai
                </p>
                <p className="text-[9px] text-gray-600">BTech CSE: Course Details, Admission</p>
                <p className="text-[9px] text-[#7AC142] font-semibold">242000 First Year Fee</p>
              </div>
            </li>
          </ul>
        </section>
        <section aria-label="News" className="bg-white rounded-lg p-4 text-xs text-black max-w-full mt-6">
          <h2 className="font-semibold mb-3 text-sm">News</h2>
          <ul className="space-y-3 max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-[#7AC142]/50 scrollbar-track-transparent">
            <li className="flex gap-3 items-start">
              <img alt="VIT logo" className="w-6 h-6 rounded-full" height="24" src="https://storage.googleapis.com/a1aa/image/eb0107cc-4bd5-41c8-5a00-7025afb2b8be.jpg" width="24" />
              <div>
                <p className="text-[9px] font-semibold">IT Delhi Joint PhD Admission 2025 Open; Apply by March 18</p>
                <p className="text-[7px] text-gray-600">1 Week Ago</p>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <img alt="VIT logo" className="w-6 h-6 rounded-full" height="24" src="https://storage.googleapis.com/a1aa/image/eb0107cc-4bd5-41c8-5a00-7025afb2b8be.jpg" width="24" />
              <div>
                <p className="text-[9px] font-semibold">IT Delhi Joint PhD Admission 2025 Open; Apply by March 18</p>
                <p className="text-[7px] text-gray-600">1 Week Ago</p>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <img alt="VIT logo" className="w-6 h-6 rounded-full" height="24" src="https://storage.googleapis.com/a1aa/image/eb0107cc-4bd5-41c8-5a00-7025afb2b8be.jpg" width="24" />
              <div>
                <p className="text-[9px] font-semibold">IT Delhi Joint PhD Admission 2025 Open; Apply by March 18</p>
                <p className="text-[7px] text-gray-600">1 Week Ago</p>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <img alt="VIT logo" className="w-6 h-6 rounded-full" height="24" src="https://storage.googleapis.com/a1aa/image/eb0107cc-4bd5-41c8-5a00-7025afb2b8be.jpg" width="24" />
              <div>
                <p className="text-[9px] font-semibold">IT Delhi Joint PhD Admission 2025 Open; Apply by March 18</p>
                <p className="text-[7px] text-gray-600">1 Week Ago</p>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <img alt="VIT logo" className="w-6 h-6 rounded-full" height="24" src="https://storage.googleapis.com/a1aa/image/eb0107cc-4bd5-41c8-5a00-7025afb2b8be.jpg" width="24" />
              <div>
                <p className="text-[9px] font-semibold">IT Delhi Joint PhD Admission 2025 Open; Apply by March 18</p>
                <p className="text-[7px] text-gray-600">1 Week Ago</p>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <img alt="VIT logo" className="w-6 h-6 rounded-full" height="24" src="https://storage.googleapis.com/a1aa/image/eb0107cc-4bd5-41c8-5a00-7025afb2b8be.jpg" width="24" />
              <div>
                <p className="text-[9px] font-semibold">IT Delhi Joint PhD Admission 2025 Open; Apply by March 18</p>
                <p className="text-[7px] text-gray-600">1 Week Ago</p>
              </div>
            </li>
          </ul>
        </section>
      </aside>
    </div>
  );
}

export default SearchPage;
