import React from "react";
import AboutUs from "../components/AboutUs";
import Cards from "../components/Cards";
import Career from "../components/Career";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import History from "../components/History";
import Navigation from "../components/Navigation";
import NewsLetter from "../components/NewsLetter";
import Partners from "../components/Partners";
import Services from "../components/Services";
import Years from "../components/Years";

const AdminView = (props) => {
  const [show, setShow] = React.useState(false);

  const handleNewsLetterModal = () => {
    setShow(true);
  };

  const handleClose = () => setShow(false);

  React.useEffect(() => {
    setTimeout(() => {
      handleNewsLetterModal();
    }, 3000);
  }, []);

  return (
    <>
      <NewsLetter show={show} handleClose={handleClose} />
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
