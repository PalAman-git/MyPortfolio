import "./App.css";
import { Hero, Cursor,About } from "./components";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [cursorVarient, setCursorVarient] = useState("default");

  useEffect(() => {
    const mouseEnter = (e) => {
      setCursorVarient('text')
    }

    const mouseLeave = (e) => {
      setCursorVarient('default');
    }

    //adding the event listner to each hero element
    const text = document.querySelectorAll('.hero-text');
    text.forEach((el) => {
      el.addEventListener('mouseenter', mouseEnter);
      el.addEventListener('mouseleave', mouseLeave);
    })

    //cleaning up the event listners
    return () => {
      text.forEach((el) => {
        el.removeEventListener('mouseenter', mouseEnter);
        el.removeEventListener('mouseleave', mouseLeave);
      })
    }

  },[])

  return (
    <>
      <Cursor cursorVarient={cursorVarient}/>
      <Hero />

    </>
  );
}

export default App;
