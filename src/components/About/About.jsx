import "./style.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef,useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import leftArrow from './leftArroow.svg';
import rightArrow from './rightArrow.svg';

const About = () => {

  // for creating the loading animation
  // const tl = useRef(null);
  // const about = useRef(null);
  

  // useGSAP(() => {
  //   gsap.registerPlugin(ScrollTrigger);


  //   tl.current = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: about.current,
  //       start: "50% bottom",
  //     }
  //   });
  //   const bars = document.querySelectorAll(".bars");
  //   tl.current.to(bars,{width:"0%" ,duration:1.5,stagger:0.25,ease:"power2.in"})
  //   .from('.about-title',{opacity:0,x:-100,duration:0.5,ease:"power2.inOut"})
    
  // },{scope:about});

  return (
    <div id="About" className="about select-none relative h-[100vh] overflow-hidden">
      {/* for creating the loading animation */}

      {/* <div className="about-loading absolute z-4 top-0 left-0 w-full h-full flex flex-col justify-center">
          <div className="bars"></div>
          <div className="bars"></div>
          <div className="bars"></div>
          <div className="bars"></div>
          <div className="bars"></div>
      </div> */}

      {/* for showing the actual content on the page */}
      <div className="about-container px-[20vw] font-roboto w-full h-full flex flex-col">
        <h1 className="badaKrdo about-title font-bold font-bebas mt-20 mb-5">ABOUT ME</h1>
        <div className="about-content font-medium -mt-6">
        I'm Aman, a creative frontend developer and software engineer. With a passion for turning ideas into captivating digital experiences, I specialize in crafting seamless and responsive websites.My coding practice revolves around creative solutions, adding that extra touch of magic to user interfaces. I thrive on challenges in software engineering, constantly staying updated on the latest technologies.Let's connect and create something amazing together!
        </div>
        <div className="about-buttons-container tracking-widest relative font-bebas font-bold mt-[5rem] flex items-center gap-5">
          <a href="#" className="cv about-button">CV</a>
          <a href="#" className="resume about-button">Resume</a>
          <img src={leftArrow} className="badaKrdo leftArrow absolute w-[10vw] -left-[13vw] -top-4"/>
          <img src={rightArrow} className="badaKrdo rightArrow absolute w-[25vw] right-[5vw]"/>
        </div>
      </div>
    </div>
  );
};
export default About;
