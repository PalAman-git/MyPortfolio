import {
  Hero,
  About,
  Contact,
  Projects,
  Skills,
  TechStack,
  MobileProjects,
  MobileSkills,
  MobileTechStack,
} from "./components";
import { Toaster } from "react-hot-toast";
import { useIsMobile } from "./hooks/useIsMobile";

function App() {
  const isMobile = useIsMobile();
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
      {isMobile ? <MobileProjects /> : <Projects />}
      {isMobile ? <MobileSkills /> : <Skills />}
      {/* <div className="w-full relative z-3 h-[100vh] bg-[#000000]"></div> */}
      {isMobile ? <MobileTechStack /> : <TechStack />}
      {/* <div className="w-full relative z-3 h-[100vh] bg-[#000000]"></div> */}
      <Contact />
    </div>
  );
}

export default App;
