import React from 'react';
import Work from '../../Assets/Wallpaper/Work1.svg'

const Work_Section = () => {
    return (
        <>
            <div>
                <section className="py-3 py-md-5">
                    <div className="container">
                        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">

                            <div className="col-12 col-lg-6">
                                <div className="row justify-content-xl-center">
                                    <div className="col-12 col-xl-10">
                                        <h2 className="mb-4 fs-1">Introducing <span className='text-primary'>Our Work</span></h2>
                                        <h3 className='mb-4 fs-3'>Your Global Trade Partner, Delivering Quality, Reliability and Innovation.</h3>
                                        <p className="lead fs-4 mb-3 mb-xl-5">
                                        Airoxin International is a premier global merchandise company specializing in the seamless import, export, and trading of goods worldwide. With a strong focus on quality, reliability, and innovation, we serve as a trusted bridge between international markets, connecting businesses and facilitating trade.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 placeholder-wave">
                                <img
                                    className="img-fluid rounded"
                                    loading="lazy"
                                    src={Work}
                                    alt="About 2"
                                />
                            </div>

                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default Work_Section
