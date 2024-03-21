import { serviceData } from "../data"


const Services = () => {
    return (
        <div id="services" className="z-[30]  py-4 px-2 h-screen overflow-auto mt-4 md:mt-0 mx-auto md:w-full space-y-8 sm:space-y-24">
            <h2 className="text-primary-900  py-4 text-center text-5xl font-bold">Services I Offer</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-16 w-full sm:w-[80%] mx-auto px-2 sm:px-0">
                {serviceData.map((service, index) => {
                    return <div key={index} className="flex flex-col gap-2 sm:gap-6 justify-start items-start shadow-md shadow-blue-300 p-2 sm:p-4 rounded-lg">
                        <div className="flex items-center gap-2 ">
                            <img src={service?.icon} className="h-12 w-12 object-contain" alt="error" />
                            <h2 className="text-xl font-bold">{service?.title}</h2>
                        </div>
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



