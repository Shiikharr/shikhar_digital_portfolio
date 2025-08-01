"use client";
import React from "react";
import FlowingMenu from "./ui/FlowingMenu";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const FlowingMenuDemo = () => {
  const handleOpenResume = () => {
    window.open('/CV_SDE_Temp.pdf', '_blank');
  };
  const demoItems = [
    { link: 'https://www.fau.de/', text: 'M.Sc in Data Science', image: '/faulogo.png' },
    { link: 'https://www.bajajfinserv.in/', text: 'Senior Software Engineer', image: '/bajajlogo.png' },
    { link: 'https://www.bajajfinserv.in/', text: 'Software Engineer', image: '/bajajlogo.png' },
    { link: 'https://www.bajajfinserv.in/', text: 'Intern - Software Engineer', image: '/bajajlogo.png' },
    { link: 'https://vitbhopal.ac.in/', text: 'B.Tech in CSE & Engineering', image: '/vitlogo.png' },
  ];

  return (
    <div className="py-20" id="timeline"> {/* Changed background color */}
      <h1 className="heading">
        My <span className="text-purple">Timeline</span>
      </h1>
      <div className="py-10 flex justify-center w-full px-4 md:px-0">
        <MagicButton
          title="View Full Resume"
          position="right"
          handleClick={handleOpenResume}
          otherClasses="w-full md:w-auto max-w-[300px] md:max-w-none"
          icon={<FaLocationArrow className="text-xs md:text-sm" />}
        />
      </div>  
      <div className="h-[600px] relative"> {/* Converted inline styles to Tailwind classes */}
      <FlowingMenu items={demoItems} />
    </div>
    </div>
  );
};

export default FlowingMenuDemo;