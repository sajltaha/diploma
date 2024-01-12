import React from "react";
import { Element } from "react-scroll";
import Header from "./nodes/Header/Header";
import Menu from "./nodes/Menu/Menu";
import Footer from "./nodes/Footer/Footer";
import Events from "./nodes/Evennts/Events";
import OurTeams from "./nodes/OurTeams/OurTeams";

export default function ShoppingPage() {
  return (
    <>
      <Element name="header">
        <Header />
      </Element>
      <Element name="menu">
        <Menu />
      </Element>
      <Element name="teams">
        <OurTeams />
      </Element>
      <Element name="events">
        <Events />
      </Element>
      <Element name="footer">
        <Footer />
      </Element>
    </>
  );
}
