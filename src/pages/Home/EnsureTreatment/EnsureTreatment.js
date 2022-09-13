import React from "react";
import sidebarImage from "../../../assets/Frame23.png";

const EnsureTreatment = () => {
  return (
    <div className="lg:px-32 md:px-20 sm:px-10 px-5 mt-10">
      <div className="lg:flex">
        <div className="lg:w-2/6 order-1 w-full flex justify-center">
          <img src={sidebarImage} alt="" />
        </div>
        <div className="lg:w-4/6 flex items-center">
          <div className="lg:w-5/6">
            <h5 className="text-secondary sm:text-xl">16+ Years Experiences </h5>
            <h1 className="text-accent text-2xl sm:text-4xl my-3">We Are Always ensure Best Medical Treatment For Your Health</h1>
            <p className="text-neutral text-justify">
              simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
              of letters, as opposed to using 'Content here, content here', making it look lik
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnsureTreatment;
