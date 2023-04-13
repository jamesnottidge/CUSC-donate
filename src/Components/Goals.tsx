import React from "react";
import targetSVG from "../assets/Boy-throwing-a-dart.svg";
type Props = {};

export default function Goals({}: Props) {
  return (
    <div className="">
      <img
        src={targetSVG}
        alt="boy target"
        className="border border-blueDeep rounded-lg w-full object-cover"
      />

      <div className="flex flex-col md:items-center sm:flex-row md:flex-row justify-start sm:space-x-4  space-y-4 sm:space-y-0 lg:space-y-0 md:space-x-4 md:w-full lg:w-full w-full mt-4">
        <div className="border border-blueDeep py-8 flex flex-col items-center rounded-md sm:w-1/2 md:w-1/2">
          <span className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold text-blueDeep">
            44
          </span>
          <span className="text-center text-blueDeep text-lg pt-1">
            Students to be aided
          </span>
        </div>
        <div className="border border-blueDeep py-8 flex flex-col items-center rounded-md sm:w-1/2 md:w-1/2">
          <span className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold text-blueDeep">
            ₦7,000,000
          </span>
          <span className="text-center text-blueDeep text-lg pt-1">
            in donations
          </span>
        </div>
      </div>
      {/* <a href="https://flutterwave.com/store/custudentcouncil/aqrlcjwfji5i89">
        <button className="py-3 md:py-6 xl:py-4 w-full bg-blueDeep mt-6 xl:mt-12 rounded-lg text-2xl lg:w-1/2 text-white">
          Donate Now!
        </button>
      </a> */}
    </div>
  );
}
