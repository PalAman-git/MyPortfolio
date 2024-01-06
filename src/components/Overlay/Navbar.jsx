import "./style.css";
import Eye from './Eye'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="navbar font-bebas tracking-widest top-4">
      <Eye />
        <ul>
            <li className="menu-items"><ScrollLink to="About" smooth={true} duration={1000}>// About   </ScrollLink></li>
            <li className="menu-items"><ScrollLink to="Projects" smooth={true} duration={1500}>// Projects</ScrollLink></li>
            <li className="menu-items"><ScrollLink to="Contact" smooth={true} duration={2000}>// Contact </ScrollLink></li>
        </ul>
    </div>
  );
};
export default Navbar;
