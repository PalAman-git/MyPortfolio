import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

const MidSection = ({ timeline }) => {
  const middle = useRef(null);
  const revealTl = useRef(null);

  useGSAP(
    () => {
      //timeline for the text going down
      timeline && timeline
      .to(
        ".hero-text",
        {
          duration:2,
          y:180
        },'a'
      ).to(
        ".hero-subtext",
        {
          duration:2,
          y:180
        },'a'
      )


      //timeline for the text loading
      const overlay = document.querySelector(".overlay");
      revealTl.current = gsap.timeline({});

      revealTl.current
        .fromTo(
          ".hero-text",
          {
            opacity: 0,
            y: "-100%",
          },
          {
            opacity: 1,
            y: "0%",
            duration: 0.5,
          }
        )
        .fromTo(".hero-subtext", { opacity: 0,y:"-100%" }, { opacity: 1,y:"0%", duration: 0.5 });
    },
    { scope: middle, dependencies: [timeline, revealTl] }
  );

  return (
    <div
      ref={middle}
      className="main flex justify-start items-start flex-col absolute top-[22%]"
    >
      <div className="hero-subtext flex justify-start font-normal text-3xl font-bebas">
        hi!
      </div>
      <div className="-py-10 hero-text flex justify-center items-center -my-10 font-extrabold tracking-wider text-[11rem] font-bebas">
        I'm Aman
      </div>
      <div className="hero-subtext font-light text-3xl font-bebas">
        A creative Developer having an eye on user interactions.
        <br />
        Experience in <span className="typewriter font-bebas font-black"></span>
        <span className="cursor font-bebas font-black">|</span>
      </div>
    </div>
  );
};
export default MidSection;
