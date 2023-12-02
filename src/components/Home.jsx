import bg from '../assets/bgnew2.png'
import resume from '../assets/resume.pdf'
import DownloadIcon from '@mui/icons-material/Download';
import CallIcon from '@mui/icons-material/Call';
import { Typography } from '@material-tailwind/react';
import { UserAuth } from '../context/AuthContext';

const Home = () => {
    const { currUser } = UserAuth()
    return (
        <div id='home' className='mt-1 z-[30] bg-gradient-to-b  from-gray-700 to-black/80  h-screen mx-auto flex justify-center flex-col'>
            <div className="flex flex-col transition-all duration-600 delay-300 ease-soft-spring">
                <div className=" px-4 gap-4 md:gap-8  md:max-w-screen-lg mx-auto flex flex-col md:flex-row-reverse
             md:justify-between items-center">
                    <div data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <img src={bg} alt="error" className='z-[30] object-cover w-[400px] h-[350px] border-3 border-primary md:w-[800px] md:h-[400px] bg-primary rounded-full' />
                    </div>
                    <div className='flex flex-col gap-2 md:gap-4 transition 0.3s ease-in-out'>
                        <div data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" className='transition-all duration-300 delay-150 ease-in-out font-bold text-2xl text-center md:text-start  py-2'>
                            {currUser ? <p >Welcome <span className='text-primary'>{currUser?.displayName}</span></p> : ""}
                        </div>
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
                        <div className=' z-[30] transition-all duration-200 delay-150 ease-in-out flex flex-row  justify-between md:justify-normal md:gap-4 px-1 py-4 md:py-8  mt-2 '>
                            <a data-aos="fade-up-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine" href='#contact' className='bg-gradient-to-r from-primary-300 via-dark/70 to-green-700  hover:from-pink-500 hover:to-yellow-500 p-4  rounded-md hover:bg-primary hover:transition duration-300 delay-100 ease-in-out'>
                                <CallIcon />Hire Me
                            </a>
                            <a data-aos="fade-up-left"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine" href={resume} download={true} className='bg-gradient-to-r from-primary-300 via-dark/70 to-green-700  hover:from-pink-500 hover:to-yellow-500  p-4  rounded-md hover:bg-primary hover:transition duration-300 delay-100 ease-in-out'>
                                <DownloadIcon /> Download CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}
export default Home