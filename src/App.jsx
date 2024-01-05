import "./App.css";
import { Hero, About, Parallax,Footer,Cursor,Projects, Skills } from "./components";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [variant,setVariant] = useState("default");

  
  useEffect(() => {
    //cursor bda krne ke liye
    const mouseEnter = () => {
      setVariant("text");
    }
    const mouseLeave = () => {
      setVariant("default");
    }

    //selecting all the elements jha pr cursor bda krna hai  
    const texts = document.querySelectorAll('.badaKrdo');
    texts.forEach(text => {
      text.addEventListener('mouseenter',mouseEnter);
      text.addEventListener('mouseleave',mouseLeave);
    })

    return () => {
      texts.forEach(text => {
        text.removeEventListener('mouseenter',mouseEnter);
        text.removeEventListener('mouseleave',mouseLeave);
      })

    }
  },[])

  return (
    <div className="app-container">
      <Cursor variant={variant} />
      <Hero />
      <About />
      {/* <Parallax /> */}  
      <Projects />
      {/* <div className="w-full relative z-3 h-[100vh] bg-[#eab539]"></div> */}
      <Skills />
      <div className="w-full relative z-3 h-[100vh] bg-[#eab539]"></div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
