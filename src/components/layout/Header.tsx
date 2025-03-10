"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Home,
  User,
  FolderKanban,
  Mail,
  Code,
  BadgeIcon as Certificate,
  Menu,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { NavLink, useLocation } from "react-router";

const sections = [
  { id: "/", label: "Home", icon: <Home className="h-4 w-4" /> },
  { id: "/about", label: "About", icon: <User className="h-4 w-4" /> },
  {
    id: "/projects",
    label: "Projects",
    icon: <FolderKanban className="h-4 w-4" />,
  },
  { id: "/contact", label: "Contact", icon: <Mail className="h-4 w-4" /> },
  { id: "/services", label: "Services", icon: <Code className="h-4 w-4" /> },
  {
    id: "/certificates",
    label: "Certificates",
    icon: <Certificate className="h-4 w-4" />,
  },
];

export function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (isDesktop) {
      setOpen(false);
    }
  }, [isDesktop]);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 py-4 md:px-6 md:py-6 flex justify-between items-center">
        <span className="text-xl font-bold text-blue-400">
          {" "}
          Hafidz Portfolio{" "}
        </span>

        {isDesktop ? (
          <ul className="hidden md:flex space-x-6 lg:space-x-8">
            {sections.map(({ id, label, icon }) => (
              <li key={id}>
                <NavLink
                  to={id}
                  className={({ isActive }) =>
                    `flex items-center gap-2 capitalize ${
                      isActive
                        ? "text-blue-400 font-bold"
                        : "text-gray-400 hover:text-blue-300"
                    }`
                  }
                >
                  {icon} {label}
                </NavLink>
              </li>
            ))}
          </ul>
        ) : (
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5 text-white" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[250px] sm:w-[300px] bg-gray-900 border-gray-800"
            >
              <nav className="flex flex-col gap-4 mt-8">
                {sections.map(({ id, label, icon }) => (
                  <NavLink
                    key={id}
                    to={id}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center gap-3 p-2 rounded-md transition-colors",
                        isActive
                          ? "bg-blue-900/30 text-blue-400 font-medium"
                          : "text-gray-400 hover:bg-gray-800 hover:text-blue-300"
                      )
                    }
                  >
                    {icon} {label}
                  </NavLink>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        )}
      </nav>
    </motion.header>
  );
}
