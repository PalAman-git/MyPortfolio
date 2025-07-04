import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const MobileOverlay = () => {
  const container = useRef(null);
  const typeWriterRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".mobile-name", {
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: "power2.out",
      })
        .from(
          ".mobile-subtitle",
          {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .from(
          ".mobile-typewriter",
          {
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .from(
          ".mobile-cta",
          {
            opacity: 0,
            scale: 0.95,
            duration: 0.5,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        );

      gsap.to("#hero-glow", {
        scale: 1.3,
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: "sine.inOut",
      });

      const words = [
        "Software Engineering",
        "Frontend Development",
        "Creative Development",
      ];

      const typeTl = gsap.timeline({ repeat: -1 });

      words.forEach((word) => {
        const wordTl = gsap.timeline({
          repeat: 1,
          yoyo: true,
          repeatDelay: 2,
        });

        wordTl.to(typeWriterRef.current, {
          duration: 1.5,
          text: word,
          ease: "none",
        });

        typeTl.add(wordTl);
      });

    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={container}
      id="overlay"
      className="absolute inset-0 z-10 flex flex-col justify-center items-center px-6 text-center bg-background text-text"
    >
      <div
        id="hero-glow"
        className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full z-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #fbb10324, rgba(8,9,11,0) 100%)",
          filter: "blur(60px)",
        }}
      ></div>

      {/* Content Stack */}
      <div className="z-10 space-y-10">
        <h2 className="mobile-name text-2xl font-light font-bebas leading-none text-text">
          Hi!
        </h2>

        {/* Name */}
        <h1 className="mobile-name text-9xl font-extrabold font-bebas leading-none text-text mb-8">
          I'm Aman
        </h1>

        {/* Subtitle */}
        <p className="mobile-subtitle text-2xl text-muted font-light leading-relaxed font-bebas max-w-xs mx-auto text-text">
          Creative Developer crafting smooth interactions and clean experiences.
        </p>

        {/* Typewriter */}
        <p className="mobile-typewriter text-2xl text-text font-bebas">
          Skilled in{" "}
          <span
            ref={typeWriterRef}
            className="font-bold inline-block text-purple"
          ></span>
          <span className="cursor font-black text-accent">|</span>
        </p>

        {/* CTA Button */}
        <button
          className="mobile-cta mt-4 px-5 py-2 text-sm font-semibold rounded-xl bg-purple hover:bg-accent-hover text-text transition"
          onClick={() => {
            const section = document.getElementById("work");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          View Work
        </button>
      </div>
    </div>
  );
};

export default MobileOverlay;
