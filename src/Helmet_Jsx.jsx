import React from 'react';
import { Helmet } from "react-helmet";
import Icon from "./Assets/Logo/ICON/icon.svg";
import SEO from './Components/Json_Files/SEO_Meta_Keyword.json';


const Helmet_Jsx = (Props) => {
    return (

        <Helmet>


            <meta charSet="UTF-8" />
            {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
            <meta name="author" content={`${SEO.Author.map((el)=>{return (el);})}`}/>
            <meta name="description" content={`${SEO.Description}`} />
            <meta name="keywords" content={`${SEO.Keywords.map((el)=>{return (el);})}`}/>


            <title>{Props.Title ? `${Props.Title} - AIROXIN INTERNATIONAL` : "AIROXIN INTERNATIONAL"}</title>
            <link rel="icon" href={Icon} />


        </Helmet>
    )
}

export default Helmet_Jsx
