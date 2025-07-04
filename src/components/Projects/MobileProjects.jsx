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
            className="rounded-2xl overflow-hidden border border-muted_black shadow-md"
          >
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

              <img
                src={project.image}
                alt={`${project.title} Preview`}
                loading="lazy"
                className="w-full h-auto rounded-md mb-4 object-cover"
              />

              <p className="text-[#b3a678] text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex gap-4">
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-muted_black text-[#eab539] py-2 rounded-md border border-[#3a3a3a] hover:border-[#eab539] transition"
                >
                  Code
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-muted_black text-[#eab539] py-2 rounded-md border border-[#3a3a3a] hover:border-[#eab539] transition"
                >
                  Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MobileProjects;
