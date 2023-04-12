import { number } from "prop-types";
import { useState } from "react";

interface Props {
  totalAmount: number;
}

export const Achievements = ({ totalAmount }: Props) => {
  let studentsHelped = 8;

  return (
    <div className="achievements ">
      <div className="flex flex-row space-x-4">
        <div className="bg-red-100 p-2 flex flex-col items-center">
          <span>{studentsHelped}</span>
          <span>students helped</span>
        </div>
        <div className="bg-red-100 p-2 flex flex-col items-center">
          <span>{totalAmount}</span>
          <span>donated</span>
        </div>
      </div>
    </div>
  );
};
