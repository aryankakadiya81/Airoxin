import React, { useContext } from 'react';
import { Global } from '../../App';
import ProductData from '../Json_Files/Product_Page.json';
import { useNavigate } from 'react-router-dom';
import Heading from '../Mini_Components/Heading';

const Product = () => {

    let Navigate = useNavigate();

    let { Categorys, SubCategorys, Selected_Products } = useContext(Global);
    let [Category, setCategory] = Categorys;
    let [SubCategory, setSubCategory] = SubCategorys;
    let [Selected_Product, setSelected_Product] = Selected_Products;

    let i=0;

    const KeySkip = ['id', 'Table_Name'];
    return (
        <>
            <div className='bg-white'>


                <Heading Title={Selected_Product.Product_Name}></Heading>

                <div className="container my-5">
                    <div className='container d-flex justify-content-start my-5'>
                        <button onClick={() => { Navigate(-1) }} className='fs-4 px-4 btn btn-primary'>&#11164; Back</button>
                    </div>






                    {
                        <>
                            <div className="row g-4">


                                <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 row g-4'>
                                    <div className=''>
                                        {
                                            Selected_Product.Images.map((el) => {
                                                return (

                                                    <img key={i++} src={el} alt="Product image" className="border-2 rounded-4 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 p-1" />
                                                )
                                            })
                                        }
                                    </div>

                                </div>
                                <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 row g-4'>
                                    <div>

                                        {

                                            Selected_Product.Tables.map((obj) => {
                                                return (
                                                    <table key={obj.id} className="table table-striped border-1 border-black fs-5 table-hover">
                                                        <thead className='border-1 border-black'>
                                                            <tr>
                                                                <th>{obj.Table_Name}</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {Object.keys(obj).map((key,index) => {
                                                                return (


                                                                    (!KeySkip.includes(key)) &&

                                                                    <tr key={index} className='border-1 border-black'>
                                                                        <td className='border-1 border-black'>{key}</td>
                                                                        <td className='border-1 border-black'>{obj[key]}</td>
                                                                    </tr>


                                                                )
                                                            })}
                                                        </tbody>
                                                    </table>
                                                )
                                            })



                                        }
                                    </div>
                                </div>
                            </div>
                        </>
                    }






                    {/* <div className='container d-flex justify-content-start my-5 ms-5 ps-5'>
                        <button onClick={() => { Navigate(-1) }} className='px-4 fs-4  btn btn-primary'>&#11164; Back</button>
                    </div> */}
                </div>




                <div>
                </div>
            </div>

        </>
    )
}



// {
//     "id": "02",
//     "Product_Name": "Polo Nack T-shirt",
//     "SubCategory_Name": "Tshirts",
//     "Category_Name": "Readymade Garments",
//     "Thumbnail_Image": "https://i.postimg.cc/GtzvfyWY/T-shirt.jpg",
//     "Images": [
//         "https://i.postimg.cc/GtzvfyWY/T-shirt.jpg",
//         "https://i.postimg.cc/GtzvfyWY/T-shirt.jpg",
//         "https://i.postimg.cc/GtzvfyWY/T-shirt.jpg",
//         "https://i.postimg.cc/GtzvfyWY/T-shirt.jpg"
//     ],
//     "Tables": [
//         {
//             "id": "01",
//             "Table_Name": "General Information",
//             "Packaging": "Pastic Bag",
//             "Size of Packing": "20cm * 20cm * 10cm",
//             "Sleeve": "Full"
//         },
//         {
//             "id": "02",
//             "Table_Name": "Pricing",
//             "1 - 34 pieces": "$5.90",
//             "35 - 599 pieces": "$5.70"
//         }
//     ]
// }

export default Product
