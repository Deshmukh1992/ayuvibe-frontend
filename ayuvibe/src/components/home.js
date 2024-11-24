import React, { useEffect, useState } from 'react';
import img_1 from '../images/about/img-1.jpg';
import img_2 from '../images/about/img-2.jpg';
import img_3 from '../images/about/img-3.jpg';
import { Link } from 'react-router-dom';
import {getDoctorData} from '../services/doctors'; 


const Home = () => {

    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const result = await getDoctorData();
            setDoctors(result);
            setLoading(false);

            console.log(result)


          } catch (err) {
            setError(err);
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);


  return (
    <div>       
        <section className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-xl-7">
                        <div className="block">
                            <div className="divider mb-3"></div>
                            <span className="text-uppercase text-sm letter-spacing headline-1">Total Health care solution</span>
                            <h1 className="mb-3 mt-3 text-white">Your most trusted health partner</h1>
                            
                            <p className="mb-4 pr-5 headline-2">Discover the Power of Ayurveda with AyuVibe: Your Path to Natural Wellness. Explore Remedies, Connect with Experts, and Rejuvenate Holistically.</p>
                            {/* <div className="btn-container ">
                                <a href="appoinment.html"  className="btn btn-main-2 btn-icon btn-round-full">Make appoinment <i className="icofont-simple-right ml-2  "></i></a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="features">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="feature-block d-lg-flex">
                            <div className="feature-item mb-5 mb-lg-0">
                                <div className="feature-icon mb-4">
                                    <i className="icofont-surgeon-alt"></i>
                                </div>
                                <span>24 Hours Service</span>
                                <h4 className="mb-3">Online Appoinment</h4>
                                <p className="mb-4">Book online appointments with trusted Ayurvedic doctors through AyuVibe.</p>
                                <Link to="/login" className="btn btn-main btn-round-full">Make a appoinment</Link>
                            </div>
                        
                            <div className="feature-item mb-5 mb-lg-0">
                                <div className="feature-icon mb-4">
                                    <i className="icofont-ui-clock"></i>
                                </div>
                                <span>Timing schedule</span>
                                <h4 className="mb-3">Working Hours</h4>
                                <ul className="w-hours list-unstyled">
                                    <li className="d-flex justify-content-between">Sun - Wed : <span>8:00 - 17:00</span></li>
                                    <li className="d-flex justify-content-between">Thu - Fri : <span>9:00 - 17:00</span></li>
                                    <li className="d-flex justify-content-between">Sat - sun : <span>10:00 - 17:00</span></li>
                                </ul>
                            </div>
                        
                            <div className="feature-item mb-5 mb-lg-0">
                                <div className="feature-icon mb-4">
                                    <i className="icofont-support"></i>
                                </div>
                                <span>Emegency Cases</span>
                                <h4 className="mb-3">0257 226 4881</h4>
                                <p>Book online appointments with trusted Ayurvedic doctors through AyuVibe. Experience convenient, personalized consultations for your holistic health needs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-sm-6">
                        <div className="about-img">
                            <img src={img_1} alt="" className="img-fluid" />
                            <img src={img_2} alt="" className="img-fluid mt-4" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="about-img mt-4 mt-lg-0">
                            <img src={img_3} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="about-content pl-4 mt-4 mt-lg-0">
                            <h2 className="title-color">Personal care <br/>& healthy living</h2>
                            <p className="mt-4 mb-5">Enhance your well-being with AyuVibe's Personal Care & Healthy Living services. Explore tailored Ayurvedic routines, natural remedies, and lifestyle tips for a balanced, healthy life.</p>

                            <Link to="/login" className="btn btn-main-2 btn-round-full btn-icon">Login<i className="icofont-simple-right ml-3"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="cta-section ">
            <div className="container">
                <div className="cta position-relative">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="counter-stat">
                                <i className="icofont-doctor"></i>
                                <span className="h3">58</span>k
                                <p>Happy Individuals on Their Ayurvedic Journey</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="counter-stat">
                                <i className="icofont-flag"></i>
                                <span className="h3">1000</span>+
                                <p>Ayurvedic Treatments Completed</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="counter-stat">
                                <i className="icofont-badge"></i>
                                <span className="h3">40</span>+
                                <p>Expert Ayurvedic Practitioners</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="counter-stat">
                                <i className="icofont-globe"></i>
                                <span className="h3">20</span>
                                <p>Global Ayurvedic Wellness Centers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section appoinment">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 ">
                        <div className="appoinment-content">
                            <img src={img_1} alt="" className="img-fluid" />
                            <div className="emergency">
                                <h2 className="text-lg"><i className="icofont-phone-circle text-lg"></i>+23 345 67980</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-10 ">
                        <div className="appoinment-wrap mt-5 mt-lg-0">
                            <h2 className="mb-2 title-color">Book appoinment</h2>
                            <p className="mb-4">Book online appointments with trusted Ayurvedic doctors through AyuVibe. Experience convenient, personalized consultations for your holistic health needs</p>
                                <form id="#" className="appoinment-form" method="post" action="#">
                            <div className="row">
                                

                                
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input name="name" id="name" type="text" className="form-control" placeholder="Full Name"/>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input name="phone" id="phone" type="Number" className="form-control" placeholder="Phone Number"/>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input name="date" id="date" type="text" className="form-control" placeholder="dd/mm/yyyy" />
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input name="time" id="time" type="text" className="form-control" placeholder="Time" />
                                    </div>
                                </div>

                                {/* <div className="col-lg-6">
                                    <div className="form-group">
                                        <select className="form-control" id="exampleFormControlSelect1">
                                        <option>Choose Department</option>
                                        <option>Software Design</option>
                                        <option>Development cycle</option>
                                        <option>Software Development</option>
                                        <option>Maintenance</option>
                                        <option>Process Query</option>
                                        <option>Cost and Duration</option>
                                        <option>Modal Delivery</option>
                                        </select>
                                    </div>
                                </div> */}
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <select className="form-control" id="exampleFormControlSelect2">
                                            <option>Select Doctors</option>
                                                {doctors.map((doctor) => (
                                                    <option key={doctor.id} value={doctor.id}>
                                                    Dr. {doctor.first_name} {doctor.last_name} - {doctor.specialization} 
                                                    </option>
                                                ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group-2 mb-4">
                                <textarea name="message" id="message" className="form-control" rows="6" placeholder="Your Message"></textarea>
                            </div>
                            <Link to="/login" className="btn btn-main btn-round-full" href="appoinment.html" >Make Appoinment <i className="icofont-simple-right ml-2  "></i></Link>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section testimonial-2 gray-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="section-title text-center">
                            <h2>We served over 1000+ Patients</h2>
                            <div className="divider mx-auto my-4"></div>
                            <p>Trusted by over 1,000 patients, AyuVibe has empowered individuals on their Ayurvedic health journeys. Join our growing community and experience holistic wellness firsthand.</p>
                        </div>
                    </div>
                </div>
            </div>

            
        </section>
    </div>
  );
}

export default Home;
