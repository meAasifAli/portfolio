import bg from '../assets/bgnew2.png'
import resume from '../assets/Aasif_Resume.pdf'
import DownloadIcon from '@mui/icons-material/Download';
import CallIcon from '@mui/icons-material/Call';



const Home = () => {

    return (
        <div id='home' className="z-[30] h-screen   overflow-auto   flex justify-center flex-col">
            <div className="flex flex-col h-screen justify-center transition-all duration-600 delay-300 ease-soft-spring">
                <div className=" px-4 gap-4 md:gap-8  md:max-w-screen-2xl mx-auto flex flex-col md:flex-row-reverse
             md:justify-between items-center">
                    <div className='animate-fade-left animate-delay-200 animate-duration-500'>
                        <img src={bg} alt="error" className='rounded-full h-[260px] w-[260px] md:h-[400px] md:w-[400px]' />
                    </div>
                    <div className="flex text-white tracking-wider flex-col gap-2 md:gap-4 transition 0.3s ease-in-out md:w-1/2">
                        <h4>
                            Hello I&apos;m
                        </h4>
                        <h1 className='text-3xl sm:text-6xl font-bold'>
                            Aasif Ali
                        </h1>
                        <p className='text-md sm:text-xl'>Web | App Developer</p>

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

        </div>
    )
}
export default Home