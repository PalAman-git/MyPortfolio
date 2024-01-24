import "./App.css";
import { Hero, About,Contact,Cursor,Projects, Skills,TechStack } from "./components";
import { useState,useEffect,useRef } from "react";

function App() {
  const [variant,setVariant] = useState("default");

  //for the navigation of the pages
  const home = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const skills = useRef(null);
  
  
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
      
      <Hero/>
      <About/>
      {/* <Parallax /> */}  
      <Projects/>
      <Skills/>
      {/* <div className="w-full relative z-3 h-[100vh] bg-[#000000]"></div> */}
      <TechStack/>
      {/* <div className="w-full relative z-3 h-[100vh] bg-[#000000]"></div> */}
      <Contact />
    </div>
  );
}

export default App;
