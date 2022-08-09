import React from "react";
import AboutUs from "../components/AboutUs";
import Cards from "../components/Cards";
import Career from "../components/Career";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import History from "../components/History";
import Navigation from "../components/Navigation";
import Partners from "../components/Partners";
import Services from "../components/Services";
import Years from "../components/Years";

const AdminView = (props) => {
  return (
    <>
      <Navigation />
      <Header />
      <Partners />
      <div className="thick-border"></div>
      <History />
      <Years />
      <div className="thick-border"></div>
      <AboutUs />
      <Services />
      <Cards />
      <Career />
      <Contact />
      <Footer />
    </>
  );
};

export default AdminView;
