import React from "react";
import boarddata from "@/boarddata";

import { TbDotsCircleHorizontal } from "react-icons/tb";
import Circular from "./charts/circular";

// import dynamic from "next/dynamic";
// const DynamicCircular = dynamic(() => import("./charts/circular"), {
//   ssr: false, // This ensures the component is only rendered on the client-side
// });

function Activity() {
  // Calculate the sums of teaching, planning, and organization
  const teachingSum = boarddata.reduce((acc, curr) => acc + curr.teaching, 0);
  const planningSum = boarddata.reduce((acc, curr) => acc + curr.planning, 0);
  const organizationSum = boarddata.reduce(
    (acc, curr) => acc + curr.organization,
    0
  );

  // Calculate the average of teaching
  const teachingAverage = teachingSum / boarddata.length;

  // Calculate the average of organizing
  const organizingAverage = organizationSum / boarddata.length;

  // Calculate the average of planning
  const planningAverage = planningSum / boarddata.length;

  return (
    <div className="bg-black w-56 h-80 border rounded-xl ">
      <div className="text-white text-sm flex items-center justify-between p-4">
        {" "}
        <h1>Most Activity</h1> <TbDotsCircleHorizontal size={20} />{" "}
      </div>
      <div className="w-52 mx-auto ">
        <Circular />
      </div>
      <div className="flex items-center gap-4 justify-center w-full mt-7 mb-4">
        <div className="flex flex-col items-center gap-1">
          <div className="w-4 h-4 rounded-xl bg-blue-200"></div>
          <h1 className="text-xs text-white">{teachingAverage}</h1>
          <p className="text-[8px] text-white mt-4">Teaching</p>
        </div>
        {/* second */}
        <div className="flex flex-col items-center gap-1">
          <div className="w-4 h-4 rounded-xl bg-green-200"></div>
          <h1 className="text-xs text-white">{organizingAverage}</h1>
          <p className="text-[8px] text-white mt-4">Organization</p>
        </div>

        {/* third */}
        <div className="flex flex-col items-center gap-1">
          <div className="w-4 h-4 rounded-xl bg-yellow-300"></div>
          <h1 className="text-xs text-white">{planningAverage}</h1>
          <p className="text-[8px] text-white mt-4">Planning</p>
        </div>
      </div>
    </div>
  );
}

export default Activity;
