import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { projectsData } from "../data";
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';

import { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
const Projects = () => {

    const [cards, setCards] = useState(projectsData);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const handleFilter = (category) => {
        if (category === 'all') {
            setCards(projectsData);
        } else {
            const filteredCards = projectsData.filter((card) => card.category === category);
            setCards(filteredCards);
        }
        setSelectedCategory(category);
    };

    return (
        <div id="projects" className=" md:max-w-screen-lg   mt-4 md:mt-0 w-[95%] mx-auto md:w-full">
            <h2 className="text-primary-900 font-bold py-4 text-center text-3xl animate-wiggle animate-infinite animate-duration-[3000ms] animate-ease-in-out animate-alternate-reverse animate-fill-backwards">My Work</h2>
            <div className="py-3 md:py-5 flex flex-row gap-2 items-center justify-center md:gap-4">
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
            <div className="flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-8 md:max-w-screen-lg mx-auto">
                {
                    cards.map((item, index) => {
                        return (
                            <Card data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine" className="py-4 shadow-md shadow-primary" key={index}>
                                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                    <p className="text-tiny uppercase font-bold">{item?.title}</p>
                                </CardHeader>
                                <CardBody className="overflow-visible py-2 flex flex-col justify-between">
                                    <Image
                                        alt="Card background"
                                        className="object-cover rounded-xl"
                                        src={item?.imgURl}
                                        width={270}
                                    />
                                    <Button onPress={onOpen} className="mt-2 mb-2 bg-primary">Know More</Button>
                                    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                                        <ModalContent>
                                            {(onClose) => (
                                                <>
                                                    <ModalHeader className="flex flex-col gap-1">{item?.title}</ModalHeader>
                                                    <ModalBody>
                                                        <p>
                                                            {item?.content}
                                                        </p>

                                                    </ModalBody>
                                                    <ModalFooter>
                                                        <Button color="danger" variant="light" onPress={onClose}>
                                                            Close
                                                        </Button>
                                                        <Button color="primary" onPress={onClose}>
                                                            Action
                                                        </Button>
                                                    </ModalFooter>
                                                </>
                                            )}
                                        </ModalContent>
                                    </Modal>
                                    <div className='flex flex-row items-center justify-center gap-10 mt-2'>
                                        <a href={item?.DeployURL} className='bg-primary p-2 rounded-full animate-rotate-y animate-infinite animate-duration-[6000ms] animate-ease-out'><LanguageIcon /></a>
                                        <a href={item?.GitURl} className='bg-primary p-2 rounded-full animate-rotate-y animate-infinite animate-duration-[6000ms] animate-ease-out'><GitHubIcon /></a>
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






