import "./style.css";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import Navbar from "./Navbar";
import ScrollDown from "./ScrollDown";
import MidSection from "./MidSection";

gsap.registerPlugin(TextPlugin);

const Overlay = () => {
  const words = [
    "Software Engineer",
    "Devops Engineer",
    "Frontend Developer",
    "Creative Developer",
  ];
  //type writer effect
  const typeWriterTimeline = useRef(null);
  const container = useRef(null);

  const [overLayTl, SetOverLayTl] = useState(null);

  useGSAP(
    () => {
      typeWriterTimeline.current = gsap.timeline({
        repeat: -1,
      });

      words.forEach((word) => {
        let textTimeline = gsap.timeline({
          repeat: 1,
          yoyo: true,
          repeatDelay: 2,
        });

        textTimeline.to(".typewriter", {
          duration: 1.5,
          text: word,
        });

        typeWriterTimeline.current.add(textTimeline);
      });

      //time line for controlling the visibility of the components on the overlay i.e Navbar, MidSection and ScrollDown
      SetOverLayTl(
        gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "10% top",
            end: "bottom 60%",
            // markers: true,
            scrub: 1,
          },
        })
      );
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      id="overlay"
      className="absolute select-none tracking-widest flex justify-center items-center w-full h-full flex-col z-10 px-10"
    >
      <Navbar />
      <MidSection timeline={overLayTl}/>
      <ScrollDown timeline={overLayTl}/>
    </div>
  );
};
export default Overlay;
