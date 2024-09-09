import React, { useContext } from 'react';
import { Global } from '../../App';
import ProductData from '../Json_Files/Product_Page.json';
import { Link } from 'react-router-dom';


const Category_Section = () => {

    let { Categorys, SubCategorys } = useContext(Global);
    let [Category, setCategory] = Categorys;
    let [SubCategory, setSubCategory] = SubCategorys;

    return (
        <>
            <div className='bg-white'>

                
                <div className="container my-5">
                    <div className="row g-4">
                        {
                            ProductData.SubCategory.filter((el) => { return el.Category_Name == Category }).map((el) => {
                                return (
                                    <>
                                        <div className="col-12 col-sm-6 col-xl-4">
                                            <div className="card border-0 border-2 rounded-4 border-bottom border-primary shadow-lg placeholder-glow">
                                                <div className="card-body text-center">
                                                    <div>
                                                        <img src={el.Image} alt="Product image" className="card-img-top" />
                                                    </div>

                                                    <h4 className="my-4 fw-bold">
                                                        {el.SubCategory_Name}
                                                    </h4>


                                                    <Link onClick={() => { setSubCategory(el.SubCategory_Name)}} to="/Category/Subcategory" type="button" className="btn btn-primary mb-3">
                                                        LEARN MORE
                                                    </Link>

                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                </div>




                <div>
                </div>
            </div>
        </>
    )
}

export default Category_Section
