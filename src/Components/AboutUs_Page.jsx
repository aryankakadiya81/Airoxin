import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import About_Company from './About_Company/About_Company';
// import Hero_Section from './Hero_Section/Hero_Section';
import Work_Section from './Work_Section/Work_Section';
import Heading from './Mini_Components/Heading';
import Company_Details from './Company_Details/Company_Details';
import Why_Choose_Us from './Why_Choose_Us/Why_Choose_Us';

const AboutUs_Page = () => {
    return (
        <>
            <div className='user-select-none'>
                <Navbar></Navbar>
                <Heading Title="About Us"></Heading>
                {/* <Hero_Section></Hero_Section> */}
                <About_Company></About_Company>
                <Company_Details></Company_Details>
                <Work_Section></Work_Section>
                <Why_Choose_Us></Why_Choose_Us>
                <Footer></Footer>
            </div>
        </>
    )
}

export default AboutUs_Page
