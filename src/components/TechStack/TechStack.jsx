import "./index.css"
import { techData } from "./techData"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const TechStack = () => {
    const techStack = useRef(null)
    const tl = useRef(null)

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)

        const techs = techStack.current.querySelectorAll(".tech")

        if (!techs.length) {
            console.warn("No tech elements found")
            return
        }

        tl.current = gsap.timeline({
            scrollTrigger: {
                trigger: techStack.current,
                start: "50% 40%",
                // markers: true,
            }
        })

        tl.current.from(techs, {
            opacity: 0,
            scale: 0.5,
            duration: 0.3,
            stagger: 0.1,
        })

        return () => {
            tl.current?.scrollTrigger?.kill()
            tl.current?.kill()
        }

    }, { scope: techStack })

    return (
        <div ref={techStack} className="techStack">
            {techData.map((tech, index) => (
                <div className="tech" key={index}>
                    <img className="tech-img" src={tech.icon} alt="" />
                    <h3 className="tech-title font-medium">{tech.name}</h3>
                </div>
            ))}
        </div>
    )
}

export default TechStack
