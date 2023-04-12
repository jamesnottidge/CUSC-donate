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

  return (
    <div className="w-full py-6 lg:py-20 md:flex xl:block">
      <div className="md:w-1/2 flex items-center justify-center">
        <CircularProgressBar percentage={percentage} />
      </div>
      <div className="mt-6 md:mt-16  xl:mt-20 md:w-1/2 md:mb-16 lg:mb-0">
        <Achievements totalAmount={(percentage * goalAmount) / 100} />
      </div>
    </div>
  );
}
