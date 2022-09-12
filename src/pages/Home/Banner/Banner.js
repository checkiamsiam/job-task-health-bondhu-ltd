import React from "react";
import bannerImage from "../../../assets/pose_2.png";
import Button from "../../../components/Button/Button";
import checkupButton from '../../../assets/Frame-7.png'
import doctors from '../../../assets/Group3.png'
import ornament from '../../../assets/Ornament19.png'

const Banner = () => {
  return (
    <div className="min-h-screen flex justify-center items-center lg:pt-0 pt-20 ">
      <div>
        <div className="lg:px-32 md:px-20 sm:px-10 px-5">
          <div className="lg:flex gap-10">
            <div className="lg:w-1/2 mb-2 pt-2 flex justify-center items-center">
              <div className="">
                <p className="lg:text-6xl sm:text-5xl text-3xl font-semibold text-accent">
                  Your <span className="text-primary">Health</span> Is Our Top <span className="text-secondary">Priority</span>
                </p>
                <p className="sm:text-xl sm:mt-8 mt-3 text-lg text-neutral ">
                  There are many variations of passages of lpsum available, but the majority hae suffered.
                </p>
                <div className="sm:mt-8 mt-3">
                  <Button>Meet Our Specialist</Button>
                </div>
                <div className="sm:mt-10 mt-3">
                  <div className="flex justify-between">
                    <div>
                      <h1 className="text-center font-semibold text-primary text-2xl">262k+</h1>
                      <p className="text-neutral">Recovered Patients</p>
                    </div>
                    <div>
                      <h1 className="text-center font-semibold text-primary text-2xl">96%</h1>
                      <p className="text-neutral">Satisfaction Rate</p>
                    </div>
                    <div>
                      <h1 className="text-center font-semibold text-primary text-2xl">86+</h1>
                      <p className="text-neutral">Expert Doctors</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
            <div className="lg:w-1/2 flex justify-center items-center  lg:pt-0 pt-5">
              <div className="relative">
              <div className="bg-ellipseFive bg-cover bg-center bg-no-repeat">
                <img src={bannerImage} alt="Img" height="auto" className="" />
              </div>
              <div className="sm:absolute -left-10 bottom-32 cursor-pointer">
                <img src={checkupButton} alt="" />
              </div>
              <div className="p-3 bg-base-100 sm:mt-0 mt-4 rounded-lg sm:absolute bottom-0 -right-10 z-20">
                  <h1 className="mb-3 font-semibold">Meet Our Doctors</h1>
                  <img src={doctors} alt="" />
                  <div className="w-full h-3 my-1 bg-gradient-to-r from-primary to-white rounded-lg"></div>
                  <div className="w-full h-3 my-1 bg-gradient-to-r from-primary to-white rounded-lg"></div>
              </div>
              <div className="sm:absolute lg:block hidden -bottom-16 right-24 z-10">
                  <img src={ornament} alt="" />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
