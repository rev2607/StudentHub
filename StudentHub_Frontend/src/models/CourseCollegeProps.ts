/* START: CourseColleges ------------------------------------- */
interface TrendingPackage {
  College: string;
  "Highest Package": string;
}

interface TrendingCourse {
  name: string;
  description: string;
}

interface TrendingCollege {
  Category: string;
  College?: string;
  "Highest Package"?: string;
  "Placement Rate"?: string;
  Course?: string;
  "College Name"?: string;
}

export interface CourseCollegeProps {
  packages: TrendingPackage[];
  courses: TrendingCourse[];
  colleges: TrendingCollege[];
}
/* END: TrendingCourseColleges ------------------------------------- */

export const tempData: CourseCollegeProps = {
  packages: [
    {
      College: "IIT Bombay",
      "Highest Package": "Approximately ₹2.1 Crore",
    },
    {
      College: "IIT Delhi",
      "Highest Package": "Up to ₹1.5 Crore",
    },
    {
      College: "IIM Ahmedabad",
      "Highest Package": "International offers exceeding ₹1.8 Crore",
    },
    {
      College: "IIM Calcutta",
      "Highest Package": "Domestic offers around ₹82 LPA",
    },
    {
      College: "IIT Kanpur",
      "Highest Package": "Up to ₹1.5 Crore",
    },
    {
      College: "IIT Madras",
      "Highest Package": "Approximately ₹1.4 Crore",
    },
    {
      College: "IIT Kharagpur",
      "Highest Package": "Approximately ₹1 Crore",
    },
    {
      College: "VIT Vellore",
      "Highest Package": "Up to ₹44 LPA",
    },
    {
      College: "Thapar Institute of Engineering & Technology",
      "Highest Package": "Up to ₹40 LPA",
    },
    {
      College: "Sri Sivasubramaniya Nadar College of Engineering",
      "Highest Package": "Up to ₹64 LPA",
    },
  ],
  courses: [
    {
      name: "Artificial Intelligence and Machine Learning",
      description: "Transforming industries with AI and ML techniques",
    },
    {
      name: "Cybersecurity and Ethical Hacking",
      description: "Essential for protecting digital assets from cyber threats",
    },
    {
      name: "Cloud Computing (AWS, Azure, GCP)",
      description: "Key to managing scalable IT infrastructure",
    },
    {
      name: "Data Science and Big Data Analytics",
      description: "Critical for data-driven decision making",
    },
    {
      name: "Full-Stack Web Development",
      description: "In demand for creating robust web applications",
    },
    {
      name: "DevOps Engineering",
      description: "Improves software deployment and management efficiency",
    },
    {
      name: "Blockchain Development",
      description: "Revolutionizing sectors like finance and logistics",
    },
    {
      name: "Mobile App Development",
      description: "High demand for mobile-first experiences",
    },
    {
      name: "Digital Marketing",
      description: "Essential for businesses’ online presence",
    },
    {
      name: "Product Management",
      description: "Key role in product lifecycle management",
    },
  ],
  colleges: [
    {
      Category: "Highest Packages & Placements",
      College: "IIT Delhi",
      "Highest Package": "₹4.3 Crore",
      "Placement Rate": "Above 90%",
    },
    {
      Category: "Highest Packages & Placements",
      College: "IIT Bombay",
      "Highest Package": "₹3.2 Crore",
      "Placement Rate": "Above 90%",
    },
    {
      Category: "Highest Packages & Placements",
      College: "SRM Institute of Science and Technology",
      "Highest Package": "₹41.6 LPA",
      "Placement Rate": "Above 95%",
    },
    {
      Category: "Trending Courses",
      Course: "Artificial Intelligence & Data Science",
    },
    {
      Category: "Trending Courses",
      Course: "Cloud Computing & Cybersecurity",
    },
    {
      Category: "Trending Colleges",
      "College Name": "Indian Institute of Technology Madras",
    },
    {
      Category: "Trending Colleges",
      "College Name": "Jawaharlal Nehru University",
    },
    {
      Category: "Trending Colleges",
      "College Name": "Vellore Institute of Technology",
    },
    {
      Category: "Trending Colleges",
      "College Name": "BITS Pilani",
    },
    {
      Category: "Trending Colleges",
      "College Name": "Manipal Academy of Higher Education",
    },
  ],
};
