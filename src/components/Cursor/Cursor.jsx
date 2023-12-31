import "./index.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const cursor = ({ cursorVarient }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useGSAP(() => {
    //portal dikhane ke wqt cursor hta diya
    const overlay = document.querySelector(".overlay");
    const second = document.querySelector(".second");

    gsap.to(".pointer", {
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: overlay,
        start: "2% top",
        end: "75% top",
        // markers: true,
        scrub: 1,
        toggleClass: { targets: ".pointer", className: "hidden" },
      },
    });

    // second section pr wapas aane ke liey
    gsap.to(".pointer", {
      duration: 0.1,
      ease: "power4.out",
      backgroundColor:"white",
      scrollTrigger: {
        trigger: second,
        start: "top top",
        end: "bottom top",
        // markers: true,
        scrub: 1,
      }, 
    });

  });

  useEffect(() => {
    //function
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX - 12.5,
        y: e.clientY - 12.5,
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
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
    },
  };

  return (
    <div>
      <motion.div
        variants={variants}
        className="pointer"
        animate={cursorVarient}
      />
    </div>
  );
};
export default cursor;
