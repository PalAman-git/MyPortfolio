import {
  Hero,
  About,
  Contact,
  Projects,
  Skills,
  TechStack,
} from "./components";
import { Toaster } from "react-hot-toast";

function App() {
  return (
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
