import React from "react";
import {
  LuPieChart,
  LuTags,
  LuSettings,
} from "react-icons/lu";
import {AiFillFileAdd} from "react-icons/ai"
import { useLocation, useNavigate } from "react-router-dom";

export const menuItems = [
  { id: 1, icon: LuPieChart, value: "Profile", path:"/userdashboard/userprofile" },
  { id: 2, icon: LuTags, value: "Order History",  path:"/userdashboard/orderhistory"},
  { id: 3, icon: AiFillFileAdd, value: "Cart", path:"/userdashboard/usercart" },
  { id: 4, icon: LuSettings, value: "Settings",  path:"/userdashboard/usersettings" },
];
const UserSidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location)
  return (
    <div className="p-4  w-full rounded-lgPlus text-white bg-gradient-to-r from-[#4285F4] to-[#3C83F9] border flex-col justify-between flex h-full ">
      <div>
        <div className="text-3xl font-bold pb-5 pl-2">User</div>
        <div className="">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-2 lg:text-lg mt-5 hover:cursor-pointer  w-fit" onClick={() => {
                 navigate(item.path)
              }}
            >
              <item.icon width={18} height={18} />
              <div
                className={
                  item.path === location.pathname ? "font-bold" : "font-normal duration-150 hover:text-gray-200 "
                }
              >
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-sm">
        <div className="hover:cursor-pointer">Help</div>
        <div className="mt-2 hover:cursor-pointer">Contact Us</div>
      </div>
    </div>
  );
};

export default UserSidebar;
