import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
} from "@material-tailwind/react";

const Education = () => {
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
        <Timeline className=" w-full mx-auto">
            {
                eduData.map((item, id) => {
                    return <TimelineItem
                        key={id}>
                        <TimelineConnector />
                        <TimelineHeader className="h-3 py-2">
                            <TimelineIcon color="cyan" />
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
    )
}
export default Education