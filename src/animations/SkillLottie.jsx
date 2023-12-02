import Lottie from 'lottie-react'
import animationData from './lotties/skills1.json'

const SKillLottie = () => {
    return (
        <div className='w-full  h-[300px] md:w-full md:h-full my-3'>
            <Lottie animationData={animationData} loop={true}
            />
        </div>
    )
}
export default SKillLottie