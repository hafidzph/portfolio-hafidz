import { SkillsItem } from "@/components/layout/SkillsItem";
import { PageWrapper } from "../components/layout/PageWrapper";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const skills: string[] = [
  "React",
  "Node.js",
  "Next.js",
  "Express",
  "TypeScript",
  "MongoDB",
  "Tailwind CSS",
];

export function About() {
  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-12 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="space-y-12 sm:space-y-16">
          <div className="text-start">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tighter text-white mb-4">
              About Me
            </h2>
            <div className="flex justify-start space-x-2">
              <div className="w-16 h-1 bg-blue-500 rounded"></div>
              <div className="w-4 h-1 bg-blue-300 rounded"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="relative group aspect-[9/8] w-full max-w-md mx-auto lg:max-w-none">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-200"></div>
              <div className="relative h-full">
                <img
                  src="/hafidz.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover object-[center_95%] rounded-lg shadow-xl transform transition duration-200 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                I am a web developer with experience in{" "}
                <span className="text-blue-400">React</span>,{" "}
                <span className="text-green-400">Node.js</span>, and modern web
                technologies. With a strong foundation in front-end development
                and a deep understanding of user experience, I specialize in
                creating responsive and intuitive web applications. My passion
                lies in creating clean, efficient code and building seamless
                digital experiences that deliver real impact.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {skills.map((skill) => (
                  <SkillsItem skill={skill} key={skill} />
                ))}
              </div>

              <motion.a
                href="/Hafidz Putra Herlyansyah - CV.pdf"
                download
                className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-700 text-white text-sm sm:text-base font-semibold rounded-lg shadow-md hover:bg-blue-800 transition duration-300 ease-in-out w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="mr-2" />
                Download CV
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
