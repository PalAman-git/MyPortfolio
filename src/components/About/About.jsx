import "./style.css";
import leftArrow from './leftArroow.svg';
import rightArrow from './rightArrow.svg';

const About = () => {

  return (
    <div id="About" className="about select-none relative h-[100vh] overflow-hidden">
      
      {/* for showing the actual content on the page */}
      <div className="about-container px-[20vw] font-roboto w-full h-full flex flex-col">
        <h1 className="badaKrdo about-title font-bold font-bebas mt-20 mb-5">ABOUT ME</h1>
        <div className="about-content font-medium -mt-6">
        I'm Aman, a creative frontend developer and software engineer. With a passion for turning ideas into captivating digital experiences, I specialize in crafting seamless and responsive websites.My coding practice revolves around creative solutions, adding that extra touch of magic to user interfaces. I thrive on challenges in software engineering, constantly staying updated on the latest technologies.Let's connect and create something amazing together!
        </div>
        <div className="about-buttons-container tracking-widest relative font-bebas font-bold mt-[5rem] flex items-center gap-5">
          <a href="#" className="cv about-button">CV</a>
          <a href="#" className="resume about-button">Resume</a>
          <img src={leftArrow} className="badaKrdo leftArrow absolute w-[10vw] -left-[13vw] -top-4"/>
          <img src={rightArrow} className="badaKrdo rightArrow absolute w-[25vw] right-[5vw]"/>
        </div>
      </div>
    </div>
  );
};
export default About;
