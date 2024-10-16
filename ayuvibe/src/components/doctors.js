import React from 'react';

import img1 from '../images/team/1.jpg';
import img2 from '../images/team/2.jpg';
import img3 from '../images/team/3.jpg';
import img4 from '../images/team/4.jpg';

const Doctors = () => {
  return (
    <div>
        <section className="page-title bg-1">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <div className="block text-center">
                    <span className="text-white">All Doctors</span>
                    <h1 className="text-capitalize mb-5 text-lg">Specalized doctors</h1>
                    </div>
                </div>
                </div>
            </div>
        </section>

        <section className="section doctors">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 text-center">
                        <div className="section-title">
                            <h2>Doctors</h2>
                            <div className="divider mx-auto my-4"></div>
                            <p>We provide a wide range of creative services adipisicing elit. Autem maxime rem modi eaque, voluptate. Beatae officiis neque </p>
                        </div>
                    </div>
                </div>

                <div className="col-12 text-center  mb-5">
                        <div className="btn-group btn-group-toggle " data-toggle="buttons">
                        <label className="btn active ">
                            <input type="radio" name="shuffle-filter" value="all" checked="checked" />All Department
                        </label>
                        <label className="btn ">
                            <input type="radio" name="shuffle-filter" value="cat1" />Cardiology
                        </label>
                        <label className="btn">
                            <input type="radio" name="shuffle-filter" value="cat2" />Dental
                        </label>
                        <label className="btn">
                            <input type="radio" name="shuffle-filter" value="cat3" />Neurology
                        </label>
                        <label className="btn">
                            <input type="radio" name="shuffle-filter" value="cat4" />Medicine
                        </label>
                        <label className="btn">
                            <input type="radio" name="shuffle-filter" value="cat5" />Pediatric
                        </label>
                        <label className="btn">
                            <input type="radio" name="shuffle-filter" value="cat6" />Traumatology
                        </label>
                        </div>
                </div>
                <div className="row shuffle-wrapper portfolio-gallery">
                    <div className="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item" data-groups="[&quot;cat1&quot;,&quot;cat2&quot;]">
                        <div className="position-relative doctor-inner-box">
                            <div className="doctor-profile">
                                <div className="doctor-img">
                                    <img src={img1} alt="doctor-image" className="img-fluid w-100" />
                                </div>
                            </div>
                            <div className="content mt-3">
                                <h4 className="mb-0"><a href="doctor-single.html">Thomas Henry</a></h4>
                                <p>Cardiology</p>
                            </div> 
                        </div>
                    </div>

                <div className="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item" data-groups="[&quot;cat2&quot;]">
                        <div className="position-relative doctor-inner-box">
                            <div className="doctor-profile">
                                <div className="doctor-img">
                                    <img src={img2} alt="doctor-image" className="img-fluid w-100" />
                                </div>
                            </div>
                            <div className="content mt-3">
                                <h4 className="mb-0"><a href="doctor-single.html">Harrision Samuel</a></h4>
                                <p>Radiology</p>
                            </div> 
                        </div>
                </div>

                <div className="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item" data-groups="[&quot;cat3&quot;]">
                        <div className="position-relative doctor-inner-box">
                            <div className="doctor-profile">
                                <div className="doctor-img">
                                    <img src={img3} alt="doctor-image" className="img-fluid w-100" />
                                </div>
                            </div>
                            <div className="content mt-3">
                                <h4 className="mb-0"><a href="doctor-single.html">Alexandar James</a></h4>
                                <p>Dental</p>
                            </div> 
                        </div>
                </div>

                <div className="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item" data-groups="[&quot;cat3&quot;,&quot;cat4&quot;]">
                        <div className="position-relative doctor-inner-box">
                            <div className="doctor-profile">
                                <div className="doctor-img">
                                <img src={img4} alt="doctor-image" className="img-fluid w-100" />
                                </div>
                            </div>
                            <div className="content mt-3">
                                <h4 className="mb-0"><a href="doctor-single.html">Edward john</a></h4>
                                <p>Pediatry</p>
                            </div> 
                        </div>
                </div>

                    <div className="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item" data-groups="[&quot;cat5&quot;]">
                        <div className="position-relative doctor-inner-box">
                            <div className="doctor-profile">
                                <div className="doctor-img">
                                <img src={img1} alt="doctor-image" className="img-fluid w-100" />
                                </div>
                            </div>
                            <div className="content mt-3">
                                <h4 className="mb-0"><a href="doctor-single.html">Thomas Henry</a></h4>
                                <p>Neurology</p>
                            </div> 
                        </div>
                    </div>

                <div className="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item" data-groups="[&quot;cat6&quot;]">
                        <div className="position-relative doctor-inner-box">
                            <div className="doctor-profile">
                                <div className="doctor-img">
                                <img src={img3} alt="doctor-image" className="img-fluid w-100" />
                                </div>
                            </div>
                            <div className="content mt-3">
                                <h4 className="mb-0"><a href="doctor-single.html">Henry samuel</a></h4>
                                <p>Palmology</p>
                            </div> 
                        </div>
                </div>

                <div className="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item" data-groups="[&quot;cat4&quot;]">
                        <div className="position-relative doctor-inner-box">
                            <div className="doctor-profile">
                                <div className="doctor-img">
                                <img src={img1} alt="doctor-image" className="img-fluid w-100" />
                                </div>
                            </div>
                            <div className="content mt-3">
                                <h4 className="mb-0"><a href="doctor-single.html">Thomas alexandar</a></h4>
                                <p>Cardiology</p>
                            </div> 
                        </div>
                </div>

                <div className="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item" data-groups="[&quot;cat5&quot;,&quot;cat6&quot;,&quot;cat1&quot;]">
                        <div className="position-relative doctor-inner-box">
                            <div className="doctor-profile">
                                <div className="doctor-img">
                                <img src={img2} alt="doctor-image" className="img-fluid w-100" />
                                </div>
                            </div>
                            <div className="content mt-3">
                                <h4 className="mb-0"><a href="doctor-single.html">HarissonThomas </a></h4>
                                <p>Traumatology</p>
                            </div> 
                        </div>
                </div>

                <div className="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item illustration" data-groups="[&quot;cat2&quot;]">
                        <div className="position-relative doctor-inner-box">
                            <div className="doctor-profile">
                                <div className="doctor-img">
                                <img src={img4} alt="doctor-image" className="img-fluid w-100" />
                                </div>
                            </div>
                            <div className="content mt-3">
                                <h4 className="mb-0"><a href="doctor-single.html">Jonas Thomson</a></h4>
                                <p>Cardiology</p>
                            </div> 
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item" data-groups="[&quot;cat5&quot;,&quot;cat6&quot;,&quot;cat1&quot;]">
                        <div className="position-relative doctor-inner-box">
                            <div className="doctor-profile">
                                <div className="doctor-img">
                                <img src={img4} alt="doctor-image" className="img-fluid w-100" />
                                </div>
                            </div>
                            <div className="content mt-3">
                                <h4 className="mb-0"><a href="doctor-single.html">Henry Forth</a></h4>
                                <p>hematology</p>
                            </div> 
                        </div>
                </div>

                <div className="col-lg-3 col-sm-6 col-md-6 mb-4 shuffle-item illustration" data-groups="[&quot;cat2&quot;]">
                        <div className="position-relative doctor-inner-box">
                            <div className="doctor-profile">
                                <div className="doctor-img">
                                <img src={img4} alt="doctor-image" className="img-fluid w-100" />
                                </div>
                            </div>
                            <div className="content mt-3">
                                <h4 className="mb-0"><a href="doctor-single.html">Thomas Henry</a></h4>
                                <p>Dental</p>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section cta-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="cta-content">
                            <div className="divider mb-4"></div>
                            <h2 className="mb-5 text-lg">We are pleased to offer you the <span className="title-color">chance to have the healthy</span></h2>
                            <a href="appoinment.html" className="btn btn-main-2 btn-round-full">Get appoinment<i className="icofont-simple-right  ml-2"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Doctors;
