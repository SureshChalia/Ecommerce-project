import React, { useState } from "react";
import UserHeader from "./UserHeader";
import UserSidebar from "../SideBar/UserSideBar";
import UserMobileSideBar from "../MobileSideBar/UserMobileSideBar";
import { Outlet } from "react-router-dom";

const UserDashboard = () => {
  const [mobileSidebar, setShowSideBar] = useState(false);
  return (
    <>
     {mobileSidebar && <UserMobileSideBar setShowSideBar={setShowSideBar} />}
      <div className="max-w-maxContainer mx-auto w-[95%] pt-36 pb-36">
        <div className="w-full flex gap-4">
          <div className="w-1/6 max-w-[280px] py-2 sticky top-0 h-screen hidden lg:block">
            <UserSidebar />
          </div>
          <div className="flex-grow pt-2 pb-5">
            <UserHeader setShowSideBar={setShowSideBar} />
            <Outlet />
          </div>
        </div>
      </div>
     
    </>
  );
};

export default UserDashboard;
