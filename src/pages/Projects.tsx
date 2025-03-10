import { PageWrapper } from "../components/layout/PageWrapper";
import { ProjectItem } from "@/components/layout/ProjectItem";

export function Projects() {
  const projects = [
    {
      title: "K-Etik Website",
      description:
        "A streamlined platform for managing and submitting research ethics documents, designed to enhance efficiency and compliance with ethical standards.",
      image: "/k-etik.png",
      tags: ["Web Development"],
      link: "https://github.com/hafidzph/komite-etik-UY.git",
      featured: true,
    },
    {
      title: "Shinzou",
      description:
        "An Android app for easy flight bookings, helping users find and book tickets effortlessly.",
      image: "/shinzou.png",
      link: "https://github.com/hafidzph/Shinzou.git",
      tags: ["Android Development"],
      featured: false,
    },
    {
      title: "MagZeen",
      description:
        "A news platform offering a clean and user-friendly interface for local and international stories.",
      image: "/placeholder.svg?height=400&width=600",
      link: "https://github.com/hafidzph/magzeen.git",
      tags: ["Web Development"],
      featured: false,
    },

    {
      title: "T-CAT",
      description:
        "A desktop application for cinema ticket booking, along with food and beverage ordering, built using Java GUI.",
      image: "/T-CAT.png",
      link: "https://github.com/hafidzph/T-CAT.git",
      tags: ["Desktop Development"],
      featured: false,
    },
    {
      title: "IKEAH",
      description:
        "A simple e-commerce platform for browsing and purchasing products with ease.",
      link: "https://github.com/hafidzph/IKEAH.git",
      tags: ["Web Application", "E-commerce"],
      featured: false,
    },
    {
      title: "Thoughts-Gather",
      description:
        "A simple forum platform where users can create, share, and discuss topics in an easy-to-use interface.",
      link: "https://github.com/hafidzph/thougths-gather-app.git",
      tags: ["Web Application", "Forum"],
      featured: false,
    },
  ];

  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto pt-32 pb-10 px-14 md:px-20 xl:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white mb-5">
            Projects
          </h2>
          <div className="flex justify-center space-x-2">
            <div className="w-16 h-1 bg-blue-500 rounded"></div>
            <div className="w-4 h-1 bg-blue-300 rounded"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
          {projects.map((project, index) => (
            <ProjectItem project={project} index={index} key={index} />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
