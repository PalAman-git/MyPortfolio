import "./index.css"
import { useEffect } from "react"
import { techData } from "./techData"

const TechStack = () => {
    useEffect(() => {
      
    },[])
  return (
    <div className="techStack">
        {
            techData.map((tech,index) => {
                return (
                    <div className="tech" key={index}>
                        <img className="tech-img" src={tech.icon} alt="" />
                        <h3 className="tech-title">{tech.name}</h3>
                    </div>
                )
            })
        }
    </div>
  )
}
export default TechStack