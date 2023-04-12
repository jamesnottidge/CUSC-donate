import axios, { all } from "axios";
import { Transaction } from "../types";

const apiUrl: string =
  "https://drab-lime-chinchilla-shoe.cyclic.app/api/transactions";
const fromDate = "2023-04-11";
const pageSize = 100;
const getAllTransactions = async () => {
  let allTransactions: Transaction[] = [];
  await fetch(`${apiUrl}`)
    .then((response) => response.json())
    .then((data: Transaction[]) => {
      //   console.log(data);
      allTransactions = data;
    })
    .catch((err) => console.log(err));

  return allTransactions;
};

export { getAllTransactions };
