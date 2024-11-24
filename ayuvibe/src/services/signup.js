// src/api.js
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000'; // Replace with your API base URL

export const patientSignUp = async (patientData) => {
  try {
    const response = await axios.post(`${BASE_URL}/signup/patient`, patientData);
    const userData = response.data;
    return userData; 

  } catch (err) {
    if (err.response) {
      return { error: err.response.data.detail || 'Invalid Email or Password.' };
    } else if (err.request) {
      return { error: 'Network error. Please try again later.' };
    } else {
      return { error: 'An unexpected error occurred.' };
    }
  }
};

export const doctorSignUp = async (doctorData) => {
  try {
    const response = await axios.post(`${BASE_URL}/signup/doctor`, doctorData);
    const userData = response.data;
    return userData; 

  } catch (err) {
    if (err.response) {
      return { error: err.response.data.detail || 'Invalid Email or Password.' };
    } else if (err.request) {
      return { error: 'Network error. Please try again later.' };
    } else {
      return { error: 'An unexpected error occurred.' };
    }
  }
};
