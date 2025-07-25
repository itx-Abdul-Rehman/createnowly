import { motion } from "framer-motion";

const ContactUs = () => {
    return (
        <div className="w-full flex flex-col items-center mt-26">
            <div className="w-full flex justify-around items-center">
                <hr className="w-1/3 text-[#00FFC6] " />
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold ">
                    Contact Us
                </div>
                <hr className="w-1/3 text-[#00FFC6]" />
            </div>

            <div className="w-full flex justify-between px-[2.9%] relative bottom-[25px]">

                <div className="h-[200px] w-[1px]  bg-[#00FFC6]"></div>
                <div className="absolute left-16 top-9">
                    <div className="text-5xl font-semibold">Get in touch with us.</div>
                    <div className="text-5xl font-semibold">We're here to assist you.</div>
                </div>
                <div className="absolute right-16 top-9 flex flex-col gap-4">
                    <div className="w-14 h-14 border border-[#00FFC6]  rounded-full"></div>
                     <div className="w-14 h-14 border border-[#00FFC6]  rounded-full"></div>
                      <div className="w-14 h-14 border border-[#00FFC6]  rounded-full"></div>
                </div>
                <div className="h-[200px] w-[1px]  bg-[#00FFC6]"></div>


            </div>

           


        </div>
    );
};

export default ContactUs;
