import React from "react";
import Button from "../Button/Button";

const Header = () => {
  return (
    <div className="">
      <div className="lg:px-32 md:px-20 sm:px-10 px-5">
        <div className="navbar bg-transparent">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="xl:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            <a className="normal-case text-2xl font-bold"><span className="text-primary">Doc</span><span className="text-secondary">mic</span></a>
          </div>
          <div className="navbar-center hidden xl:flex">
            <div className="flex xl:text-lg font-semibold  justify-center items-center gap-5 text-neutral">
              <a className="text-primary transition duration-500" href="">Home</a>
              <a className="hover:text-primary transition duration-500" href="">About</a>
              <a className="hover:text-primary transition duration-500" href="">Departments</a>
              <a className="hover:text-primary transition duration-500" href="">Pages</a>
              <a className="hover:text-primary transition duration-500" href="">Blogs</a>
              <a className="hover:text-primary transition duration-500" href="">Contacts</a>
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
