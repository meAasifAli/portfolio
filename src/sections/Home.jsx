import bg from '../assets/bgnew2.png'
import resume from '../assets/resume.pdf'
import DownloadIcon from '@mui/icons-material/Download';
import CallIcon from '@mui/icons-material/Call';


const Home = () => {
    return (
        <div id='home' className='z-[30] h-screen bg-blue-900  overflow-auto   flex justify-center flex-col'>
            <div className="flex flex-col h-screen justify-center transition-all duration-600 delay-300 ease-soft-spring">
                <div className=" px-4 gap-4 md:gap-8  md:max-w-screen-lg mx-auto flex flex-col md:flex-row-reverse
             md:justify-between items-center">
                    <div>
                        <img src={bg} alt="error" className='rounded-full h-[280px] w-[280px] md:h-[400px] md:w-[400px]' />
                    </div>
                    <div className='flex flex-col gap-2 md:gap-4 transition 0.3s ease-in-out md:w-1/2'>
                        <h4>
                            Hello I&apos;m
                        </h4>
                        <h1 className='text-3xl sm:text-6xl font-bold'>
                            Aasif Ali
                        </h1>
                        <p className='text-md sm:text-lg'>
                            I&apos;m a Web Developer and App Developer with an art  of crafting the  scalable
                            applications employing  cutting-edge Technologies like MERN-stack, Nextjs, React Native etc. renowned in the market for scalability and performance.
                        </p>
                        <div className=' z-[30] transition-all duration-200 delay-150 ease-in-out flex flex-row  justify-between md:justify-normal sm:gap-8 px-1 py-4 md:py-8  mt-2 '>
                            <a href='#contact' className='h-full  bg-blue-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 p-4'>
                                <CallIcon />Hire Me
                            </a>
                            <a href={resume} download={true} className='h-full  bg-blue-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 p-4'>
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