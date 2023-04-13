interface Props {
  totalAmount: number;
}

export const Achievements = ({ totalAmount }: Props) => {
  let studentsHelped = 8;

  return (
    <div className="flex flex-col md:items-center sm:flex-row md:flex-col justify-start sm:space-x-4 md:space-x-0 space-y-4 sm:space-y-0 md:space-y-4 md:w-[300px] w-full">
      <div className="border border-blueDeep py-8 flex flex-col items-center rounded-md sm:w-1/2 md:w-full lg:w-full">
        <span className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold text-blueDeep">
          {studentsHelped}
        </span>
        <span className="text-center text-blueDeep text-lg pt-1">
          Students helped
        </span>
      </div>
      <div className="border border-blueDeep py-8 flex flex-col items-center rounded-md sm:w-1/2 md:w-full lg:w-full">
        <span className="text-2xl sm:text-4xl md:text-5xl xl:text-5xl lg:text-6xl font-semibold text-blueDeep">
          ₦{Math.ceil(totalAmount)}
        </span>
        <span className="text-center text-blueDeep text-lg pt-1">Donated</span>
      </div>
    </div>
  );
};
