import { useEffect, useState } from "react"
import { Button } from "@material-tailwind/react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {
    Drawer,
    IconButton
} from "@material-tailwind/react";
import { UserAuth } from '../context/AuthContext'
import { Toaster, toast } from 'react-hot-toast'
const Header = () => {

    const { currUser, SigninWithGoogle, logOut } = UserAuth()
    const [open, setOpen] = useState(false)
    const openDrawer = () => {
        setOpen(!open)
    }
    const closeDrawer = () => {
        setOpen(false)
    }
    const handleLogin = async () => {
        try {
            await SigninWithGoogle()
            toast.success("Thanks For logging in", {
                duration: 6000,
                position: "top-center"
            })
        } catch (error) {
            console.log(error);
            toast.error("Couldn't login", {
                duration: 6000,
                position: "top-center"
            })
        }

    }
    const handleLogout = async () => {
        await logOut()
        toast.success("You Are Logged Out please Login Again!!", {
            duration: 6000,
            position: "top-center"
        })
    }


    return (
        <div className="sticky top-0 z-[31]">
            <header className="bg-black  flex items-center justify-around text-2xl  text-primary h-[90px] mx-auto">
                <div className="flex flex-row items-center justify-center gap-1 md:gap-4">
                    <h1 className="text-2xl font-semibold">AASIF ALI</h1>
                </div>
                <div className="hidden md:max-w-screen-lg md:flex items-center justify-between gap-[20px] cursor-pointer text-xl ">
                    <a href="#home" className="hover:border-b-2 border-pink-700 hover:transition-all duration-600 ease-in-out"><p >Home</p></a>
                    <a href="#about" className="hover:border-b-2 border-pink-700 hover:transition-all duration-600 ease-in-out"><p>About</p></a>
                    <a href="#experience" className="hover:border-b-2 border-pink-700 hover:transition-all duration-600 ease-in-out"><p>Experience</p></a>
                    <a href="#services" className="hover:border-b-2 border-pink-700 hover:transition-all duration-600 ease-in-out"><p>Services</p></a>
                    <a href="#projects" className="hover:border-b-2 border-pink-700 hover:transition-all duration-600 ease-in-out"><p>Projects</p></a>
                    <a href="#contact" className="hover:border-b-2 border-pink-700 hover:transition-all duration-600 ease-in-out"><p>Contact</p></a>
                    <div className="mt-2 flex items-center gap-2 justify-center">
                        {
                            currUser ? <div className="flex flex-row items-center gap-2">
                                <p>{currUser?.displayName}</p>
                                <Button onClick={handleLogout} color="blue">Logout</Button>
                            </div> : <Button onClick={handleLogin} color="green">Login</Button>
                        }
                        <Toaster />
                    </div>

                </div>
                <div className="md:hidden ">
                    <MenuIcon className="md:hidden" onClick={openDrawer} />
                </div>
                <Drawer open={open} onClose={closeDrawer} placement="left" className="bg-black md:hidden  flex flex-col justify-around">
                    <div className="mb-6 mt-4 flex items-center justify-between px-5">
                        <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
                            <CloseIcon size={35} onClick={closeDrawer} />
                        </IconButton>
                    </div>
                    <div className="px-5 mt-8 flex flex-col  justify-center items-center text-2xl gap-5">
                        <a href="#home" className="hover:border-b-2 border-pink-700 hover:transition-all duration-600 ease-in-out"><p >Home</p></a>
                        <a href="#about" className="hover:border-b-2 border-pink-700 hover:transition-all duration-600 ease-in-out"><p>About</p></a>
                        <a href="#experience" className="hover:border-b-2 border-pink-700 hover:transition-all duration-600 ease-in-out"><p>Experience</p></a>
                        <a href="#services" className="hover:border-b-2 border-pink-700 hover:transition-all duration-600 ease-in-out"><p>Services</p></a>
                        <a href="#projects" className="hover:border-b-2 border-pink-700 hover:transition-all duration-600 ease-in-out"><p>Projects</p></a>
                        <a href="#contact" className="hover:border-b-2 border-pink-700 hover:transition-all duration-600 ease-in-out"><p>Contact</p></a>
                    </div>
                    <div className="mt-8 px-4 flex items-center justify-center gap-2">
                        {
                            currUser ? <div className="flex flex-row items-center gap-2">
                                <p>{currUser?.displayName}</p>
                                <Button onClick={handleLogout} color="blue">Logout</Button>
                            </div> : <Button onClick={handleLogin} color="green">Login</Button>
                        }
                        <Toaster />
                    </div>
                    <div className=" mt-2 flex flex-row items-center gap-[15px] justify-center md:justify-start md:ml-4 py-4">
                        <a href="https://github.com/Asif45uaha" className='bg-black p-3 rounded-full'><GitHubIcon size={30} color='black' /></a>
                        <a href="https://www.instagram.com/_asif_ali10" className='bg-black p-3 rounded-full'><InstagramIcon color='black' size={30} /></a>
                        <a href="https://www.linkedin.com/in/aasif-ali-6909b8200" className='bg-black p-3 rounded-full'><LinkedInIcon color='black' size={30} /></a>
                    </div>
                </Drawer>
            </header>

        </div>
    )
}
export default Header