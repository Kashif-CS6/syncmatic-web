import React from "react";
import userdata from "@/userdata";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { GoDotFill } from "react-icons/go";

const Users = () => {
  return (
    <div className="relative overflow-x-auto sm:rounded-lg">
      <table className="md:w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th
              scope="col"
              className="text-[10px] md:text-sm px-2 md:px-6 py-3"
            >
              First Name
            </th>
            <th
              scope="col"
              className="text-[10px] md:text-sm px-2 md:px-6 py-3"
            >
              Last Name
            </th>
            <th
              scope="col"
              className="text-[10px] md:text-sm px-2 md:px-6 py-3"
            >
              Email
            </th>
            <th
              scope="col"
              className="text-[10px] md:text-sm px-2 md:px-6 py-3"
            >
              View Details
            </th>
          </tr>
        </thead>
        <tbody>
          {userdata.map((item, index) => (
            <tr className="bg-white border-b hover:bg-gray-50" key={index}>
              <th
                scope="row"
                className="flex items-center  px-2 md:px-6 py-4 text-gray-900 whitespace-nowrap"
              >
                <img
                  src={item.pic}
                  className="w-6 h-6 md:w-10 md:h-10 rounded-full object-cover"
                  alt=""
                />
                <div className="ps-1 md:ps-3">
                  <div className="text-[10px] md:text-base md:font-semibold">
                    {item.name}
                  </div>
                </div>
              </th>
              <td className="px-2 md:px-6 py-4 text-[10px] md:text-sm">
                {item.subname}
              </td>
              <td className="px-2 md:px-6 py-4 text-[10px] md:text-sm">
                {item.email}
              </td>
              <td className="px-2 md:px-6 py-4">
                <button className="font-medium text-blue-600 hover:underline text-[10px] md:text-[16px]">
                  View Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
