import axios from 'axios';


const BASE_URL = 'http://127.0.0.1:8000'; // Replace with your API base URL

export const getPatientById = async (patientId) => {
  try {
    const response = await axios.get(`${BASE_URL}/patients/${patientId}`);
    
    return response.data; // Return the patient data
  } catch (err) {
    console.error('Error fetching patient:', err);
    throw err; // Optionally, rethrow the error to handle it in the calling component
  }
};

export const getPatientAppointmetById = async (patientId) => {
  try {
    const response = await axios.get(`${BASE_URL}/patients/${patientId}/appointments`);
    
    return response.data; // Return the patient data
  } catch (err) {
    console.error('Error fetching patient:', err);
    throw err; // Optionally, rethrow the error to handle it in the calling component
  }
};



export const getTreatmentByAppointmetId = async (appointmetId) => {
  try {
    const response = await axios.get(`${BASE_URL}/appointments/${appointmetId}/diagnoses_treatments`);
    
    return response.data; 
  } catch (err) {
    console.error('Error fetching patient:', err);
    throw err; // Optionally, rethrow the error to handle it in the calling component
  }
};

export const createAppointment = async (patientId, doctorId, appointmentDate, reason) => {
  try {
    // Prepare the request body with the appointment data
    const appointmentData = {
      patient_id: patientId,
      doctor_id: doctorId,
      appointment_date: appointmentDate,
      reason: reason,
    };

    // Send the data to the backend API using POST
    const response = await axios.post(`${BASE_URL}/appointments`, appointmentData);

    

    // Return the response data (which is typically the appointment details)
    return response.data;
  } catch (err) {
    // Log and throw the error for handling in the calling component
    console.error('Error creating appointment:', err);
    throw err;
  }
};


export const getHealthInfoById = async (patientId) => {
  try {
    const response = await axios.get(`${BASE_URL}/healthinfo/${patientId}`);
    
    return response.data[0]; // Return the patient data
  } catch (err) {
    console.error('Error fetching patient:', err);
    throw err; // Optionally, rethrow the error to handle it in the calling component
  }
};


export const createHealthInfo = async (patientId, heart_rate, body_temp,
  glucose_level, oxigen_level, blood_pressure, bmi) => {
  try {
    // Prepare the request body with the appointment data
    const healthinfoData = {
      healthinfo_id: patientId,
    patient_id: patientId,
    heart_rate: heart_rate, 
    body_temp: body_temp,
    glucose_level: glucose_level, 
    oxigen_level: oxigen_level, 
    blood_pressure: blood_pressure, 
    bmi: bmi
  };

  console.log(healthinfoData);


  // Send the data to the backend API using POST
  const response = await axios.post(`${BASE_URL}/healthinfo`, healthinfoData);

  return response.data;
  } catch (err) {
  // Log and throw the error for handling in the calling component
  console.error('Error creating Diagnoses:', err);
  throw err;
  }
};


export const updateHealthInfo = async (patientId, heart_rate, body_temp,
  glucose_level, oxigen_level, blood_pressure, bmi) => {
  try {
    // Prepare the request body with the appointment data
    const HealthInfoData = {
    heart_rate: heart_rate, 
    body_temp: body_temp,
    glucose_level: glucose_level, 
    oxigen_level: oxigen_level, 
    blood_pressure: blood_pressure, 
    bmi: bmi
  };

  console.log(HealthInfoData);


  // Send the data to the backend API using PUT
  const response = await axios.put(`${BASE_URL}/healthinfo/${patientId}`, HealthInfoData);

  return response.data;
    } catch (err) {
    // Log and throw the error for handling in the calling component
    console.error('Error updating Diagnoses:', err);
    throw err;
  }
};