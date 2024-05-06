import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { projectsData } from "../data";
import { Typography } from "@material-tailwind/react";
import { useState } from "react";
import Divider from "../components/Divider";

const Projects = () => {
    const [cards, setCards] = useState(projectsData);
    const [activeColorText, setActiveColorText] = useState("all")

    const handleFilter = (val) => {
        if (val === "all") {
            setCards(projectsData);
            setActiveColorText("all")
        } else {
            const filteredCards = projectsData.filter((card) => card.category === val);
            setCards(filteredCards);
            setActiveColorText(val)
        }
    };


    return (
        <div id="projects" className="z-[30] pb-4   mx-auto space-y-4 sm:space-y-8">
            <div className='flex justify-center items-center gap-2'>
                <Divider />
                <div>
                    <h2 className="text-primary-900  py-4 text-center text-3xl sm:text-4xl font-bold">Portfolio</h2>
                </div>
                <Divider />
            </div>

            <div className="flex flex-row  items-center justify-center pb-4 gap-6">
                <button onClick={() => handleFilter("all")} className={`${activeColorText === "all" ? "bg-gray-800" : ""} border-2 border-gray-800 rounded-full p-3  hover:bg-white hover:text-black hover:border-white  transition-all delay-150 duration-400 ease-in-out`}>
                    All
                </button>
                <button onClick={() => handleFilter("frontend")} className={`${activeColorText === "frontend" ? "bg-gray-800" : ""} border-2 border-gray-800 rounded-full p-3  hover:bg-white hover:text-black hover:border-white  transition-all delay-150 duration-400 ease-in-out`}>
                    Frontend
                </button>
                <button onClick={() => handleFilter("fullstack")} className={`${activeColorText === "fullstack" ? "bg-gray-800" : ""} border-2 border-gray-800 rounded-full p-3  hover:bg-white hover:text-black hover:border-white  transition-all delay-150 duration-400 ease-in-out`}>
                    Full Stack
                </button>
            </div>
            <div className="transition duration-300 delay-75 ease-in-out flex flex-col md:flex-row md:flex-wrap  gap-4 md:gap-8 sm:max-w-screen-xl mx-auto">
                {
                    cards.map((item, index) => {
                        return (
                            <Card className="py-6 w-[90%] sm:h-[350px] mx-auto  shadow-md  bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-20 via-transparent sm:w-[25%]" key={index}>
                                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                    <p className="text-tiny uppercase font-bold">{item?.title}</p>
                                </CardHeader>
                                <CardBody className="overflow-visible py-4 flex flex-col justify-between">
                                    <Image src={item?.thumbnail} />
                                    <Typography variant="paragraph" className="py-2 text-xs" >{item?.content?.slice(0, 100)}..</Typography>
                                    <button className="w-full py-4">
                                        <a href={item?.GitURl} className=' bg-clip-padding backdrop-filter backdrop-blur-2xl shadow-lg bg-opacity-30 bg-gray-500 p-3 w-full rounded-lg'>
                                            know more
                                        </a>
                                    </button>
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






