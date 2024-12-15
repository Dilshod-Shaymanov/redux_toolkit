import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="h-20 sticky top-0 left-0 shadow-md header z-10 w-full bg-slate-800">
      <nav className="flex container justify-center items-center gap-12  h-full text-white">
        <NavLink className={"text-xl hover:underline"} to={"/"}>
          Home
        </NavLink>
        <NavLink className={"text-xl hover:underline"} to={"/about"}>
          About
        </NavLink>
        <NavLink className={"text-xl hover:underline"} to={"/users"}>
          Users Data
        </NavLink>
        <NavLink className={"text-xl hover:underline rounded-xl bg-blue-600 py-2 px-4 focus:text-white"} to={"/login"}>
          Login User
        </NavLink>
        
      </nav>
    </div>
  );
};

export default Header;
