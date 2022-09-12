import React from "react";
import bannerImage from "../../../assets/pose_2.png";
import Button from "../../../components/Button/Button";
import checkupButton from '../../../assets/Frame-7.png'

const Banner = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div>
        <div className="container mx-auto">
          <div className="lg:flex gap-10">
            <div className="lg:w-1/2 mb-2 pt-2 flex justify-center items-center">
              <div className="">
                <p className="lg:text-7xl sm:text-5xl text-3xl font-semibold text-accent">
                  Your <span className="text-primary">Health</span> Is Our Top <span className="text-secondary">Priority</span>
                </p>
                <p className="sm:text-xl sm:mt-8 text-lg text-neutral ">
                  There are many variations of passages of lpsum available, but the majority hae suffered.
                </p>
                <div className="sm:mt-8 ">
                  <Button>Meet Our Specialist</Button>
                </div>
                <div className="sm:mt-10 ">
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
           
            <div className="lg:w-1/2 flex justify-center items-center relative">
              <div className="bg-ellipseFive bg-cover bg-center bg-no-repeat">
                <img src={bannerImage} alt="Img" height="auto" className="" />
              </div>
              <div className="absolute left-0 bottom-36 cursor-pointer">
                <img src={checkupButton} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
