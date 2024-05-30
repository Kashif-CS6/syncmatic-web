import React from "react";
import { PiMagnifyingGlass } from "react-icons/pi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoBarChartOutline } from "react-icons/io5";
import { CgMenuRight } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";



function Mainnav() {
  return (
    <nav className="flex items-center flex-wrap lg:flex-nowrap gap-4 lg:gap-0 justify-between">
      {/* left side */}
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-[600] ml-4 lg:ml-0">Your Analytics</h1>

        <IoBarChartOutline />
      </div>

      {/* right side */}
      <div className="flex items-center gap-3">
        <div className="border rounded-md w-fit flex items-center text-gray-400 px-2 py-1">
          <PiMagnifyingGlass />
          <input
            type="text"
            name=""
            id=""
            className="outline-none w-full px-1 text-sm "
            placeholder="Search"
          />
        </div>
        <div>
          <IoMdNotificationsOutline size={25} />
        </div>
        <div>
          <CgMenuRight size={25} />
        </div>
      </div>
    </nav>
  );
}

export default Mainnav;
