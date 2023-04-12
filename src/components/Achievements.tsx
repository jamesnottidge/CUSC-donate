import { number } from "prop-types";
import { useState } from "react";

interface Props {
  totalAmount: number;
}

export const Achievements = ({ totalAmount }: Props) => {
  let studentsHelped = 8;

  return (
    <div className="flex flex-col md:items-center sm:flex-row md:flex-col xl:flex-row justify-center sm:space-x-4 md:space-x-0 xl:space-x-4 space-y-4 sm:space-y-0 md:space-y-4 xl:space-y-0 mx-auto lg:w-[320px] xl:w-[450px] w-full">
      <div className="bg-blueDeep py-8 flex flex-col items-center rounded-md sm:w-1/2 md:w-full lg:w-full">
        <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
          {studentsHelped}
        </span>
        <span className="text-center">Students helped</span>
      </div>
      <div className="border border-blueDeep py-8 flex flex-col items-center rounded-md sm:w-1/2 md:w-full lg:w-full">
        <span className="text-2xl sm:text-4xl md:text-5xl xl:text-5xl lg:text-6xl font-semibold">
          ₦{totalAmount}
        </span>
        <span>Donated</span>
      </div>
    </div>
  );
};
