import React from "react";
import { RiLineChartLine } from "react-icons/ri";
import { FaChartColumn } from "react-icons/fa6";
import { IoWomanOutline } from "react-icons/io5";
import { BiSolidCircleHalf } from "react-icons/bi";
import { MdOutlineIncompleteCircle } from "react-icons/md";
import Subjectline from "./subjectline";
import boarddata from "@/boarddata";
function Subjectoverview() {
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
    <div className="my-4">
      {/* top section */}
      <div className="flex items-center flex-wrap justify-center md:flex-nowrap lg:justify-between px-4 ">
        {/* left side */}
        <h1 className="text-lg font-[600]">Subject overview</h1>

        {/* right side */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex items-center gap-2">
            <RiLineChartLine size={15} />{" "}
            <p className="text-sm">
              <span className="font-[600]">21</span> Active Subjects
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FaChartColumn size={15} />{" "}
            <p className="text-sm">
              <span className="font-[600]">78%</span> Compititons Rate
            </p>
          </div>
        </div>
      </div>

      {/* down part here */}
      <div className="flex flex-col gap-6 lg:gap-2">
        <Subjectline
          Assignment={AssignmentAverage}
          Participation={ParticipationAverage}
          Attendence={planningAverage}
        />
       <Subjectline
          Assignment={AssignmentAverage}
          Participation={ParticipationAverage}
          Attendence={planningAverage}
        />
      </div>
    </div>
  );
}

export default Subjectoverview;
