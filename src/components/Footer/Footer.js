import React from 'react';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-[#dfe6f1] text-base-content">
  <div>
    
  </div> 
  <div>
    <span className="text-secondary text-lg font-semibold">Quick Links</span> 
    <a className="link link-hover font-semibold">About Us</a> 
    <a className="link link-hover font-semibold">Our Pricing</a> 
    <a className="link link-hover font-semibold">Our Gallery</a> 
    <a className="link link-hover font-semibold">Appointment</a>
    <a className="link link-hover font-semibold">Privacy Policy</a>
  </div> 
  <div>
    <span className="footer-title"><br /></span> 
    <a className="link link-hover font-semibold">Services</a> 
    <a className="link link-hover font-semibold">Our Doctors</a> 
    <a className="link link-hover font-semibold">Our Latest News</a> 
    <a className="link link-hover font-semibold">Careers</a>
    <a className="link link-hover font-semibold">Contact Us</a>
  </div> 
  <div>
  <span className="text-secondary text-lg font-semibold">Opening Hours</span> 
    <a className="link link-hover font-semibold text-neutral"><span className='text-primary'> Mon- Tue </span>&nbsp; &nbsp; &nbsp;08:00 AM- 05:00 PM</a> 
    <a className="link link-hover font-semibold text-neutral"><span className='text-primary'>Wed- Thu</span>&nbsp; &nbsp; &nbsp; 09:00 AM- 06:00 PM</a> 
    <a className="link link-hover font-semibold text-neutral"><span className='text-primary'>Fri- Sat</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 10:00 AM- 07:00 PM</a>
    <a className="link link-hover font-semibold text-neutral"><span className='text-primary'>Sunday </span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Emergency Only</a>
    <a className="link link-hover font-semibold text-neutral"><span className='text-primary'>Personal </span> &nbsp; &nbsp; &nbsp; &nbsp; Mon- 05:00 PM</a>
  </div>
</footer>
  );
};

export default Footer;