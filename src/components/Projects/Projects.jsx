import "./index.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Center from "./Center";

const Projects =() => {
  const tl = useRef();
  const ref = useRef();
  useGSAP(
    () => {
      //registering the plugin
      gsap.registerPlugin(ScrollTrigger);

      //animation for splitting the text from middle
      const el = ref.current;
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "100% 0%",
          // markers:true,
          scrub: 0.3,
          pin: true,
          pinnedContainer: ref.current,
        },
      });

      tl.current
        .to(
          ".topP",
          {
            top: "-51%",
            duration: 4,
          },
          "a"
        )
        .to(
          ".btmP",
          {
            bottom: "-51%",
            duration: 4,
          },
          "a"
        )
        .to(
          ".top-h",
          {
            y: "20%",
            duration: 4,
          },
          "a"
        )
        .to(
          ".btm-h",
          {
            y: "-15%",
            duration: 4,
          },
          "a"
        );

        
      //animation for the projects
      const projects = document.querySelectorAll(".project");
      projects.forEach((project) => {
        gsap.set(project, { y: "120%" });
      });

      gsap.to(projects,{
        y: "0%",
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: el,
          start: "35% top",
          end:"35% top",
          // markers:true,
          toggleActions: "restart none reverse none",
          scrub:false,
        },
      });


      // text entering animation
      gsap.set(".top-h", { x: "-120%" });
      gsap.to(
        ".top-h",
        {
          x: "0%",
          duration: 1.3,
          scrollTrigger: {
            trigger: el,
            start: "50% 50%",
            markers:true,
          },
        },
        "a"
      );
      gsap.set(".btm-h", { x: "-120%" });
      gsap.to(
        ".btm-h",
        {
          x: "0%",
          duration: 1.3,
          scrollTrigger: {
            trigger: el,
            start: "50% 50%",
          },
        },
        "a"
      );
    },
    { scope: ref }
  );

  return (
    <div id="Projects" ref={ref} className="select-none projects-container">
      <div className="topP">
        <div className="top-h badaKrdo">PROJECTS</div>
      </div>
      <Center />
      <div className="btmP">
        <div className="btm-h badaKrdo">PROJECTS</div>
      </div>
    </div>
  );
};
export default Projects;
