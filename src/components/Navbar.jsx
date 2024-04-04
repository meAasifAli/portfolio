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
import { useStickyContext } from "../context/StickyProvider";
import { classnames } from "./nav";

const Header = () => {
    const headerText = "<p>Aasif</p>"
    const { sticky } = useStickyContext()
    // console.log(pathname);

    const [open, setOpen] = useState(false)
    const openDrawer = () => {
        setOpen(!open)
    }
    const closeDrawer = () => {
        setOpen(false)
    }



    return sticky ? (
        <div className={classnames.container}>
            <header className={classnames.headerWrapper}>
                <div className={classnames.navBrand}>
                    <h1 className="text-2xl font-bold">{headerText}</h1>
                </div>
                <div className={classnames.deskFlex}>
                    {
                        navData.map((item, id) => {
                            return (
                                <a key={id} href={item.href} className={classnames.flexItem}>
                                    <p >{item?.title}</p>
                                </a>
                            )
                        })
                    }

                </div>
                <div className="sm:hidden ">
                    <MenuIcon className="md:hidden" onClick={openDrawer} />
                </div>
                <Drawer open={open} onClose={closeDrawer} placement="left" className="bg-black md:hidden  flex flex-col justify-around">
                    <div className="mb-6 mt-4 flex items-center justify-between px-5">
                        <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
                            <CloseIcon size={35} onClick={closeDrawer} />
                        </IconButton>
                    </div>
                    <div className={classnames.drawerFlex}>
                        {
                            navData.map((item, id) => {
                                return (
                                    <a key={id} href={item.href} className={classnames.flexItem}><p >{item?.title}</p></a>
                                )
                            })
                        }
                    </div>
                    <div className={classnames.drawerLinksFlex}>
                        <a href="https://github.com/Asif45uaha" className='bg-black p-3 rounded-full'>
                            <GitHubIcon size={30} color='black' />
                        </a>
                        <a href="https://www.instagram.com/_asif_ali10" className='bg-black p-3 rounded-full'>
                            <InstagramIcon color='black' size={30} />
                        </a>
                        <a href="https://www.linkedin.com/in/aasif-ali-6909b8200" className='bg-black p-3 rounded-full'>
                            <LinkedInIcon color='black' size={30} />
                        </a>
                    </div>
                </Drawer>
            </header>

        </div>
    ) : ""
}
export default Header