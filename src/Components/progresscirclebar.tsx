import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Transition } from "@headlessui/react";
import { getAllTransactions } from "../utlis/flutterwave";
import { Transaction } from "../types";

interface Props {
  percentage: number;
  strokeWidth?: number;
  duration?: number;
  color?: string;
  textColor?: string;
}

const CircularProgressBar: React.FC<Props> = ({
  percentage,
  strokeWidth = 12,
  duration = 9000,
  color = "text-blue-500",
  textColor = "text-gray-800",
}) => {
  const [displayPercentage, setDisplayPercentage] = useState(0);
  useEffect(() => {
    let startTime: number;

    const animation = (currentTime: number) => {
      if (startTime === undefined) {
        startTime = currentTime;
      }

      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      setDisplayPercentage(progress * percentage);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  }, [percentage, duration]);

  return (
    <div className="relative">
      <CircularProgressbar
        value={displayPercentage}
        text={`${Math.round(displayPercentage)}%`}
        strokeWidth={strokeWidth}
        className={`w-72 h-72 mx-auto ${color} `}
        // trailClassName="stroke-gray-300"
        // styles={{
        //   path: {
        //     transition: "stroke-dashoffset 1.0s ease 0s",
        //   },
        //   text: {
        //     fill: textColor,
        //     fontSize: "16px",
        //   },
        // }}
        styles={buildStyles({
          strokeLinecap: "butt",
        })}
      />

      <Transition
        show={displayPercentage === percentage}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`${textColor} font-bold text-2xl`}></div>
        </div>
      </Transition>
    </div>
  );
};

export default CircularProgressBar;
