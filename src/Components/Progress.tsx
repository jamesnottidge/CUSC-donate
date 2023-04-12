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

  const allTransactions: Transaction[] = [];
  let totalAmount: number = 0;

  useEffect(() => {
    const getTransactions = async () => {
      const data: Transaction[] = await getAllTransactions();
      allTransactions.push(...data);
    };
    getTransactions();
    allTransactions.map(
      (transaction) => (totalAmount += transaction.amount_settled)
    );
    console.log(totalAmount);
    setPercentage((totalAmount / goalAmount) * 100);
  }, []);

  return (
    <div className="lg:w-1/2 py-20">
      <div>
        <CircularProgressBar percentage={percentage} />
        <Achievements totalAmount={totalAmount} />
      </div>
    </div>
  );
}
