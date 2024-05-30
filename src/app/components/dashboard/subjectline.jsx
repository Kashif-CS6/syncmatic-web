import React from "react";
import { RiLineChartLine } from "react-icons/ri";
import { FaChartColumn } from "react-icons/fa6";
import { IoWomanOutline } from "react-icons/io5";
import { BiSolidCircleHalf } from "react-icons/bi";
import { MdOutlineIncompleteCircle } from "react-icons/md";

function Subjectline({Assignment, Participation, Attendence}) {
  return (
    <div className="px-4 flex flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-4 lg:gap-0">
      <div className="flex items-center gap-4">
        <h1 className="text-xl">01</h1>
        <IoWomanOutline size={30} />
        <h1 className="text-xl font-[600]">Anatomy</h1>
      </div>
      {/* circle part */}
      <div className="flex items-center gap-2">
        {/* first cirlce */}
        <div className="flex items-center flex-col">
          <BiSolidCircleHalf className="-rotate-90 text-pink-400" size={40} />
          <p className="text-xs ">
            Assigment <span className="font-[600]">{Assignment}%</span>
          </p>
        </div>
        {/* second circle */}
        <div className="flex items-center flex-col">
          <MdOutlineIncompleteCircle
            className="-rotate-90 text-orange-400"
            size={40}
          />
          <p className="text-xs">
            participation <span className="font-[600]">{Participation}%</span>
          </p>
        </div>

        {/* third circle */}
        <div className="flex items-center flex-col">
          <MdOutlineIncompleteCircle
            className="rotate-45 text-yellow-400"
            size={40}
          />
          <p className="text-xs">
            Attendence <span className="font-[600]">{Attendence}%</span>
          </p>
        </div>
      </div>
      {/* end here */}
    </div>
  );
}

export default Subjectline;
