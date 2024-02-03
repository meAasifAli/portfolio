import { serviceData } from "../data"
import { Typography } from '@material-tailwind/react'
import { Card, CardHeader, CardBody, Divider, Image } from "@nextui-org/react";
import ServiceLottie from "../animations/ServiceLottie";
const Services = () => {
    return (
        <div id="services" className="z-[30]   md:max-w-screen-lgbg-blue-900  mt-4 md:mt-0 mx-auto md:w-full">
            <h2 className="text-primary-900 font-bold py-4 text-center text-3xl animate-wiggle animate-infinite animate-duration-[3000ms] animate-ease-in-out animate-alternate-reverse animate-fill-backwards">What can I Do</h2>

            <div className="transition-all duration-200 delay-100 ease-in-out flex py-4 flex-col md:flex-row justify-between items-center gap-3 md:px-4">
                <div>
                    <ServiceLottie />
                </div>
                <div className="my-8 md:my-0 transition duration-300 delay-75 ease-in-out max-w-screen-lg flex flex-col gap-4 py-2 md:justify-center  mx-auto">
                    {
                        serviceData.map((item, index) =>
                            <Card key={index} className=" w-[95%] md:w-full mx-auto bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-20">
                                <CardHeader className="flex gap-3">
                                    <Image
                                        alt="nextui logo"
                                        height={40}
                                        radius="sm"
                                        src={item?.icon}
                                        width={40}
                                    />
                                    <div className="flex flex-col">
                                        <Typography variant="h4" className="text-md">{item?.title}</Typography>

                                    </div>
                                </CardHeader>
                                <Divider />
                                <CardBody>
                                    <Typography variant="paragraph">{item?.desc}</Typography>
                                </CardBody>
                                <Divider />

                            </Card>
                        )
                    }

                </div>
            </div>

        </div>
    )
}
export default Services



