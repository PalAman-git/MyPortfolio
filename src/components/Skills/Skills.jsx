import "./index.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

const Skills = () => {
  const tl = useRef(null);
  const skills = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: skills.current,
          start: "40% bottom",
          end: "135% 10%",
          scrub: 1,
          // markers: true,
          pinSpacing:false,
          pinnedContainer: skills.current,
        },
      });
      tl.current 
        .to(".strip-l", {
          marginLeft:"-100%",
        }
        
        ,'a')
        .to(".strip-r",
        {
          marginLeft:"0%",
        },'a'
        )
    },
    { scope: skills }
  );

  return (
    <div ref={skills} className="skills-container">
      <div className="strip strip-l">
        <h1>
          {" "}
          SKILLS <span>SKILLS</span> SKILLS <span>SKILLS</span> SKILLS{" "}
          <span>SKILLS</span> SKILLS <span>SKILLS</span> SKILLS{" "}
          <span>SKILLS</span> SKILLS{" "}
        </h1>
      </div>
      <div className="strip strip-r">
        <h1>
          {" "}
          SKILLS <span>SKILLS</span> SKILLS <span>SKILLS</span> SKILLS{" "}
          <span>SKILLS</span> SKILLS <span>SKILLS</span> SKILLS{" "}
          <span>SKILLS</span> SKILLS{" "}
        </h1>
      </div>
      <div className="strip strip-l">
        <h1>
          {" "}
          SKILLS <span>SKILLS</span> SKILLS <span>SKILLS</span> SKILLS{" "}
          <span>SKILLS</span> SKILLS <span>SKILLS</span> SKILLS{" "}
          <span>SKILLS</span> SKILLS{" "}
        </h1>
      </div>
      <div className="strip strip-r">
        <h1>
          {" "}
          SKILLS <span>SKILLS</span> SKILLS <span>SKILLS</span> SKILLS{" "}
          <span>SKILLS</span> SKILLS <span>SKILLS</span> SKILLS{" "}
          <span>SKILLS</span> SKILLS{" "}
        </h1>
      </div>
    </div>
  );
};
export default Skills;
