"use client";
import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./components/common/sidebar";
import Nav from "./components/dashboard/nav";
import Dashcard from "./components/dashboard/dashcard";
import Mainnav from "./components/dashboard/mainnav";
import Circular from "./components/dashboard/charts/circular";
import Activity from "./components/dashboard/activity";
import Subjectoverview from "./components/dashboard/subjectoverview";
import Success from "./components/dashboard/success";
import Studyprocess from "./components/dashboard/studyprocess";
import axios from "axios";

function Page() {
  const [show, setshow] = useState(false);

  const handleshow = (e) => {
    setshow(e);
  };

  return (
    <div className={`flex`}>
      {/* left side div */}
      <div className="relative">
        <button
          className="lg:hidden absolute top-6"
          onClick={() => {
            setshow(!show);
          }}
        >
          <GiHamburgerMenu size={20} />
        </button>
        <div
          className={`${
            show
              ? "block w-full fixed z-50 lg:relative"
              : "hidden fixed lg:block z-50 lg:relative"
          }`}
        >
          <Sidebar show={show} setshow={handleshow} />
        </div>
      </div>
      <div className="w-full p-4 ">
        <Mainnav />

        <Nav />
        <div className="flex flex-wrap lg:flex-nowrap justify-between my-5">
          {/* left side */}
          <div className="">
            <div className="flex items-center justify-center lg:justify-normal flex-wrap md:flex-nowrap gap-4 my-4">
              <Dashcard />
              <Dashcard />
              <Dashcard />
            </div>
            <Studyprocess />
            <Subjectoverview />
          </div>
          {/* right side */}
          <div className="flex mx-auto flex-col gap-2 items-center lg:mx-0">
            <Success />
            <Activity />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
