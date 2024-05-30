import React from "react";
import boarddata from "@/boarddata";
export default function Success() {
  // Calculate the sums of teaching, planning, and organization
  const AssignmentSum = boarddata.reduce(
    (acc, curr) => acc + curr.assignment,
    0
  );
  const ParticipationSum = boarddata.reduce(
    (acc, curr) => acc + curr.participation,
    0
  );
  const organizationSum = boarddata.reduce(
    (acc, curr) => acc + curr.organization,
    0
  );

  // Calculate the average of Assinment
  const AssignmentAverage = AssignmentSum / boarddata.length;

  // Calculate the average of Particpication
  const ParticipationAverage = ParticipationSum / boarddata.length;

  // Calculate the average of Organization
  const planningAverage = organizationSum / boarddata.length;

  return (
    <div className=" w-56 rounded-xl  px-4 py-8">
      <h1 className="font-[600] text-lg mb-4">Success</h1>
      <div className="flex flex-col gap-3">
        {/* user1 */}
        <div className="flex items-center gap-4">
          <h1>User1</h1>
          <div class="w-full h-6  rounded-full ">
            <div
              class={`h-6 bg-green-100 rounded-full  w-[${AssignmentAverage}%]`}
            ></div>
          </div>
        </div>
        {/* user 2 */}
        <div className="flex items-center gap-4">
          <h1>User2</h1>
          <div class="w-full h-6  rounded-full ">
            <div
              class={`h-6 bg-yellow-100 rounded-full  w-[${planningAverage}%]`}
            ></div>
          </div>
        </div>
        {/* user 3 */}
        <div className="flex items-center gap-4">
          <h1>User3</h1>
          <div class="w-full h-6  rounded-full ">
            <div
              class={`h-6 bg-green-100 rounded-full  w-[${ParticipationAverage}%]`}
            ></div>
          </div>
        </div>
        {/* user 4*/}
        <div className="flex items-center gap-4">
          <h1>User2</h1>
          <div class="w-full h-6  rounded-full ">
            <div
              class={`h-6 bg-orange-100 rounded-full  w-[${AssignmentAverage}%]`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
