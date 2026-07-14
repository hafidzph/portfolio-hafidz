import { PageWrapper } from "../components/layout/PageWrapper";
import { ProjectItem } from "@/components/layout/ProjectItem";
import { asset } from "@/lib/utils";

export function Projects() {
  const projects = [
    {
      title: "K-Etik Website",
      description:
        "A streamlined platform for managing and submitting research ethics documents, designed to enhance efficiency and compliance with ethical standards.",
      image: asset("/k-etik.png"),
      tags: ["Web Development"],
      link: "https://github.com/hafidzph/komite-etik-UY.git",
      featured: true,
    },
    {
      title: "Shinzou",
      description:
        "An Android app for easy flight bookings, helping users find and book tickets effortlessly.",
      image: asset("/shinzou.png"),
      link: "https://github.com/hafidzph/Shinzou.git",
      tags: ["Android Development"],
      featured: false,
    },
    {
      title: "T-CAT",
      description:
        "A desktop application for cinema ticket booking, along with food and beverage ordering, built using Java GUI.",
      image: asset("/T-CAT.png"),
      link: "https://github.com/hafidzph/T-CAT.git",
      tags: ["Desktop Development"],
      featured: false,
    },
    {
      title: "Sabha Koffie POS",
      description:
        "A point-of-sale system for a coffee shop, built to manage transactions, menu items, and orders.",
      image: asset("/sabha-koffie.svg"),
      link: "#",
      tags: ["Flutter", "Dart", "POS System"],
      featured: false,
      status: "in-progress" as const,
    },
  ];

  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto pt-32 pb-10 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-10">
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
