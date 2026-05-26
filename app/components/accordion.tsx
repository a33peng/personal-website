'use client'

import { useState } from 'react'; 

export default function JobExperince() { 
    const [openIndex, setOpenIndex] = useState<number | null>(null); 
    const toggleAccordion = (index: number) => { 
        setOpenIndex(openIndex === index ? null : index); 
    }; 

    const internships = [
        {
            role: "Software Engineer",
            company: "Faire",
            date: "January - April 2026",
            info: [
                <>
                    Empowering brands and local retailers through a{" "}
                    <a
                        href="https://www.faire.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-300 hover:underline"
                        onClick={(e) => e.stopPropagation()}
                    >
                        global marketplace
                    </a>
                </>
            ]
        },
        { 
            role: "Full Stack Developer",
            company: "Midtown Drywall technologies",
            date: "June - August 2025",
            info: [
                "Developed a full-stack e-commerce platform serving 100+ daily users and 600+ monthly transactions, featuring secure authentication, RESTful APIs, and a scalable PostgreSQL backend."    
            ]
        }, 
        { 
            role: "Front-end Developer", 
            company: "Electrium",
            date: "April - August 2025",
            info: [
                "Built an interactive EV charging map with Mapbox GL JS and Next.js, integrating geospatial heatmaps and modular TailwindCSS components from Figma designs."
            ]
        },
        { 
            role: "Software Developer",
            company: "Ontario Ministry of Transporation",
            date: "January - April 2024",
            info: [
                "Automated WebFOCUS SQL reports into a Java solution with Apache Tomcat/Maven, standardizing stakeholder reports deployed via Azure DevOps CI/CD pipelines."
            ]
        },
    ]

     return (
        <div className="max-w-2xl ">            
            <div className="space-y-5">
                {internships.map((job, index) => (
                    <div 
                        key={index}  
                        className="bg-pink-50 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl overflow-hidden"
                    >
                        <button 
                            onClick={() => toggleAccordion(index)}  
                            className="w-full p-5 text-left hover:bg-pink-100 transition-colors"
                        > 
                            {/* title and date */}
                            <div className="flex justify-between items-center">
                                <h2 className="font-raleway font-bold text-xl">
                                    {job.role}  
                                </h2> 
                                <p className="font-raleway text-sm text-gray-600 ml-4">
                                    {job.date}  
                                </p>
                            </div>

                            {/* company and icon */}
                            <div className="flex justify-between items-center">
                                <p className="font-raleway text-gray-700 text-sm">
                                    {job.company}  
                                </p>
                                <span className="text-2xl font-light">
                                    {openIndex === index ? '−' : '+'}  
                                </span>
                            </div>
                        </button>

                        {/* collapsible content  */}
                        {openIndex === index && (
                            <div className="px-6 pb-6 pt-0 border-t border-pink-200">
                                <ul className="space-y-2 font-raleway mt-4">
                                    {job.info.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    ); 
}
