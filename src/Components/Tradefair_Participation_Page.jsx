import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Heading from './Mini_Components/Heading'
import Tradefair_Participation from './Tradefair_Participation/Tradefair_Participation'

const Tradefair_Participation_Page = () => {
    return (
        <>
            <div>

                <Navbar></Navbar>
                <Heading Title="Tradefair Participation"></Heading>
                <Tradefair_Participation></Tradefair_Participation>
                <Footer></Footer>
            </div>
        </>
    )
}

export default Tradefair_Participation_Page
