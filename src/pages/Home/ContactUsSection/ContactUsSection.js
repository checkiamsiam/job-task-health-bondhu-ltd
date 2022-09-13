import React from "react";
import contact from '../../../assets/contact1.png'

const ContactUsSection = () => {
  return (
    <div className="lg:px-32 md:px-20 sm:px-10 px-5 my-10">
      <div>
        <div className="text-center">
          <h1 className="text-secondary sm:text-xl">Get In Touch</h1>
          <p className="text-accent text-2xl sm:text-4xl">Message us for any Quires</p>
        </div>
        <div className="md:flex items-center justify-center">
          <div className="md:w-1/2 flex justify-center items-center">
            <img src={contact} alt="" className=""/>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
          <form className="flex flex-col w-full max-w-md">
            <input type="email" placeholder="Your Email" className="input  w-full mb-4" />
            <input type="text" placeholder="Subject" className="input i w-full mb-4" />
            <textarea className="textarea  mb-5" rows={4} placeholder="Massage"></textarea>
            <input className="btn btn-accent text-white font-bold bg-gradient-to-r from-primary to-secondary max-w-md" type="submit" value="SEND MESSAGE" />
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
