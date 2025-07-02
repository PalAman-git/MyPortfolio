// AboutMe.jsx
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const sectionRef = useRef(null);
  const textRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from("#about-spark", {
        scale: 0.8,
        opacity: 0.3,
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative border-2 border-red-500 bg-background text-text px-6 sm:px-10 md:px-20 py-24 w-full mx-auto overflow-hidden"
    >
      {/* SVG Glow */}
      <div
        id="about-spark"
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, #eab53922 0%, rgba(0,0,0,0) 70%)",
          filter: "blur(60px)",
        }}
      ></div>

      {/* Responsive Layout */}
      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center lg:items-start gap-y-12 lg:gap-x-16">
        {/* Text */}
        <div className="flex-1 flex flex-col gap-y-6 text-center lg:text-left">
          <h2
            ref={(el) => (textRef.current[0] = el)}
            className="text-3xl sm:text-4xl font-bold text-accent"
          >
            About Me
          </h2>
          <p
            ref={(el) => (textRef.current[1] = el)}
            className="text-muted text-lg leading-relaxed"
          >
            I'm <span className="text-accent font-medium">Aman</span>, a creative <span className="text-accent font-medium">frontend-focused developer</span> with a background in BTech Engineering.
          </p>
          <p
            ref={(el) => (textRef.current[2] = el)}
            className="text-muted text-lg leading-relaxed"
          >
            I specialize in building smooth, high-performance user experiences using <span className="text-accent">JavaScript</span>, <span className="text-accent">GSAP</span>, and modern <span className="text-accent">WebGL</span> workflows.
          </p>
          <p
            ref={(el) => (textRef.current[3] = el)}
            className="text-muted text-lg leading-relaxed"
          >
            Currently building <span className="text-accent font-medium">Nexora</span> — an AI-powered proposal generator.
          </p>
          <p
            ref={(el) => (textRef.current[4] = el)}
            className="text-muted text-lg leading-relaxed"
          >
            I love crafting micro-interactions and immersive interfaces.
          </p>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="inline-block mt-4 w-fit px-5 py-2 rounded-xl bg-accent text-background font-semibold text-sm hover:bg-accent-hover transition"
          >
            Download Resume
          </a>
        </div>

        {/* Creative Side Visual for Large Screens */}
        <div className="hidden lg:block flex-1">
          <svg
            viewBox="0 0 200 200"
            className="w-[300px] h-[300px] mx-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="100"
              cy="100"
              r="60"
              stroke="#eab539"
              strokeWidth="2"
              fill="none"
              opacity="0.2"
            />
            <circle
              cx="100"
              cy="100"
              r="80"
              stroke="#eab539"
              strokeWidth="1.5"
              fill="none"
              opacity="0.1"
            />
            <circle
              cx="100"
              cy="100"
              r="100"
              stroke="#eab539"
              strokeWidth="1"
              fill="none"
              opacity="0.05"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
