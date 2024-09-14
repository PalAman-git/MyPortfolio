import "./style.css";
import rightArrow from './rightArrow.svg';

const About = () => {

  return (
    <div id="About" className="about select-none relative h-[100vh] overflow-hidden">
      
      {/* for showing the actual content on the page */}
      <div className="about-container px-[20vw] font-roboto w-full h-full flex flex-col">
        <h1 className="badaKrdo about-title font-bold font-bebas mt-20 mb-5">ABOUT ME</h1>
        <div className="about-content font-medium -mt-6">
        I'm a creative frontend developer and software engineer. With a passion for turning ideas into captivating digital experiences, I specialize in crafting seamless and responsive websites.My coding practice revolves around creative solutions, adding that extra touch of magic to user interfaces. I thrive on challenges in software engineering, constantly staying updated on the latest technologies.Let's connect and create something amazing together!
        </div>
        <div className="about-buttons-container tracking-widest relative font-bebas font-bold mt-[5rem] flex items-center gap-5">
          <a href="https://drive.google.com/file/d/1KY5nj8dIyl_GdrnMgc7sMBytYr4PKOfQ/view?usp=sharing" className="resume about-button" target="_blank">Resume</a>
          <img src={rightArrow} className="badaKrdo rightArrow absolute w-[25vw] right-[15vw]"/>
        </div>
      </div>
    </div>
  );
};
export default About;
