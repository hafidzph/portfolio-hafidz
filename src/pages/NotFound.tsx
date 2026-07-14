import { PageWrapper } from "../components/layout/PageWrapper";
import { NavLink } from "react-router";
import { Home } from "lucide-react";

export function NotFound() {
  return (
    <PageWrapper>
      <div className="flex flex-col items-center justify-center text-center min-h-screen px-6 py-24">
        <p className="text-7xl sm:text-8xl md:text-9xl font-extrabold tracking-tighter bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          404
        </p>
        <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-white">
          Page Not Found
        </h1>
        <p className="mt-3 max-w-md text-gray-400 text-sm sm:text-base">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <NavLink
          to="/"
          className="mt-8 inline-flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-md font-semibold transition duration-300 text-sm sm:text-base"
        >
          <Home className="h-4 w-4" />
          Back to Home
        </NavLink>
      </div>
    </PageWrapper>
  );
}
