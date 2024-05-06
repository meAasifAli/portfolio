

import { expData } from "../data"
import Divider from "../components/Divider";
import Education from "../components/Education";
import WorkExp from "../components/WorkExp";
import Skills from "../components/Skills";



const Experience = () => {

    return (
        <div id="experience" className="z-[30]  py-4 mt-4 md:mt-0  mx-auto md:w-full space-y-8 sm:space-y-24">
            <div className='flex justify-center items-center gap-2'>

                <Divider />
                <div>
                    <h2 className="text-primary-900  py-4 text-center text-3xl sm:text-4xl font-bold">Experience</h2>
                </div>
                <Divider />
            </div>
            <div className="grid grid-cols-1  sm:w-[80%] mx-auto gap-8 sm:gap-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex  flex-col gap-4 px-2 sm:px-0">
                        <h2 className="text-xl font-bold text-center">My Education</h2>
                        <Education />
                    </div>
                    <div className="flex  flex-col gap-4 px-2 sm:px-0">
                        <h2 className="text-xl font-bold text-center">Work Experience</h2>
                        <WorkExp />
                    </div>
                </div>
                <div className="space-y-8">
                    <h2
                        className="text-xl font-bold text-center">My Skills</h2>
                    <Skills expData={expData} />
                </div>
            </div>

        </div>
    )
}
export default Experience