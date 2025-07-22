import react from '../images/react.png'
import nodejs from '../images/node-js.png'
import mongodb from '../images/mongodb.png'
import aws from '../images/aws.png'
import java from '../images/java.png'
import docker from '../images/docker.png'
import selenium from '../images/selenium.png'
import python from '../images/python.png'
import cpluplus from '../images/c++.png'
import javascript from '../images/javascript.png'

const Main = () => {

    return (
        <div className="w-full  mt-20 flex flex-col justify-center items-center ">
            <div className="text-5xl mb-6 text-[#00FFC6] font-semibold drop-shadow-[0_0_10px_#00FFC6] z-50">Bring Your Project Ideas to Life with CreateNowly</div>
            <p className="z-50 mb-2">A powerful portal for individuals and businesses to submit custom project requests and receive expert support all in one place.</p>

            {/* Circles */}
            <div className="w-[800px] relative h-[800px] bg-transparent border border-dashed  border-[#D9D9D9] z-10 rounded-full flex justify-center items-center ">
                <img src={python} alt="python" className='w-12 absolute top-20 left-26' />
                 <img src={java} alt="java" className='w-12 absolute bottom-20 right-30' />
                <div className="w-[700px] relative h-[700px] bg-transparent border border-dashed  border-[#D9D9D9] z-10 rounded-full flex justify-center items-center ">
                    <img src={selenium} alt="selenium" className='w-12 absolute bottom-20 left-19' />
                    <img src={docker} alt="docker" className='w-12 absolute bottom-80 right-[-24px]' />
                    <div className="w-[600px] relative h-[600px] bg-transparent border border-dashed  border-[#D9D9D9] z-10 rounded-full flex justify-center items-center ">
                        <img src={react} alt="react" className='w-12 absolute top-20 right-12' />
                        <img src={cpluplus} alt="c++" className='w-12 absolute top-24 left-9' />
                        <div className="w-[500px] h-[500px] relative bg-transparent border border-dashed  border-[#D9D9D9] z-10 rounded-full flex justify-center items-center  ">
                            <img src={mongodb} alt="mongodb" className='w-8 absolute left-[-16px] rotate-60' />
                                <img src={javascript} alt="javascript" className='w-12 absolute right-[-12px] bottom-40' />
                            <div className="w-[400px] h-[400px] relative bg-transparent border border-dashed  border-[#D9D9D9] z-10 rounded-full flex justify-center items-center ">
                                <img src={nodejs} alt="node-js" className='w-12 absolute right-11 bottom-[24px]' />
                                <div className="w-[300px] h-[300px] relative bg-transparent border border-dashed  border-[#D9D9D9] z-10 rounded-full ">
                                    <img src={aws} alt="aws" className='w-12 absolute left-16 ' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>







        </div >
    )

}


export default Main;