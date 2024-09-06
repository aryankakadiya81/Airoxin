import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import About_Company from './About_Company/About_Company';
import Hero_Section from './Hero_Section/Hero_Section';
import Work_Section from './Work_Section/Work_Section';
import Heading from './Mini_Components/Heading';

const AboutUs_Page = () => {
    return (
        <>
            <div>
                <Navbar></Navbar>
                <Heading Title="About Us"></Heading>
                <Hero_Section></Hero_Section>
                <About_Company></About_Company>
                <Work_Section></Work_Section>
                <Footer></Footer>
            </div>
        </>
    )
}

export default AboutUs_Page
