import React from 'react';
import { Link } from 'react-router-dom';
import profile_06 from '../images/profile-06.jpg';
import doctor_profile_img from '../images/doctor-profile-img.jpg';

const Patient = () => {
  return (
    <div>
      <section className="page-title bg-1">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center">
                <h1 className="text-capitalize mb-5 text-lg">Dashboard</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section department-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-xl-3 theiaStickySidebar">
              <div className="profile-sidebar patient-sidebar profile-sidebar-new">
                <div className="widget-profile pro-widget-content">
                  <div className="profile-info-widget">
                    <a className="booking-doc-img">
                      <img src={profile_06} alt="User Image" />
                    </a>
                    <div className="profile-det-info">
                      <h3>
                        <a>Hendrita</a>
                      </h3>
                      <div className="patient-details">
                        <h5 className="mb-0">Patient ID: PT254654</h5>
                      </div>
                      <span>
                        Female
                        <i className="fa-solid fa-circle"></i>
                        32 years 03 Months
                      </span>
                    </div>
                  </div>
                </div>
                <div className="dashboard-widget">
                  <nav className="dashboard-menu">
                    <ul>
                      <li className="active">
                        <Link to="/patient">
                          <i className="icofont-dashboard fa-fa-solid fa-fa-shapes"></i>
                          <span>Dashboard</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/patient_appointments">
                          <i className="icofont-ui-calendar fa-solid"></i>
                          <span>My Appointments</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/medical_details">
                          <i className="icofont-shield-alt fa-solid fa-shield-halved"></i>
                          <span>Medical History</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/change_password">
                          <i className="icofont-key fa-solid fa-key"></i>
                          <span>Change Password</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/patient_login">
                          <i className="icofont-logout fa-solid fa-calendar-check"></i>
                          <span>Logout</span>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="row">
                <div className="col-lg-7">
                  <div className="department-content">
                    <div className="dashboard-card w-100">
                      <div className="dashboard-card-head">
                        <div className="header-title">
                          <h5>Health Records</h5>
                        </div>
                      </div>
                      <div className="dashboard-card-body">
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="health-records icon-orange">
                                  <span><i className="fa-solid icofont-heart"></i>Heart Rate</span>
                                  <h3>140 Bpm <sup>2%</sup></h3>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="health-records icon-amber">
                                  <span><i className="fa-solid icofont-hour-glass"></i>Body Temperature</span>
                                  <h3>37.5 C</h3>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="health-records icon-dark-blue">
                                  <span><i className="fa-solid icofont-medical-sign"></i>Glucose Level</span>
                                  <h3>70 - 90 <sup>6%</sup></h3>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="health-records icon-blue">
                                  <span><i className="fa-solid icofont-ui-flash-light"></i>SPo2</span>
                                  <h3>96%</h3>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="health-records icon-red">
                                  <span><i className="fa-solid icofont-injection-syringe"></i>Blood Pressure</span>
                                  <h3>100 mg/dl <sup>2%</sup></h3>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="health-records icon-purple">
                                  <span><i className="fa-solid icofont-ui-user"></i>BMI</span>
                                  <h3>20.1 kg/m<sup>2</sup></h3>
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="report-gen-date">
                                  <p>Report generated on last visit: 25 Mar 2024 <span><i className="fa-solid icofont-copy"></i></span></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="favourites-dashboard w-100">
                    <div className="book-appointment-head">
                      <h3><span>Book a new</span> Appointment</h3>
                      <span className="add-icon">
                        <a href="#" data-toggle="modal" data-target="#largeModal">
                          <i className="fa-solid icofont-plus-circle"></i>
                        </a>
                      </span>
                    </div>
                    <div className="dashboard-card w-100">
                      <div className="dashboard-card-head">
                        <div className="header-title">
                          <h5>Consultant</h5>
                        </div>
                      </div>
                      <div className="dashboard-card-body">
                        <div className="doctor-fav-list">
                          <div className="doctor-info-profile">
                            <a href="#" className="table-avatar">
                              <img src={doctor_profile_img} alt="Img" />
                            </a>
                            <div className="doctor-name-info">
                              <h5><a href="#">Dr. Edalin</a></h5>
                              <span>Endodontists</span>
                            </div>
                          </div>
                          <a href="#" className="cal-plus-icon"><i className="fa-solid icofont-calendar"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Patient;
