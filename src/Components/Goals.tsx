import React from "react";

type Props = {};

export default function Goals({}: Props) {
  return (
    <div className="py-12 px-6">
      <div className="text-4xl font-normal font-raleway mb-4">IRespond</div>
      <div className="text-lg font-light text-gray-700 mb-4">
        The IRespond scheme is an avenue through which we aim to see every
        student resume. We aim to raise of 7,000,000 naira in 5 days! With this
        sum of money, we can ensure that no student misses out on the
        opportunity to study because they lack funds.
        <br /> And we can do it!
      </div>
      <h4 className="text-2xl font-normal font-raleway mb-4">Goals</h4>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 xl:space-x-4 w-full p-2">
        <div className="border border-blueDeep rounded-md sm:w-1/2 py-6 px-4 flex flex-col flex-grow-1 items-center justify-center font-raleway">
          <i className="fas fa-user fa-2x fa-fw"></i>
          <p className="text-4xl sm:text-5xl font-number font-bold xl:text-3xl">
            44
          </p>
          <span className="text-lg text-center">
            Students aided <br />
          </span>
        </div>
        <div className="border border-blueDeep rounded-md py-6 flex flex-col items-center justify-center font-raleway sm:w-1/2 ">
          <i className="fas fa-user fa-2x fa-fw"></i>
          <p className="text-4xl sm:text-4xl md:text-5xl font-number font-bold xl:text-3xl">
            ₦7,000,000
          </p>
          <span className="text-lg text-center">
            in donations <br />
          </span>
        </div>
      </div>
      <a href="https://flutterwave.com/store/custudentcouncil/aqrlcjwfji5i89">
        <button className="py-3 md:py-6 xl:py-4 w-full bg-blueDeep mt-6 xl:mt-12 rounded-lg text-2xl lg:w-1/2 text-white">
          Donate Now!
        </button>
      </a>
    </div>
  );
}
