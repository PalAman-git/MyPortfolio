import "./index.css";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import toast from "react-hot-toast";

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
          end: "bottom center",
          // markers: true,
          // scrub: true,
        },
      });

      tl.current
        .from(".social-heading", {
          x: -100,
          opacity: 0,
        })
        .from(".copyright", {
          x: -100,
          opacity: 0,
        });
    },
    { scope: contact }
  );

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    const submitPromise = fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    toast
      .promise(submitPromise, {
        loading:"Sending message...",
        success: "Message Sent! \n I will contact you soon! 🚀",
        error: "Failed to send message. Please try again later.",
      })
      .then((response) => {
        // Optional: Handle response if needed
        if (response.ok) {
          event.target.reset(); // Reset the form after successful submission
        }
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  };

  return (
    <div ref={contact} id="Contact" className="contact">
      <div className="connection">
        <div className="left">
          <span className="badaKrdo">
            Let's <br /> Connect
          </span>
        </div>
        <div className="right">
          <form action="#" onSubmit={handleSubmit} autoComplete="off">
            <input
              type="text"
              name="hidden-field"
              style={{ display: "none" }}
            />
            <input
              type="password"
              name="hidden-password"
              style={{ display: "none" }}
            />
            <div className="form-group">
              <label htmlFor="name" className="label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="input"
                autoComplete="off"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="input"
                autoComplete="off"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="input"
                autoComplete="off"
                required
              />
            </div>
            <button type="submit" className="submit">
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="socials">
        <div className="social-heading">socials</div>
        <div className="icons">
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
      <div className="copyright">
        <div>Designed + Developed by Aman Pal</div>
        <div>© 2023-2024 AMAN PAL. ALL RIGHTS RESERVED.</div>
      </div>
    </div>
  );
};

export default Contact;
