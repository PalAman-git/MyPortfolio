// components/MobileProjects.jsx

import React from "react";

const projects = [
  {
    title: "Nexora",
    image: "./model/ai_gen.webp",
    description:
      "Smart proposal drafting tool built with React, OpenAI, Supabase Auth, and GSAP. Generate client-ready proposals instantly.",
    codeUrl: "https://github.com/PalAman-git/ai-proposal-gen",
    liveUrl: "https://ai-proposal-gen.vercel.app/",
  },
  {
    title: "Nexora",
    image: "./model/ai_gen.webp",
    description:
      "Smart proposal drafting tool built with React, OpenAI, Supabase Auth, and GSAP. Generate client-ready proposals instantly.",
    codeUrl: "https://github.com/PalAman-git/ai-proposal-gen",
    liveUrl: "https://ai-proposal-gen.vercel.app/",
  },
  {
    title: "Nexora",
    image: "./model/ai_gen.webp",
    description:
      "Smart proposal drafting tool built with React, OpenAI, Supabase Auth, and GSAP. Generate client-ready proposals instantly.",
    codeUrl: "https://github.com/PalAman-git/ai-proposal-gen",
    liveUrl: "https://ai-proposal-gen.vercel.app/",
  },
];

const MobileProjects = () => {
  return (
    <section className="relative block sm:hidden bg-[#000000] text-[#eab539] px-6 py-12 space-y-12">
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `
        linear-gradient(
          to bottom,
          rgba(234, 181, 57, 0.1) 0%,
          rgba(234, 181, 57, 0.05) 40%,
          rgba(234, 181, 57, 0.03) 70%,
          transparent 100%
        )
      `,
          filter: "blur(40px)",
        }}
      />
      <h2 className="text-center text-6xl font-bold mb-4">Projects</h2>

      <div className="space-y-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-2xl bg-[#000]/80 backdrop-blur-md p-5 space-y-4 transition duration-300 hover:scale-[1.01]"
          >
            <img
              src={project.image}
              alt={`${project.title} Preview`}
              loading="lazy"
              className="w-full h-auto rounded-xl object-cover"
            />

            <h3 className="text-lg font-semibold text-[#eab539] tracking-wide">
              {project.title}
            </h3>

            <p className="text-sm text-[#b3a678] leading-relaxed">
              {project.description}
            </p>

            <div className="flex justify-between pt-2 text-sm font-medium text-[#eab539]">
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-white transition"
              >
                View Code
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-white transition"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MobileProjects;
