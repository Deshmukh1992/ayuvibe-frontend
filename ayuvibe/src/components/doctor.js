import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import user_girl from '../images/user_girl.png';
import user_boy from '../images/user_boy.png';
import profile_06 from '../images/profile-06.jpg';
import doctor_profile_img from '../images/team/1.jpg';
import { useLocation } from 'react-router-dom';
import { getDoctorById } from '../services/doctors';
import { getDoctorAppointmetById } from '../services/doctors';

const Doctor_page = () => {

    const location = useLocation(); // useLocation hook to access route state
  // const user = location.state?.user || {}; // Access the user object from the state, fallback to empty object if undefined
  const userDataString = localStorage.getItem('user');
  const user = JSON.parse(userDataString);

  console.log(user);

  const [doctor, setdoctor] = useState(null); // Initialize state for doctor data

  const [appointments, setappointments] = useState(null);
  const [todays_appointments, setTodaysAppointments] = useState(null);

  const [user_profile, setUserProfile] = useState(user_boy);

  const fetchData = () => {
    getDoctorById(user.user_id) // Fetch data by user ID
      .then(result => {
        console.log(result); // Logs the doctor data
        setdoctor(result);  // Set the fetched data in state
        localStorage.setItem('doctor', JSON.stringify(result));

        // if(doctor.gender === "Male"){
        //   setUserProfile(user_boy);
        // }
        // else{
        //   setUserProfile(user_girl);
        // }

      })
      .catch(err => { 
        console.log(err); // Handle and log any error
      });

    getDoctorAppointmetById(user.user_id) // Fetch data by user ID
      .then(result => {
        console.log(result); // Logs the doctor data
        setappointments(result);  // Set the fetched data in state
        localStorage.setItem('appointments', JSON.stringify(result));

        // Get today's date in YYYY-MM-DD format
        const today = new Date().toISOString().split('T')[0];

        // Filter appointments for today's date
        const todaysAppointments = result.filter(appointment => {
          const appointmentDate = new Date(appointment.appointment_date).toISOString().split('T')[0];
          return appointmentDate === today;
        });

        setTodaysAppointments(todaysAppointments);

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
                            <a href="doctor-profile.html" className="booking-doc-img">
                            <img src={doctor_profile_img}alt="User Image" />
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
                        <li className="active">
                            <Link to="/doctor">
                            <i className="icofont-dashboard fa-fa-solid fa-fa-shapes"></i>
                            <span>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/doctor_appointments">
                            <i className="fa-solid icofont-calendar"></i>
                            <span>Appointments</span>
                            </Link>
                        </li>
                        {/* <li>
                            <Link to="/doctor_patients">
                                <i class="fa-solid icofont-ui-user-group"></i>
                                <span>My Patients</span>
                            </Link>
                        </li> */}
                        <li>
                            <Link to="/herbs_remedies">
                                <i class="fa-solid icofont-medicine"></i>
                                <span>Herbs & Remedies</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/change_password">
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
                <div className="col-lg-8 col-xl-9">
                    <div className="row">
                        <div className="col-xl-4 d-flex">
                            <div className="dashboard-box-col w-100">
                                <div className="dashboard-widget-box">
                                    <div className="dashboard-content-info">
                                        <h6>Total Patient</h6>
                                        {appointments ? (
                                        <h4>{appointments.length}</h4>
                                        ) : (
                                            <h4>0</h4>
                                        )}
                                        <span className="text-success"><i className="fa-solid fa-arrow-up"></i>15% From Last Week</span>
                                    </div>
                                    {/* <div className="dashboard-widget-icon">
                                        <span className="dash-icon-box"><i className="fa-solid fa-user-injured"></i></span>
                                    </div> */}
                                </div>
                                <div className="dashboard-widget-box">
                                <div className="dashboard-content-info">
                                    <h6>Patients Today</h6>
                                    {todays_appointments ? (
                                    <h4>{todays_appointments.length}</h4>
                                    ) : (
                                        <h4>0</h4>
                                    )}
                                    <span className="text-danger"><i className="fa-solid fa-arrow-up"></i>15% From Yesterday</span>
                                </div>
                                {/* <div className="dashboard-widget-icon">
                                    <span className="dash-icon-box"><i className="fa-solid fa-user-clock"></i></span>
                                </div> */}
                                </div>
                                <div className="dashboard-widget-box">
                                <div className="dashboard-content-info">
                                    <h6>Appointments Today</h6>
                                    {todays_appointments ? (
                                    <h4>{todays_appointments.length}</h4>
                                    ) : (
                                        <h4>0</h4>
                                    )}
                                    <span className="text-success"><i className="fa-solid fa-arrow-up"></i>20% From Yesterday</span>
                                </div>
                                {/* <div className="dashboard-widget-icon">
                                    <span className="dash-icon-box"><i className="fa-solid fa-calendar-days"></i></span>
                                </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 d-flex">
                            <div className="dashboard-card w-100  home-app">
                                <div className="dashboard-card-head">
                                    <div className="header-title">
                                        <h5>Appointment</h5>
                                    </div>
                                    <div className="dropdown header-dropdown">
                                        <a className="dropdown-toggle nav-tog" data-bs-toggle="dropdown" href="javascript:void(0);">
                                        Last 7 Days
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a href="javascript:void(0);" className="dropdown-item">
                                            Today
                                            </a>
                                            <a href="javascript:void(0);" className="dropdown-item">
                                            This Month
                                            </a>
                                            <a href="javascript:void(0);" className="dropdown-item">
                                            Last 7 Days
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="dashboard-card-body">
                                    <div className="table-responsive">
                                        <table className="table dashboard-table appoint-table">
                                            <tbody>
                                                {appointments && appointments.length > 0 ? (
                                                appointments.map((appointment) => (
                                                    <tr key={appointment.appointment_id}>
                                                    <td>
                                                        <div className="patient-info-profile">
                                                        <Link to="/doctor_appointments" className="table-avatar">
                                                            <img src={profile_06}  alt="Img" />
                                                        </Link>
                                                        <div className="patient-name-info">
                                                            <span>#Apt{appointment.appointment_id}</span>
                                                            <h5><Link to="/doctor_appointments">{appointment.patient.first_name} {appointment.patient.last_name}</Link></h5>
                                                        </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="appointment-date-created">
                                                        <h6>
                                                            {new Date(appointment.appointment_date).toLocaleDateString()} 
                                                            {` ${new Date(appointment.appointment_date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}`}
                                                        </h6>
                                                        <span className="badge table-badge">General</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                    <div className="apponiment-actions d-flex align-items-center">
                                                        <a href="#" className="text-success-icon me-2"><i className="fa-solid icofont-tick-mark"></i></a>
                                                        <a href="#" className="text-danger-icon"><i className="fa-solid icofont-close"></i></a>
                                                    </div>
                                                    </td>
                                                    </tr>
                                                ))
                                                ) : (
                                                <tr>
                                                    <td colSpan="3" className="text-center">No appointments found.</td>
                                                </tr>
                                                )}
                                            </tbody>
                                        </table>
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

export default Doctor_page;
