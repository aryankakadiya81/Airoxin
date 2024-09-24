import React from 'react';
import { Helmet } from "react-helmet";
import Icon from "./Assets/Logo/ICON/icon.svg";
import SEO from './Components/Json_Files/SEO_Meta_Keyword.json';


const Helmet_Jsx = (Props) => {
    return (
        <Helmet>

            <meta name="keywords" content="import-export, international trade, global sourcing, supply chain management, customs clearance, international logistics, market analysis, global business, trade solutions, reliable partner,global trade,readymade garments,medicine,international business,supply chain management,customs clearance,international logistics,market analysis,global sourcing" />


            <meta name="description" content="Airoxin International is a leading global trade company specializing in import-export, offering seamless solutions for businesses worldwide. Benefit from our expertise, global network, and commitment to quality." />

            <title>AIROXIN INTERNATIONAL</title>
            <link rel="icon" href="./icon.svg" type="image" />




        </Helmet>
    )
}

export default Helmet_Jsx
