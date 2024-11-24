import React from 'react';
import { Link } from 'react-router-dom';
import profile_06 from '../images/profile-06.jpg';
import doctor_profile_img from '../images/team/1.jpg';

const DoctorPatients = () => {
  return (
    <div>
      <section className="page-title bg-1">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center">
                <h1 className="text-capitalize mb-5 text-lg">My Patients</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section department-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-xl-3 theiaStickySidebar">
              <div className="profile-sidebar doctor-sidebar profile-sidebar-new">
                <div className="widget-profile pro-widget-content">
                  <div className="profile-info-widget">
                    <a className="booking-doc-img">
                      <img src={doctor_profile_img} alt="Doctor Image" />
                    </a>
                    <div className="profile-det-info">
                        <h3><a >Dr Edalin Hendry</a></h3>
                        <div className="patient-details">
                            <h5 className="mb-0">BAMS, MD (Ayurveda)</h5>
                        </div>
                        <span className="badge doctor-role-badge">Ayurvedic Practitioner</span>
                    </div>
                  </div>
                </div>
                <div className="doctor-available-head">
                        <div className="input-block input-block-new">
                            <label className="form-label">Availability <span className="text-danger">*</span></label>
                            <select className="select form-control ">
                                <option data-select2-id="3">I am Available Now</option>
                                <option>Not Available</option>
                            </select>
                        </div>
                    </div>
                <div className="dashboard-widget">
                  <nav className="dashboard-menu">
                    <ul>
                      <li>
                        <Link to="/doctor">
                          <i className="icofont-dashboard fa-fa-solid fa-fa-shapes"></i>
                          <span>Dashboard</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/doctor_appointments">
                          <i className="icofont-ui-calendar fa-solid"></i>
                          <span>My Appointments</span>
                        </Link>
                      </li>
                      <li className="active">
                        <Link to="/doctor_patients">
                          <i className="icofont-user fa-solid"></i>
                          <span>My Patients</span>
                        </Link>
                      </li>
                      <li>
                            <Link to="/herbs_remedies">
                                <i class="fa-solid icofont-medicine"></i>
                                <span>Herbs & Remedies</span>
                            </Link>
                        </li>
                      <li>
                        <Link to="/doctor_change_pw">
                          <i className="icofont-key fa-solid fa-key"></i>
                          <span>Change Password</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/login">
                          <i className="icofont-logout fa-solid fa-calendar-check"></i>
                          <span>Logout</span>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="department-content">
                <div className="dashboard-card w-100">
                  <div className="dashboard-card-head">
                    <div className="header-title">
                      <h5>My Patients</h5>
                    </div>
                  </div>
                  <div className="dashboard-card-body">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="row">
                          <div className="appointment-list d-flex align-items-center justify-content-between">
                            <div className="doctor-info-profile d-flex align-items-center">
                              <a href="#" className="table-avatar mr-3">
                                <img src={profile_06} alt="Patient Img" style={{ width: '50px', borderRadius: '50%' }} />
                              </a>
                              <div className="doctor-name-info">
                                <h5 className="mb-1"><a href="#">Hendrita</a></h5>
                                <span className="text-muted">Patient ID: PT254654</span>
                                <p className="text-muted mb-0">Appointment on 25 Oct 2024 at 3:00 PM</p>
                              </div>
                            </div>
                            <div className="appointment-actions">
                              <button className="btn btn-primary" data-toggle="modal" data-target="#diagnoseModal">
                                Diagnose & Prescribe
                              </button>
                            </div>
                          </div>
                          <div className="appointment-list d-flex align-items-center justify-content-between">
                            <div className="doctor-info-profile d-flex align-items-center">
                              <a href="#" className="table-avatar mr-3">
                                <img src={profile_06} alt="Patient Img" style={{ width: '50px', borderRadius: '50%' }} />
                              </a>
                              <div className="doctor-name-info">
                                <h5 className="mb-1"><a href="#">Hendrita</a></h5>
                                <span className="text-muted">Patient ID: PT254654</span>
                                <p className="text-muted mb-0">Appointment on 25 Oct 2024 at 3:00 PM</p>
                              </div>
                            </div>
                            <div className="appointment-actions">
                              <button className="btn btn-primary" data-toggle="modal" data-target="#diagnoseModal">
                                Diagnose & Prescribe
                              </button>
                            </div>
                          </div>
                          <div className="appointment-list d-flex align-items-center justify-content-between">
                            <div className="doctor-info-profile d-flex align-items-center">
                              <a href="#" className="table-avatar mr-3">
                                <img src={profile_06} alt="Patient Img" style={{ width: '50px', borderRadius: '50%' }} />
                              </a>
                              <div className="doctor-name-info">
                                <h5 className="mb-1"><a href="#">Hendrita</a></h5>
                                <span className="text-muted">Patient ID: PT254654</span>
                                <p className="text-muted mb-0">Appointment on 25 Oct 2024 at 3:00 PM</p>
                              </div>
                            </div>
                            <div className="appointment-actions">
                              <button className="btn btn-primary" data-toggle="modal" data-target="#diagnoseModal">
                                Diagnose & Prescribe
                              </button>
                            </div>
                          </div>
                          <div className="appointment-list d-flex align-items-center justify-content-between">
                            <div className="doctor-info-profile d-flex align-items-center">
                              <a href="#" className="table-avatar mr-3">
                                <img src={profile_06} alt="Patient Img" style={{ width: '50px', borderRadius: '50%' }} />
                              </a>
                              <div className="doctor-name-info">
                                <h5 className="mb-1"><a href="#">Hendrita</a></h5>
                                <span className="text-muted">Patient ID: PT254654</span>
                                <p className="text-muted mb-0">Appointment on 25 Oct 2024 at 3:00 PM</p>
                              </div>
                            </div>
                            <div className="appointment-actions">
                              <button className="btn btn-primary" data-toggle="modal" data-target="#diagnoseModal">
                                Diagnose & Prescribe
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal for Diagnosis and Prescription */}
              <div className="modal fade" id="diagnoseModal" tabindex="-1" role="dialog" aria-labelledby="diagnoseModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="diagnoseModalLabel">Diagnose and Prescribe</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="form-group">
                          <label>Patient Symptoms</label>
                          <textarea className="form-control" rows="3" placeholder="Describe symptoms..."></textarea>
                        </div>
                        <div className="form-group">
                          <label>Diagnosis</label>
                          <textarea className="form-control" rows="3" placeholder="Enter diagnosis..."></textarea>
                        </div>
                        <div className="form-group">
                          <label>Medications</label>
                          <textarea className="form-control" rows="3" placeholder="Prescribe medications..."></textarea>
                        </div>
                        <div className="form-group">
                          <label>Next Appointment Date</label>
                          <input type="date" className="form-control" />
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary">Save Prescription</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Modal */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoctorPatients;
