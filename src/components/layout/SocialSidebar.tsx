import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function SocialSidebar() {
  return (
    <div className="hidden lg:flex fixed left-4 top-1/2 transform -translate-y-1/2 flex-col items-center space-y-4 z-10">
      {[
        {
          href: "https://github.com/hafidzph",
          icon: <FaGithub size={20} />,
          label: "GitHub",
        },

        {
          href: "https://www.linkedin.com/in/hafidzph/",
          icon: <FaLinkedinIn size={20} />,
          label: "LinkedIn",
        },
      ].map((item, index) => (
        <Tooltip key={index}>
          <TooltipTrigger asChild>
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-blue-400 transition"
            >
              {item.icon}
            </a>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>{item.label}</p>
          </TooltipContent>
        </Tooltip>
      ))}

      <div className="w-px h-12 bg-gray-400"></div>

      <p
        className="text-gray-300 tracking-wider text-sm"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        Follow Me
      </p>
    </div>
  );
}
