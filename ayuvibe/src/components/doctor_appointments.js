import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import user_girl from '../images/user_girl.png';
import user_boy from '../images/user_boy.png';
import profile_06 from '../images/profile-06.jpg';
import doctor_profile_img from '../images/team/1.jpg';
import { useLocation } from 'react-router-dom';
import {getDoctorById, getDoctorAppointmetById, 
        createDiagnoses, createTreatment, getDiagnoses, 
        updateDiagnoses, updateTreatment } from '../services/doctors';


import { getHealthInfoById, createHealthInfo, updateHealthInfo } from '../services/patient';


const DoctorAppointments = () => {
  const location = useLocation(); // useLocation hook to access route state
  // const user = location.state?.user || {}; // Access the user object from the state, fallback to empty object if undefined
  const userDataString = localStorage.getItem('user');
  const user = JSON.parse(userDataString);

  // console.log(user);

  const [doctor, setdoctor] = useState(null); // Initialize state for doctor data

  const [appointments, setappointments] = useState(null);

  const [user_profile, setUserProfile] = useState(user_boy);

  const [symptoms, setSymptoms] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [medications, setMedications] = useState('');
  const [dose, setDose] = useState('');
  const [duration, setDuration] = useState('');

  const [heart_rate, setHeartRate] = useState('');
  const [Body_temperature, setBodyTemperature] = useState('');
  const [glucose_level, setGlucoseLevel] = useState('');
  const [oxigen_level, setOxigenLevel] = useState('');
  const [blood_pressure, setBloodPressure] = useState('');
  const [bmi, setBmi] = useState('');

  const [appointmentId, setAppointmentId] = useState('');
  const [patientId, setPatientId] = useState('');

  const [diagnosisFilterData, setDianosisAllData] = useState([]);

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

    getDoctorAppointmetById(user.user_id) // Fetch data by user ID
      .then(result => {
        console.log(result); // Logs the doctor data
        setappointments(result);  // Set the fetched data in state
        localStorage.setItem('appointments', JSON.stringify(result));

      })
      .catch(err => { 
        console.log(err); // Handle and log any error
      });
  };

  const setPaitentData = (AppointmentId, PatientId) => {
    setAppointmentId(AppointmentId)
    setPatientId(PatientId)
  }

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, [user.user_id]);

  const handleSubmit = async () => {
    try {

      let HealthInfo = await getHealthInfoById(patientId);

      let HealthInfoResult = []

      if (HealthInfo.length != 0){
        HealthInfoResult = HealthInfo.filter(
          (item) => item.patient_id === parseInt(patientId)
        )
      }

      console.log(HealthInfoResult);

      if (HealthInfoResult.length === 0){
          const HealthInfoCreateRes = await createHealthInfo(patientId, heart_rate, Body_temperature, glucose_level,
            oxigen_level, blood_pressure, bmi)
      }
      else{
        await updateHealthInfo(patientId, heart_rate, Body_temperature, glucose_level,
          oxigen_level, blood_pressure, bmi)
      }


      const diagnosisAllData = await getDiagnoses();

      const result = diagnosisAllData.filter(
        (item) => item.appointment_id === parseInt(appointmentId))

      console.log(result);
      
      if (result.length === 0){
        // First, create the diagnosis
        const diagnosisData = await createDiagnoses(appointmentId, diagnosis, heart_rate, Body_temperature, glucose_level,
          oxigen_level, blood_pressure, bmi
        );

        // Once the diagnosis is created, create the treatment
        await createTreatment(diagnosisData.diagnosis_id, medications, dose, duration);
      }
      else{
        // Update the diagnosis
        const updateddiagnosisData = await updateDiagnoses(appointmentId, diagnosis, heart_rate, Body_temperature, glucose_level,
          oxigen_level, blood_pressure, bmi
        );

        // Once the diagnosis is created, create the treatment
        await updateTreatment(updateddiagnosisData.diagnosis_id, medications, dose, duration);
      }

      

      // Optionally, show a success message or perform further actions
      alert('Diagnosis and treatment saved successfully!');
      
      // Reset form after submission
      setSymptoms('');
      setDiagnosis('');
      setMedications('');
      setDose('');
      setDuration('');
    } catch (error) {
      console.error('Error creating diagnosis or treatment:', error);
      alert('There was an error while saving the diagnosis or treatment');
    }
  };

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
                      <li className="active">
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
                <div className="dashboard-card w-100 dr-appointment-box">
                  <div className="dashboard-card-head">
                    <div className="header-title">
                      <h5>My Appointments</h5>
                    </div>
                  </div>
                  <div className="dashboard-card-body">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="row">
                          {appointments && appointments.length > 0 ? (
                            appointments.map((appointment) => (
                              <div key={appointment.appointment_id} className="appointment-list d-flex align-items-center justify-content-between">
                                <div className="doctor-info-profile d-flex align-items-center">
                                  <a href="#" className="table-avatar mr-3">
                                    <img src={profile_06} alt="Patient Img" style={{ width: '50px', borderRadius: '50%' }} />
                                  </a>
                                  <div className="doctor-name-info">
                                    <h6 className="mb-1">
                                      <a href="#">{appointment.patient.first_name} {appointment.patient.last_name}</a>
                                    </h6>
                                    <span className="text-muted">Patient ID: PT{appointment.patient.patient_id}</span>
                                    <p className="text-muted mb-0">
                                      Appointment on {new Date(appointment.appointment_date).toLocaleDateString()} at {new Date(appointment.appointment_date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
                                    </p>
                                  </div>
                                </div>
                                <div className="appointment-actions">
                                  <button 
                                    className="btn btn-primary" 
                                    data-toggle="modal" 
                                    data-target="#diagnoseModal"
                                    onClick={() => setPaitentData(appointment.appointment_id, appointment.patient.patient_id)} // Wrap the setAppointmentId function
                                  >
                                    Diagnose & Prescribe
                                  </button>
                                </div>
                              </div>
                            ))
                          ) : (
                            <p>No appointments found.</p> // Show message if no appointments are found
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal for Diagnosis and Prescription */}
              <div className="modal fade" id="diagnoseModal" tabIndex="-1" role="dialog" aria-labelledby="diagnoseModalLabel" aria-hidden="true">
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
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label htmlFor="date">Heart Rate</label>
                            <input type="text" className="form-control" id="text" onChange={(e) => setHeartRate(e.target.value)}  />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label htmlFor="text">Body Temperature</label>
                            <input type="text" className="form-control" id="text" onChange={(e) => setBodyTemperature(e.target.value)}  />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label htmlFor="text">Glucose Level</label>
                            <input type="text" className="form-control" id="text" onChange={(e) => setGlucoseLevel(e.target.value)}  />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label htmlFor="date">Oxygen Level</label>
                            <input type="text" className="form-control" id="text" onChange={(e) => setOxigenLevel(e.target.value)}  />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label htmlFor="text">Blood Pressure</label>
                            <input type="text" className="form-control" id="text" onChange={(e) => setBloodPressure(e.target.value)}  />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label htmlFor="text">BMI</label>
                            <input type="text" className="form-control" id="text" onChange={(e) => setBmi(e.target.value)}  />
                          </div>
                        </div>
                      </div>


                      <div className="form-group">
                        
                        </div>
                        <div className="form-group">
                          <label>Patient Symptoms</label>
                          <textarea 
                            className="form-control" 
                            rows="3" 
                            value={symptoms}
                            onChange={(e) => setSymptoms(e.target.value)} 
                            placeholder="Describe symptoms..."
                          />
                        </div>
                        <div className="form-group">
                          <label>Diagnosis</label>
                          <textarea 
                            className="form-control" 
                            rows="3" 
                            value={diagnosis}
                            onChange={(e) => setDiagnosis(e.target.value)} 
                            placeholder="Enter diagnosis..."
                          />
                        </div>
                        <div className="form-group">
                          <label>Medications</label>
                          <textarea 
                            className="form-control" 
                            rows="3" 
                            value={medications}
                            onChange={(e) => setMedications(e.target.value)} 
                            placeholder="Prescribe medications..."
                          />
                        </div>
                        <div className="form-group">
                          <label>Dose</label>
                          <textarea 
                            className="form-control" 
                            rows="1" 
                            value={dose}
                            onChange={(e) => setDose(e.target.value)} 
                            placeholder="Enter dose..."
                          />
                        </div>
                        <div className="form-group">
                          <label>Duration</label>
                          <textarea 
                            className="form-control" 
                            rows="1" 
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)} 
                            placeholder="Enter treatment duration..."
                          />
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={handleSubmit}>Save Prescription</button>
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

export default DoctorAppointments;
