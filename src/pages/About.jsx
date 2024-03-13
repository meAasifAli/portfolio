// import { Card, CardBody, CardHeader } from "@nextui-org/react";
// import Divider from '../components/Divider';
import pic from '../assets/asif2.jpg'
import CallIcon from '@mui/icons-material/Call';

const About = () => {

    return (
        <div id="about" className="z-[30] overflow-auto h-screen mt-4 md:mt-0 w-full mx-auto space-y-4 sm:space-y-24 px-4 sm:px-8">
            <h2 className="text-primary-900  py-4 text-center text-5xl font-bold">About Me</h2>
            <div className="flex flex-col sm:w-[80%] mx-auto sm:flex-row  justify-center gap-8 sm:gap-24 py-4 transition-all duration-200 delay-100 ease-in-out">
                <div className='sm:p-4 shadow-md shadow-white rounded-lg'>
                    <img src={pic} height={800} width={800} alt="err" />
                </div>
                <div className="flex flex-col gap-6">
                    <h2 className='text-2xl font-bold'>Full Stack Developer</h2>
                    <p className=" px-2 text-start mx-auto text-xs sm:text-sm  tracking-widest">
                        Entry Level Full Stack Developer with a strong foundation in developing end-to-end web applications.
                        Known for quick learning and adaptability, demonstrated by mastering new programming languages within weeks.
                    </p>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        <div className='flex flex-col gap-4'>
                            <h4>Name : Aasif Ali</h4>
                            <h4>Degree : B.Tech</h4>
                            <h4>Phone : (+91) 7889423564</h4>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h4>Address : Sanzipora B.K Pora Budgam  </h4>
                            <h4>Experience : Fresher</h4>
                            <h4>Email : asif15310@gmail.com</h4>
                        </div>
                    </div>
                    <div className='transition-all duration-200 delay-150 ease-in-out flex flex-row  justify-between md:justify-normal sm:gap-8 px-1 py-4 md:py-8  mt-2 '>
                        <a href='/contact' className='bg-gradient-to-r from-primary-300 via-dark/70 to-green-700  hover:from-pink-500 hover:to-yellow-500 p-4  rounded-md hover:bg-primary hover:transition duration-300 delay-100 ease-in-out'>
                            <CallIcon />Hire Me
                        </a>
                        <a href="" className='bg-gradient-to-r from-primary-300 via-dark/70 to-green-700  hover:from-pink-500 hover:to-yellow-500  p-4  rounded-md hover:bg-primary hover:transition duration-300 delay-100 ease-in-out'>
                            Know More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About