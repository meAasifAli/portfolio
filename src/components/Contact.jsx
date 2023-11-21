import {
    Card,
    Input,
    Textarea,
    Button,
    Typography,
} from "@material-tailwind/react";
const Contact = () => {
    return (
        <div id="contact" className="h-screen md:mt-4 md:h-[110vh] bg-blue-900 md:max-w-screen-lgbg-blue-900  mt-4 w-[95%] mx-auto md:w-full">
            <h2 className="text-primary-900 font-bold py-4 text-center text-3xl animate-wiggle animate-infinite animate-duration-[3000ms] animate-ease-in-out animate-alternate-reverse animate-fill-backwards">Connect With Me</h2>
            <div className="my-4 flex flex-col h-screen justify-center items-center">
                <Card data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" color="transparent" shadow={false}>
                    <Typography data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" variant="h4" color="white">
                        let&apos;s talk
                    </Typography>
                    <Typography data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" color="white" className="mt-1 font-normal">
                        Nice to meet you! Enter your details.
                    </Typography>
                    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h6" color="white" className="-mb-3">
                                Your Name
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Your Name"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            />
                            <Typography variant="h6" color="white" className="-mb-3">
                                Your Email
                            </Typography>
                            <Input
                                size="lg"
                                placeholder="Your Email"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"

                            />
                            <Textarea label="Message" />
                        </div>

                        <Button className="mt-6" fullWidth>
                            Submit
                        </Button>

                    </form>
                </Card>
            </div>
        </div>
    )
}
export default Contact