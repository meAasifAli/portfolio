import { useEffect, useState } from "react";
import { stickyContext } from "../constants";



const StickyProvider = ({ children }) => {
    const [sticky, setSticky] = useState(false)


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setSticky(true)

            }
            else {
                setSticky(false)


            }
        }
        window.addEventListener("scroll", handleScroll)

    }, [])
    return <stickyContext.Provider value={{ sticky }}>{children}</stickyContext.Provider>
}

export default StickyProvider

