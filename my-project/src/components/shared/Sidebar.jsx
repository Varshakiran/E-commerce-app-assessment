import React from "react";
import { Outlet } from "react-router-dom";

import { Link } from "react-router-dom";
import { navLinks } from "../lib/consts/NavigationLinks"; 

// creating sticky nav bar
function Sidebar() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark')
  }
  return (
    <div className="bg-neutral-100  overflow-hidden">
      <div className="flex-no-wrap fixed top-0 flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4">
      {/* <div>
        <button className="absolute right-10 top-5 bg-black text-white  rounded" onClick={toggleTheme}>Dark mode</button>
        </div> */}
        {navLinks.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      
      <div className="p-3 mt-20">{<Outlet />}</div>
     
    </div>
  );
}

function SidebarLink({ item }) {
  return (
    <div>
      <Link to={item.path} className="hover:bg-dark-700 active:bg-neutral-600 ml-10">
        {" "}
        <span>{item.label}</span>
      </Link>
    </div>
  );
}

export default Sidebar;
