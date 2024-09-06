import React from 'react'
import Navbar from './Navbar/Navbar'
import Accreditation_Section from './Accreditation/Accreditation_Section'
import Footer from './Footer/Footer'
import Heading from './Mini_Components/Heading'

const Accreditation_Page = () => {
    return (
        <>
            <div>
                <Navbar></Navbar>
                <Heading Title="Accreditation"></Heading>
                <Accreditation_Section></Accreditation_Section>
                <Footer></Footer>
            </div>
        </>
    )
}

export default Accreditation_Page
