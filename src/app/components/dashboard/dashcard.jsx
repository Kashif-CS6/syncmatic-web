import React from "react";
import { CiStopwatch } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";
import Image from "next/image";

function Dashcard() {
  return (
    <div className="w-60 h-40 rounded-xl bg-orange-100">
      <div className="flex items-center p-5 gap-3">
        <div className="bg-orange-200 rounded-md w-fit p-3">
          <CiStopwatch />
        </div>
        <p className="text-sm">Time Spend</p>
      </div>
      {/* ending section */}
      <div className="flex items-center">
        <div className="flex flex-col gap-1 px-5">
          <h1 className="font-[600]">32:19:14</h1>
          <p className="text-red-600 flex items-center gap-1 text-sm">
            <FaCaretDown /> 2:34:09
          </p>
        </div>
        <div>
          <Image
            src="/line.png"
            width={500}
            height={500}
            alt="Picture of the author"
            className="w-20"
          />
        </div>
      </div>
    </div>
  );
}

export default Dashcard;
