import { createContext, useContext, useEffect, useState } from "react";

const stickyContext = createContext(null)


const StickyProvider = ({ children }) => {
    const [sticky, setSticky] = useState(false)
    const [showArrow, setShowArrow] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setSticky(true)
                setShowArrow(false)
            }
            else {
                setSticky(false)
                setShowArrow(true)

            }
        }
        window.addEventListener("scroll", handleScroll)

    }, [])
    return <stickyContext.Provider value={{ sticky, showArrow }}>{children}</stickyContext.Provider>
}

export default StickyProvider

export const useStickyContext = () => useContext(stickyContext)