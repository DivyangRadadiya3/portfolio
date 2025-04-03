import React, { useCallback, useMemo } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
    PhoneIcon,
    MapPinIcon,
    EnvelopeIcon
} from "@heroicons/react/24/solid"
import {
    Card,
    Checkbox,
    Typography,
    Input,
    Textarea,
    Button,

} from "@material-tailwind/react";

export function Contact() {
    return (

        <section id="contactUs" className=" text-center pt-24 mx-auto p-6 sm:p-8 md:p-10 lg:p-12 space-y-10 ">
            <Typography variant="h1" color="purple" className="mb-4 font-bold tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Contact
            </Typography>
            <div className="mx-auto max-w-7xl px-4 ">
                <div className="grid lg:grid-cols-2 grid-cols-1 ">
                    <div className="lg:mb-0 mb-10">
                        <div className="relative h-full">
                            <img
                                src="https://pagedone.io/asset/uploads/1696488602.png"
                                alt="ContactUs Material Tailwind section"
                                className="w-full h-full lg:rounded-l-2xl rounded-2xl object-cover"
                            />
                            <Typography variant="h1" className="text-white text-4xl font-bold leading-10 absolute top-11 left-11">Contact us</Typography>
                            <div className="absolute bottom-0 w-full lg:p-11 p-5">
                                <div className="bg-white rounded-lg p-6 block">
                                    <a href="tel:+918849417218" className="flex flex-col sm:flex-row items-center mb-6 md:mb-8 lg:mb-10" aria-label="Call us">
                                        <PhoneIcon className="h-6 w-6 text-gray-800" />
                                        <Typography variant="h5" className="text-black text-base font-normal leading-6 ml-5 md:ml-6">+91 8849417218</Typography>
                                    </a>
                                    <a href="mailto:divyangradadiya03@gmail.com" className="flex flex-col sm:flex-row items-center mb-6 md:mb-8 lg:mb-10" aria-label="Email us">
                                        <EnvelopeIcon className="h-6 w-6 text-gray-800" />
                                        <Typography variant="h5" className="text-black text-base font-normal leading-6 ml-5 md:ml-6">divyangradadiya03@gmail.com</Typography>
                                    </a>
                                    <a
                                        href="https://www.google.com/maps?q=A-65,+Hariom+Soc.,+Simadagam,+Surat395006"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center flex-col sm:flex-row"
                                        aria-label="View location on map"
                                    >
                                        <MapPinIcon className="h-6 w-6 text-gray-800" />
                                        <Typography variant="h5" className="text-black text-base text-start font-normal leading-6 ml-5 md:ml-6">A-65, Hariom Soc., Simadagam, Surat, 395006.</Typography>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
                        <Typography variant="h2" className="text-black font-manrope text-4xl font-semibold leading-10 mb-11">Send Us A Message</Typography>
                        <Formik
                            initialValues={{
                                name: "",
                                email: "",
                                message: "",
                                copy: false,
                            }}

                        >
                            {() => (
                                <Form>
                                    <div className="mb-4">
                                        <Input
                                            id="name"
                                            name="name"
                                            label="Name"
                                            color="blue"
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <Input
                                            id="email"
                                            name="email"
                                            label="Email address"
                                            color="blue"
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <Textarea
                                            id="message"
                                            name="message"
                                            label="Message"
                                            color="blue"
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <Field
                                            type="checkbox"
                                            id="copy"
                                            name="copy"
                                            className="mr-2"
                                        />
                                        <Typography variant="small" className="text-gray-700">
                                            Send me a copy of this message
                                        </Typography>
                                    </div>
                                    <Button color="blue" className="w-full">
                                        Submit
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
            {/* <div className="absolute right-0 bottom-0 z-1 opacity-30 lg:opacity-100">

                <svg width="450" height="556" viewBox="0 0 450 556" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="277" cy="63" r="225" fill="url(#paint0_linear_var1)"></circle>
                    <circle cx="17.9997" cy="182" r="18" fill="url(#paint1_radial_var1)"></circle>
                    <circle cx="76.9997" cy="288" r="34" fill="url(#paint2_radial_var1)"></circle>
                    <circle cx="325.486" cy="302.87" r="180" transform="rotate(-37.6852 325.486 302.87)" fill="url(#paint3_linear_var1)"></circle>
                    <circle opacity="0.8" cx="184.521" cy="315.521" r="132.862" transform="rotate(114.874 184.521 315.521)" stroke="url(#paint4_linear_var1)"></circle>
                    <circle opacity="0.8" cx="356" cy="290" r="179.5" transform="rotate(-30 356 290)" stroke="url(#paint5_linear_var1)"></circle>
                    <circle opacity="0.8" cx="191.659" cy="302.659" r="133.362" transform="rotate(133.319 191.659 302.659)" fill="url(#paint6_linear_var1)"></circle>
                    <defs>
                        <linearGradient id="paint0_linear_var1" x1="-54.5003" y1="-178" x2="222" y2="288" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FF6347"></stop>
                            <stop offset="1" stopColor="#FF6347" stopOpacity="0"></stop>
                        </linearGradient>
                        <radialGradient id="paint1_radial_var1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.9997 182) rotate(90) scale(18)">
                            <stop offset="0.145833" stopColor="#FF6347" stopOpacity="0"></stop>
                            <stop offset="1" stopColor="#FF6347" stopOpacity="0.08"></stop>
                        </radialGradient>
                        <radialGradient id="paint2_radial_var1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(76.9997 288) rotate(90) scale(34)">
                            <stop offset="0.145833" stopColor="#FF6347" stopOpacity="0"></stop>
                            <stop offset="1" stopColor="#FF6347" stopOpacity="0.08"></stop>
                        </radialGradient>
                        <linearGradient id="paint3_linear_var1" x1="226.775" y1="-66.1548" x2="292.157" y2="351.421" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FF6347"></stop>
                            <stop offset="1" stopColor="#FF6347" stopOpacity="0"></stop>
                        </linearGradient>
                        <linearGradient id="paint4_linear_var1" x1="184.521" y1="182.159" x2="184.521" y2="448.882" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FF6347"></stop>
                            <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                        </linearGradient>
                        <linearGradient id="paint5_linear_var1" x1="356" y1="110" x2="356" y2="470" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FF6347"></stop>
                            <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                        </linearGradient>
                        <linearGradient id="paint6_linear_var1" x1="118.524" y1="29.2497" x2="166.965" y2="338.63" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FF6347"></stop>
                            <stop offset="1" stopColor="#FF6347" stopOpacity="0"></stop>
                        </linearGradient>
                    </defs>
                </svg>
            </div> */}


        </section>
    );
}

Contact.displayName = "/src/widgets/layout/Contact.jsx";

export default Contact;
