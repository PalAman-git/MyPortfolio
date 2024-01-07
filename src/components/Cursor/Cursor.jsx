import "./index.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Cursor = ({ variant }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useGSAP(() => {
    //portal dikhane ke wqt cursor hta diya
    const overlay = document.querySelector(".overlay");
    const about = document.querySelector(".about");

    gsap.to(".pointer", {
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: overlay,
        start: "2% top",
        end: "75% top",
        // markers: true,
        scrub: 1,
      },
    });

    // second section pr wapas aane ke liey
    gsap.to(".pointer", {
      duration: 0.1,
      ease: "power4.out",
      // backgroundColor:"white",
      scrollTrigger: {
        trigger: about,
        start: "top top",
        end: "bottom top",
        // markers: true,
        toggleClass: { targets: ".pointer", className: "block" },
        scrub: 1,
      }, 
    });

  });

  useEffect(() => {
    //function
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX - 10,
        y: e.clientY - 10,
      });
    };

    //event listners
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
    text: {
      height: 170,
      width: 170,
      x: mousePosition.x - 85,
      y: mousePosition.y - 85,
    },
  };

  return (
    <div>
      <motion.div
        variants={variants}
        className="pointer"
        animate={variant}
      />
    </div>
  );
};
export default Cursor;
