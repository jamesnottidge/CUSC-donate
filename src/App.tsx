import "./App.css";
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
              Together, we can do it.
            </span>
            <br />
            <span className="text-centre sm:text-start">
              The CUSC Donation Bank is an avenue through which we aim to see
              every student resume We have a goal of 7,000,000 naira in 5 days!
              With this sum of money, we can ensure that no student misses out
              on the opportunity to study because they lack funds.
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
