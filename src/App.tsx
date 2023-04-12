import { useState, useEffect } from "react";
import "./App.css";
import { getAllTransactions } from "./utlis/flutterwave";
import CircularProgressBar from "./Components/progresscirclebar";
import Navbar from "./Components/Navbar";
import logo from "./assets/CU-Logo.png";

function App() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setPercentage(75);
    }, 500);
  }, []);

  useEffect(() => {
    const transactions = getAllTransactions();
    console.log(transactions);
  });

  return (
    <div className="h-screen w-full overflow-hidden">
      <Navbar logo={logo} />
      <div className="w-full mx-auto flex flex-row h-screen">
        <div className="lg:w-1/2 bg-gray-300 py-20">
          <CircularProgressBar percentage={percentage} />
        </div>
        <div className="lg:w-1/2 p-20">
          <div className="text-4xl font-normal font-raleway">CU IRespond</div>
        </div>
      </div>
    </div>
  );
}

export default App;
