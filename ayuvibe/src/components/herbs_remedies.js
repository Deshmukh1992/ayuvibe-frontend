import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import user_girl from '../images/user_girl.png';
import user_boy from '../images/user_boy.png';
import profile_06 from '../images/profile-06.jpg';
import doctor_profile_img from '../images/team/1.jpg';
import HerbsDataTable from '../components/herbs_datatable';
import { useLocation } from 'react-router-dom';
import { getDoctorById } from '../services/doctors';

const HerbsRemedies = () => {
  const location = useLocation(); // useLocation hook to access route state
  // const user = location.state?.user || {}; // Access the user object from the state, fallback to empty object if undefined
  const userDataString = localStorage.getItem('user');
  const user = JSON.parse(userDataString);

  console.log(user);

  const [doctor, setdoctor] = useState(null); // Initialize state for doctor data

  const [user_profile, setUserProfile] = useState(user_boy);

  const fetchData = () => {
    getDoctorById(user.user_id) // Fetch data by user ID
      .then(result => {
        console.log(result); // Logs the doctor data
        setdoctor(result);  // Set the fetched data in state
        localStorage.setItem('doctor', JSON.stringify(result));

      })
      .catch(err => { 
        console.log(err); // Handle and log any error
      });
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, [user.user_id]);

  return (
    <div>
      <section className="page-title bg-1">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center">
                <h1 className="text-capitalize mb-5 text-lg">My Appointments</h1>
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
                      {doctor ? (
                          <>
                              <h3><a>{doctor.first_name} {doctor.last_name}</a></h3>
                              <div className="patient-details">
                                  <h5 className="mb-0">{doctor.specialization}</h5>
                              </div>
                              <span className="badge doctor-role-badge">Ayurvedic Practitioner</span>
                          </>
                      ) : (
                          <h3>Loading...</h3> // Show loading state while fetching data
                      )}
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
                      {/* <li>
                        <Link to="/doctor_patients">
                          <i className="icofont-user fa-solid"></i>
                          <span>My Patients</span>
                        </Link>
                      </li> */}
                      <li className="active">
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
                <div className="dashboard-card w-100  dr-appointment-box">
                  <div className="dashboard-card-head">
                    <div className="header-title">
                      <h5>Ayurvedic Herbs</h5>
                    </div>
                  </div>
                  <div className="dashboard-card-body">
                  <div className="table-responsive">
                    <HerbsDataTable />
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

export default HerbsRemedies;
