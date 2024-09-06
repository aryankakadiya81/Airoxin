import React from 'react';
import './Service_Section.css';
import Bbg from '../../Assets/Wallpaper/Earth_Wall.jpg';


const Service_Section = () => {
    return (
        <>
            <div>

                <section className="bg-light py-5 py-xl-8" style={{backgroundImage:`url(${Bbg})`, backgroundAttachment:`fixed`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-12 col-md-10 col-lg-8 col-xl-7">
                                <h2 className="display-5 mt-2 mb-5 fw-bold text-center">
                                    CATAGORY
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="container overflow-hidden mb-5 mt-3">
                        <div className="row gy-4">


                            <div className="col-12 col-sm-6 col-xl-4 fadeInUp-animation">
                                <div className="card border-0 border-2 rounded-4 border-bottom border-primary shadow-sm placeholder-glow">
                                    <div className="card-body text-center p-4 p-xxl-5">
                                        <i className="bg-primary rounded-circle p-4 fa-solid fa-shirt text-white" style={{ fontSize: "70px" }}></i>

                                        <h4 className="my-4 fw-bold">
                                            READYMADE GARMENTS
                                        </h4>
                                        <p className="mb-4 text-secondary">
                                            We provide comprehensive export services for readymade garments, including sourcing, quality control, documentation, logistics, market research, and after-sales support.
                                        </p>
                                        <a
                                            className="fw-bold text-decoration-none link-primary"
                                            href="#!"
                                        >
                                            <button type="button" className="btn btn-primary">
                                                LEARN MORE
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-xl-4 fadeInUp-animation">
                                <div className="card border-0 border-2 rounded-4 border-bottom border-primary shadow-sm placeholder-glow">
                                    <div className="card-body text-center p-4 p-xxl-5">
                                        <i className="bg-primary rounded-circle p-4 fa-solid fa-shirt text-white" style={{ fontSize: "70px" }}></i>

                                        <h4 className="my-4 fw-bold">
                                            READYMADE GARMENTS
                                        </h4>
                                        <p className="mb-4 text-secondary">
                                            We provide comprehensive export services for readymade garments, including sourcing, quality control, documentation, logistics, market research, and after-sales support.
                                        </p>
                                        <a
                                            className="fw-bold text-decoration-none link-primary"
                                            href="#!"
                                        >
                                            <button type="button" className="btn btn-primary">
                                                LEARN MORE
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-xl-4 fadeInUp-animation">
                                <div className="card border-0 border-2 rounded-4 border-bottom border-primary shadow-sm placeholder-glow">
                                    <div className="card-body text-center p-4 p-xxl-5">
                                        <i className="bg-primary rounded-circle p-4 fa-solid fa-shirt text-white" style={{ fontSize: "70px" }}></i>

                                        <h4 className="my-4 fw-bold">
                                            READYMADE GARMENTS
                                        </h4>
                                        <p className="mb-4 text-secondary">
                                            We provide comprehensive export services for readymade garments, including sourcing, quality control, documentation, logistics, market research, and after-sales support.
                                        </p>
                                        <a
                                            className="fw-bold text-decoration-none link-primary"
                                            href="#!"
                                        >
                                            <button type="button" className="btn btn-primary">
                                                LEARN MORE
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default Service_Section
