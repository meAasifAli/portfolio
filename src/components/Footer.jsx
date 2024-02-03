import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
    return (
        <div className='p-2 md:max-w-screen-lg mx-auto  rounded-md  flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0'>
            <div className=" md:flex flex-row items-center gap-[15px] justify-center">
                <a href="https://github.com/Asif45uaha" className='bg-black p-3 rounded-full'><GitHubIcon size={30} color='black' /></a>
                <a href="https://www.instagram.com/_asif_ali10" className='bg-black p-3 rounded-full'><InstagramIcon color='black' size={30} /></a>
                <a href="https://www.linkedin.com/in/aasif-ali-6909b8200" className='bg-black p-3 rounded-full'><LinkedInIcon color='black' size={30} /></a>
            </div>
            <div className=''>
                <span className=' text-Maroon'>+91-7889423564</span>
            </div>
            <div className='text-white'>
                <span className='text-Maroon text-xl'>© Copyright Asif Ali 2023</span>
            </div>
        </div>
    )
}
export default Footer