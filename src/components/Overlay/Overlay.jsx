import "./style.css";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Navbar from "./Navbar";
import ScrollDown from "./ScrollDown";

gsap.registerPlugin(TextPlugin);

const Overlay = () => {
  //type writer effect
  const words = [
    "Software Engineer",
    "Devops Engineer",
    "Frontend Developer",
    "Creative Developer",
  ];

  const mainTimeline = useRef(null);
  const container = useRef(null);

  useGSAP(
    () => {
      mainTimeline.current = gsap.timeline({
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

        mainTimeline.current.add(textTimeline);
      });
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
      <div className="absolute top-[23%]">
        <div className="font-medium -mb-7 text-3xl font-roboto">hi!</div>
        <div className="hero-text font-extrabold text-[10rem] font-script -my-5">
          I'm Aman
        </div>
        <div className="hero-subtext font-medium text-3xl font-roboto">
          I'm a creative Developer having an eye on user interactions. <br />
          My interests include{" "}
          <span className="typewriter font-black text-[#151515]"></span>
          <span className="cursor font-black">|</span>
        </div>
      </div>
      <ScrollDown />
    </div>
  );
};
export default Overlay;
