import Lottie from 'lottie-react'
import animationData from './lotties/contact.json'

const ContactLottie = () => {

    return (

        <Lottie animationData={animationData} loop={true}
            height={300}
            width={300}
        />

    )
}
export default ContactLottie