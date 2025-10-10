/* START: CourseColleges ------------------------------------- */
interface TrendingPackage {
  College: string;
  "Highest Package": string;
}

interface TrendingCourse {
  name: string;
  description: string;
  avgSalary?: string;
  highlights?: string;
  image?: string;
}

interface TrendingCollege {
  Category: string;
  College?: string;
  "Highest Package"?: string;
  "Placement Rate"?: string;
  Course?: string;
  "College Name"?: string;
  Location?: string;
  Stream?: string;
  image?: string;
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
      "Highest Package": "₹3.67 Crore",
    },
    {
      College: "IIM Ahmedabad",
      "Highest Package": "₹3.3 Crore",
    },
    {
      College: "IIM Calcutta",
      "Highest Package": "₹1.45 Crore",
    },
    {
      College: "IIM Bangalore",
      "Highest Package": "₹1.15 Crore",
    },
    {
      College: "Private Universities",
      "Highest Package": "₹1 Crore+",
    },
    {
      College: "IIM Kozhikode",
      "Highest Package": "₹72 Lakh+",
    },
    {
      College: "IIT Bombay CSE",
      "Highest Package": "₹2.2 Crore",
    },
    {
      College: "CVR College",
      "Highest Package": "₹72 Lakh",
    },
    {
      College: "IIT Delhi",
      "Highest Package": "₹1.5 Crore",
    },
    {
      College: "IIT Kanpur",
      "Highest Package": "₹1.5 Crore",
    },
  ],
  courses: [
    {
      name: "Artificial Intelligence & ML",
      description: "Transforming industries with AI and ML techniques",
      avgSalary: "₹10-25 LPA",
      highlights: "Massive demand, global reach",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&auto=format"
    },
    {
      name: "Data Science & Analytics",
      description: "Critical for data-driven decision making",
      avgSalary: "₹10-24 LPA",
      highlights: "Top jobs in IT, BFSI",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format"
    },
    {
      name: "Full-Stack Web Development",
      description: "In demand for creating robust web applications",
      avgSalary: "₹7-18 LPA",
      highlights: "Accessible; startup jobs",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&auto=format"
    },
    {
      name: "Cloud Computing (AWS, Azure)",
      description: "Key to managing scalable IT infrastructure",
      avgSalary: "₹10-25 LPA",
      highlights: "Cloud infra backbone, rare skills",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&auto=format"
    },
    {
      name: "Cybersecurity & Ethical Hacking",
      description: "Essential for protecting digital assets from cyber threats",
      avgSalary: "₹8-20 LPA",
      highlights: "Growing due to digital shift",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop&auto=format"
    },
    {
      name: "Blockchain Development",
      description: "Revolutionizing sectors like finance and logistics",
      avgSalary: "₹6-15 LPA",
      highlights: "Rapidly expanding sector",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop&auto=format"
    },
    {
      name: "Business Analytics",
      description: "Data-driven insights for business decisions",
      avgSalary: "₹10-20 LPA",
      highlights: "Consulting, management roles",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format"
    },
    {
      name: "Digital Marketing",
      description: "Essential for businesses' online presence",
      avgSalary: "₹6-18 LPA",
      highlights: "E-commerce, social media",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&auto=format"
    },
    {
      name: "Mobile App Development",
      description: "High demand for mobile-first experiences",
      avgSalary: "₹8-22 LPA",
      highlights: "iOS, Android, cross-platform",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&auto=format"
    },
    {
      name: "DevOps Engineering",
      description: "Improves software deployment and management efficiency",
      avgSalary: "₹12-28 LPA",
      highlights: "CI/CD, automation, scalability",
      image: "https://images.unsplash.com/photo-1667372393120-327930c35e3e?w=400&h=300&fit=crop&auto=format"
    },
  ],
  colleges: [
    {
      Category: "Highest Packages & Placements",
      College: "IIT Bombay",
      "Highest Package": "₹3.67 Crore",
      "Placement Rate": "Above 90%",
    },
    {
      Category: "Highest Packages & Placements",
      College: "IIM Ahmedabad",
      "Highest Package": "₹3.3 Crore",
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
      "College Name": "Hindu College",
      Location: "Delhi",
      Stream: "Arts/Science",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop&auto=format"
    },
    {
      Category: "Trending Colleges",
      "College Name": "Miranda House",
      Location: "Delhi",
      Stream: "Women's College",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop&auto=format"
    },
    {
      Category: "Trending Colleges",
      "College Name": "Hans Raj College",
      Location: "Delhi",
      Stream: "Arts/Science",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop&auto=format"
    },
    {
      Category: "Trending Colleges",
      "College Name": "Indian Institute of Science (IISc)",
      Location: "Bengaluru",
      Stream: "Science/Research",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop&auto=format"
    },
    {
      Category: "Trending Colleges",
      "College Name": "Jawaharlal Nehru University",
      Location: "Delhi",
      Stream: "Research/Humanities",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop&auto=format"
    },
    {
      Category: "Trending Colleges",
      "College Name": "IIT Bombay",
      Location: "Mumbai",
      Stream: "Engineering",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop&auto=format"
    },
    {
      Category: "Trending Colleges",
      "College Name": "Manipal Academy of Higher Education",
      Location: "Manipal",
      Stream: "Multi-stream",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop&auto=format"
    },
    {
      Category: "Trending Colleges",
      "College Name": "St. Stephen's College",
      Location: "Delhi",
      Stream: "Arts/Science",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop&auto=format"
    },
  ],
};
