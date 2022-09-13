import React from "react";
import sidebarImage from "../../../assets/Frame22.png";
import docSupport from "../../../assets/image5.png";
import msgSupport from "../../../assets/image6.png";
import envSupport from "../../../assets/image7.png";
import tymSupport from "../../../assets/image8.png";

const HospitalFeature = () => {
  return (
    <div className="lg:px-32 md:px-20 sm:px-10 px-5 mt-10">
      <div className="lg:flex">
        <div className="lg:w-2/5 w-full flex  items-center ">
          <div>
          <img src={sidebarImage} alt="" />
          </div>
        </div>
        <div className="lg:w-3/5 flex items-center">
          <div className="">
            <h5 className="text-secondary sm:text-xl">Our Hospital Feature</h5>
            <h1 className="text-accent text-2xl sm:text-4xl my-3  text-justify">Make An Appointment Easy And Fast Services </h1>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-base-100 rounded-lg p-3 ">
                <div className="flex items-center justify-between mb-3">
                  <h1 className="text-accent font-semibold">24 Hours Doctor Support</h1>
                  <img src={docSupport} alt="" />
                </div>
                <p className="text-neutral  text-justify">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
              </div>
              <div className="bg-base-100 rounded-lg p-3 ">
                <div className="flex items-center justify-between mb-3">
                  <h1 className="text-accent font-semibold">Exclusive Supports</h1>
                  <img src={msgSupport} alt="" />
                </div>
                <p className="text-neutral  text-justify">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
              </div>
              <div className="bg-base-100 rounded-lg p-3 ">
                <div className="flex items-center justify-between mb-3">
                  <h1 className="text-accent font-semibold">Friendly Environment </h1>
                  <img src={envSupport} alt="" />
                </div>
                <p className="text-neutral  text-justify">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
              </div>
              <div className="bg-base-100 rounded-lg p-3 ">
                <div className="flex  items-center justify-between mb-3">
                  <h1 className="text-accent font-semibold">24 Hours Nurse Support</h1>
                  <img src={tymSupport} alt="" />
                </div>
                <p className="text-neutral  text-justify">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalFeature;
