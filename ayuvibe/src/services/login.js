// src/api.js
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000'; // Replace with your API base URL

export const login = async (email, password) => {
  try {
    // Send login request to the API
    const response = await axios.post(`${BASE_URL}/login/`, {
      email,
      password,
    });

    // Assuming the API returns a user object with a token
    const userData = response;

    return userData; // Return user data (including token if applicable)

  } catch (err) {
    // Handle errors (e.g., server issues, invalid credentials)
    if (err.response) {
      // Server responded with a status other than 2xx
      return { error: err.response.data.detail || 'Invalid Email or Password.' }; // Modify based on actual API error structure
    } else if (err.request) {
      // Request was made, but no response was received
      return { error: 'Network error. Please try again later.' };
    } else {
      // Something else happened while setting up the request
      return { error: 'An unexpected error occurred.' };
    }
  }
};
