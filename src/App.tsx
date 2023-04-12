import { useState, useEffect } from "react";
import "./App.css";
import { getAllTransactions } from "./utlis/flutterwave";
import CircularProgressBar from "./Components/progresscirclebar";
import Timer from "./Components/timer";
import Navbar from "./Components/Navbar";

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
    <div className="min-h-screen w-full">
      <Navbar />
      <div className="lg:container min-h-screen w-full mx-auto">
        <CircularProgressBar percentage={percentage} />
        <div className="mt-8 py-8">
          <span>Time Left</span>
          <Timer />
        </div>
      </div>
    </div>
  );
}

export default App;
