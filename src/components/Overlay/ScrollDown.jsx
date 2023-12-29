import "./style.css";
import arrowDown from "./downArrow.svg";
import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ScrollDown = () => {

  //mouse move stuff
  const { contextSafe } = useGSAP(() => {}, {});

  const activateCircle = contextSafe((e) => {
    //move the circle to new position
    let boundBox = e.currentTarget.getBoundingClientRect();
    const circleStrength = 100;
    let newX = (e.clientX - boundBox.left) / boundBox.width - 0.5;
    let newY = (e.clientY - boundBox.top) / boundBox.height - 0.5;

    gsap.to(e.currentTarget, {
      x: newX * circleStrength,
      y: newY * circleStrength,
      duration: 1,
      ease: "power4.out",
    });

  });

  //mouse leave stuff
  const resetCircle = contextSafe((e) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      duration: 1,
      ease: "elastic.out(2,0.3)",
    });
  });

  //surrounding the circle div with the scroll down text
  useEffect(() => {
    const textElement = document.querySelector(".text p");
    const originalText = textElement.textContent;

    const transformedText = originalText
      .split("")
      .map((char, i) => {
        return `<span style="transform:rotate(${i * 8.6}deg)">${char}</span>`;
      })
      .join("");

    textElement.innerHTML = transformedText;
  }, []);


  return (
    <>
      <div onMouseMove={activateCircle} onMouseLeave={resetCircle} className="circle absolute bottom-[4rem]">
        <img src={arrowDown} className="arrow"></img>
        <div className="text font-medium">
          <p>
            {" "}
            SCROLL DOWN &#x2022; SCROLL DOWN &#x2022; SCROLL DOWN &#x2022;{" "}
          </p>
        </div>
      </div>
    </>
  );
};
export default ScrollDown;
