import { useState } from "react"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {
    Drawer,
    IconButton
} from "@material-tailwind/react";

import { navData } from "../data";
import { useLocation } from 'react-router-dom'
const Header = () => {
    const headerText = "<p>Aasif</p>"
    const { pathname } = useLocation()
    // console.log(pathname);

    const [open, setOpen] = useState(false)
    const openDrawer = () => {
        setOpen(!open)
    }
    const closeDrawer = () => {
        setOpen(false)
    }


    return (

        <div className="z-[35]">
            <header className="flex items-center justify-around  text-2xl  text-primary h-[90px] md:max-w-screen-xl mx-auto">
                <div className="flex flex-row items-center justify-center">
                    <h1 className="text-2xl font-bold">{headerText}</h1>
                </div>
                <div className="hidden  md:flex items-center justify-between gap-8 cursor-pointer text-xl ">
                    {
                        navData.map((item, id) => {
                            return (
                                <a key={id} href={item.href} className={`${item?.href === pathname ? "border border-b-blue-500 border-t-0 text-red-600 border-l-0 border-r-0 p-3 rounded-full  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 transition-all duration-300 delay-75 ease-in-out" : ""}`}><p >{item?.title}</p></a>
                            )
                        })
                    }

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
                        {
                            navData.map((item, id) => {
                                return (
                                    <a key={id} href={item.href} className={`${item?.href === pathname ? "border border-blue-500 p-2 rounded-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10" : ""}`}><p >{item?.title}</p></a>
                                )
                            })
                        }
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