import bg from '../assets/bgNew2.png'
import resume from '../assets/resume.pdf'
import DownloadIcon from '@mui/icons-material/Download';
import CallIcon from '@mui/icons-material/Call';
import { Typography } from '@material-tailwind/react';

const Home = () => {
    return (
        <div id='home' className='mt-1 bg-gradient-to-b  from-gray-700 to-black/80  h-screen mx-auto flex justify-center flex-col'>
            <div className=" px-4 gap-4 md:gap-8  md:max-w-screen-lg mx-auto flex flex-col md:flex-row-reverse
             md:justify-between items-center">
                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" >
                    <img src={bg} alt="error" className='object-cover w-[800px] h-[350px] md:h-[400px] bg-primary rounded-full' />
                </div>
                <div className='flex flex-col gap-2 md:gap-4'>
                    <Typography data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" variant='h4'>
                        Hello I&apos;m
                    </Typography>
                    <Typography data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" variant='h1' className='text-6xl'>
                        Aasif <span className='text-primary'>Ali</span>
                    </Typography>
                    <Typography data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" variant='paragraph' className='text-lg'>
                        I&apos;m a Full-Stack Developer
                        passionate about learning the Web Development Technologies
                        by Employing  them in Practical use.

                    </Typography>
                    <div data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" className='flex flex-row  justify-between md:justify-normal md:gap-4 px-1 py-4 md:py-8  mt-2 '>
                        <a href='#contact' className='border-2 border-primary p-3 md:p-4 rounded-md hover:bg-primary hover:transition duration-300 delay-100 ease-in-out'>
                            <CallIcon />Hire Me
                        </a>
                        <a href={resume} download={true} className='border-2 border-primary p-3 md:p-4 rounded-md hover:bg-primary hover:transition duration-300 delay-100 ease-in-out'>
                            <DownloadIcon /> Download CV
                        </a>
                    </div>

                </div>

            </div>


        </div>

    )
}
export default Home