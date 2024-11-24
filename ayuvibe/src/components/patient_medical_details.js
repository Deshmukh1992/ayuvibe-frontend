import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import user_girl from '../images/user_girl.png';
import user_boy from '../images/user_boy.png';
import { getPatientAppointmetById } from '../services/patient';

const Patient_medical_details = () => {

    const patientDataString = localStorage.getItem('patient');
    const patient = JSON.parse(patientDataString);

    const userDataString = localStorage.getItem('user');
    const user = JSON.parse(userDataString);

    const [appointments, setappointments] = useState(null);

    const [user_profile, setUserProfile] = useState(user_boy);

    const fetchData = () => {

        if(patient.gender === "Male"){
            setUserProfile(user_boy);
          }
          else{
            setUserProfile(user_girl);
          }

        getPatientAppointmetById(user.user_id) // Fetch data by user ID
          .then(result => {
            console.log(result); // Logs the doctor data
            setappointments(result);  // Set the fetched data in state
            localStorage.setItem('appointments', JSON.stringify(result));
    
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
        <section class="page-title bg-1">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                <div class="col-md-12">
                    <div class="block text-center">
                    <h1 class="text-capitalize mb-5 text-lg">Medical History</h1>
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
                                <img src={user_profile} alt="User Image" />
                                </a>
                                <div className="profile-det-info">
                                {patient ? (
                                    <>
                                    <h3>
                                        <a>{patient.first_name} {patient.last_name}</a>
                                    </h3>
                                    <div className="patient-details">
                                        <h5 className="mb-0">Patient ID: {patient.patient_id}</h5>
                                    </div>
                                    <span>
                                        {patient.gender}
                                        <i className="fa-solid fa-circle"></i>
                                        DOB - {patient.date_of_birth}
                                    </span>
                                    </>
                                ) : (
                                    <h3>Loading...</h3> // Show loading state while fetching data
                                )}
                                </div>
                            </div>
                            </div>
                            <div className="dashboard-widget">
                            <nav className="dashboard-menu">
                                <ul>
                                <li>
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
                                <li className="active">
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
                    <div class="col-lg-8">
                        <div className="department-content">
                            <div className="dashboard-card w-100 appointment-box">
                                <div className="dashboard-card-head">
                                    <div className="header-title">
                                        <h3 class="text-md">Medical History</h3>
                                    </div>
                                </div>
                                <div className="dashboard-card-body">
                                    <div className="table-responsive">
                                        <table className="table dashboard-table appoint-table">
                                            <thead>
                                                <td>
                                                    <h5>
                                                        Reason
                                                    </h5>
                                                </td>
                                                <td>
                                                    <h5>
                                                        Dignosis Date
                                                    </h5>
                                                </td>
                                                <td>
                                                    <h5>
                                                        Dignosed By
                                                    </h5>
                                                </td>
                                            </thead>
                                            <tbody>
                                                {appointments && appointments.length > 0 ? (
                                                appointments.map((appointment) => (
                                                    <tr key={appointment.appointment_id}>
                                                        <td>
                                                            <div className="patient-info-profile">
                                                                <h6>
                                                                    {appointment.reason}
                                                                </h6>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="appointment-date-created">
                                                                <h6>
                                                                    {new Date(appointment.appointment_date).toLocaleDateString()} 
                                                                    {` ${new Date(appointment.appointment_date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}`}
                                                                </h6>
                                                            </div>
                                                        </td>
                                                        <td>
                                                        <div className="patient-info-profile">
                                                            <h6>
                                                                Dr. {appointment.doctor.first_name} {appointment.doctor.last_name}
                                                            </h6>
                                                        </div>
                                                        </td>
                                                    </tr>
                                                ))
                                                ) : (
                                                <tr>
                                                    <td colSpan="3" className="text-center">No history found.</td>
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
        </section>
    </div>
  );
};

export default Patient_medical_details;
