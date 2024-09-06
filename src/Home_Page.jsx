import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero_Section from "./Components/Hero_Section/Hero_Section";
import Service_Section from "./Components/Service_Section/Service_Section";
import About_Company from "./Components/About_Company/About_Company";
import Consign_Section from "./Components/Consign_Section/Consign_Section";
import Work_Section from "./Components/Work_Section/Work_Section";
import Team_Section from "./Components/Team_Section/Team_Section";
import ContactUs_Section from "./Components/ContactUs_Section/ContactUs_Section";
import Footer from "./Components/Footer/Footer";

// import Error_Page from "./Components/Error_Page/Error_Page";

function Home_Page() {
  return (
    <>
      <div>

        <Navbar></Navbar>
        <Hero_Section></Hero_Section>
        <Service_Section></Service_Section>
        <About_Company></About_Company>
        <Consign_Section></Consign_Section>
        <Work_Section></Work_Section>
        <Team_Section></Team_Section>
        <ContactUs_Section></ContactUs_Section>
        <Footer></Footer>

      </div>
    </>
  );
}

export default Home_Page;
