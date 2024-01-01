import "./index.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const ref = useRef(null);
  const tl = useRef();
  

  useGSAP(
    () => {
      //registering the plugin

      const el = ref.current;
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "100% 0%",
          markers:true,
          scrub: 0.3,
          pin: true,
          pinnedContainer:ref.current
        },
      });

      tl.current
        .to(
          ".topP",
          {
            top: "-51%",
            duration: 5,
          },
          "a"
        )
        .to(
          ".btmP",
          {
            bottom: "-51%",
            duration: 5,
          },
          "a"
        );
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className="select-none projects-container">
      <div className="topP">
        <div className="top-h badaKrdo">PROJECTS</div>
      </div>
      <div className="centerP"></div>
      <div className="btmP">
        <div className="btm-h badaKrdo">PROJECTS</div>
      </div>
    </div>
  );
};
export default Projects;
