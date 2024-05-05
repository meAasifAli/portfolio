
import Divider from '../components/Divider';
import pic from '../assets/asif2.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const About = () => {

    return (
        <div id="about" className="z-[30] overflow-auto   mt-4 md:mt-0 w-full mx-auto space-y-4 sm:space-y-24 px-4 sm:px-8">
            <div className='flex justify-center items-center gap-2'>
                <Divider />
                <div>
                    <h2 className="text-primary-900  py-4 text-center text-3xl sm:text-4xl font-bold">About Me</h2>
                </div>
                <Divider />
            </div>
            <div className="flex flex-col   sm:w-[80%] mx-auto sm:flex-row  justify-center gap-8 sm:gap-24 py-4 transition-all duration-200 delay-100 ease-in-out">
                <div
                    className='hidden sm:inline-flex sm:p-4 rounded-lg'>
                    <img src={pic} height={800} width={800} alt="err" />
                </div>
                <div className="flex flex-col gap-6">
                    <h2 className='text-2xl font-bold'>Web & App Developer</h2>
                    <p
                        className=" px-2 text-start mx-auto text-xs sm:text-sm  tracking-widest">
                        Entry Level Web Developer or App developer with a strong foundation in developing end-to-end web scalable applications.
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
                    <div className="flex  flex-row items-center justify-center sm:justify-start gap-6 ">
                        <a href="https://github.com/Asif45uaha" className='bg-cyan-800 p-4 rounded-full hover:opacity-80 hover:scale-105 transition-all delay-75 duration-200 ease-in-out'><GitHubIcon size={30} color='black' /></a>
                        <a href="https://www.instagram.com/_asif_ali10" className='bg-cyan-800  p-4 rounded-full hover:opacity-80 hover:scale-105 transition-all delay-75 duration-200 ease-in-out'><InstagramIcon color='black' size={30} /></a>
                        <a href="https://www.linkedin.com/in/aasif-ali-6909b8200" className='bg-cyan-800  p-4 rounded-full hover:opacity-80 hover:scale-105 transition-all delay-75 duration-200 ease-in-out'><LinkedInIcon color='black' size={30} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About