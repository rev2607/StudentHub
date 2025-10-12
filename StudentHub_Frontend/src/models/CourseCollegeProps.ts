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
      College: "IIT Madras",
      "Highest Package": "₹4.3 Crore",
    },
    {
      College: "IIT Delhi",
      "Highest Package": "₹2.05 Crore",
    },
    {
      College: "IIT Kanpur",
      "Highest Package": "₹1.9 Crore",
    },
    {
      College: "IIT Kharagpur",
      "Highest Package": "₹1.8 Crore",
    },
    {
      College: "IIT Roorkee",
      "Highest Package": "₹1.15 Crore",
    },
    {
      College: "IIT Hyderabad",
      "Highest Package": "₹1.2 Crore",
    },
    {
      College: "BITS Pilani",
      "Highest Package": "₹60 Lakh (Domestic), ₹1.33 Crore (International)",
    },
    {
      College: "VIT Vellore",
      "Highest Package": "₹1.02 Crore",
    },
    {
      College: "SRM Institute of Science & Technology",
      "Highest Package": "₹1 Crore",
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
      "College Name": "IIT Madras",
      Location: "Chennai",
      Stream: "Engineering",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop&auto=format"
    },
    {
      Category: "Trending Colleges",
      "College Name": "IIT Delhi",
      Location: "Delhi",
      Stream: "Engineering",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop&auto=format"
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
      "College Name": "BITS Pilani",
      Location: "Pilani",
      Stream: "Engineering",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop&auto=format"
    },
    {
      Category: "Trending Colleges",
      "College Name": "IIT Kanpur",
      Location: "Kanpur",
      Stream: "Engineering",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop&auto=format"
    },
    {
      Category: "Trending Colleges",
      "College Name": "VIT Vellore",
      Location: "Vellore",
      Stream: "Engineering",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop&auto=format"
    },
    {
      Category: "Trending Colleges",
      "College Name": "IIT Kharagpur",
      Location: "Kharagpur",
      Stream: "Engineering",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop&auto=format"
    },
    {
      Category: "Trending Colleges",
      "College Name": "IIT Hyderabad",
      Location: "Hyderabad",
      Stream: "Engineering",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop&auto=format"
    },
    {
      Category: "Trending Colleges",
      "College Name": "SRM Institute of Science & Technology",
      Location: "Chennai",
      Stream: "Engineering",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop&auto=format"
    },
    {
      Category: "Trending Colleges",
      "College Name": "IIT Roorkee",
      Location: "Roorkee",
      Stream: "Engineering",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop&auto=format"
    },
  ],
};
