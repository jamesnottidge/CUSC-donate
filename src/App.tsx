import { useState, useEffect } from "react";
import "./App.css";
import { getAllTransactions } from "./utlis/flutterwave";
import Progress from "./components/Progress";
import Navbar from "./components/Navbar";
import logo from "./assets/CU-Logo.png";
import Goals from "./components/Goals";

function App() {
  const goalAmount: number = 7000000;

  return (
    <div className="min-h-screen xl:h-screen w-full overflow-hidden">
      <Navbar logo={logo} />
      <div className="w-full mx-auto xl:flex flex-row min-h-screen lg:bg-gray-50 ">
        <div className=" xl:w-1/2 p-6 sm:p-12 md:p-20 lg:w-4/5 lg:mx-auto bg-gray-50">
          <div className="text-5xl font-bold font-raleway mb-2 text-blueDeep mt-10 sm:mt-0">
            IRespond
          </div>
          <div className="text-lg font-light text-gray-700 mb-2">
            <span className="text-blueDeep text-xl">
              Together, we can make a difference.
            </span>
            <br /> <br />
            <span className="text-centre sm:text-start">
              Your donation, no matter how small, can help bring students back
              to school and provide them with the tools they need to succeed. By
              giving, you are not only investing in their education but also in
              their future.
            </span>
          </div>
          <div className="md:w-[300px] lg:w-[380px] ">
            <a href="https://flutterwave.com/store/custudentcouncil/aqrlcjwfji5i89">
              <button className="py-4 w-full bg-blueDeep mt-6 rounded-lg text-xl font-normal text-white">
                Donate Now!
              </button>
            </a>
          </div>
          <Progress goalAmount={goalAmount} />
        </div>
        <div className="xl:w-1/2 p-6 sm:p-12 md:p-20 lg:w-4/5 lg:mx-auto">
          <Goals />
        </div>
      </div>
    </div>
  );
}

export default App;
