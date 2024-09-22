import React from 'react'
import Team_Section from './Team_Section/Team_Section'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Helmet_Jsx from '../Helmet_Jsx'
// import Heading from './Mini_Components/Heading'

const Team_Page = () => {
    return (
        <div>
            <Helmet_Jsx Title={"Team"}></Helmet_Jsx> 
            <Navbar></Navbar>
            {/* <Heading Title="Backbone of Our Company" Font="50px"></Heading> */}
            <Team_Section></Team_Section>
            <Footer></Footer>
        </div>
    )
}

export default Team_Page
