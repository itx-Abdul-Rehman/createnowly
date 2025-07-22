

const Navbar = () => {

    return (
        <div className="w-full flex justify-around text-white font-poppins pt-2">
            <div className="py-2">CreateNowly</div>

            <div className="flex gap-10 px-4 py-2 rounded-lg shadow-lg hover:drop-shadow-[0_0_4px_#00FFC6] bg-[#373737]  backdrop-blur-sm transition ease-in-out duration-300">
                <div className="cursor-pointer hover:bg-transparent hover:drop-shadow-[0_0_12px_#00FFC6,0_0_24px_#00FFC6] transition duration-300">
                    About Us
                </div>
                <div className="cursor-pointer hover:bg-transparent hover:drop-shadow-[0_0_12px_#00FFC6,0_0_36px_#00FFC6] transition ease-in-out duration-300">
                    Services
                </div>
                <div className="cursor-pointer hover:bg-transparent hover:drop-shadow-[0_0_12px_#00FFC6,0_0_28px_#00FFC6] transition ease-in-out duration-300">
                    Portfolio
                </div>
                <div className="cursor-pointer hover:bg-transparent hover:drop-shadow-[0_0_12px_#00FFC6,0_0_28px_#00FFC6] transition ease-in-out duration-300">
                    Contact Us
                </div>

            </div>


        </div>
    )

}


export default Navbar;