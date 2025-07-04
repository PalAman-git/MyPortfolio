// components/MobileSkills.jsx
import "./index.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

const MobileSkills = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    // Animate strip-l
    gsap.to(".m-strip-l", {
      marginLeft: "-80%",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    });
  
    // Animate strip-r
    gsap.to(".m-strip-r", {
      marginLeft: "0%",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    });
  }, { scope: containerRef });
  
  return (
    <div ref={containerRef} className="relative mobile-skills-container">
      <div className="m-strip m-strip-l z-10">
        <h1>SKILLS <span>SKILLS</span> SKILLS <span>SKILLS</span></h1>
      </div>
      <div className="m-strip m-strip-r">
        <h1>SKILLS <span>SKILLS</span> SKILLS <span>SKILLS</span></h1>
      </div>
      <div className="m-strip m-strip-l">
        <h1>SKILLS <span>SKILLS</span> SKILLS <span>SKILLS</span></h1>
      </div>
      <div className="m-strip m-strip-r">
        <h1>SKILLS <span>SKILLS</span> SKILLS <span>SKILLS</span></h1>
      </div>
      <div className="m-strip m-strip-l">
        <h1>SKILLS <span>SKILLS</span> SKILLS <span>SKILLS</span></h1>
      </div>
      <div className="m-strip m-strip-r">
        <h1>SKILLS <span>SKILLS</span> SKILLS <span>SKILLS</span></h1>
      </div>
    </div>
  );
};

export default MobileSkills;
