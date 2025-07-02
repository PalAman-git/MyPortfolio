import "./style.css";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import ScrollDown from "./ScrollDown";
import MidSection from "./MidSection";
import { useIsMobile } from "../../hooks/useIsMobile";

const Overlay = () => {
  const words = [
    "Software Engineering",
    "Frontend Development",
    "Creative Development",
  ];
  //type writer effect
  const typeWriterTimeline = useRef(null);
  const container = useRef(null);
  const typeWriterRef = useRef(null);
  const isMobile = useIsMobile();

  const [overLayTl, SetOverLayTl] = useState(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger, TextPlugin);

      // Typewriter timeline
      typeWriterTimeline.current = gsap.timeline({ repeat: -1 });

      words.forEach((word) => {
        let textTimeline = gsap.timeline({
          repeat: 1,
          yoyo: true,
          repeatDelay: 2,
        });

        textTimeline.to(typeWriterRef.current, {
          duration: 1.5,
          text: word,
        });

        typeWriterTimeline.current.add(textTimeline);
      });

      // Overlay scroll trigger timeline
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
    { scope: container } // ✅ this is the second argument to useGSAP
  );

  return (
    <div
      ref={container}
      id="overlay"
      className="absolute select-none tracking-widest flex justify-center items-center w-full h-full flex-col z-10 px-10"
    >

      <MidSection typeWriterRef={typeWriterRef} timeline={overLayTl} />
      {!isMobile && <ScrollDown timeline={overLayTl} />}
    </div>
  );
};
export default Overlay;
