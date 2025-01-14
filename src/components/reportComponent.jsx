import React from "react";
import profileImage from '../images/image-jeremy.png';

const Report = () =>{
    
    return(
        <div className="bg-neutral-darkBlue rounded-xl">
            <div className="w-full max-h-[70%] bg-primary-blue rounded-xl p-6 ">
                <div className="w-16 mb-6 border-white border-2 rounded-full">
                    <img className="block w-full h-full object-cover" src={profileImage} alt="Profile dashboard icon" />
                </div>
                <p className="text-sm text-neutral-paleBlue opacity-80 mb-1">Report for</p>
                <h1 className="text-4xl text-white font-extralight tracking-wide mb-7">Jeremy <br/> Robson</h1>
            </div>
            <ul className="p-6 space-y-3 text-sm text-neutral-dessaturatedBlue">
                <li>Daily</li>
                <li>Weekly</li>
                <li>Monthly</li>
            </ul>
        </div>
    );
};

export default Report;