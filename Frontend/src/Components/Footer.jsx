

const Footer = () => {



    return (
        <div className="mt-30">
            <div className="w-full flex flex-col items-center gap-4">
                <div className="w-[50%]">
                    <div className="text-4xl">Do you want to talk with us?</div>

                </div>
                <div className="w-[50%]">
                    <div className="text-6xl font-semibold">letstalk@createnowly.com</div>
                </div>
            </div>

            <div className="pl-10 pt-10 pb-20"> © {new Date().getFullYear()} CreateNowly</div>
        </div>

    )

}



export default Footer;