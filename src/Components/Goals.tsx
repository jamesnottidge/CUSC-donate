import React from "react";
import targetSVG from "../assets/Boy-throwing-a-dart.svg";
type Props = {};

export default function Goals({}: Props) {
  return (
    <div className="">
      {/* <div className="text-5xl font-bold font-raleway mb-2 text-blueDeep">
        IRespond
      </div>
      <div className="text-lg font-light text-gray-700 mb-4">
        <span className="text-blueDeep text-xl">
          Together, we can make a difference.
        </span>
        <br /> <br /> Your donation, no matter how small, can help bring
        students back to school and provide them with the tools they need to
        succeed. By giving, you are not only investing in their education but
        also in their future.
      </div> */}
      {/* <h4 className="text-4xl xl:text-3xl font-normal font-raleway mb-4 text-blueDeep">
        Target
      </h4> */}
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
    </div>
  );
}
