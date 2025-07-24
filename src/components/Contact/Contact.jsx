import "./index.css";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Contact = () => {
  const contact = useRef(null);
  const tl = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: contact.current,
          start: "center center",
          // end: "bottom center",
          // markers: true,
          // scrub: true,
        },
      });

      tl.current.from(".stagger-contact", {
        x: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2, // stagger each element by 0.2s
      });
    },
    { scope: contact }
  );

  return (
    <div ref={contact} id="Contact" className="contact">
      <div className="connection">
        <h3 className="subheading stagger-contact">Contact me at</h3>
        <h1 className="heading stagger-contact">erdevaman@gmail.com</h1>
      </div>
      <div className="socials">
        <div className="social-heading stagger-contact">socials</div>
        <div className="icons stagger-contact">
          <a
            href="https://github.com/PalAman-git"
            target="_blank"
            className="icon"
          >
            <img src="./model/github.svg" alt="GitHub" />
          </a>
          <a
            href="https://twitter.com/AmanPal33038743"
            target="_blank"
            className="icon"
          >
            <img src="./model/twitter.svg" alt="Twitter" />
          </a>
          <a
            href="https://www.linkedin.com/in/aman-pal-416359240/"
            target="_blank"
            className="icon"
          >
            <img src="./model/linkedIn.svg" alt="LinkedIn" />
          </a>
        </div>
      </div>
      <div className="copyright stagger-contact">
        <div>Designed + Developed by Aman Pal</div>
        <div>© 2023-2024 AMAN PAL. ALL RIGHTS RESERVED.</div>
      </div>
    </div>
  );
};

export default Contact;
