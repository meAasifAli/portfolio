import Divider from "../components/Divider"
import ContactLottie from "../animations/Contact"

const Contact = () => {

    return (
        <div id="contact" className="z-[30]  rounded-md bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
            <div className='flex justify-center items-center gap-2'>
                <Divider />
                <div>
                    <h2 className="text-primary-900  py-4 text-center text-3xl sm:text-4xl font-bold">Contact Me</h2>
                </div>
                <Divider />
            </div>
            <div className='w-full grid sm:grid-cols-2 p-4 sm:p-0 mx-auto'>
                <form className='flex flex-col justify-center gap-4 md:gap-6 items-start w-full sm:w-[50%] mx-auto' action="https://getform.io/f/38778926-87ed-4562-9b03-a2309121f440" method='POST'>
                    <p className='text-gray-200'>Nice To Meet You!</p>

                    <input type="text" name='name' placeholder='Name' className='w-full rounded-xl p-4  bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 focus-within:bg-transparent border-none outline-none' />
                    <input type="text" name='email' placeholder='Email' className='w-full rounded-xl p-4  bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 focus-within:bg-transparent border-none outline-none' />
                    <textarea name="message" rows={4} placeholder='Message' className='w-full rounded-xl p-4  bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 focus-within:bg-transparent border-none outline-none'></textarea>
                    <button type='submit' className='w-full text-white p-4 rounded-xl  bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20' >Submit</button>

                </form>
                <div className="hidden sm:flex justify-center items-center w-full">
                    <ContactLottie />
                </div>
            </div>
        </div>
    )
}
export default Contact