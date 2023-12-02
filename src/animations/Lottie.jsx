import Lottie from 'lottie-react'
import animationData from './lotties/loader.json'

const UncontrolledLottie = () => {

    return (
        <div className='h-screen flex justify-center items-center'>
            <Lottie animationData={animationData} loop={true}
                height={400}
                width={400}
            />
        </div>
    )
}
export default UncontrolledLottie