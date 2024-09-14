import "./index.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useGSAP(() => {
    const overlay = document.querySelector(".overlay");
    const about = document.querySelector(".about");

    gsap.to(".pointer", {
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: overlay,
        start: "2% top",
        end: "75% top",
        scrub: 1,
      },
    });

    gsap.to(".pointer", {
      duration: 0.1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: about,
        start: "top top",
        end: "bottom top",
        toggleClass: { targets: ".pointer", className: "block" },
        scrub: 1,
      },
    });
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX - 10,
        y: e.clientY - 10,
      });
    };

    // Adding hover effect for the .badaKrdo class
    const hoverTargets = document.querySelectorAll(".badaKrdo");
    hoverTargets.forEach(target => {
      target.addEventListener("mouseenter", () => setCursorVariant("text"));
      target.addEventListener("mouseleave", () => setCursorVariant("default"));
    });

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      hoverTargets.forEach(target => {
        target.removeEventListener("mouseenter", () => setCursorVariant("text"));
        target.removeEventListener("mouseleave", () => setCursorVariant("default"));
      });
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
        animate={cursorVariant}
      />
    </div>
  );
};

export default Cursor;
