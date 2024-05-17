


const Skills = ({ expData }) => {
    return (
        <div className="flex flex-col justify-center items-center  gap-2 w-full">
            <div className="flex flex-row flex-wrap items-start justify-center gap-4">
                {
                    expData.map((item, id) => {
                        return <div key={id} className=" bg-clip-padding backdrop-filter backdrop-blur-2xl shadow-lg bg-opacity-30  rounded-full  p-1 sm:p-4 hover:scale-105 hover:transition-all duration-300 delay-75 ease-in-out">
                            <img src={item?.src} alt="err" className="sm:h-48 sm:w-48 h-24 w-24 object-contain hover:skew-y-12 hover:transition-all duration-300 delay-75 ease-in-out" />
                        </div>
                    })
                }
            </div>
        </div>
    )
}
export default Skills