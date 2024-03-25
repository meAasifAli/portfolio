
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
} from "@material-tailwind/react";
import { expData } from "../data"
import Divider from "../components/Divider";


const Experience = () => {
    const eduData = [
        {
            id: 1,
            label: "10th (2016)",
            content: " I have Accomplished 10th Std. Education in Govt. Higher Secondary School Khanda Budgam J&K in Year 2016 with Percentage of marks : 84% in JkBose State Board"
        },
        {
            id: 2,
            label: "12th (2018)",
            content: "I have Accomplished 12th/plus Two Std. Education in Govt. Higher Secondary School Khanda Budgam J&K in Year 2018 with Percentage of marks : 75% in JkBose State Board"
        },
        {
            id: 3,
            label: "B.Tech in CSE (JUl 19- AUG 23)",
            content: "I have Accomplished my Graduation  in Apj Abdul kalam Technologoical University(Kerala Technological University) in Year 2023 under the Specialization of CSE with Cgpa score : 7.16."
        }
    ];
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
                <div className="flex flex-col gap-4 px-2 sm:px-0">
                    <h2 className="text-xl font-bold text-center">My Education</h2>
                    <Timeline className="sm:w-2/3  w-full mx-auto">
                        {
                            eduData.map((item, id) => {
                                return <TimelineItem
                                    key={id}>
                                    <TimelineConnector />
                                    <TimelineHeader className="h-3 py-2">
                                        <TimelineIcon color="blue" />
                                        <h3>
                                            {item?.label}
                                        </h3>
                                    </TimelineHeader>
                                    <TimelineBody className="pb-8">
                                        <p className="text-sm text-gray-400">
                                            {item?.content}
                                        </p>
                                    </TimelineBody>
                                </TimelineItem>
                            })
                        }
                    </Timeline>
                </div>
                <div className="space-y-8">
                    <h2
                        data-aos-anchor-placement="top-center" className="text-xl font-bold text-center">My Skills</h2>
                    <div className="flex flex-row flex-wrap items-start justify-center gap-4">
                        {
                            expData.map((item, id) => {
                                return <div key={id} className="relative rounded-full shadow-md shadow-blue-600 p-1 sm:p-4 hover:scale-105 hover:transition-all duration-300 delay-75 ease-in-out hover:rotate-6 ">
                                    <img src={item?.src} alt="err" className="sm:h-48 sm:w-48 h-24 w-24 object-contain" />
                                    <p className="absolute -top-2 left-4 sm:left-16 bg-blue-500 px-4 py-2 rounded-lg">{item?.progressVal} %</p>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Experience