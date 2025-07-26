import { motion } from "framer-motion";
import linkedin from '../icons/linkedin.png'
import facebook from '../icons/facebook.png'
import instagram from '../icons/instagram.png'


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

                <div className="h-[900px] w-[1px]  bg-[#00FFC6]"></div>
                <div className="absolute left-16 top-9">
                    <div className="text-5xl font-semibold">Get in touch with us.</div>
                    <div className="text-5xl font-semibold">We're here to assist you.</div>
                </div>
                <div className="absolute right-16 top-9 flex flex-col gap-4">
                    <div className="w-12 h-12 border border-[#00FFC6] rounded-full flex items-center justify-center overflow-hidden ">
                        <img src={linkedin} alt="LinkedIn" className="w-4 h-4 object-contain cursor-pointer " />
                    </div>
                    <div className="w-12 h-12 border border-[#00FFC6] rounded-full flex items-center justify-center overflow-hidden">
                        <img src={facebook} alt="LinkedIn" className="w-4 h-4 object-contain cursor-pointer" />
                    </div>
                    <div className="w-12 h-12 border border-[#00FFC6] rounded-full flex items-center justify-center overflow-hidden">
                        <img src={instagram} alt="LinkedIn" className="w-4 h-4 object-contain cursor-pointer" />
                    </div>
                </div>

                <form
                    action=""
                    className="absolute top-[20%] left-1/2 -translate-x-1/2
             bg-white/10 p-8 rounded-2xl backdrop-blur-md
             w-[90%] max-w-6xl text-white shadow-xl border border-white/20
             space-y-6"
                >
                    <h2 className="text-3xl font-bold text-center mb-4">Start Your Project</h2>

                    {/* Inputs */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                         {/* First Name */}
                        <div className="w-full relative">
                            <input
                                id="firstname"
                                type="text"
                                required
                                placeholder=" "
                                className="peer w-full p-3 pt-5 rounded-lg bg-transparent border border-white/50 
                                            placeholder-transparent text-white focus:border-[#00FFC6] outline-none transition"
                            />
                            <label
                                htmlFor="firstname"
                                className="absolute left-3 top-3 text-white/60 peer-focus:bg-[#373737] peer-focus:rounded-lg px-1
                                              transition-all duration-200 ease-out
                                              peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                                              peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#00FFC6]
                                              peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-sm"
                            >
                                First Name*
                            </label>
                        </div>
                        {/* Last Name */}
                        <div className="w-full relative">
                            <input
                                id="lastname"
                                type="text"
                                required
                                placeholder=" "
                                className="peer w-full p-3 pt-5 rounded-lg bg-transparent border border-white/50 
                                            placeholder-transparent text-white focus:border-[#00FFC6] outline-none transition"
                            />
                            <label
                                htmlFor="lastname"
                                className="absolute left-3 top-3 text-white/60 peer-focus:bg-[#373737] peer-focus:rounded-lg px-1
                                              transition-all duration-200 ease-out
                                              peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                                              peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#00FFC6]
                                              peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-sm"
                            >
                                Last Name*
                            </label>
                        </div>
                        {/* Email */}
                        <div className="w-full relative">
                            <input
                                id="email"
                                type="text"
                                required
                                placeholder=" "
                                className="peer w-full p-3 pt-5 rounded-lg bg-transparent border border-white/50 
                                            placeholder-transparent text-white focus:border-[#00FFC6] outline-none transition"
                            />
                            <label
                                htmlFor="email"
                                className="absolute left-3 top-3 text-white/60 peer-focus:bg-[#373737] peer-focus:rounded-lg px-1
                                              transition-all duration-200 ease-out
                                              peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                                              peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#00FFC6]
                                              peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-sm"
                            >
                                Email*
                            </label>
                        </div>
                        {/* Phone Number */}
                        <div className="w-full relative">
                            <input
                                id="phonenumber"
                                type="text"
                                required
                                placeholder=" "
                                className="peer w-full p-3 pt-5 rounded-lg bg-transparent border border-white/50 
                                            placeholder-transparent text-white focus:border-[#00FFC6] outline-none transition"
                            />
                            <label
                                htmlFor="phonenumber"
                                className="absolute left-3 top-3 text-white/60 peer-focus:bg-[#373737] peer-focus:rounded-lg px-1
                                              transition-all duration-200 ease-out
                                              peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                                              peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#00FFC6]
                                              peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-sm"
                            >
                                Phone Number*
                            </label>
                        </div>
                        {/* Budget */}
                        <div className="w-full relative">
                            <input
                                id="budget"
                                type="text"
                                required
                                placeholder=" "
                                className="peer w-full p-3 pt-5 rounded-lg bg-transparent border border-white/50 
                                            placeholder-transparent text-white focus:border-[#00FFC6] outline-none transition"
                            />
                            <label
                                htmlFor="budget"
                                className="absolute left-3 top-3 text-white/60 peer-focus:bg-[#373737] peer-focus:rounded-lg px-1
                                              transition-all duration-200 ease-out
                                              peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                                              peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#00FFC6]
                                              peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-sm"
                            >
                                Budget*
                            </label>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <p className="mb-2 font-semibold text-white">Services Needed</p>
                        <div className="flex flex-wrap gap-4">
                            {[
                                "Web Development",
                                "Mobile Development",
                                "Cloud Solutions",
                                "AI/ML Models",
                                "Other Services",
                            ].map((service) => (
                                <label
                                    key={service}
                                    className="flex items-center space-x-2 cursor-pointer"
                                >
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-5 w-5 rounded focus:ring-0 focus:outline-none"
                                        style={{ accentColor: '#00FFC6' }}
                                    />
                                    <span className="text-white">{service}</span>
                                </label>
                            ))}
                        </div>
                        <p className="text-xs mt-1 opacity-70">
                            * Please select at least one service.
                        </p>
                    </div>

                    {/* Project Description */}

                    <div className="w-full relative">
                        <textarea
                            id="projectdescription"
                            placeholder=" "
                            required
                            rows="4"
                            className="peer w-full p-3 rounded-lg bg-transparent border border-white/50 
               placeholder-white/60 focus:border-[#00FFC6] outline-none transition"
                        ></textarea>
                        <label
                            htmlFor="firstname"
                            className="absolute left-3 top-3 text-white/60 peer-focus:bg-[#373737] peer-focus:rounded-lg px-1
                                              transition-all duration-200 ease-out
                                              peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                                              peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#00FFC6]
                                              peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-sm"
                        >
                            Project Description*
                        </label>
                    </div>

                    {/* Project Document Upload */}
                    <label className="block">
                        <span className="text-white font-semibold mb-1 block">
                            Upload Project Document* (SRS)
                        </span>
                        <input
                            type="file"
                            required
                            className="w-full text-sm text-gray-200
                 file:mr-4 file:py-2 file:px-4
                 file:rounded-full file:border-0
                 file:text-sm file:font-semibold
                 file:bg-[#00FFC6] file:text-black hover:file:bg-[#00d9a6]"
                        />
                    </label>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#00FFC6] text-black font-bold py-3 rounded-lg 
               hover:bg-[#00d9a6] transition duration-300 cursor-pointer"
                    >
                        Submit
                    </button>
                </form>


                <div className="h-[900px] w-[1px]  bg-[#00FFC6]"></div>
            </div>

            <div className="w-full mb-8 relative px-11 bottom-[25px]">
                <hr className="w-full text-[#00FFC6]" />

            </div>




        </div>
    );
};

export default ContactUs;
