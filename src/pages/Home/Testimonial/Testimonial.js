import React, { useRef } from "react";
import prevButton from "../../../assets/prev.png";
import nextButton from "../../../assets/next].png";
import boy from "../../../assets/siam.png";
import ornament57 from "../../../assets/Ornament57.png";
import ornament24 from "../../../assets/Ornament24.png";
import Slider from "react-slick";

const Testimonial = () => {
  const slideRef = useRef(null)
  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  console.log(slideRef);
  return (
    <div>
      <div className="text-center">
        <h1 className="text-secondary sm:text-xl">Testimonial</h1>
        <p className="text-accent text-2xl sm:text-4xl">What they say?</p>
      </div>
      <div className="mt-16">
        <div className="flex gap-5 justify-center items-center">
          <div className="cursor-pointer">
            <img src={prevButton} alt="" />
          </div>
          <div className="lg:max-w-3xl max-w-md">
            <Slider {...settings} ref={slideRef}>
              <div>
                <div className="relative ">
                  <div className="lg:flex bg-[#FFFFFF]  rounded-lg p-7 z-40">
                    <div className="w-2/3">
                      <h1 className="text-2xl font-semibold text-accent z-50">David Jeams</h1>
                      <h5 className="text-xl font-semibold z-50">Pratient</h5>
                      <p className="text-justify text-neutral mt-5">
                        simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                        the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be
                        distracted by the readable content{" "}
                      </p>
                    </div>
                    <div className="w-1/2 flex justify-center items-center">
                      <img src={boy} alt="" className="w-full"/>
                    </div>
                  </div>
                  <img src={ornament57} alt="" className="absolute bottom-0" />
                  <img src={ornament24} alt="" className="absolute top-0 right-0" />
                  <div className="absolute h-16 w-16 rounded-full bg-[#F7FBFF] top-0 -left-10 z-10" />
                </div>
              </div>
            </Slider>
          </div>
          <div className="cursor-pointer">
            <img src={nextButton} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
