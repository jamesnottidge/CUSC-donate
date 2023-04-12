import React from "react";
import Timer from "./timer";
// import logo from "../assets/CU-Logo.png";

type Props = {};
type LogoType = string;
const logo: LogoType = "../assets/CU-Logo.png";

export default function Navbar({}: Props) {
  return (
    <>
      <div className="bg-gray-100 py-2.5 px-6 sm:px-12">
        <div className="flex justify-between">
          <div>
            <img src={logo} alt="" className="w-60" />
          </div>
          <div>
            <div className="border border-blueDeep py-2.5 px-4 rounded-lg">
              <span className="hidden md:block">Time Left</span>
              <Timer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
