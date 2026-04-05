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
                ""    
            ]
        }, 
        { 
            role: "Front-end Developer", 
            company: "Electrium",
            date: "April - August 2025",
            info: [
                ""
            ]
        },
        { 
            role: "Software Developer",
            company: "Ontario Ministry of Transporation",
            date: "January - April 2024",
            info: [
                ""
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
                                <h2 className="font-loar font-bold text-xl">
                                    {job.role}  
                                </h2> 
                                <p className="font-loar text-sm text-gray-600 ml-4">
                                    {job.date}  
                                </p>
                            </div>

                            {/* company and icon */}
                            <div className="flex justify-between items-center">
                                <p className="font-loar text-gray-700 text-sm">
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
                                <ul className="space-y-2 font-loar mt-4">
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
