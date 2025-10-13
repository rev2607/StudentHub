import { useState } from "react";
import { Bot, MessageCircle } from "lucide-react";
import AIChatbox from "./AIChatbox";

function ChatLauncher() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating launcher button */}
      <button
        aria-label="Open Student Hub AI"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 rounded-full shadow-lg border border-[#262443]/20 bg-[var(--site-green)] hover:bg-[#7bb53a] transition-colors"
        style={{ width: 60, height: 60 }}
      >
        <div className="flex items-center justify-center w-full h-full text-white">
          <MessageCircle className="h-7 w-7" />
        </div>
      </button>

      {/* Chat modal */}
      <AIChatbox isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

export default ChatLauncher;


