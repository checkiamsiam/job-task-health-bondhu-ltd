import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import ScrollToTop from "react-scroll-to-top";
import { GrLinkTop } from "react-icons/gr";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
      <ScrollToTop component={<GrLinkTop/>} style={{ borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.53)' }} smooth />
    </div>
  );
};

export default App;
