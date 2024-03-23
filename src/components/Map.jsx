const Map = () => {
    return (
        <div className="flex w-full   items-center flex-col justify-center py-3  mx-auto">
            <h2 className="text-primary-900  py-4 text-center text-3xl sm:text-5xl font-bold">Location</h2>
            <hr className='bg-white h-[2px]' />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6618.160196211487!2d74.84978919229142!3d33.96478069108244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18c610a88cb3d%3A0xcd5807e7ac72ca9e!2sSanzi%20Pora%20191113!5e0!3m2!1sen!2sin!4v1694866911845!5m2!1sen!2sin" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='map' className="w-[97%] md:w-full"></iframe>
        </div>
    )
}
export default Map