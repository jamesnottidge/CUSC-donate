import axios from "axios";

const apiUrl: string = "http://localhost:4000/api/transactions";
// const apiKey: string = "FLWSECK_TEST-13dcdcf498148282f88452fb44672b7d-X";
const fromDate = "2023-04-11";
const pageSize = 100;

const getAllTransactions = async () => {
  function filterDates(data: any) {
    const cutoffDate = new Date("2023-04-11");
    const filteredDates: any = [];

    data.forEach((obj: any) => {
      const date = new Date(obj.created_at);
      if (date > cutoffDate) {
        filteredDates.push(date.toISOString());
      }
    });

    return filteredDates;
  }

  await fetch(`${apiUrl}`)
    .then((response) => response.json())
    .then((data) => {
      const latestTransactions = filterDates(data);

      console.log(latestTransactions);
    })
    .catch((err) => console.log(err));

  return [];
};

export { getAllTransactions };
