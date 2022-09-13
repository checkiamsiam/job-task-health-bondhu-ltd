import React from "react";
import sidebarImage from "../../../assets/Frame21.png";
import toExpert from "../../../assets/Group29.png";

const FAQ = () => {
  return (
    <div className="lg:px-32 md:px-20 sm:px-10 px-5 mt-10">
      <div className="lg:flex justify-center">
        <div className="lg:w-1/2 w-full order-1 flex lg:justify-end justify-center items-center relative">
          <div>
            <img src={sidebarImage} alt="" />
          </div>
          <div className="absolute cursor-pointer lg:bottom-36 bottom-20 lg:left-36 left-0">
            <img src={toExpert} alt=""/>
          </div>
        </div>

        <div className="lg:w-1/2 flex items-center">
          <div className="py-16">
            <h5 className="text-secondary sm:text-xl pl-4">FAQ Questions</h5>
            <h1 className="text-accent text-2xl sm:text-4xl my-3  text-justify pl-4">Get Your General Answer</h1>

            <div tabIndex={0} className="collapse collapse-plus  p-0">
              <div className="collapse-title font-semibold after:text-primary after:text-xl">Get Your General Answer</div>
              <div className="collapse-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, omnis. Odio iusto nemo architecto quos!</p>
              </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus p-0">
              <div className="collapse-title font-semibold after:text-primary after:text-xl">Will I always see my own doctor? </div>
              <div className="collapse-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae necessitatibus illum soluta molestias</p>
              </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus p-0">
              <div className="collapse-title font-semibold after:text-primary after:text-xl">What is one Medical’s care?</div>
              <div className="collapse-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis suscipit, nulla nam dolor,</p>
              </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus p-0">
              <div className="collapse-title font-semibold after:text-primary after:text-xl">What is evidence based medicine?</div>
              <div className="collapse-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ea dolores et molestias error eos.</p>
              </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus p-0">
              <div className="collapse-title font-semibold after:text-primary after:text-xl">What is an academic medical center?</div>
              <div className="collapse-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis earum quas, </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
