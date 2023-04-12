import { number } from "prop-types";
import { useState } from "react";

export const Achievements = () => {
  const [studentsHelped, setStudentsHelped] = useState(8);

  return (
    <div className="achievements ">
      <div>Number of Students Helped: {studentsHelped}</div>
    </div>
  );
};
