import { useState, useEffect } from "react";
import "./App.css";
import { getAllTransactions } from "./utlis/flutterwave";
import Progress from "./components/Progress";
import Navbar from "./components/Navbar";
import logo from "./assets/CU-Logo.png";

function App() {
  const goalAmount: number = 7000000;

  return (
    <div className="h-screen w-full overflow-hidden">
      <Navbar logo={logo} />
      <div className="w-full mx-auto flex flex-row h-screen">
        <div className="bg-gray-300 lg:w-1/2 p-20">
          <Progress goalAmount={goalAmount} />
        </div>
        <div className="lg:w-1/2 p-20">
          <div className="text-4xl font-normal font-raleway">CU IRespond</div>
        </div>
      </div>
    </div>
  );
}

export default App;
