import React, { useState } from "react";
import Header from "./header";
import Sidebar from "../SideBar/SideBar";
import MobileSideBar from "../MobileSideBar/MobileSideBar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [mobileSidebar, setShowSideBar] = useState(false);
  return (
    <>
     {mobileSidebar && <MobileSideBar setShowSideBar={setShowSideBar} />}
      <div className="max-w-7xl mx-auto w-11/12 pt-36 pb-36">
        <div className="w-full flex gap-4">
          <div className="w-1/6 max-w-[280px] py-2 sticky top-0 h-screen hidden lg:block">
            <Sidebar />
          </div>
          <div className="flex-grow pt-2 pb-5">
            <Header setShowSideBar={setShowSideBar} />
            <Outlet />
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Dashboard;
