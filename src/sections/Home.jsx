import bg from '../assets/bgnew2.png'
import resume from '../assets/Aasif_Resume.pdf'
import DownloadIcon from '@mui/icons-material/Download';
import CallIcon from '@mui/icons-material/Call';
import { useStickyContext } from '../context/StickyProvider'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const Home = () => {
    const { showArrow } = useStickyContext()

    return (
        <div id='home' className='z-[30] h-screen bg-gradient-to-tr from-cyan-800 to-black/20  overflow-auto   flex justify-center flex-col'>
            <div className="flex flex-col h-screen justify-center transition-all duration-600 delay-300 ease-soft-spring">
                <div className=" px-4 gap-4 md:gap-8  md:max-w-screen-lg mx-auto flex flex-col md:flex-row-reverse
             md:justify-between items-center">
                    <div>
                        <img src={bg} alt="error" className='rounded-full h-[280px] w-[280px] md:h-[400px] md:w-[400px]' />
                    </div>
                    <div className='flex text-white tracking-wider flex-col gap-2 md:gap-4 transition 0.3s ease-in-out md:w-1/2'>
                        <h4>
                            Hello I&apos;m
                        </h4>
                        <h1 className='text-3xl sm:text-6xl font-bold'>
                            Aasif Ali
                        </h1>
                        <p className='text-md sm:text-xl'>
                            I&apos;m a <strong>Web | App</strong> Developer with an art of crafting the  <strong>scalable</strong> {" "}
                            applications by Leveraging the cutting-edge Technologies such as <strong>MERN </strong> stack, <strong>Nextjs</strong> , <strong>React Native</strong> etc. renowned in the market for scalability and excellent performance.
                        </p>
                        <p className='text-sm sm:text-md'>
                            I&apos;m a <strong>Fast</strong> and <strong>adaptive</strong> learner with a strong sense of <strong>responsibility</strong> and a <strong>passion</strong> for <strong>problem-solving</strong>.
                            I&apos;m always looking for new challenges and opportunities to grow and improve my skills as a professional.
                        </p>
                        <div className=' z-[30] transition-all duration-200 delay-150 ease-in-out flex flex-row  justify-between md:justify-normal sm:gap-8 px-1 py-4 md:py-8  mt-2 '>
                            <a href='#contact' className='border-2 border-gray-300 rounded-full p-4 hover:bg-white hover:text-black transition-all delay-150 duration-400 ease-in-out'>
                                <CallIcon />Hire Me
                            </a>
                            <a href={resume} download={true} className='border-2 border-gray-300 rounded-full p-4  hover:bg-white hover:text-black transition-all delay-150 duration-400 ease-in-out'>
                                <DownloadIcon /> Download CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center pb-4 animate-fade-down animate-infinite animate-duration-[3000ms] animate-ease-out'>
                {
                    showArrow &&
                    <KeyboardDoubleArrowDownIcon color='white' sx={{ fontSize: 40 }} />
                }
            </div>
        </div>
    )
}
export default Home