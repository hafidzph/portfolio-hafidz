"use client";

import { PageWrapper } from "../components/layout/PageWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { FaUser, FaEnvelope, FaPaperPlane } from "react-icons/fa";

export function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const name = formData.get("name") as string;
    const message = formData.get("message") as string;

    const mailtoUrl = `mailto:hafidzph1@gmail.com?subject=Message from ${name}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoUrl;

    setIsLoading(false);
    toast.success("Email client opened successfully!");
  };

  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto py-24 xl:mt-5 px-16 xl:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter text-white mb-4">
                Contact Me
              </h2>
              <div className="flex space-x-2">
                <div className="w-16 h-1 bg-blue-500 rounded"></div>
                <div className="w-4 h-1 bg-blue-300 rounded"></div>
              </div>
            </div>

            <p className="text-lg text-gray-300">
              Interested in collaborating or have questions? Feel free to
              contact me via this form for further discussion about what you
              would like to work on with me.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-25"></div>
            <div className="relative bg-gray-900 p-8 rounded-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <Input
                      name="name"
                      placeholder="Nama"
                      required
                      className="pl-12 bg-gray-800 text-white placeholder-gray-400 border-gray-700 focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                    <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>

                  <div className="relative">
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email"
                      required
                      className="pl-12 bg-gray-800 text-white placeholder-gray-400 border-gray-700 focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                    <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>

                  <div className="relative">
                    <Textarea
                      name="message"
                      placeholder="Pesan"
                      required
                      className="min-h-[150px] pl-12 bg-gray-800 text-white placeholder-gray-400 border-gray-700 focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                    <FaPaperPlane className="absolute left-4 top-3 text-gray-400" />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-600 transition-all py-6 rounded-lg text-lg font-medium"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin"></div>
                      Mengirim...
                    </div>
                  ) : (
                    "Kirim Pesan"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
