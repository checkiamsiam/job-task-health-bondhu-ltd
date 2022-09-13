import React from "react";
import facebook from '../../assets/Vector-4.png'
import ig from '../../assets/Vector-2.png'
import yt from '../../assets/Vector-3.png'
import twitter from '../../assets/Vector-1.png'
import google from '../../assets/Vector.png'

const Footer = () => {
  return (
    <div className="lg:px-32 md:px-20 sm:px-10 px-5 bg-[#E6F3F5] ">
      <footer className="md:flex justify-between py-10 text-base-content">
      <div className="md:w-2/5">
        <h1>
          <a className="normal-case text-2xl font-bold">
            <span className="text-primary">Doc</span>
            <span className="text-secondary">mic</span>
          </a>
        </h1>
        <p className="w-4/6 text-justify mt-2">simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee</p>
        <div className="flex gap-3 items-center mt-6">
        <a href="" className="p-1  rounded-full shadow-xl w-10 h-10 flex justify-center items-center">
          <img src={facebook} alt=""/>
        </a>
        <a href="" className="p-1  rounded-full shadow-xl w-10 h-10 flex justify-center items-center">
          <img src={ig} alt="" />
        </a>
        <a href="" className="p-1  rounded-full shadow-xl w-10 h-10 flex justify-center items-center">
          <img src={google} alt="" />
        </a>
        <a href="" className="p-1  rounded-full shadow-xl w-10 h-10 flex justify-center items-center">
          <img src={twitter} alt="" />
        </a>
        <a href="" className="p-1  rounded-full shadow-xl w-10 h-10 flex justify-center items-center">
          <img src={yt} alt="" />
        </a>
        </div>
        <p className="mt-10 font-semibold">Copyright @222 Medicom All Rights Reserved</p>
      </div>
      <div className="flex flex-col gap-2 lg:w-1/5 md:mt-0 mt-10">
        <span className="text-secondary text-lg font-semibold">Quick Links</span>
        <a className="link link-hover font-semibold">About Us</a>
        <a className="link link-hover font-semibold">Our Pricing</a>
        <a className="link link-hover font-semibold">Our Gallery</a>
        <a className="link link-hover font-semibold">Appointment</a>
        <a className="link link-hover font-semibold">Privacy Policy</a>
      </div>
      <div className="flex flex-col  gap-2 lg:w-1/5  ">
        <span className="footer-title">
          <br />
        </span>
        <a className="link link-hover font-semibold">Services</a>
        <a className="link link-hover font-semibold">Our Doctors</a>
        <a className="link link-hover font-semibold">Our Latest News</a>
        <a className="link link-hover font-semibold">Careers</a>
        <a className="link link-hover font-semibold">Contact Us</a>
      </div>
      <div className="flex flex-col  gap-2  lg:w-[25%]  md:mt-0 mt-10">
        <span className="text-secondary text-lg font-semibold">Opening Hours</span>
        <a className="link link-hover font-semibold text-neutral">
          <span className="text-primary"> Mon- Tue </span>&nbsp; &nbsp; &nbsp;08:00 AM- 05:00 PM
        </a>
        <a className="link link-hover font-semibold text-neutral">
          <span className="text-primary">Wed- Thu</span>&nbsp; &nbsp; &nbsp; 09:00 AM- 06:00 PM
        </a>
        <a className="link link-hover font-semibold text-neutral">
          <span className="text-primary">Fri- Sat</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 10:00 AM- 07:00 PM
        </a>
        <a className="link link-hover font-semibold text-neutral">
          <span className="text-primary">Sunday </span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Emergency Only
        </a>
        <a className="link link-hover font-semibold text-neutral">
          <span className="text-primary">Personal </span> &nbsp; &nbsp; &nbsp; &nbsp; Mon- 05:00 PM
        </a>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
