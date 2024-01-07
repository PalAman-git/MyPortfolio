import "./index.css";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";

const Contact = () => {
  const contact = useRef(null);
  const tl = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

  },{scope:contact}) 

  return (
    <div ref={contact} id="Contact" className="contact">
      <div className="connection">
        <div className="left">
          <span className="badaKrdo">Let's <br /> Connect</span>
        </div>
        <div className="right">
          <form action="#">
            <div className="form-group">
              <label htmlFor="name" className="label">Name</label>
              <input
                type="text"
                id="name"
                className="input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="label">Email</label>
              <input
                type="email"
                id="email"
                className="input"
                required
                />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="label">Message</label>
              <textarea
                type="text"
                id="message"
                className="input"
                required
              />
            </div>
            <button type="submit" className="submit">Send</button>
          </form>
        </div>
      </div>
      <div className="socials">
        socials
        <div className="icons">
          <a
            href="https://github.com/PalAman-git"
            target="_blank"
            className="icon"
          >
            <img src="./model/github.svg" />
          </a>
          <a
            href="https://twitter.com/AmanPal33038743"
            target="_blank"
            className="icon"
          >
            <img src="./model/twitter.svg" />
          </a>
          <a
            href="https://www.linkedin.com/in/aman-pal-416359240/"
            target="_blank"
            className="icon"
          >
            <img src="./model/linkedIn.svg" />
          </a>
        </div>
      </div>
      <div className="copyright">
        <div>Designed + Developed by Aman Pal</div>
        <div>© 2023-2024 AMAN PAL. ALL RIGHTS RESERVED.</div>
      </div>
    </div>
  );
};
export default Contact;
