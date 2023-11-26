import pic from '../assets/mypic.png'
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

const About = () => {
    let tabs = [
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
            content: "I have Accomplished my Graduation  in Apj Abdul kalam Technologoical University(Kerala Technological University) in Year 2023 under the Specialization of CSE with Percentage of marks : 68%."
        }
    ];
    return (
        <div id="about" className="h-screen bg-gradient-to-b  from-black/80 to-blue-900  mt-4 md:mt-0 w-full mx-auto md:w-full">
            <h2 className="text-primary-900 font-bold py-4 text-center text-3xl animate-wiggle animate-infinite animate-duration-[3000ms] animate-ease-in-out animate-alternate-reverse animate-fill-backwards">About Me</h2>
            <div className="flex flex-col md:flex-row  md:justify-between items-center h-[110vh] md:h-screen gap:4 md:gap-16 md:max-w-screen-lg mx-auto">
                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" className='w-[90%] md:w-[50%]'>
                    <img src={pic} alt="error" className='rounded-full h-full w-full bg-primary' />
                </div>
                <div className='md:w-[50%]'>
                    <p data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" className='text-start px-2 text-md text-white/80 md:text-2xl '>
                        I am a Fullstack developer,Currently I am
                        pursuing virtual internships for Fullstack Development,
                        I am B.Tech Graduate in CSE specialization.
                    </p>
                    <div className="flex w-full flex-col p-2 justify-center items-center">
                        <Tabs aria-label="Dynamic tabs" data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" items={tabs} color='primary'>
                            {(item) => (
                                <Tab key={item.id} title={item.label}>
                                    <Card data-aos="fade-right"
                                        data-aos-offset="300"
                                        data-aos-easing="ease-in-sine">
                                        <CardBody data-aos="fade-right"
                                            data-aos-offset="300"
                                            data-aos-easing="ease-in-sine">
                                            {item.content}
                                        </CardBody>
                                    </Card>
                                </Tab>
                            )}
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About