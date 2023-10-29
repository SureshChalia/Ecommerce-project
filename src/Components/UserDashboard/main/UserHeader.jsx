import React from "react";
import { BiBell } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
import profileImage from "../../../Assets/icons/MaskGroup.png";
import { useLoaderData, useLocation } from "react-router-dom";

const UserHeader = ({ setShowSideBar }) => {
  const User = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  console.log("uer", User);
  const location = useLocation();
  return (
    <header className="flex justify-between flex-wrap items-center font-Montserrat py-1">
      <div className="text-2xl font-bold flex items-center gap-2 justify-between w-full sm:w-fit">
        <GiHamburgerMenu
          className="block hover:cursor-pointer lg:hidden"
          onClick={() => setShowSideBar(true)}
        />
        <div className="text-blue-600">{location.pathname.split("/").at(-1).toUpperCase()}</div>
      </div>
      <div className="flex gap-4 items-center w-full md:w-fit md:mt-0 mt-2">
        <div className="relative  tablet:text-sm w-full">
          <input
            type="text"
            name=""
            id=""
            className="w-full focus:outline-none px-2 py-1 relative rounded-lgPlus bg-white"
            placeholder="Search..."
          />
          <AiOutlineSearch className="absolute right-2 top-1/2 -translate-y-1/2 text-xl text-[#B0B0B0]" />
        </div>
        <BiBell className="text-2xl" />
        <img
          src={User !== null ? `https://api.dicebear.com/5.x/initials/svg?seed=${User.name}` : profileImage}
          alt="$"
          className="rounded-full object-cover aspect-square h-6 w-6"
        />
      </div>
    </header>
  );
};

export default UserHeader;
