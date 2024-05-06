import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';




const ScrollUp = () => {
    const handleScrollUP = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div onClick={handleScrollUP} className="p-2 rounded-full cursor-pointer bg-gray-800">
            <KeyboardDoubleArrowUpIcon size={25} color="black" />
        </div>
    )
}
export default ScrollUp