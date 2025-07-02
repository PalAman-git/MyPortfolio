import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const MidSection = ({ timeline, typeWriterRef }) => {
  const middle = useRef(null);
  const revealTl = useRef(null);

  useGSAP(() => {
    timeline &&
      timeline
        .to(".hero-text", { duration: 2, y: 180 }, "a")
        .to(".hero-subtext", { duration: 2, y: 180 }, "a")

    const scrollDownCircle = document.querySelector(".circle");
    const navbar = document.querySelectorAll(".navbar");

    revealTl.current = gsap.timeline({});

    revealTl.current
      .fromTo(".hero-text", { opacity: 0, y: "-100%" }, { opacity: 1, y: "0%", duration: 0.5 })
      .fromTo(".hero-subtext", { opacity: 0, y: "-100%" }, { opacity: 1, y: "0%", duration: 0.5 })
      .fromTo(navbar, { opacity: 0, y: "-100%" }, { opacity: 1, y: "0%", duration: 0.5 })
      .fromTo(scrollDownCircle, { opacity: 0, y: "100%" }, { opacity: 1, y: "0%", duration: 1, ease: "elastic.out(2,0.4)" });

      
  }, { scope: middle, dependencies: [timeline] });

  return (
    <div
      ref={middle}
      className="absolute top-[25%] px-4 sm:px-10 w-full flex flex-col items-center sm:items-start gap-y-4 text-center sm:text-left max-w-screen-sm mx-auto z-20"
    >
      {/* Greeting */}
      <div className="hero-subtext text-muted text-base sm:text-[1.5rem] font-bebas tracking-wide">
        HI!
      </div>

      {/* Main name */}
      <div
        className="hero-text font-extrabold tracking-wider font-bebas leading-none"
        style={{
          fontSize: "clamp(2.5rem, 10vw, 10rem)",
          lineHeight: "1",
        }}
      >
        I'M AMAN
      </div>

      {/* Subtext with typewriter */}
      <div
        className="hero-subtext text-muted font-light font-bebas text-base sm:text-[1.5rem] leading-relaxed"
      >
        A creative developer with an eye on user interactions.
        <br />
        Experienced in{" "}
        <span
          ref={typeWriterRef}
          className="font-black inline-block"
          style={{ fontSize: "clamp(1.1rem, 5vw, 1.5rem)" }}
        ></span>
        <span className="cursor font-black font-bebas">|</span>
      </div>
    </div>
  );
};

export default MidSection;
