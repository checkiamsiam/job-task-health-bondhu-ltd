import React, { useRef } from "react";
import prevButton from "../../../assets/prev.png";
import nextButton from "../../../assets/next].png";
import boy from "../../../assets/siam.png";
import ornament57 from "../../../assets/Ornament57.png";
import ornament24 from "../../../assets/Ornament24.png";
import Slider from "react-slick";

const Testimonial = () => {
  const slideRef = useRef(null);
  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    // fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  console.log(slideRef);
  return (
    <div className="lg:px-32 md:px-20 sm:px-10 px-5 mt-10">
      <div className="text-center">
        <h1 className="text-secondary sm:text-xl">Testimonial</h1>
        <p className="text-accent text-2xl sm:text-4xl">What they say?</p>
      </div>
      <div className="mt-16">
        <div className="sm:hidden block mb-5">
          <div className="flex gap-5 justify-end">
            <div  onClick={() => slideRef.current.slickPrev()} className="cursor-pointer">
              <img src={prevButton} alt="" />
            </div>
            <div  onClick={() => slideRef.current.slickNext()}  className="cursor-pointer ">
              <img src={nextButton} alt="" />
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-center items-center">
          <div  onClick={() => slideRef.current.slickPrev()}  className="cursor-pointer sm:block hidden">
            <img src={prevButton} alt="" />
          </div>
          <div className="lg:max-w-3xl sm:max-w-md w-full">
            <Slider {...settings} ref={slideRef}>
              <div>
                <div className="relative ">
                  <div className="lg:flex bg-[#FFFFFF]  rounded-lg p-7 z-40">
                    <div className="lg:w-2/3 w-full">
                      <h1 className="text-2xl font-semibold text-accent relative z-50">David Jeams</h1>
                      <h5 className="text-xl font-semibold relative z-50">Pratient</h5>
                      <p className="text-justify text-neutral mt-5 z-50 relative">
                        simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be
                        distracted by the readable content{" "}
                      </p>
                    </div>
                    <div className="lg:block hidden  w-1/2">
                      <div className=" flex justify-center items-center">
                        <img src={boy} alt="" className="w-full" />
                      </div>
                    </div>
                  </div>
                  <img src={ornament57} alt="" className="absolute bottom-0 hidden z-0" />
                  <img src={ornament24} alt="" className="absolute top-0 right-0" />
                  <div className="absolute h-36 w-36 rounded-full bg-[#F7FBFF] -top-10 -left-10 z-10" />
                </div>
              </div>
              <div>
                <div className="relative ">
                  <div className="lg:flex bg-[#FFFFFF]  rounded-lg p-7 z-40">
                    <div className="lg:w-2/3 w-full">
                      <h1 className="text-2xl font-semibold text-accent relative z-50">David Jeams</h1>
                      <h5 className="text-xl font-semibold relative z-50">Pratient</h5>
                      <p className="text-justify text-neutral mt-5 z-50 relative">
                        simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be
                        distracted by the readable content{" "}
                      </p>
                    </div>
                    <div className="lg:block hidden  w-1/2">
                      <div className=" flex justify-center items-center">
                        <img src={boy} alt="" className="w-full" />
                      </div>
                    </div>
                  </div>
                  <img src={ornament57} alt="" className="absolute bottom-0 hidden z-0" />
                  <img src={ornament24} alt="" className="absolute top-0 right-0" />
                  <div className="absolute h-36 w-36 rounded-full bg-[#F7FBFF] -top-10 -left-10 z-10" />
                </div>
              </div>
            </Slider>
          </div>
          <div onClick={() => slideRef.current.slickNext()} className="cursor-pointer  sm:block hidden">
            <img src={nextButton} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
