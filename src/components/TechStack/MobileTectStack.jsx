import { useRef } from "react";
import { techData } from "./techData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MobileTechStack = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const icons = sectionRef.current.querySelectorAll(".tech-icon");

      gsap.from(icons, {
        opacity: 0,
        scale: 0.5,
        y: 50,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <div
      ref={sectionRef}
      className="relative w-full min-h-screen py-16 px-6 bg-[#000] overflow-hidden flex justify-center items-center"
    >
      {/* Radial background */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `
      radial-gradient(
        circle at center,
        rgba(234, 181, 57, 0.12) 0%,
        rgba(234, 181, 57, 0.06) 40%,
        rgba(234, 181, 57, 0.03) 70%,
        transparent 100%
      )
    `,
          filter: "blur(40px)",
        }}
      />

      {/* Icons */}
      <div className="relative z-10 flex flex-wrap justify-center items-center gap-x-8 gap-y-20">
        {techData.map((tech, index) => (
          <div key={index} className="flex flex-col items-center space-y-6">
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-12 h-12 object-contain"
            />
            <p className="text-sm text-text text-center">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileTechStack;
