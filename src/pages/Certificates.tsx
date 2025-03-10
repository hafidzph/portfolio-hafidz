import { FaCode, FaJs, FaReact, FaAndroid, FaFlag } from "react-icons/fa";
import { PageWrapper } from "@/components/layout/PageWrapper";
import CertificateItem from "@/components/layout/CertificateItem";

const achievements = [
  {
    title: "Belajar Dasar Pemrograman Web",
    description:
      "Completed foundational course in web programming, covering HTML, CSS, and basic JavaScript.",
    icon: <FaCode className="w-6 h-6" />,
    type: "certification",
  },
  {
    title: "Belajar Dasar Pemrograman JavaScript",
    description:
      "Mastered the fundamentals of JavaScript programming language.",
    icon: <FaJs className="w-6 h-6" />,
    type: "certification",
  },
  {
    title: "Belajar Membuat Front-End Web untuk Pemula",
    description:
      "Learned essential front-end web development skills for beginners.",
    icon: <FaCode className="w-6 h-6" />,
    type: "certification",
  },
  {
    title: "Belajar Membuat Aplikasi Web dengan React",
    description:
      "Acquired skills to build web applications using React library.",
    icon: <FaReact className="w-6 h-6" />,
    type: "certification",
  },
  {
    title: "Belajar Fundamental Aplikasi Web dengan React",
    description:
      "Deepened understanding of React fundamentals for web application development.",
    icon: <FaReact className="w-6 h-6" />,
    type: "certification",
  },
  {
    title: "Menjadi React Web Developer Expert",
    description: "Achieved expert-level proficiency in React web development.",
    icon: <FaReact className="w-6 h-6" />,
    type: "certification",
  },
  {
    title: "Android Engineer",
    description:
      "Successfully completed the Android Engineer Bootcamp by Binar Academy, gaining comprehensive skills in building Android applications using Kotlin programming language.",
    icon: <FaAndroid className="w-6 h-6" />,
    type: "certification",
  },
  {
    title: "PMM Bela Negara",
    description:
      "Participated in the PMM Bela Negara program, fostering patriotism, leadership, and teamwork through various activities and initiatives.",
    icon: <FaFlag className="w-6 h-6" />,
    type: "achievement",
  },
];

export function Certificates() {
  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto pt-32 pb-10 px-12 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Achievements & Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, index) => (
            <CertificateItem item={item} key={index} />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
