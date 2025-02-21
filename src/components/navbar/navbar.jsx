import React from "react";
import reactLogo from "../../assets/react.svg";
import { Button } from "../ui/button";
import { NavLink } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import NotificationsIcon from "@mui/icons-material/Notifications";
export default function Navbar() {
  return (
    <div className="w-full px-20 py-3 flex items-center justify-between border-b border-gray-300 shadow-sm bg-white">
      <div className="flex items-center space-x-20">
        <NavLink to="/">
          <div className="flex items-center space-x-2">
            <img
              src={reactLogo}
              alt="React Logo"
              className="w-10"
              title="React Logo"
            />

            <p className="text-xl font-bold text-black">LE DEMARCHEUR</p>
          </div>
        </NavLink>

        <ul className="flex items-center space-x-6">
          {[
            { name: "HOME", path: "/" },
            { name: "SEARCH", path: "/search" },
            { name: "FEATURE", path: "/feature" },
            { name: "HOT DEALS", path: "/deals" },
          ].map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-md items-center transition-colors duration-200 ${
                    isActive
                      ? "font-bold text-black"
                      : "text-gray-500 hover:text-black"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center space-x-4">
        <button
          className="p-2 flex items-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
          aria-label="Notifications"
        >
          <NotificationsIcon />
        </button>

        <div className="p-1 flex items-center rounded-full bg-white border-4 border-gray-200 cursor-pointer hover:border-gray-400 transition-colors">
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="User Avatar"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
