import React from "react";
import Timer from "./timer";

type Props = {
  logo: string;
};

export default function Navbar({ logo }: Props) {
  return (
    <>
      <div className="bg-gray-100 py-2.5 px-6 sm:px-12 lg:px-20">
        <div className="sm:flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="" className="w-10my-auto mx-auto" />
          </div>
          <div>
            <div className="border border-blueDeep py-2.5 px-4 rounded-lg text-center sm:text-start mt-2 sm">
              <span className="hidden md:block">Time Left</span>
              <Timer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
