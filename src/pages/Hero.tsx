import Lottie from "lottie-react";
import anim from "@/lib/lottie/anim.json";
import Typewriter from "typewriter-effect";
import { PageWrapper } from "../components/layout/PageWrapper";
import { NavLink } from "react-router";

export function Hero() {
  return (
    <PageWrapper>
      <div className="flex flex-col-reverse md:flex-row-reverse justify-center items-center gap-8 md:gap-12 min-h-screen px-10 md:px-16 xl:px-4 py-24 md:py-0">
        <div className="w-full md:w-5/12 max-w-md">
          <Lottie animationData={anim} className="w-full" />
        </div>
        <div className="text-center md:text-start text-white flex flex-col justify-start items-center md:items-start gap-4 md:gap-6 w-full md:w-7/12">
          <h1 className="max-w-[600px] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tighter mb-2 md:mb-4">
            <Typewriter
              options={{
                strings: ["Hello There!", "I'm Hafidz Putra Herlyansyah."],
                delay: 50,
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="max-w-[600px] text-base sm:text-lg text-gray-300 mb-4 md:mb-6">
            I am a web developer passionate about creating engaging and
            functional digital experiences.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <NavLink
              to="/projects"
              className="bg-blue-600 text-white hover:bg-blue-700 px-4 sm:px-6 py-2 rounded-md font-semibold transition duration-300 text-sm sm:text-base"
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className="bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 px-4 sm:px-6 py-2 rounded-md font-semibold transition duration-300 text-sm sm:text-base"
            >
              Contact Me
            </NavLink>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
