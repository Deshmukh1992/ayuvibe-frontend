import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import user_girl from '../images/user_girl.png';
import user_boy from '../images/user_boy.png';
import doctor_profile_img from '../images/doctor-profile-img.jpg';
import { useLocation } from 'react-router-dom';
import {getPatientById} from '../services/patient';
import {getDoctorData} from '../services/doctors';
import { getPatientAppointmetById } from '../services/patient';
import { createAppointment } from '../services/patient';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import Toast styles


const Patient = () => {

  const location = useLocation(); // useLocation hook to access route state
  // const user = location.state?.user || {}; // Access the user object from the state, fallback to empty object if undefined
  const userDataString = localStorage.getItem('user');
  const user = JSON.parse(userDataString);

  console.log(user);

  const [patient, setPatient] = useState(null); // Initialize state for patient data
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [appointments, setappointments] = useState(null);
  const [next_appointments, setTodaysAppointments] = useState(null);

  const [user_profile, setUserProfile] = useState(user_boy);

  const [hour, setHour] = useState(12);  // Default to 12-hour format
  const [minute, setMinute] = useState(0); // Default to 0 minutes
  const [amPm, setAmPm] = useState('AM'); // Default to AM

  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedHour, setSelectedHour] = useState(1);
  const [selectedMinute, setSelectedMinute] = useState(0);
  const [message, setMessage] = useState('');

  // Handle change for doctor select
  const handleDoctorChange = (e) => {
    setSelectedDoctor(e.target.value);
  };

  // Handle change for date select
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  // Handle hour change
  const handleHourChange = (e) => {
    setHour(parseInt(e.target.value));
  };

  // Handle minute change
  const handleMinuteChange = (e) => {
    setMinute(parseInt(e.target.value));
  };

  // Handle AM/PM change
  const handleAmPmChange = (e) => {
    setAmPm(e.target.value);
  };

  // Format time in a string
  const formatTime = () => {
    const formattedHour = hour < 10 ? `0${hour}` : hour;  // Ensure 2 digits
    const formattedMinute = minute < 10 ? `0${minute}` : minute; // Ensure 2 digits
    return `${formattedHour}:${formattedMinute}:00 ${amPm}`;
  };

  const createAppointmentButton = (patientId, doctorId, appointmentDate, reason) => {
    // Fetch the appointment details when the "View Details" link is clicked
    createAppointment(patientId, doctorId, appointmentDate, reason)
      .then(result => {
        console.log(result);  // Logs the fetched appointment details
        setTreatmentDetails(result);  // Store fetched details in state
        localStorage.setItem('treatmentDetails', JSON.stringify(result)); // Store in localStorage

      })
      .catch(err => {
        console.log(err);  // Handle any errors
      });
  };

  const handleSubmit = () => {
    // Prepare the appointment data
    const appointmentDateTime = `${selectedDate} ${selectedHour}:${selectedMinute}:00`;
    createAppointmentButton(patient.patient_id, selectedDoctor, appointmentDateTime, message);
    window.location.reload();
  };

  const fetchData = () => {
    getPatientById(user.user_id) // Fetch data by user ID
      .then(result => {
        console.log(result); // Logs the patient data
        setPatient(result);  // Set the fetched data in state
        localStorage.setItem('patient', JSON.stringify(result));

        if(patient.gender === "Male"){
          setUserProfile(user_boy);
        }
        else{
          setUserProfile(user_girl);
        }

      })
      .catch(err => { 
        console.log(err); // Handle and log any error
      });

    getDoctorData()
      .then(result => {
        console.log(result);
        setDoctors(result);
        localStorage.setItem('doctors', JSON.stringify(result));
      })
      .catch(err => { 
        console.log(err); // Handle and log any error
    });

    getPatientAppointmetById(user.user_id) // Fetch data by user ID
      .then(result => {
        console.log(result); // Logs the doctor data
        setappointments(result);  // Set the fetched data in state
        localStorage.setItem('appointments', JSON.stringify(result));

        // Get today's date in YYYY-MM-DD format
        const today = new Date().toISOString().split('T')[0];

        // Filter appointments for today's date
        const nextAppointments = result.filter(appointment => {
          const appointmentDate = new Date(appointment.appointment_date).toISOString().split('T')[0];
          return appointmentDate >= today;
        });

        console.log("nextAppointments -> ", nextAppointments);
        

        setTodaysAppointments(nextAppointments);

      })
      .catch(err => { 
        console.log(err); // Handle and log any error
      });
  };

  const handleLogout = () => {
    // Clear all data in local storage
    localStorage.clear();
  };
  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
    // This will remove the last entry from the browser history
    window.history.pushState(null, '', window.location.href);
    window.onpopstate = () => {
      window.history.pushState(null, '', window.location.href);
    };
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
                            <h5 className="mb-0">Patient ID: PT{patient.patient_id}</h5>
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
                      <li className='active'>
                        <Link to="/patient">
                          <i className="icofont-dashboard fa-fa-solid fa-fa-shapes"></i>
                          <span>Dashboard</span>
                        </Link>
                      </li>
                      <li >
                        <Link to="/patient_appointments">
                          <i className="icofont-ui-calendar fa-solid"></i>
                          <span>My Appointments</span>
                        </Link>
                      </li>
                      <li >
                        <Link to="/medical_details">
                          <i className="icofont-shield-alt fa-solid fa-shield-halved"></i>
                          <span>Medical History</span>
                        </Link>
                      </li>
                      <li >
                        <Link to="/change_password">
                          <i className="icofont-key fa-solid fa-key"></i>
                          <span>Change Password</span>
                        </Link>
                      </li>
                      <li >
                        <Link to="/login" onClick={handleLogout}>
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
                              {appointments ? (
                                <>
                                  <h5>Dr. {appointments[0].doctor['first_name']} {appointments[0].doctor['last_name']}</h5>
                                  <span>{appointments[0].doctor['specialization']}</span>
                                </>
                              ) : (
                                <h3>No Doctor</h3> // Show loading state while fetching data
                              )}
                            </div>
                          </div>
                          <a href="#" className="cal-plus-icon"><i className="fa-solid icofont-calendar"></i></a>
                        </div>
                      </div>
                    </div>
                    <div className="dashboard-card w-100">
                      <div className="dashboard-card-head">
                        <div className="header-title">
                          <h5>Medical History</h5>
                        </div>
                      </div>
                      <div className="dashboard-card-body">
                        <div className="doctor-fav-list">
                          <div className="doctor-info-profile">
                            {/* <a href="#" className="table-avatar">
                              <img src={doctor_profile_img} alt="Img" />
                            </a> */}
                            <div className="doctor-name-info">

                            {appointments ? (
                              <>
                                <h6>{appointments[0].reason}</h6>
                                {/* <span>{new Date(appointments[0].appointment_date).toLocaleDateString()} 
                                {` ${new Date(appointments[0].appointment_date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}`}</span> */}
                              </>
                            ) : (
                              <h3>No History</h3> // Show loading state while fetching data
                            )}
                              
                              
                            </div>
                          </div>
                          <a href="#" className="cal-plus-icon"><i className="icofont-shield-alt fa-solid fa-shield-halved"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
              <div className="col-lg-12">
                  <div className="department-content">
                    <div className="dashboard-card w-100  next-appointment-box">
                      <div className="dashboard-card-head">
                        <div className="header-title">
                          <h5>Next Appointment</h5>
                        </div>
                      </div>
                      <div className="dashboard-card-body">
                        <div className="row">
                          <div className="table-responsive">
                              <table className="table dashboard-table appoint-table">
                                  <tbody>
                                      {next_appointments && next_appointments.length > 0 ? (
                                      next_appointments.map((appointment) => (
                                          <tr key={appointment.appointment_id}>
                                          <td>
                                              <div className="patient-info-profile">
                                              <Link to="/doctor_appointments" className="table-avatar">
                                                  <img src={user_profile}  alt="Img" />
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
                                          {/* <div className="apponiment-actions d-flex align-items-center">
                                              <a href="#" className="text-success-icon me-2"><i className="fa-solid icofont-tick-mark"></i></a>
                                              <a href="#" className="text-danger-icon"><i className="fa-solid icofont-close"></i></a>
                                          </div> */}
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
          </div>
        </div>
      </section>
      <div className="modal fade" id="largeModal" tabIndex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="mb-2 title-color">Book Appointment</h2>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="appointment-wrap mt-5 mt-lg-0">
              <div className="card">
                <form id="#" className="appointment-form" method="post" action="#">
                  <div className="row">
                    {/* Doctor Selection */}
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label htmlFor="doctor">Select Doctor</label>
                        <select className="form-control" id="doctor" onChange={handleDoctorChange}>
                          <option value="">Select</option>
                          {doctors.map((doctor) => (
                            <option key={doctor.doctor_id} value={doctor.doctor_id}>
                              Dr. {doctor.first_name} {doctor.last_name} - {doctor.specialization}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Date Selection */}
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label htmlFor="date">Select Date</label>
                        <input type="date" className="form-control" id="date" onChange={handleDateChange} />
                      </div>
                    </div>

                    {/* Time Selection */}
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label htmlFor="time">Select Time</label>
                        <div className="d-flex">
                          {/* Hour Dropdown */}
                          <select className="form-control" value={selectedHour} onChange={handleHourChange}>
                            {[...Array(12)].map((_, index) => (
                              <option key={index} value={index + 1}>
                                {index + 1}
                              </option>
                            ))}
                          </select>

                          {/* Minute Dropdown */}
                          <select className="form-control" value={selectedMinute} onChange={handleMinuteChange}>
                            {[...Array(60)].map((_, index) => (
                              <option key={index} value={index}>
                                {index < 10 ? `0${index}` : index}
                              </option>
                            ))}
                          </select>

                          {/* AM/PM Dropdown */}
                          <select className="form-control" value={amPm} onChange={handleAmPmChange}>
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>
                          </select>
                        </div>
                        <div className="mt-3">
                          <label>Selected Time: {formatTime()}</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message (Description) */}
                  <div className="form-group-2 mb-4">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="6"
                      placeholder="Describe your problem in short"
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button type="button" className="btn btn-main btn-round-full" data-dismiss="modal" onClick={handleSubmit}>
                    Make Appointment
                    <i className="icofont-simple-right ml-2"></i>
                  </button>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Patient;
