import { TooltipProvider } from "@radix-ui/react-tooltip";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Header } from "./components/layout/Header";
import { Hero } from "./pages/Hero";
import { Projects } from "./pages/Projects";
import { SocialSidebar } from "./components/layout/SocialSidebar";
import { Routes, Route } from "react-router";
import { AnimatePresence } from "motion/react";
import { Services } from "./pages/Services";
import { Certificates } from "./pages/Certificates";
import { Experience } from "./pages/Experiences";

function App() {
  return (
    <main
      className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-800 to-blue-900 
    bg-[length:200%_200%] animate-gradient-move flex flex-col gap-24"
    >
      <div className="fixed inset-0 w-full h-screen bg-[url('/church-on-sunday.svg')] opacity-10 pointer-events-none "></div>
      <TooltipProvider>
        <Header />
        <SocialSidebar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </AnimatePresence>
      </TooltipProvider>
    </main>
  );
}

export default App;
