import Lottie from 'lottie-react'
import animationData from './lotties/bg.json'

const BgLottie = () => {

    return (
        <div className='z-[29] flex justify-center'>
            <Lottie animationData={animationData} loop={true}
            />
        </div>
    )
}
export default BgLottie