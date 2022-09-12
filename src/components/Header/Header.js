import React from "react";
import Button from "../Button/Button";

const Header = () => {
  return (
    <div className="fixed top-0 w-full">
      <div className="container mx-auto">
        <div className="navbar bg-transparent">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </label>
              <ul className="menu menu-compact dropdown-content mt-3 p-2  shadow bg-base-100 rounded-box w-52">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Departments</a>
                </li>
                <li>
                  <a href="">Pages</a>
                </li>
                <li>
                  <a href="">Blogs</a>
                </li>
                <li>
                  <a href="">Contacts</a>
                </li>
              </ul>
            </div>
            <a className="normal-case text-xl font-bold"><span className="text-primary">Doc</span><span className="text-secondary">mic</span></a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <div className="flex text-lg justify-center items-center gap-5 text-neutral">
              <a className="text-primary" href="">Home</a>
              <a href="">About</a>
              <a href="">Departments</a>
              <a href="">Pages</a>
              <a href="">Blogs</a>
              <a href="">Contacts</a>
            </div>
          </div>
          <div className="navbar-end ">
            <Button>Free Consulation</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
