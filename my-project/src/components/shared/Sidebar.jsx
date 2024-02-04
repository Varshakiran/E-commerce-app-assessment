import React from "react";
import { Outlet } from "react-router-dom";

import { Link } from "react-router-dom";
import { navLinks } from "../lib/consts/NavigationLinks";

function Sidebar() {
  return (
    <div className="flex  bg-neutral-100 h-screen w-screen overflow-hidden">
      <div className="bg-neutral-900 w-60 p-3  text-white">
        {navLinks.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div className="p-3">{<Outlet />}</div>
    </div>
  );
}

function SidebarLink({ item }) {
  return (
    <div>
      <Link to={item.path} className="flex flex-column p-1 hover:bg-neutral-700 active:bg-neutral-600">
        {" "}
        <span>{item.label}</span>
        <br />
      </Link>
      <br />
    </div>
  );
}

export default Sidebar;
