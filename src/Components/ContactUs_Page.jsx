import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Heading from './Mini_Components/Heading'
import ContactUs_Section from './ContactUs_Section/ContactUs_Section'

const ContactUs_Page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Heading Title="Contact Us"></Heading>
      <ContactUs_Section></ContactUs_Section>
      <Footer></Footer>
    </div>
  )
}

export default ContactUs_Page
