import "./index.css"
import { techData } from "./techData"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const TechStack = () => {
    const techStack = useRef(null)
    const tl = useRef(null);
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)

        const techs = document.querySelectorAll(".tech");
        tl.current = gsap.timeline({scrollTrigger:{
            trigger:techStack.current,
            // markers:true,
            start:"50% 40%",
            // toggleActions:"restart none none none"
        }})

        tl.current
            .from(techs,{opacity:0,scaleX:2,scaleY:2,duration:0.2,stagger:0.1})

        
    },{scope:techStack})
    
  return (
    <div ref={techStack} className="techStack">
        {
            techData.map((tech,index) => {
                return (
                    <div className="tech" key={index}>
                        <img className="tech-img" src={tech.icon} alt="" />
                        <h3 className="tech-title font-medium">{tech.name}</h3>
                    </div>
                )
            })
        }
    </div>
  )
}
export default TechStack