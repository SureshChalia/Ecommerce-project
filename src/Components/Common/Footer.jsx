import React from 'react'
import logo from "../../Assets/company-logo.PNG"
import {
  FaInstagram,
  FaDribbble,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {

  const socialLinks = [
    { label: "YouTube", icon: FaYoutube },
    { label: "Instagram", icon: FaInstagram },
    { label: "Twitter", icon: FaXTwitter },
    { label: "Dribbble", icon: FaDribbble },
  ];

  const links = [
    [
      { label: "Company", key: "header-1" },
      { label: "About us", key: "item-1-1" },
      { label: "Blog", key: "item-1-2" },
      { label: "Contact us", key: "item-1-3" },
      { label: "Pricing", key: "item-1-4" },
      { label: "Testimonials", key: "item-1-5" },
    ],
    [
      { label: "Support", key: "header-2" },
      { label: "Help center", key: "item-2-1" },
      { label: "Terms of service", key: "item-2-2" },
      { label: "Legal", key: "item-2-3" },
      { label: "Privacy policy", key: "item-2-4" },
      { label: "Status", key: "item-2-5" },
    ],
  ];

  return (
    <div className="flex items-end justify-center font-poppins">
      <div className="py-16  bg-blue-800 text-white w-full ">
        <div className='w-11/12  mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 relative'>
          <div className="  ">
          <div className="footer-img flex items-center">
            <img
              src={logo}
              alt=""
              className="w-16 h-auto bg-white"
            />
            <span className="text-3xl font-bold pl-2 text-white">
              Gambol
            </span>
          </div>
          <div className="infos text-white">
            <span>Copyright © 2023 Gambol ltd.</span>
            <span>All rights reserved</span>
          </div>
          <div className="footer-icons flex items-center space-x-3 pt-4">
            {socialLinks.map((socialLink, index) => {
              const Icon = socialLink.icon;
              return (
                <Icon
                  key={`social-${index}`}
                  className="w-14 h-14 p-2 rounded-full bg-blue-300 hover:bg-white hover:text-blue-700 cursor-pointer"
                />
              );
            })}
          </div>
        </div>
        <div className="mx-2 grid w-full py-5 sm:py-0 grid-cols-2 ">
          {links.map((col, index) => {
            return (
              <ul className={`col col-${index + 1}`} key={`col-${index}`}>
                {col.map((link, index) => {
                  return (
                    <li
                      key={`link-${col}-${index}`}
                      className={`text-white cursor-pointer ${link.key === "header-1" || link.key === "header-2"
                          ? "text-2xl text-white"
                          : ""
                        }`}
                    >
                      {link.label}
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
        <div className="footer-form flex flex-col mt-0">
          <label className="text-lg font-semibold text-white">
            Stay up to date
          </label>
          <input
            type="email"
            placeholder="Subscribe to our email"
            className="mt-2 w-full border-none rounded-lg py-3 px-6"
          />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer


