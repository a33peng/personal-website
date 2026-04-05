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
                "incoming w26"    
            ]
        }, 
        { 
            role: "Full Stack Developer",
            company: "Midtown Drywall technologies",
            date: "June - August 2025",
            info: [
                "Built a full-stack e-commerce application using React Native, Node.js, and PostgreSQL, supporting 100+ daily users and 600+ monthly transactions. Implemented secure authentication while integrating RESTful APIs, and designed PostgreSQL schemas to ensure reliable data management and strong system performance."    
            ]
        }, 
        { 
            role: "Front-end Developer", 
            company: "Electrium",
            date: "April - August 2025",
            info: [
                "Built an interactive EV charging map integrating dynamic geospatial data with heatmap visualization, while developing responsive, modular UI components using TailwindCSS and translating Figma designs into production-ready interfaces."
            ]
        },
        { 
            role: "Software Developer",
            company: "Ontario Ministry of Transporation",
            date: "January - April 2024",
            info: [
                "Developed a Java application utilizing Apache Tomcat and Apache Maven, automating WebFOCUS SQL reports into a streamlined Java solution, enhancing data management and report generation efficiency. Standardized transportation systems analytics reports for internal stakeholders using HTML and CSS, ensuring consistent formatting and readability"
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
                            <div className="flex justify-between items-center mb-2">
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
