import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { projectsData } from "../data";
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Carousel, Typography } from "@material-tailwind/react";
import { useState } from "react";
import Divider from "./Divider";


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
        <div id="projects" className="z-[30] bg-gradient-to-tr pb-4  from-black/80  to-gray-700  mx-auto md:w-full">
            <h2 className="text-primary-900 font-bold py-4 text-center text-3xl animate-wiggle animate-infinite animate-duration-[3000ms] animate-ease-in-out animate-alternate-reverse animate-fill-backwards">My Work</h2>
            <Divider />
            <div className="transition-all duration-200 delay-100 ease-in-out md:max-w-screen-lg mx-auto py-4 flex flex-col items-center justify-center ">
                <Typography data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" variant="h3" className="text-white text-center">
                    Total <span className="text-3xl text-primary">{projectsData.length}</span> projects
                </Typography>
                <div className="flex flex-col md:flex-row items-center  gap-2 md:gap-8">
                    <Typography data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" variant="h3" className="text-white">
                        Frontend <span className="text-3xl text-primary">{frontendProjects()}</span>
                    </Typography>
                    <Typography data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" variant="h3" className="text-white">
                        FullStack <span className="text-3xl text-primary ">{fulltackProjects()}</span>
                    </Typography>
                </div>

            </div>
            <div className="flex flex-row  items-center justify-center pb-4 gap-2">
                <Typography variant="h4">Sort By : </Typography>
                <select onChange={handleFilter} className="bg-black py-3  outline-none rounded-xl font-normal">
                    <option value="" className="font-normal">Select Category</option>
                    <option value="all" className="font-normal">All</option>
                    <option value="frontend" className="font-normal">Frontend</option>
                    <option value="fullstack" className="font-normal">FullStack</option>
                </select>
            </div>
            <div className="transition duration-300 delay-75 ease-in-out flex flex-col md:flex-row md:flex-wrap  gap-4 md:gap-8 md:max-w-screen-lg mx-auto">
                {
                    cards.map((item, index) => {
                        return (
                            <Card data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine" className="py-4 w-[95%] md:h-[380px] mx-auto  shadow-md shadow-primary bg-gradient-to-bl  from-primary-300 to-red-800 via-transparent md:w-[30%]" key={index}>
                                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                    <p className="text-tiny uppercase font-bold">{item?.title}</p>
                                </CardHeader>
                                <CardBody className="overflow-visible py-2 flex flex-col justify-between">
                                    <Carousel loop={true} autoplay={true} nextArrow={false} prevArrow={false} className="w-full md:w-[270px] mx-auto">{
                                        item?.carousel?.map((item, index) =>
                                            <Image key={index} src={item} />
                                        )
                                    }
                                    </Carousel>
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






