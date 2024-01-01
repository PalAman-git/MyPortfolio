import "./App.css";
import { Hero, About, Parallax,Footer } from "./components";
import { useState } from "react";
import Cursor from "./components/Cursor/Cursor";
import { useEffect } from "react";

function App() {
  const [variant,setVariant] = useState("default");

  
  useEffect(() => {
    const mouseEnter = () => {
      setVariant("text");
    }
    const mouseLeave = () => {
      setVariant("default");
    }
  

    const texts = document.querySelectorAll('.badaKrdo');
    texts.forEach(text => {
      text.addEventListener('mouseenter',mouseEnter);
      text.addEventListener('mouseleave',mouseLeave);
    })


    return () => {
      texts.forEach(text => {
        text.addEventListener('mouseenter',mouseEnter);
        text.addEventListener('mouseleave',mouseLeave);
      })
    }
  },[])

  return (
    <>
      <Cursor variant={variant} />
      {/* <Hero /> */}
      <About />
      {/* <Parallax /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
