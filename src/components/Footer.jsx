import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
    return (
        <div className='bg-gradient-to-b  from-black/80 to-blue-900  p-2  rounded-md  mx-auto mt-10 mb-4'>
            <div className="mt-8 flex flex-row items-center gap-[15px] justify-center">
                <a href="https://github.com/Asif45uaha" className='bg-black p-3 rounded-full'><GitHubIcon size={30} color='black' /></a>
                <a href="https://www.instagram.com/_asif_ali10" className='bg-black p-3 rounded-full'><InstagramIcon color='black' size={30} /></a>
                <a href="https://www.linkedin.com/in/aasif-ali-6909b8200" className='bg-black p-3 rounded-full'><LinkedInIcon color='black' size={30} /></a>

            </div>
            <div className='text-white mt-[10px] text-center mb-6 flex flex-col items-center justify-center'>
                <span className='text-Maroon text-xl'>© Copyright Asif Ali 2023</span>
                <span className=' text-Maroon mt-2'>+91-7889423564</span>
            </div>
        </div>
    )
}
export default Footer