import Lottie from 'lottie-react'
import animationData from './lotties/about.json'

const AboutLottie = () => {

    return (
        <div className='z-[29] flex justify-center'>
            <Lottie animationData={animationData} loop={true}
            />
        </div>
    )
}
export default AboutLottie