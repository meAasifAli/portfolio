
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
} from "@material-tailwind/react";

const WorkExp = () => {
    const workExpData = [
        {
            id: 1,
            title: "Full Stack Developer Intern (Bharat Intern)",
            duration: "1 Month",
            work: "Remote",
            description: "Worked as a Full stack Developer Intern, building  web applications such  as CMS and PMS using React.js, Node.js,Firebase and MongoDB. I also implemented various features and bug fixes, ensuring a smooth user experience."
        },
        {
            id: 2,
            title: "Front Developer Team Lead (Aharbal)",
            duration: "2 Months (present)",
            work: "Remote",
            description: "Working as a Frontend Developer Intern, My work is to build an admin panel for SabeelConnect Project using React and Typescript. I have implemented various features and bug fixes, Learned new containerization technology such as docker to make the applications production ready"
        },
    ]
    return (
        <Timeline className=" w-full mx-auto">
            {
                workExpData.map((item, id) => {
                    return <TimelineItem
                        key={id}>
                        <TimelineConnector />
                        <TimelineHeader className="h-3 py-2">
                            <TimelineIcon color="cyan" />
                            <h3>
                                {item?.title}
                            </h3>
                        </TimelineHeader>
                        <TimelineBody className="pb-8 ">
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-row items-center justify-between">
                                    <p>Duration : {item?.duration}</p>
                                    <p>Work: {item?.work}</p>
                                </div>
                                <p className="text-sm text-gray-400">
                                    {item?.description}
                                </p>
                            </div>

                        </TimelineBody>
                    </TimelineItem>
                })
            }
        </Timeline>
    )
}
export default WorkExp