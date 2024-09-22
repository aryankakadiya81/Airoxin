import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Heading from './Mini_Components/Heading'
import Tradefair_Participation from './Tradefair_Participation/Tradefair_Participation'
import Helmet_Jsx from '../Helmet_Jsx'

const Tradefair_Participation_Page = () => {
    return (
        <>
            <div>
            <Helmet_Jsx Title={"Tradefair Participation"}></Helmet_Jsx>
                <Navbar></Navbar>
                <Heading Title="Tradefair Participation"></Heading>
                <Tradefair_Participation></Tradefair_Participation>
                <Footer></Footer>
            </div>
        </>
    )
}

export default Tradefair_Participation_Page
