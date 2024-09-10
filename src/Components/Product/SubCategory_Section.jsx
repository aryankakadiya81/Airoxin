import React, { useContext } from 'react';
import { Global } from '../../App';
import ProductData from '../Json_Files/Product_Page.json';
import { Link, useNavigate } from 'react-router-dom';
import Heading from '../Mini_Components/Heading';

const SubCategory_Section = () => {

  let Navigate = useNavigate();

  let { Categorys, SubCategorys, Selected_Products } = useContext(Global);
  let [Category, setCategory] = Categorys;
  let [SubCategory, setSubCategory] = SubCategorys;
  let [Selected_Product, setSelected_Product] = Selected_Products;
  

  return (
    <>
      <div className='bg-white'>


        <Heading Title={SubCategory}></Heading>

        <div className="container my-5">
          <div className='container d-flex justify-content-start my-5'>
            <button onClick={() => {window.scrollTo(0, 0); Navigate(-1); }} className='fs-4 px-4 btn btn-primary'>&#11164; Back</button>
          </div>
          <div className="row g-4">
            {
              ProductData.Products.filter((el) => { return el.SubCategory_Name == SubCategory && el.Category_Name == Category }).map((el) => {
                return (
                  <>
                    <div className="col-12 col-sm-6 col-xl-4">
                      <div className="card border-0 border-2 rounded-4 border-bottom border-primary shadow-lg placeholder-glow">
                        <div className="card-body text-center">
                          <div>
                            <img src={el.Images[0]} alt="Product image" className="card-img-top" />
                          </div>

                          <h4 className="my-4 fw-bold">
                            {el.Product_Name}
                          </h4>


                          <Link to="/Category/Subcategory/Product" onClick={() => {window.scrollTo(0, 0); ;setSelected_Product(el);}} type="button" className="btn btn-primary mb-3">
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
          {/* <div className='container d-flex justify-content-start my-5 ms-5 ps-5'>
            <button onClick={() => { Navigate(-1); window.scrollTo(0, 0); }} className='px-4 fs-4  btn btn-primary'>&#11164; Back</button>
          </div> */}
        </div>




        <div>
        </div>
      </div>

    </>
  )
  
}

export default SubCategory_Section
