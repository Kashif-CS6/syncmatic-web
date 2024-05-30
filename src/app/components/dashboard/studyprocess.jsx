import React from "react";
import BarChart from "./charts/barchart";

function Studyprocess() {
  return (
    <div className="rounded-xl border border-black lg:m-2">
      {/* top section */}
      <div className=" border-b h-14 border-black flex items-center justify-between px-2 ">
        {/* left side */}
        <div>
          <h1 className="font-[600] text-xs lg:text-lg">Studying Process</h1>
        </div>
        {/* middle */}

        <div className="flex items-center text-xs lg:text-lg gap-2 lg:gap-6">
          <h1>Time</h1>
          <h1>Activity</h1>
          <h1>Balance</h1>
        </div>
        {/* right side */}
        <div>
          <div className="border w-fit bg-transparent px-2 text-gray-800 py-1 rounded-md  ">
            
            <select name="cars" id="cars" className="outline-none bg-transparent text-xs lg:text-lg">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
      </div>

      {/* bar chart will use here */}
      <BarChart/>
    </div>
  );
}

export default Studyprocess;
