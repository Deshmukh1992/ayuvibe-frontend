import React from 'react';
import { Link } from 'react-router-dom';
import profile_06 from '../images/profile-06.jpg';
import doctor_profile_img from '../images/doctor-profile-img.jpg';

const Change_password = () => {
  return (
    <div>
        <section class="page-title bg-1">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                <div class="col-md-12">
                    <div class="block text-center">
                    <h1 class="text-capitalize mb-5 text-lg">Change Password</h1>
                    </div>
                </div>
                </div>
            </div>
        </section>

        <section class="appoinment section">
            <div class="container">
                <div class="row">
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

                <   div class="col-lg-8">
                    <div class="appoinment-wrap mt-5 mt-lg-0 pl-lg-5">
                            <div class="card">
                                <h2 class="mb-2 title-color">Change Password</h2>
                                <form id="#" class="appoinment-form" method="post" action="#">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <input name="username" id="username" type="text" class="form-control" placeholder="Email" />
                                            </div>
                                        </div>
                                        
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <input name="oldpassword" id="oldpassword" type="password" class="form-control" placeholder="Old Password"/>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <input name="newpassword" id="newpassword" type="password" class="form-control" placeholder="New Password"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="d-flex"><a class="btn btn-main btn-round-full" href="#">Change Password<i class="icofont-simple-right ml-2"></i></a></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
};

export default Change_password;
