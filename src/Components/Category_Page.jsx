import React, { useContext } from 'react';
import { Global } from '../App';
import Navbar from './Navbar/Navbar';
import SubCategory_Section from './Product/Category_Section';
import Footer from './Footer/Footer';
import Heading from './Mini_Components/Heading';
import Helmet_Jsx from '../Helmet_Jsx';


const Category_Page = () => {
    let { Categorys, SubCategorys } = useContext(Global);

    let [Category, setCategory] = Categorys;
    let [SubCategory, setSubCategory] = SubCategorys;
    return (
        <>
            <Helmet_Jsx Title={"Products"}></Helmet_Jsx>
                <Navbar></Navbar>
                <Heading Title={Category}></Heading>
                <SubCategory_Section></SubCategory_Section>
                <Footer></Footer>
           
        </>
    )
}

export default Category_Page
