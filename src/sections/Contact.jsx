import Divider from "../components/Divider"

const Contact = () => {

    return (
        <div id="contact" className="z-[30]">
            <div className='flex justify-center items-center gap-2'>
                <Divider />
                <div>
                    <h2 className="text-primary-900  py-4 text-center text-3xl sm:text-4xl font-bold">Contact Me</h2>
                </div>
                <Divider />
            </div>
            <div className=' w-full flex justify-center h-[70vh] sm:h-screen p-4  mx-auto'>
                <form className='flex flex-col justify-center gap-4 md:gap-6 items-start w-full sm:w-[50%] mx-auto' action="https://getform.io/f/38778926-87ed-4562-9b03-a2309121f440" method='POST'>
                    <p className='text-gray-200'>Nice To Meet You!</p>

                    <input type="text" name='name' placeholder='Name' className='w-full rounded-xl bg-white text-black p-4' />
                    <input type="text" name='email' placeholder='Email' className='w-full rounded-xl bg-white text-black p-4' />
                    <textarea name="message" rows={4} placeholder='Message' className='w-full rounded-xl bg-white text-black p-4'></textarea>
                    <button type='submit' className='w-full rounded-xl bg-cyan-800 text-white p-4'>Submit</button>

                </form>
            </div>

        </div>
    )
}
export default Contact