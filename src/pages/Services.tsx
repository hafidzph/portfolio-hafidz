import { FaCode, FaMobileAlt, FaServer, FaAndroid } from "react-icons/fa";
import { PageWrapper } from "../components/layout/PageWrapper";
import ServiceItem from "@/components/layout/ServiceItem";

const services = [
  {
    title: "Web Development",
    description:
      "Custom web applications tailored to your needs using modern technologies and best practices.",
    icon: <FaCode className="w-8 h-8" />,
    tags: ["React", "Next.js", "Node.js"],
  },
  {
    title: "Responsive Design",
    description:
      "Create websites that look great on all devices, from mobile phones to desktop computers.",
    icon: <FaMobileAlt className="w-8 h-8" />,
    tags: ["CSS3", "Tailwind", "Mobile-First"],
  },
  {
    title: "Backend Development",
    description:
      "Robust and scalable server-side solutions to power your web applications.",
    icon: <FaServer className="w-8 h-8" />,
    tags: ["Node.js", "Express", "MongoDB"],
  },
  {
    title: "Android Development",
    description:
      "Crafting modern, responsive Android applications with robust performance, seamless navigation, and engaging user interfaces.",
    icon: <FaAndroid className="w-8 h-8" />,
    tags: ["Kotlin", "Material Design", "Firebase", "Room Database"],
  },
];

export function Services() {
  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto py-24 px-4 sm:px-6 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white mb-5">
            Services
          </h2>
          <div className="flex justify-center space-x-2">
            <div className="w-16 h-1 bg-blue-500 rounded"></div>
            <div className="w-4 h-1 bg-blue-300 rounded"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceItem service={service} key={index} />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
