import React from 'react';
import Logo from './Assets/Logo/ICON/icon.jpg'
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home_Page from './Home_Page';
import Error_Page from './Components/Error_Page/Error_Page'
import AboutUs_Page from './Components/AboutUs_Page';
import Team_Page from './Components/Team_Page';
import ContactUs_Page from './Components/ContactUs_Page';
import Accreditation_Page from './Components/Accreditation_Page';
import Tradefair_Participation_Page from './Components/Tradefair_Participation_Page';

// import Img from './Components/Img';


const App = () => {
    return (
        <>
            <div className='user-select-none'>

                <FloatingWhatsApp
                    phoneNumber="+91 9925614381"
                    accountName="AIROXIN INTERNATIONAL"
                    chatMessage="Hello Dear I am from AIROXIN INTERNATIONAL, How Can I Help You?"
                    avatar={Logo}
                />
                <BrowserRouter>
                    <Routes>
                        <Route path="*" element={<Error_Page></Error_Page>}></Route>
                        <Route path="/" element={<Home_Page></Home_Page>}></Route>

                        <Route path="/Home" element={<Home_Page></Home_Page>}></Route>
                        <Route path="/About" element={<AboutUs_Page></AboutUs_Page>}></Route>
                        <Route path="/Team" element={<Team_Page></Team_Page>}></Route>
                        <Route path="/Contact" element={<ContactUs_Page></ContactUs_Page>}></Route>
                        <Route path='/Accreditation' element={<Accreditation_Page></Accreditation_Page>}></Route>
                        <Route path='/Tradefair' element={<Tradefair_Participation_Page></Tradefair_Participation_Page>}></Route>



                    </Routes>
                </BrowserRouter>

            </div>
        </>
    )
}

export default App
