import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

const MidSection = ({ timeline }) => {
  const middle = useRef(null);
  const revealTl = useRef(null);

  useGSAP(
    () => {
      //timeline for the text going down
      const eye = document.querySelector(".eyeContainer");
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
      ).to(
        eye,
        {
          duration:2,
          y:-100,
          opacity:0
        },'a'
      )


      //timeline for the overlayPage loading
      const scrollDownCircle = document.querySelector(".circle");
      const navbar = document.querySelectorAll(".navbar");

      revealTl.current = gsap.timeline({});

      //loading animation for the text
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

        //loading animation for the subtext
        .fromTo(".hero-subtext", { opacity: 0,y:"-100%" }, { opacity: 1,y:"0%", duration: 0.5 })

        .fromTo(navbar, { opacity: 0,y:"-100%" }, { opacity: 1, y:"0%", duration: 0.5 },)

        //loading animation for the scrollDownCircle
        .fromTo(scrollDownCircle, { opacity: 0,y:"100%" }, { opacity: 1, y:"0%", duration: 1,ease:"elastic.out(2,0.4)"})

    },
    { scope: middle, dependencies: [timeline, revealTl] }
  );

  return (
    <div
      ref={middle}
      className="main flex justify-start items-start flex-col absolute top-[27%]"
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
