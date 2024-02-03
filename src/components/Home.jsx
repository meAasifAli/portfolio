import bg from '../assets/bgnew2.png'
import resume from '../assets/resume.pdf'
import DownloadIcon from '@mui/icons-material/Download';
import CallIcon from '@mui/icons-material/Call';
import { Typography } from '@material-tailwind/react';
import { UserAuth } from '../context/AuthContext';

const Home = () => {
    const { currUser } = UserAuth()
    return (
        <div id='home' className='mt-1 z-[30]  rounded-lg h-screen flex justify-center flex-col'>
            <div className="flex flex-col transition-all duration-600 delay-300 ease-soft-spring">
                <div className=" px-4 gap-4 md:gap-8  md:max-w-screen-lg mx-auto flex flex-col md:flex-row-reverse
             md:justify-between items-center">
                    <div>
                        <img src={bg} alt="error" className='rounded-full h-[300px] w-[300px] md:h-[400px] md:w-[400px]' />
                    </div>
                    <div className='flex flex-col gap-2 md:gap-4 transition 0.3s ease-in-out md:w-1/2'>
                        <div className='transition-all duration-300 delay-150 ease-in-out font-bold text-2xl text-center md:text-start  py-2'>
                            {currUser ? <p >Welcome <span className='text-primary'>{currUser?.displayName}</span></p> : ""}
                        </div>
                        <Typography variant='h4'>
                            Hello I&apos;m
                        </Typography>
                        <Typography variant='h1' className='text-6xl'>
                            Aasif <span className='text-primary'>Ali</span>
                        </Typography>
                        <Typography variant='paragraph' className='text-lg'>
                            I&apos;m a Full Stack Developer with an art  of crafting the  scalable
                            web applications using Advanced Technologies like MERN-stack,Nextjs etc. in the market
                        </Typography>
                        <div className=' z-[30] transition-all duration-200 delay-150 ease-in-out flex flex-row  justify-between md:justify-normal md:gap-4 px-1 py-4 md:py-8  mt-2 '>
                            <a href='#contact' className='bg-gradient-to-r from-primary-300 via-dark/70 to-green-700  hover:from-pink-500 hover:to-yellow-500 p-4  rounded-md hover:bg-primary hover:transition duration-300 delay-100 ease-in-out'>
                                <CallIcon />Hire Me
                            </a>
                            <a href={resume} download={true} className='bg-gradient-to-r from-primary-300 via-dark/70 to-green-700  hover:from-pink-500 hover:to-yellow-500  p-4  rounded-md hover:bg-primary hover:transition duration-300 delay-100 ease-in-out'>
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