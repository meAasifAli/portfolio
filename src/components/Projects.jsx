import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { projectsData } from "../data";
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Carousel, Typography } from "@material-tailwind/react";
import { useState } from "react";
import Divider from "./Divider";
import { Button } from '@material-tailwind/react'

const Projects = () => {

    const [cards, setCards] = useState(projectsData);
    const [selectedCategory, setSelectedCategory] = useState("")

    const handleFilter = (category) => {
        if (category === "all") {
            setCards(projectsData);
        } else {
            const filteredCards = projectsData.filter((card) => card.category === category);
            setCards(filteredCards);
        }
        setSelectedCategory(category)
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
                    Total <span className="text-3xl text-pink-700">{projectsData.length}</span> projects
                </Typography>
                <div className="flex flex-col md:flex-row items-center  gap-2 md:gap-8">
                    <Typography data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" variant="h3" className="text-white">
                        Frontend <span className="text-3xl text-pink-700">{frontendProjects()}</span>
                    </Typography>
                    <Typography data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" variant="h3" className="text-white">
                        FullStack <span className="text-3xl text-pink-700 ">{fulltackProjects()}</span>
                    </Typography>
                </div>

            </div>
            <div className="py-3 md:py-5 flex flex-row gap-2 items-center justify-center md:gap-4 ">
                <Button onClick={() => handleFilter('all')} className={selectedCategory === 'all' ? 'active' : ''}>
                    All
                </Button>
                <Button onClick={() => handleFilter('frontend')} className={selectedCategory === 'frontend' ? 'active' : ''}>
                    Frontend
                </Button>
                <Button onClick={() => handleFilter('fullstack')} className={selectedCategory === 'fullstack' ? 'active' : ''}>
                    Fullstack
                </Button>

            </div>

            <div className="transition duration-300 delay-75 ease-in-out flex flex-col md:flex-row md:flex-wrap  gap-4 md:gap-8 md:max-w-screen-lg mx-auto">
                {
                    cards.map((item, index) => {
                        return (
                            <Card data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine" className="py-4 w-[95%] mx-auto  shadow-md shadow-primary bg-gradient-to-bl  from-primary-300 to-red-800 via-transparent md:w-[30%]" key={index}>
                                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                    <p className="text-tiny uppercase font-bold">{item?.title}</p>
                                </CardHeader>
                                <CardBody className="overflow-visible py-2 flex flex-col justify-between">
                                    <Carousel loop={true} autoplay={true} nextArrow={false} prevArrow={false} transition={{ duration: 2 }} className="w-full md:w-[270px] mx-auto">{
                                        item?.carousel?.map((item, index) =>
                                            <Image key={index} src={item} />
                                        )
                                    }
                                    </Carousel>
                                    <Typography variant="paragraph" className="py-2" >{item?.content}</Typography>
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






