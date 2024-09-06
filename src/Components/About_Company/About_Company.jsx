import React from 'react';
import Img from '../../Assets/Wallpaper/Team.svg';
import { useNavigate } from 'react-router-dom';

const About_Company = () => {

    let Navigate = useNavigate();
    return (
        <>
            <div>
                <>
                    {/* About 2 - Bootstrap Brain Component */}
                    <section className="py-3 py-md-5">
                        <div className="container">
                            <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
                                <div className="col-12 col-lg-6 placeholder-wave">
                                    <img
                                        className="img-fluid"
                                        loading="lazy"
                                        src={Img}
                                        alt="About 2"
                                    />
                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="row justify-content-xl-center">
                                        <div className="col-12 col-xl-10">
                                            <h2 className="mb-3 fw-bold fs-2">About<span className='text-primary'> AIROXIN INTERNATIONAL</span></h2>
                                            <p className="lead fs-4 mb-3 mb-xl-5">
                                            Airoxin International is a leading global trade company dedicated to connecting businesses worldwide. With a strong foundation built on trust, reliability, and innovation, we specialize in the seamless import and export of goods, offering comprehensive solutions to meet the diverse needs of our clients.
                                            </p>
                                            <div className="d-flex align-items-center mb-3">
                                                <div className="me-3 text-primary">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={28}
                                                        height={28}
                                                        fill="currentColor"
                                                        className="bi bi-check-circle-fill"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="fs-5 m-0">
                                                    Sourcing and Procurement
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center mb-3">
                                                <div className="me-3 text-primary">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={28}
                                                        height={28}
                                                        fill="currentColor"
                                                        className="bi bi-check-circle-fill"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="fs-5 m-0">
                                                    Quality Control
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="d-flex align-items-center mb-3">
                                                <div className="me-3 text-primary">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={28}
                                                        height={28}
                                                        fill="currentColor"
                                                        className="bi bi-check-circle-fill"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="fs-5 m-0">
                                                    Logistics and Shipping
                                                    </p>
                                                </div>
                                            </div>


                                            <div className="d-flex align-items-center mb-3">
                                                <div className="me-3 text-primary">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={28}
                                                        height={28}
                                                        fill="currentColor"
                                                        className="bi bi-check-circle-fill"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="fs-5 m-0">
                                                    Market Research
                                                    </p>
                                                </div>
                                            </div>


                                            <div className="d-flex align-items-center mb-3">
                                                <div className="me-3 text-primary">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={28}
                                                        height={28}
                                                        fill="currentColor"
                                                        className="bi bi-check-circle-fill"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="fs-5 m-0">
                                                    After-Sales Support
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="d-flex align-items-center mb-4 mb-xl-5">
                                                <div className="me-3 text-primary">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={28}
                                                        height={28}
                                                        fill="currentColor"
                                                        className="bi bi-check-circle-fill"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="fs-5 m-0">
                                                        We Help in Export-Import Documentation
                                                    </p>
                                                </div>
                                            </div>
                                            <button
                                                type="button"
                                                className="btn bsb-btn-xl btn-outline-primary rounded-pill"
                                                onClick={()=>{Navigate("/Contact");}}
                                            >
                                                Connect Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>

            </div>
        </>
    )
}

export default About_Company;
