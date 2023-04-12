import React from "react";
import Countdown from "react-countdown";

const Completionist: React.FC = () => <span>You are good to go!</span>;

const renderer: React.FC<{
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}> = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    const totalHours = days * 24 + hours;
    const paddedMinutes = String(minutes).padStart(2, "0");
    const paddedSeconds = String(seconds).padStart(2, "0");
    return (
      <span className="text-4xl">
        {totalHours}:{paddedMinutes}:{paddedSeconds}
      </span>
    );
  }
};

const startTime = new Date("2023-04-11T00:00:00");
const fiveDaysFromNow = startTime.getTime() + 5 * 24 * 60 * 60 * 1000;

const Timer = () => {
  return (
    <div>
      <Countdown date={fiveDaysFromNow} renderer={renderer} />
    </div>
  );
};

export default Timer;
