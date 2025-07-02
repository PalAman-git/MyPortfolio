import "./style.css";
import Environment from "../Environment/Environment";
import Overlay from "../Overlay/Overlay";
import MobileOverlay from "../Overlay/MobileOverlay";
import { useIsMobile } from "../../hooks/useIsMobile";

const Hero = () => {
  const isMobile = useIsMobile();
  return (
    <div id="hero" className="relative w-full min-h-screen  ">
      {isMobile ? <MobileOverlay /> :<Overlay />}
      {!isMobile && <Environment />}
    </div>
  );
};
export default Hero;
