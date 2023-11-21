import { Typography, Timeline, TimelineHeader, TimelineItem, TimelineConnector, TimelineIcon, TimelineBody } from "@material-tailwind/react"
import { serviceData } from "../data"
const Services = () => {
    return (
        <div id="services" className="h-[150vh] md:h-[110vh] bg-blue-900 md:max-w-screen-lgbg-blue-900  mt-4 md:mt-0 w-[95%] mx-auto md:w-full">
            <h2 className="text-primary-900 font-bold py-4 text-center text-3xl animate-wiggle animate-infinite animate-duration-[3000ms] animate-ease-in-out animate-alternate-reverse animate-fill-backwards">What can I Do</h2>
            <Timeline className='my-8 w-[90%] md:w-[65%] mx-auto'>
                {
                    serviceData.map((item, index) => {
                        return (
                            <TimelineItem key={index}>
                                <TimelineHeader>
                                    <TimelineConnector data-aos="fade-right"
                                        data-aos-offset="300"
                                        data-aos-easing="ease-in-sine" />
                                    <TimelineIcon data-aos="fade-right"
                                        data-aos-offset="300"
                                        data-aos-easing="ease-in-sine" className="p-0 animate-rotate-y animate-infinite animate-duration-[6000ms] animate-ease-out">
                                        <img src={item?.icon} className='h-14 w-14 object-contain  md:h-16 md:w-16 rounded-full' alt='error' />
                                    </TimelineIcon>
                                    <Typography data-aos="fade-right"
                                        data-aos-offset="300"
                                        data-aos-easing="ease-in-sine" variant="h5" className='text-white text-center' >
                                        {item?.title}
                                    </Typography>
                                </TimelineHeader>
                                <TimelineBody className="py-8">
                                    <Typography data-aos="fade-right"
                                        data-aos-offset="300"
                                        data-aos-easing="ease-in-sine" color="gray" className="font-normal md:text-xl text-white/60 full  transition duration-200 ease-in-out animate-pulse animate-infinite animate-duration-[6000ms] animate-ease-out">
                                        {item?.desc}
                                    </Typography>
                                </TimelineBody>
                            </TimelineItem>
                        )
                    })
                }
            </Timeline>
        </div>
    )
}
export default Services