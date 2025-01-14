import React from "react";
import iconEllipsis from '../images/icon-ellipsis.svg';

const DashBoardCard = ({backgroundIcon,type,hrs,time,backgroundColor,iconPosition}) =>{
    
    return(
        <div className="relative rounded-xl flex flex-col">
            <div className={`${backgroundColor} rounded-t-xl pr-3 h-14 overflow-hidden mb-[-1em]`}>
                <img className={`relative ${iconPosition} block ml-auto w-18`} src={backgroundIcon} alt="icon work"/>
            </div>
            <div className="w-full z-10 p-5 rounded-xl basis-[80%] cursor-pointer bg-neutral-darkBlue hover:bg-neutral-darkBlueLighter transition-bg duration-300">
                <div className="flex justify-between items-center mb-4">
                    <h4 className="text-base text-white">{type}</h4>
                    <div className="group">
                    <svg
                        width="21"
                        height="5"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-[#BBC0FF] group-hover:fill-white transition-colors duration-300"
                            >
                        <path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" />
                    </svg>
                </div>
                </div>
                <div className="flex items-center justify-between md:block">
                    <h1 className="text-4xl md:text-5xl font-extralight mb-2">  {hrs}hrs
                    </h1>
                    <p className="text-sm md:text-xs text-neutral-dessaturatedBlue">Last Week - {time}hrs</p>
                </div>
            </div>
        </div>
    );
};

export default DashBoardCard;