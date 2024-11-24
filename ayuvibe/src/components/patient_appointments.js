import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import user_girl from '../images/user_girl.png';
import user_boy from '../images/user_boy.png';
import doctor_profile_img from '../images/doctor-profile-img.jpg';
import { getPatientAppointmetById } from '../services/patient';
import { getTreatmentByAppointmetId } from '../services/patient';

const Patient_appointments = () => {

    const userDataString = localStorage.getItem('user');
    const user = JSON.parse(userDataString);

    const patientDataString = localStorage.getItem('patient');
    const patient = JSON.parse(patientDataString);
    const [modalOpen, setModalOpen] = useState(false);
    const [appointments, setappointments] = useState(null);

    const [user_profile, setUserProfile] = useState(user_boy);

    const [treatmentDetails, setTreatmentDetails] = useState(null);
    const [appointmentDoctor, setAppointmentDoctor] = useState(null);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleViewDetails = (appointmentId, myDoctor) => {
        // Fetch the appointment details when the "View Details" link is clicked
        getTreatmentByAppointmetId(appointmentId)
          .then(result => {
            console.log(result);  // Logs the fetched appointment details
            setTreatmentDetails(result);  // Store fetched details in state
            localStorage.setItem('treatmentDetails', JSON.stringify(result)); // Store in localStorage

            setAppointmentDoctor(myDoctor);

          })
          .catch(err => {
            console.log(err);  // Handle any errors
          });
      };

      

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
                    <h1 class="text-capitalize mb-5 text-lg">Appointments</h1>
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
                                <li >
                                    <Link to="/patient">
                                    <i className="icofont-dashboard fa-fa-solid fa-fa-shapes"></i>
                                    <span>Dashboard</span>
                                    </Link>
                                </li>
                                <li className="active">
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
                                    <h3 class="text-md">Appointments</h3>
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
                                                        <img src={doctor_profile_img}  alt="Img" />
                                                    </Link>
                                                    <div className="patient-name-info">
                                                        <span>#Apt{appointment.appointment_id}</span>
                                                        <h5><Link to="/doctor_appointments">{appointment.doctor.first_name} {appointment.doctor.last_name}</Link></h5>
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
                                                <div className="appointment-detail-btn">
                                                    <a 
                                                        href="#" 
                                                        data-toggle="modal" 
                                                        data-target="#largeModal" 
                                                        class="start-link"
                                                        onClick={() => handleViewDetails(appointment.appointment_id, appointment.doctor)}
                                                    >
                                                        View Details
                                                        <i class="icofont-simple-right ml-2">
                                                        </i>
                                                    </a>
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
                        {/* <div class="department-content mt-5">
                            <h3 class="text-md">Appointments</h3>
                            <div class="appointment-wrap">
                                <ul>
                                <li>
                                    <div class="patinet-information">
                                        <a>
                                        <img src={doctor_profile_img} alt="Img" />
                                        </a>
                                        <div class="patient-info">
                                            <p>#Apt0001</p>
                                            <h6><a href="patient-completed-appointment.html">Dr Edalin</a></h6>
                                        </div>
                                    </div>
                                </li>
                                <li class="appointment-info">
                                    <p><i class="fa-solid icofont-clock-time"></i>11 Nov 2024 10.45 AM</p>
                                    <ul class="d-flex apponitment-types">
                                        <li>General Visit</li>
                                        <li>Video Call</li>
                                    </ul>
                                </li>
                                <li class="appointment-detail-btn">
                                    <a href="#" data-toggle="modal" data-target="#largeModal" class="start-link">View Details<i class="icofont-simple-right ml-2"></i></a>
                                </li>
                                </ul>
                            </div>
                        </div> */}
				    </div>
                </div>
            </div>
        </section>

        <div className="modal fade" id="largeModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="mb-2 title-color">My Appoinment</h2>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                        <div className="modal-body">
                            <div className="appoinment-wrap mt-5 mt-lg-0">
                                <div className="card">
                                    <div className="dashboard-card-body">
                                        {treatmentDetails ? (
                                            <div>
                                                <p><strong>Patient Name:</strong> {patient.first_name} {patient.last_name}</p>
                                                <p><strong>Doctor Name:</strong> Dr. {appointmentDoctor.first_name} {appointmentDoctor.last_name}</p>
                                                <p><strong>Date & Time:</strong> {treatmentDetails[0].diagnosis.diagnosis_date}</p>
                                                <p><strong>Description:</strong> {treatmentDetails[0].diagnosis.diagnosis_description}</p>
                                                <p><strong>Treatment Details:</strong> {treatmentDetails[0].treatments[0].treatment_description}</p>
                                                <p><strong>Treatment Duration:</strong> {treatmentDetails[0].treatments[0].duration}</p>
                                                <p><strong>Treatment Dosage:</strong> {treatmentDetails[0].treatments[0].dosage}</p>
                                                {/* Add more fields as per your API response */}
                                            </div>
                                        ) : (
                                        <p>Loading details...</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>			
                    </div>
                </div>
            </div>

    </div>
  );
};

export default Patient_appointments;
