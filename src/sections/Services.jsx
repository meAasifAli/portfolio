import { serviceData } from "../data"
import Divider from "../components/Divider"

const Services = () => {

    return (
        <div id="services" className=" rounded-md bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20  z-[30] px-2  mt-4 md:mt-0 mx-auto md:w-full space-y-8 sm:space-y-24 py-8">
            <div className='flex justify-center items-center gap-2'>
                <Divider />
                <div>
                    <h2 className="text-primary-900  py-4 text-center text-3xl sm:text-4xl font-bold">Services</h2>
                </div>
                <Divider />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-16 w-full sm:w-[80%] mx-auto px-2 sm:px-0">
                {serviceData.map((service, index) => {
                    return <div key={index} className=" bg-clip-padding backdrop-filter backdrop-blur-2xl shadow-lg bg-opacity-30 flex flex-col gap-2 sm:gap-6 justify-start items-start  p-4 sm:p-8 rounded-lg ">
                        <div className="flex items-center gap-2 ">
                            <img src={service?.icon} className="h-12 w-12 object-contain" alt="error" />
                            <h2 className="text-xl font-bold">{service?.title}</h2>
                        </div>
                        <hr className="bg-white w-full" />
                        <div>
                            <p className="text-gray-400 text-sm">{service.desc}</p>
                        </div>
                    </div>
                })}
            </div>

        </div>
    )
}
export default Services



