import React from 'react';
import Banner from './Banner/Banner';
import EnsureTreatment from './EnsureTreatment/EnsureTreatment';
import FAQ from './FAQ/FAQ';
import HospitalFeature from './HospitalFeature/HospitalFeature';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <EnsureTreatment></EnsureTreatment>
      <HospitalFeature></HospitalFeature>
      <FAQ></FAQ>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;