import React from 'react';
import Plane from '../../Assets/Wallpaper/Plane2.svg';
import { useNavigate } from 'react-router-dom';
// import Wall from '../../Assets/Wallpaper/polygon-bg-element.svg';


const Hero_Section = () => {
    let Navigate = useNavigate();
    return (
        <>
            <div>
                <section className="py-3 py-lg-5 py-xl-8">
                    <div className="container overflow-hidden">
                        <div className="row gy-5 gy-lg-0 align-items-lg-center justify-content-lg-between">
                            <div className="col-12 col-lg-6 order-1 order-lg-0">
                                <h2 className="display-3 fw-bold mb-3">
                                Global Connections, <span className='text-primary'>Local Solutions</span>
                                </h2>
                                <p className="fs-4 mb-5">
                                Airoxin International is a dynamic global trade company specializing in the seamless import and export of goods worldwide. With a strong commitment to quality, reliability, and innovation, we bridge the gap between international markets, providing efficient and effective solutions for our clients. Our extensive network of suppliers and partners enables us to source a diverse range of products, ensuring that we meet the specific needs of our customers. From raw materials to finished goods, Airoxin International is your trusted partner in global trade.
                                </p>
                                <div className="d-grid gap-2 d-sm-flex">
                                    <button
                                        className="btn btn-primary p-3 fw-bold bsb-btn-2xl rounded-pill"
                                        type="button"
                                        onClick={()=>{Navigate("/About")}}
                                    >
                                        LERN MORE
                                    </button>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 text-center">
                                <div className="position-relative placeholder-wave">
                                    
                                    <img
                                        alt="img"
                                        className="img-fluid"
                                        loading="lazy"
                                        src={Plane}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Hero_Section
