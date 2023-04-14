import React from "react";
import { useState, useEffect } from "react";
import { Transaction } from "../types";
import { getAllTransactions } from "../utlis/flutterwave";
import { Achievements } from "./Achievements";
import CircularProgressBar from "./progresscirclebar";

interface Props {
  goalAmount: number;
}

export default function Progress({ goalAmount }: Props) {
  const [percentage, setPercentage] = useState(0);
  const [allTransactions, setAllTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const data: Transaction[] = await getAllTransactions();
        setAllTransactions(data);

        const totalAmount = data.reduce(
          (acc, transaction) => acc + transaction.amount_settled,
          0
        );
        setPercentage((totalAmount / goalAmount) * 100);
      } catch (error) {
        console.error(error);
      }
    };

    getTransactions();
  }, [goalAmount]);

  console.log(percentage);
  return (
    <div className="mt-12 md:mt-4 xl:mt-16 py-6 lg:py-12">
      {allTransactions ? (
        ""
      ) : (
        <span className="text-sm text-blueDeep font-raleway font-light">
          Please wait, may take a few seconds.
        </span>
      )}
      <div className="w-full md:flex">
        <div className="md:w-1/2 ">
          <Achievements totalAmount={(percentage * goalAmount) / 100} />
        </div>
        <div className="md:w-1/2 mt-12 md:mt-4 xl:mt-16 flex items-center justify-center">
          <CircularProgressBar percentage={percentage} />
        </div>
      </div>
    </div>
  );
}
