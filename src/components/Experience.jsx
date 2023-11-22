import { Typography, Progress } from "@material-tailwind/react";
import { expData } from '../data'
import CountUp from 'react-countup';
import pic from '../assets/exp3.jpeg'

const Experience = () => {
    return (
        <div id="experience" className="h-screen md:max-w-screen-lg mt-4 md:mt-0 w-[95%] mx-auto md:w-full">
            <h2 className="text-primary-900 font-bold py-4 text-center text-3xl animate-wiggle animate-infinite animate-duration-[3000ms] animate-ease-in-out animate-alternate-reverse animate-fill-backwards">Experience</h2>
            <div className=" md:flex md:flex-row md:gap-6 md:items-center" data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <img src={pic} alt="error" className="hidden md:block md:w-[500px] md:h-[530px] rounded-md" />
                <div className="w-full flex flex-col gap-4 justify-center h-screen">
                    {
                        expData.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className="mb-1 flex items-center justify-between gap-4 ">
                                        <Typography color="white" variant="h6" data-aos="fade-right"
                                            data-aos-offset="300"
                                            data-aos-easing="ease-in-sine">
                                            {item?.title}
                                        </Typography>
                                        <Typography color="white" variant="h6" data-aos="fade-right"
                                            data-aos-offset="300"
                                            data-aos-easing="ease-in-sine">
                                            <CountUp start={0} end={item?.progressVal} delay={0} />
                                        </Typography>
                                    </div>
                                    <Progress data-aos="fade-right"
                                        data-aos-offset="300"
                                        data-aos-easing="ease-in-sine" color="gray" value={item?.progressVal} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}
export default Experience