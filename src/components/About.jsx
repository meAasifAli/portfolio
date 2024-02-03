import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Divider from './Divider';
import AboutLottie from '../animations/AboutLottie';
import { Typography } from "@material-tailwind/react";
const About = () => {
    const aboutData = [
        {
            id: 1,
            label: "10th",
            content: "I have Accomplished 10th Std. Education in Govt. Higher Secondary School Khanda Budgam J&K in Year 2016 with Percentage of marks : 84% in JkBose State Board"
        },
        {
            id: 2,
            label: "12th",
            content: "I have Accomplished 12th/plus Two Std. Education in Govt. Higher Secondary School Khanda Budgam J&K in Year 2018 with Percentage of marks : 75% in JkBose State Board"
        },
        {
            id: 3,
            label: "B.Tech",
            content: "I have Accomplished my Graduation  in Apj Abdul kalam Technologoical University(Kerala Technological University) in Year 2023 under the Specialization of CSE with Cgpa score : 7.16."
        }
    ];
    return (
        <div id="about" className="z-[30]    mt-4 md:mt-0 w-full mx-auto md:w-full">
            <h2 className="text-primary-900 font-bold py-4 text-center text-3xl animate-wiggle animate-infinite animate-duration-[3000ms] animate-ease-in-out animate-alternate-reverse animate-fill-backwards">About Me</h2>
            <div className="flex flex-col justify-center gap-4 py-4 transition-all duration-200 delay-100 ease-in-out">
                <div>
                    <Typography variant="paragraph" className=" px-2 text-start md:text-center md:w-[70%] mx-auto text-xl">
                        Entry Level Full Stack Developer with a strong foundation in developing end-to-end web applications.
                        Known for quick learning and adaptability, demonstrated by mastering new programming languages within weeks.
                    </Typography>
                </div>
                <div className="transition duration-300 delay-75 ease-in-out flex flex-col md:flex-row   md:justify-between items-center gap:2  md:max-w-screen-lg mx-auto">
                    <div className="md:w-[50%]">
                        <AboutLottie />
                    </div>
                    <div className='flex flex-col items-center md:w-[50%]'>
                        <h2 className="text-primary-900 font-bold py-4 text-center text-3xl animate-wiggle animate-infinite animate-duration-[3000ms] animate-ease-in-out animate-alternate-reverse animate-fill-backwards">Career</h2>
                        <div className="flex flex-col gap-2 mb-4">
                            {
                                aboutData.map((item, index) =>
                                    <Card key={index} className="px-2 w-[95%] md:w-full mx-auto bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-20">
                                        <CardHeader>
                                            <Typography variant="h5" >{item?.label}</Typography>
                                        </CardHeader>
                                        <Divider />
                                        <CardBody>
                                            <Typography variant="paragraph">
                                                {item?.content}
                                            </Typography>
                                        </CardBody>
                                    </Card>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default About