import React from "react";
import profileImage from '../images/image-jeremy.png';


const Report = ({dateLabels,onChangeTimeFrame,timeFrame}) =>{
   
    return(
        <div className="bg-neutral-darkBlue rounded-xl">
            <div className="flex items-center gap-4 w-full md:block max-h-[70%] bg-primary-blue rounded-xl p-6 ">
                <div className="w-16 mb-6 border-white border-2 rounded-full">
                    <img className="block w-full h-full object-cover" src={profileImage} alt="Profile dashboard icon" />
                </div>
                <div>
                    <p className="text-sm text-neutral-paleBlue opacity-80 md:mb-1">Report for</p>
                    <h1 className="text-2xl md:text-4xl text-white font-extralight tracking-wide mb-7">Jeremy <br className="hidden md:block"/> Robson</h1>
                </div>
            </div>
            <ul className="flex items-center justify-between md:block md:space-y-3 p-6 text-sm text-neutral-dessaturatedBlue">
                {
                    dateLabels.map((label,index) =>{
                        return(
                            <li onClick={() => onChangeTimeFrame(index)} className={`${timeFrame === index ? 'text-white' : ''} cursor-pointer hover:text-white transform-color duration-300`} key={index}>{label}</li>      
                        );
                    })
                }
            </ul>
        </div>
    );
};

export default Report;