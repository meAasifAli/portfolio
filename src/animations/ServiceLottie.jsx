import Lottie from 'lottie-react'
import animationData from './lotties/webdeveloper.json'

const ServiceLottie = () => {
    return (
        <div className='w-full h-[300px] md:w-[500px] md:h-[500px]'>
            <Lottie animationData={animationData} loop={true}
            />
        </div>
    )
}
export default ServiceLottie