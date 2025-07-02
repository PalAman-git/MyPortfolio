import {
  Hero,
  About,
  Contact,
  Projects,
  Skills,
  TechStack,
} from "./components";
import { useState, useEffect, useRef } from "react";
import Loader from "./Loader";
import { Toaster } from "react-hot-toast";

function App() {
  const [variant, setVariant] = useState("default");
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    //selecting all the elements jha pr cursor bda krna hai
    const texts = document.querySelectorAll(".badaKrdo");
    texts.forEach((text) => {
      text.addEventListener("mouseenter", mouseEnter);
      text.addEventListener("mouseleave", mouseLeave);
    });

    return () => {
      texts.forEach((text) => {
        text.removeEventListener("mouseenter", mouseEnter);
        text.removeEventListener("mouseleave", mouseLeave);
      });
    };
  }, []);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className="app-container">
      <div>
        <Toaster
          position="top-center"
          toastOptions={{
            success: {
              theme: {
                primary: "#4aed88",
              },
            },
          }}
        ></Toaster>
      </div>
      <Hero />
      <About />
      <Projects />
      <Skills />
      {/* <div className="w-full relative z-3 h-[100vh] bg-[#000000]"></div> */}
      <TechStack />
      {/* <div className="w-full relative z-3 h-[100vh] bg-[#000000]"></div> */}
      <Contact />
    </div>
  );
}

export default App;
