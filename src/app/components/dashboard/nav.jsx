import React from "react";

function Nav() {
  return (
    <nav className="flex items-end justify-between flex-wrap lg:flex-nowrap">
      {/* left section */}
      <div className="mb-4 lg:mb-0">
        <h1 className="font-[600] text-lg">Hello Yev</h1>
        <p className="text-sm">
          Your avg.activity on this week in <span>65%</span>
        </p>
      </div>
      {/* right section */}
      <div className="flex flex-wrap lg:flex-nowrap items-center gap-6">
        {/* date input */}
        <div className="border w-fit rounded-md px-2 py-[1px]">
          <input
            type="date"
            name=""
            id=""
            className="outline-none border-none w-full"
          />
        </div>
        {/* filter button */}
        <button className="border border-black px-2 rounded-md py-1 text-sm font-[600]">
          Filters
        </button>
        {/* filter button */}
        <button className="border border-black px-2 rounded-md py-1 text-sm font-[600]">
          Study Plan
        </button>
        <p className="text-gray-400">Plan</p>
        <p className="text-gray-400">Wishes</p>
      </div>
    </nav>
  );
}

export default Nav;
