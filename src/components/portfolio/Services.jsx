import { useState } from "react"
import { projectsData } from "./Data"
import { projectsNav } from "./Data"
import ServicesItems from "./ServicesItems"
import { useEffect } from "react"

const Services = () => {
    {/*services animations*/}
    const [item, setItem] = useState({name: "all"});
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if(item.name === "All") {
            setProjects(projectsData)
        }else{
            const newProjects = projectsData.filter((project) => {
                return project.category === item.name;
            });

            setProjects(newProjects)
        }
    }, [item]);

    const handleCLick = (e, index) => {
        setItem({name: e.target.textContent})
        setActive(index)
    };

  return (
    <div>
        <div className="work-filters">
            {projectsNav.map((item, index) => {
                return (
                <span onClick={(e) => {
                    handleCLick(e, index)
                }} className={`${active === index ? `active-work` : ""} work-item`} key={index}>
                    {item.name}
                </span>
                );
        })}
        </div>

        <div className="work-container container grid">
            {projects.map((item) => {
                return <ServicesItems item={item} key={item.id}/>
            })}        
        </div>
    </div>
  )
}

export default Services