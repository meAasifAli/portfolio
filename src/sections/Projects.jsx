import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { projectsData } from "../data";
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Typography } from "@material-tailwind/react";
import { useState } from "react";
import Divider from "../components/Divider";

const Projects = () => {
    const [cards, setCards] = useState(projectsData);
    const handleFilter = (ev) => {
        if (ev.target.value === "all") {
            setCards(projectsData);
        } else {
            const filteredCards = projectsData.filter((card) => card.category === ev.target.value);
            setCards(filteredCards);
        }
    };
    const frontendProjects = () => {
        const projects = projectsData.filter((project) => project.category === "frontend")
        return projects.length;
    }
    const fulltackProjects = () => {
        const projects = projectsData.filter((project) => project.category === "fullstack")
        return projects.length;
    }

    return (
        <div id="projects" className="z-[30] pb-4   mx-auto space-y-4 sm:space-y-8">
            <div className='flex justify-center items-center gap-2'>

                <Divider />
                <div>
                    <h2 className="text-primary-900  py-4 text-center text-3xl sm:text-4xl font-bold">Portfolio</h2>
                </div>
                <Divider />
            </div>
            <div className="transition-all duration-200 delay-100 ease-in-out  py-4 flex flex-col items-center justify-center ">
                <Typography variant="h3" className="text-white text-center">
                    Total <span className="text-3xl text-primary">{projectsData.length}</span> projects
                </Typography>
                <div className="flex flex-col md:flex-row items-center  gap-2 md:gap-8">
                    <Typography variant="h3" className="text-white">
                        Frontend <span className="text-3xl text-primary">{frontendProjects()}</span>
                    </Typography>
                    <Typography variant="h3" className="text-white">
                        FullStack <span className="text-3xl text-primary ">{fulltackProjects()}</span>
                    </Typography>
                </div>

            </div>
            <div className="flex flex-row  items-center justify-center pb-4 gap-2">
                <label htmlFor="select" className="font-bold">Select a Category</label>
                <select id="select" onChange={handleFilter} className="bg-blue-700 px-3 py-3  outline-none rounded-xl font-normal">
                    <option value="all" className="font-normal p-2">All</option>
                    <option value="frontend" className="font-normal p-2">Frontend</option>
                    <option value="fullstack" className="font-normal p-2">FullStack</option>
                </select>
            </div>
            <div className="transition duration-300 delay-75 ease-in-out flex flex-col md:flex-row md:flex-wrap  gap-4 md:gap-8 sm:max-w-screen-xl mx-auto">
                {
                    cards.map((item, index) => {
                        return (
                            <Card className="py-4 w-[95%] md:h-[380px] mx-auto  shadow-md shadow-primary bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-20 via-transparent sm:w-[30%]" key={index}>
                                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                    <p className="text-tiny uppercase font-bold">{item?.title}</p>
                                </CardHeader>
                                <CardBody className="overflow-visible py-2 flex flex-col justify-between">

                                    <Image src={item?.carousel[0]} />

                                    <Typography variant="paragraph" className="py-2 text-xs" >{item?.content}</Typography>
                                    <div className='flex flex-row items-center justify-center gap-10 mt-2'>
                                        <a href={item?.DeployURL} className='bg-primary p-3 rounded-full  '><LanguageIcon /></a>
                                        <a href={item?.GitURl} className='bg-primary p-3 rounded-full '><GitHubIcon /></a>
                                    </div>
                                </CardBody>
                            </Card>
                        )
                    })
                }

            </div>
        </div>
    )
}
export default Projects;






