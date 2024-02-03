
import { expData } from '../data'
import Divider from "./Divider";
import SKillLottie from "../animations/SkillLottie";
import { CircularProgress } from "@nextui-org/react";
const Experience = () => {
    return (
        <div id="experience" className="z-[30]   mt-4 md:mt-0  mx-auto md:w-full">
            <h2 className="text-primary-900 font-bold py-4 text-center text-3xl animate-wiggle animate-infinite animate-duration-[3000ms] animate-ease-in-out animate-alternate-reverse animate-fill-backwards">Experience</h2>
            <div className="md:max-w-screen-lg mx-auto transition-all duration-200 delay-100 ease-in-out flex flex-col gap-0 md:flex-row md:gap-6 md:items-center" data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <SKillLottie />
                <div className="my-8 md:my-0 w-full flex flex-row flex-wrap gap-4 justify-center  px-2">
                    {
                        expData.map((item, index) => {
                            return (
                                <div key={index} className=' flex flex-col gap-2 items-center justify-center shadow-xl p-4 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-20 mt-4 cursor-pointer rounded-xl hover:scale-110 transition-all duration-200 delay-100 ease-in-out group'>
                                    <CircularProgress
                                        size="lg"
                                        value={item?.progressVal}
                                        color={index % 2 === 0 ? "primary" : "success"}
                                        showValueLabel={true}
                                        aria-label='jksdnfdj'
                                        className='group-hover:rotate-180 group-hover:hue-rotate-180 transition-all duration-200 delay-100 ease-in-out'
                                    />
                                    <p>{item?.title?.slice(0, 5)}..</p>
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