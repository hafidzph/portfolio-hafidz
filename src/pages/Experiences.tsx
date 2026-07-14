import { PageWrapper } from "../components/layout/PageWrapper";
import { motion } from "framer-motion";
import {
  FaAndroid,
  FaDatabase,
  FaCode,
  FaGlobe,
  FaBriefcase,
} from "react-icons/fa";

interface ExperienceItemProps {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  icon: React.ReactNode;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  duration,
  location,
  description,
  icon,
}) => (
  <div className="relative pl-16">
    <div className="absolute left-0 top-0 bg-blue-600 rounded-full p-3 ring-4 ring-gray-900">
      {icon}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-blue-400 mb-3">{company}</p>
      <p className="text-gray-400 mb-1">{duration}</p>
      <p className="text-gray-400 mb-4">{location}</p>
      <ul className="space-y-3">
        {description.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white">
              {index + 1}
            </span>
            <span className="text-gray-300">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  </div>
);

export function Experience() {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "PT Daro Data Teknologi",
      duration: "02/2025 – Present",
      location: "Jakarta, Indonesia",
      description: [
        "Assigned to Direktorat Jenderal Bea dan Cukai, focusing on maintaining and enhancing the CEISA 4.0 web application.",
        "Maintained and enhanced multiple Micro Frontend (Micro FE) components to ensure system stability and scalability.",
        "Diagnosed, analyzed, and resolved production issues through efficient code-level fixes, improving application performance and reliability.",
        "Developed and delivered a new Micro Frontend module to support feature expansion and system modernization initiatives.",
        "Collaborated cross-functionally with System Analysts (SA) and Backend Engineers (BE) to ensure seamless API integration and data consistency.",
        "Performed ongoing bug fixing, system maintenance, and performance optimization across various application modules.",
        "Utilized Git and GitLab for version control and repository management to maintain code quality and streamline collaboration.",
      ],
      icon: <FaBriefcase className="text-white text-2xl" />,
    },
    {
      title: "Android Engineer",
      company: "Binar Academy",
      duration: "02/2023 – 07/2023",
      location: "Jakarta, Indonesia",
      description: [
        "Applied Kotlin Programming Fundamentals in developing simple Android applications.",
        "Implemented basic programming principles using Android development tools and created fundamental UI designs.",
        "Developed applications featuring screen navigation using Activities and Fragments in Android Studio.",
        "Created Android applications incorporating local data storage following official Android documentation.",
        "Built Android applications with server connectivity for data display and implemented engaging UI designs.",
        "Implemented background processes and file management in Android applications using structured architecture.",
        "Operated various development tools to support Android application development processes.",
        "Contributed to Android application development in a team environment using collaboration tools.",
      ],
      icon: <FaAndroid className="text-white text-2xl" />,
    },
    {
      title: "Database 1 (Assistant Lecturer)",
      company: "Yarsi University",
      duration: "02/2022 – 06/2022",
      location: "Jakarta, Indonesia",
      description: [
        "Made case studies for students covering: Business Rule (Structural and Procedural), Conceptual Modeling, Matrix.",
        "Taught Diagram, Logical Data Model, Attribute type, Supertype and Subtype Entity.",
        "Covered Transferability, Optionality and Cardinality.",
        "Explained Hierarchical and Recursive Relationship, Change Supertype/Subtype.",
        "Taught Entity to Arc Relationship, Normalization (1, 2, 3 NF).",
        "Covered transformation from Logical Data Model to Physical Data Model.",
        "Challenged students to solve problems with DDL, DML, Select, Single Row Function, Join, Group by, Having clause and Order by using PostgreSQL.",
      ],
      icon: <FaDatabase className="text-white text-2xl" />,
    },
    {
      title: "Object Oriented Programming (Assistant Lecturer)",
      company: "Yarsi University",
      duration: "09/2022 – 12/2022",
      location: "Jakarta, Indonesia",
      description: [
        "Assessed and evaluated student assignments.",
        "Created assignments.",
        "Became a mentor for students in working on their final project.",
        "Taught course material.",
      ],
      icon: <FaCode className="text-white text-2xl" />,
    },
    {
      title: "Web Design and Programming (Assistant Lecturer)",
      company: "Yarsi University",
      duration: "09/2023 – 01/2024",
      location: "Jakarta, Indonesia",
      description: [
        "Assessed and evaluated student assignments.",
        "Made learning videos about API Integration and State Management.",
        "Created an example website application for continuity of learning.",
        "Assessed the results of students' final projects with the lecturer.",
        "Assisted lecturers in every material taught.",
      ],
      icon: <FaGlobe className="text-white text-2xl" />,
    },
  ];

  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
        <div className="text-start mb-12">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter text-white">
            Experience
          </h2>
          <div className="mt-2 flex justify-start space-x-2">
            <div className="w-16 h-1 bg-blue-500 rounded"></div>
            <div className="w-4 h-1 bg-blue-300 rounded"></div>
          </div>
        </div>

        <div className="relative max-w-3xl">
          <div className="absolute left-6 top-3 bottom-3 w-px bg-blue-500/40"></div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} {...exp} />
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
