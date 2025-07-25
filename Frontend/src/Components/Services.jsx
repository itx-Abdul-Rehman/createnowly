import React from "react";
import webdevelopment from '../images/webdevelopment.png'
import mobileapplication from '../images/mobileapplication.png'
import cloudsolutions from '../images/cloudsolutions.png'


const projects = [
    {
        title: "Web Application Development",
        image: webdevelopment,
        description:
            "Design and development of responsive and scalable web applications using modern technologies like React, Node.js, and MongoDB, tailored to meet business needs and user expectations.",
    },
    {
        title: "Mobile Application Development",
        image: mobileapplication,
        description:
            "Building cross-platform mobile apps using React Native and Flutter, offering seamless user experiences, real-time features, and smooth integration with backend APIs.",
    },
    {
        title: "Cloud Solutions",
        image: cloudsolutions,
        description:
            "Providing cloud-native solutions including deployment, scaling, and automation using AWS, Docker, and Kubernetes to ensure high availability, performance, and security.",
    },
];

const Services = () => {
    return (
        <div
            id="projects"
            className="w-full py-20 px-4 sm:px-6 md:px-10 lg:px-16 text-white bg-[#151515]"
        >
            

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-14">
                Services
            </h2>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {projects.map((project, index) => (

                    <div className="bg-[#373737]  bg-opacity-60 backdrop-blur-md hover:drop-shadow-[0_0_4px_#00FFC6] rounded-2xl shadow-xl p-5 hover:scale-105 transform transition duration-500">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-contain mb-4 rounded-xl "
                        />
                        <h3 className="text-xl text-[#00FFC6] underline  underline-[#00FFC6]  font-semibold mb-2">
                            {project.title}
                        </h3>
                        <p className="text-sm  leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default Services;
