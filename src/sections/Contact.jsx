import Divider from "../components/Divider"

const Contact = () => {

    return (
        <div id="contact" className="z-[30] bg-blue-900">
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

                    <input type="text" name='fname' id='fname' className='py-2 border-1 border-gray-200 bg-transparent focus:border-none placeholder:text-gray-300 placeholder:px-2 placeholder:font-thin placeholder:text-sm rounded-xl w-full' placeholder='Enter Your First name' required />
                    <input type="text" name='lname' id='lname' placeholder='Enter Your Last name' className='py-2 border-1 border-gray-200 bg-transparent focus:border-none placeholder:text-gray-300 placeholder:px-2 placeholder:font-thin placeholder:text-sm rounded-xl w-full' required />


                    <input className='py-2 border-1 border-gray-200 bg-transparent focus:border-none placeholder:text-gray-300 placeholder:px-2 placeholder:font-thin placeholder:text-sm rounded-xl w-full' type="email" name='email' id='email' placeholder='Enter You email' required />
                    <input className='py-2 border-1 border-gray-200 bg-transparent focus:border-none placeholder:text-gray-300 placeholder:px-2 placeholder:font-thin placeholder:text-sm rounded-xl w-full' type="tel" name='phone' id='phone' placeholder='Enter Your Phone No' required />


                    <input className='py-2 border-1 border-gray-200 bg-transparent focus:border-none placeholder:text-gray-300 placeholder:px-2 placeholder:font-thin placeholder:text-sm rounded-xl w-full' type="text" name='msg' id='msg' placeholder='Enter type your Message' required />
                    <button type='submit' className='w-full rounded-xl bg-blue-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 p-4'>Submit</button>

                </form>
            </div>

        </div>
    )
}
export default Contact