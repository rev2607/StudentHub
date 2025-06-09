/* START: NewsItemTop ------------------------------------- */
export interface NewsItemTopProps {
  title: string;
  date: string;
  description: string;
  image_url: string;
  read_more_url: string;
}

/* END: NewsItemTop ------------------------------------- */

export const tempData: NewsItemTopProps[] = [
  {
    title: "KSEAB to Declare 2nd PUC Results",
    date: "April 8, 2025",
    description: "KSEAB will declare the 2nd PUC results for eligibility in undergraduate courses.",
    image_url: "/src/assets/latest_news.png",
    read_more_url: "https://timesofindia.indiatimes.com/education",
  },
  {
    title: "Delhi Govt Launches Crackdown on Private School Fees",
    date: "Recent weeks",
    description: "Delhi government is auditing private schools for fee irregularities.",
    image_url: "/src/assets/latest_news.png",
    read_more_url: "https://www.indiatoday.in/education-today",
  },
  {
    title: "Punjab's 'Sikhya Kranti' Education Festival",
    date: "Starting April 7, 2025",
    description: "A 54-day festival aimed at improving infrastructure in Punjab's schools.",
    image_url: "/src/assets/latest_news.png",
    read_more_url: "https://timesofindia.indiatimes.com/education",
  },
  {
    title: "Delhi University to Continue CUET-based Admissions",
    date: "Recent weeks",
    description: "Delhi University will persist with CUET scores for student admissions.",
    image_url: "/src/assets/latest_news.png",
    read_more_url: "https://www.indiatoday.in/education-today",
  },
  {
    title: "CBSE Schools Asked to Sing National Anthem with Decorum",
    date: "Recent weeks",
    description: "CBSE schools have been instructed to sing the national anthem as per the Constitution.",
    image_url: "/src/assets/latest_news.png",
    read_more_url: "https://indianexpress.com/section/education/",
  },
];
