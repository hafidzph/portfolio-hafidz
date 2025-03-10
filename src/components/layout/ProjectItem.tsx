import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "../ui/badge";

const projectVariants = {
  initial: { opacity: 0, y: 50 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: i * 0.4,
    },
  }),
  exit: { opacity: 0, y: 50 },
};

interface ProjectItemProps {
  index: number;
  project: {
    image?: string;
    tags: string[];
    title: string;
    description: string;
    link: string;
  };
}

export function ProjectItem({
  index,
  project: { image, tags, title, description, link },
}: ProjectItemProps) {
  return (
    <motion.div
      className={`group relative overflow-hidden rounded-xl bg-gray-800 border border-gray-700/50 
    ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
      variants={projectVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={index}
    >
      <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent z-10"></div>
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="relative h-full z-20 p-6 flex flex-col justify-end">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-gray-700/50 text-gray-100"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              {title}
            </h3>
            <p className="text-gray-300 line-clamp-3">{description}</p>
          </div>

          <a
            href={link}
            target="_blank"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
          >
            View Project
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
