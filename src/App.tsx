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
    <div className="min-h-screen w-full overflow-hidden">
      <Navbar logo={logo} />
      <div className="w-full mx-auto xl:flex flex-row min-h-screen">
        <div className="bg-gray-200 xl:w-1/2 p-3 sm:p-12 md:p-20">
          <Progress goalAmount={goalAmount} />
        </div>
        <div className="xl:w-1/2 p-3 sm:p-12 md:p-20">
          <Goals />
        </div>
      </div>
    </div>
  );
}

export default App;
