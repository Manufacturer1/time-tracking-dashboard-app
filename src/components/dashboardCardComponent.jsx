import React from "react";
import iconEllipsis from '../images/icon-ellipsis.svg';

const DashBoardCard = ({backgroundIcon,type,hrs,time,backgroundColor,iconPosition}) =>{
    
    return(
        <div className="relative rounded-xl flex flex-col">
            <div className={`${backgroundColor} rounded-t-xl pr-3 h-14 overflow-hidden mb-[-1em]`}>
                <img className={`relative ${iconPosition} block ml-auto w-18`} src={backgroundIcon} alt="icon work"/>
            </div>
            <div className="w-full z-10 p-5 rounded-xl basis-[80%] bg-neutral-darkBlue">
                <div className="flex justify-between items-center mb-4">
                    <h4 className="text-base text-white">{type}</h4>
                    <div>
                        <img src={iconEllipsis} alt="icon elipsis" />
                    </div>
                </div>
                <h1 className="text-5xl font-extralight mb-2">{hrs} hrs</h1>
                <p className="text-xs text-neutral-dessaturatedBlue">Last Week {time} hrs</p>
            </div>
        </div>
    );
};

export default DashBoardCard;