import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Partners from "../components/Partners";

const AdminView = (props) => {
  return (
    <>
      <Navigation />
      <Header />
      <Partners />
    </>
  );
};

export default AdminView;
