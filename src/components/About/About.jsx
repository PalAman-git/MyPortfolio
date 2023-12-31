import "./style.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {

  //for creating the loading animation
  const tl = useRef(null);
  const about = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);


    tl.current = gsap.timeline({scrollTrigger:{
      trigger:about.current,
      start:"center center",
      end:"bottom center",
      scrub:1,
      markers:true,
    }});
    const bars = document.querySelectorAll(".bars");
    tl.current.to(bars,{width:"0%" ,duration:1.5,stagger:0.25,ease:"power2.inOut"},'a')
    .from('.about-title',{opacity:0,x:-100,duration:2.5,ease:"power2.inOut"},'a')
    


  },{scope:about});

  return (
    <div ref={about} className="about relative h-[100vh] ">

      {/* for creating the loading animation */}
      <div className="about-loading absolute z-4 top-0 left-0 w-full h-full flex flex-col justify-center">
          <div className="bars"></div>
          <div className="bars"></div>
          <div className="bars"></div>
          <div className="bars"></div>
          <div className="bars"></div>
      </div>

      {/* for showing the actual content on the page */}
      <div className="about-container px-[20vw] font-roboto w-full h-full flex flex-col">
        <h1 className="about-title text-[8rem] font-bebas mt-20 mb-5">ABOUT</h1>
        <div className="about-content text-[1.3rem] font-normal">
        I'm Aman, a creative frontend developer and software engineer. With a passion for turning ideas into captivating digital experiences, I specialize in crafting seamless and responsive websites.My coding practice revolves around creative solutions, adding that extra touch of magic to user interfaces. I thrive on challenges in software engineering, constantly staying updated on the latest technologies.Let's connect and create something amazing together!
        </div>
        <div className="about-buttons-container font-bebas font-bold mt-[5rem] flex items-center gap-5">
          <a href="#" className="cv about-button">CV</a>
          <a href="#" className="resume about-button">Resume</a>
        </div>
      </div>
    </div>
  );
};
export default About;
