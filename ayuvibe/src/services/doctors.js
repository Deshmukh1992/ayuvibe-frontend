// src/api.js
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000'; // Replace with your API base URL

export const getDoctorData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/doctors/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getDoctorById = async (doctorId) => {
  try {
    const response = await axios.get(`${BASE_URL}/doctors/${doctorId}`);
    
    return response.data; // Return the patient data
  } catch (err) {
    console.error('Error fetching patient:', err);
    throw err; // Optionally, rethrow the error to handle it in the calling component
  }
};

export const getDoctorAppointmetById = async (doctorId) => {
  try {
    const response = await axios.get(`${BASE_URL}/doctors/${doctorId}/appointments`);
    
    return response.data; // Return the patient data
  } catch (err) {
    console.error('Error fetching patient:', err);
    throw err; // Optionally, rethrow the error to handle it in the calling component
  }
};


export const getDiagnoses = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/diagnoses`);
    
    return response.data; // Return the patient data
  } catch (err) {
    console.error('Error fetching patient:', err);
    throw err; // Optionally, rethrow the error to handle it in the calling component
  }
};


export const createDiagnoses = async (appointmentId, diagnosis_discription, heart_rate, body_temp,
                                      glucose_level, oxigen_level, blood_pressure, bmi) => {
  try {
    // Prepare the request body with the appointment data
    const diagnosesData = {
      appointment_id: appointmentId,
      diagnosis_description: diagnosis_discription,
      heart_rate: heart_rate, 
      body_temp: body_temp,
      glucose_level: glucose_level, 
      oxigen_level: oxigen_level, 
      blood_pressure: blood_pressure, 
      bmi: bmi
    };

    console.log(diagnosesData);
    

    // Send the data to the backend API using POST
    const response = await axios.post(`${BASE_URL}/diagnoses`, diagnosesData);

    return response.data;
  } catch (err) {
    // Log and throw the error for handling in the calling component
    console.error('Error creating Diagnoses:', err);
    throw err;
  }
};


export const updateDiagnoses = async (appointmentId, diagnosis_discription, heart_rate, body_temp,
  glucose_level, oxigen_level, blood_pressure, bmi) => {
  try {
    // Prepare the request body with the appointment data
    const diagnosesData = {
      diagnosis_description: diagnosis_discription,
      heart_rate: heart_rate, 
      body_temp: body_temp,
      glucose_level: glucose_level, 
      oxigen_level: oxigen_level, 
      blood_pressure: blood_pressure, 
      bmi: bmi
    };

    console.log(diagnosesData);


    // Send the data to the backend API using PUT
    const response = await axios.put(`${BASE_URL}/diagnoses/${appointmentId}`, diagnosesData);

    return response.data;
    } catch (err) {
    // Log and throw the error for handling in the calling component
    console.error('Error updating Diagnoses:', err);
    throw err;
  }
};


export const createTreatment = async (diagnosisId, treatment_discription, dose, duration) => {
  try {
    // Prepare the request body with the appointment data
    const treatmentData = {
      diagnosis_id: diagnosisId,
      treatment_description: treatment_discription,
      dosage: dose,
      duration: duration
    };

    // Send the data to the backend API using POST
    const response = await axios.post(`${BASE_URL}/treatments`, treatmentData);

    return response.data;
  } catch (err) {
    // Log and throw the error for handling in the calling component
    console.error('Error creating Treatment:', err);
    throw err;
  }
};

export const updateTreatment = async (diagnosisId, treatment_discription, dose, duration) => {
  try {
    // Prepare the request body with the appointment data
    const treatmentData = {
      treatment_description: treatment_discription,
      dosage: dose,
      duration: duration
    };

    // Send the data to the backend API using PUT
    const response = await axios.put(`${BASE_URL}/treatments/${diagnosisId}`, treatmentData);

    return response.data;
  } catch (err) {
    // Log and throw the error for handling in the calling component
    console.error('Error updating Treatment:', err);
    throw err;
  }
};