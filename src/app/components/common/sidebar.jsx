import React from "react";
import { CiHome } from "react-icons/ci";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { PiUsersThreeLight } from "react-icons/pi";
import { IoLogOutOutline } from "react-icons/io5";
import { FaBox } from "react-icons/fa";

function Sidebar({ show, setshow }) {
  return (
    <div
      className="bg-black w-60 flex  
        flex-col h-[150vh]  justify-between py-4"
    >
      {/* first section */}

      <div className="flex flex-col gap-6 mx-auto ">
        <div className="mt-6 mb-10 relative">
          {/* Logo here */}
          <button
            className="text-xl text-white absolute -top-10 -right-12 lg:hidden"
            onClick={() => {
              setshow(!show);
            }}
          >
            x
          </button>
          <FaBox className="text-white" size={30} />
        </div>
        <div className="text-white flex items-center gap-2">
          <CiHome size={20} />
          <p className="font-[600]">Home</p>
        </div>
        <div className="text-white flex items-center gap-2">
          <TbBrandGoogleAnalytics size={20} />
          <p className="font-[600]">Analytics</p>
        </div>
        <div className="text-white flex items-center gap-2">
          <PiUsersThreeLight size={20} />
          <p className="font-[600]">Users</p>
        </div>
      </div>
      {/* lagout section */}
      <div className="text-white flex items-center gap-2 mx-auto mb-10">
        <IoLogOutOutline size={20} />
        <p className="font-[600]">Logout</p>
      </div>
    </div>
  );
}

export default Sidebar;
