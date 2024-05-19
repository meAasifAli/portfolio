
import { Image } from "@nextui-org/react";

const Education = () => {
    const eduData = [
        {
            id: 1,
            label: "Higher Secondary School in Non-Medical Science",
            content: "I have Accomplished 12th/plus Two Std. Education in Govt. Higher Secondary School Khanda Budgam J&K in Year 2018 with Percentage of marks : 75% in JkBose State Board",
            imgUrl: "https://ghsskhanda.com/img/hero.webp",
            name: "Governement Higher Secondary School Khanda Budgam J&K",
            Duration: '2016-2018',
            status: "Completed",
            grades: "75%"
        },
        {
            id: 2,
            label: "Bachelor's of Technology in CSE",
            content: "I have Accomplished my Graduation  in Apj Abdul kalam Technologoical University(Kerala Technological University) in Year 2023 under the Specialization of CSE with Cgpa score : 7.16.",
            imgUrl: "https://lh3.googleusercontent.com/p/AF1QipMLhRj2hpNuDlFL5EdZeyx6o-RnZtYVqdk5FVEH=s1360-w1360-h1020",
            name: "Governement College of Engineering Kannur",
            Duration: "2019-2023",
            status: "Completed",
            grades: "71.6%"
        }
    ];
    return (
        <div className="flex flex-col gap-6 w-full items-start">
            {
                eduData.map((edu, id) => {
                    return (
                        <div key={id} className="flex justify-start items-center sm:items-start w-full p-2 sm:p-4 rounded-3xl gap-2 sm:gap-8 shadow-md bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
                            <Image src={edu.imgUrl} className="sm:h-48 h-36 w-96 sm:w-48 object-cover" />
                            <div className="flex flex-col items-start gap-2 sm:gap-4">
                                <h2 className="font-bold text-sm sm:text-3xl">{edu.label}</h2>
                                <h4 className="font-medium hidden sm:block text-sm sm:text-xl">{edu.name}</h4>
                                <div className="flex items-center gap-2">
                                    <h2 className="text-xs sm:text-lg font-medium">{edu.Duration}</h2>
                                    <span className="bg-white h-4 w-2"></span>
                                    <h2 className="text-xs sm:text-lg font-medium">{edu.status}</h2>
                                </div>
                                <p>Grades : {edu.grades}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Education