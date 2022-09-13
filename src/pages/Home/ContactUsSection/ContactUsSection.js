import React from "react";

const ContactUsSection = () => {
  return (
    <div className="py-10 px-3 rounded">
      <div>
        <div className="text-center">
          <h1 className="text-secondary sm:text-xl">Get In Touch</h1>
          <p className="text-accent text-2xl sm:text-4xl">Message us for any quires</p>
        </div>
        <div className="flex items-center justify-center mt-10">
          <form className="flex flex-col w-full max-w-md">
            <input type="email" placeholder="Your Email" className="input  w-full mb-4" />
            <input type="text" placeholder="Subject" className="input i w-full mb-4" />
            <textarea className="textarea  mb-5" rows={4} placeholder="Massage"></textarea>
            <input className="btn btn-accent text-white font-bold bg-gradient-to-r from-primary to-secondary max-w-md" type="submit" value="SEND MESSAGE" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
