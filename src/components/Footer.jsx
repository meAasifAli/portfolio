import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <div className='py-2'>
            <div className='md:max-w-screen-lg mx-auto sm:h-[50vh] h-[40vh] p-2   rounded-md  flex flex-col items-center  justify-center gap-6'>
                <div className="flex md:flex flex-row items-center gap-8 justify-center">
                    <a href="https://github.com/Asif45uaha" className='bg-clip-padding backdrop-filter backdrop-blur-xl shadow-md bg-opacity-20  p-4 rounded-full hover:opacity-80 hover:scale-105 transition-all delay-75 duration-200 ease-in-out animate-pulse animate-ease-linear animate-infinite animate-delay-200 animate-duration-1000'><GitHubIcon size={30} color='black' /></a>
                    <a href="https://www.instagram.com/_asif_ali10" className='bg-clip-padding backdrop-filter backdrop-blur-xl shadow-md bg-opacity-20  p-4 rounded-full hover:opacity-80 hover:scale-105 transition-all delay-75 duration-200 ease-in-out animate-pulse animate-ease-linear animate-infinite animate-delay-200 animate-duration-1000'><InstagramIcon color='black' size={30} /></a>
                    <a href="https://www.linkedin.com/in/aasif-ali-6909b8200" className='bg-clip-padding backdrop-filter backdrop-blur-xl shadow-md bg-opacity-20  p-4 rounded-full hover:opacity-80 hover:scale-105 transition-all delay-75 duration-200 ease-in-out animate-pulse animate-ease-linear animate-infinite animate-delay-200 animate-duration-1000'><LinkedInIcon color='black' size={30} /></a>
                </div>
                <div className=''>
                    <span className=' text-Maroon'>+91-7889423564</span>
                </div>
                <div className='text-white'>
                    <span className='text-Maroon text-xl'>© Copyright Aasif Ali 2023</span>
                </div>
            </div>
        </div>
    )
}
export default Footer