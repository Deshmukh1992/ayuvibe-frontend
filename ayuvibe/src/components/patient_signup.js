import React from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import { patientSignUp } from '../services/signup';

const Patient_signup = () => {
  
  const navigate = useNavigate ();
  // Function to handle form submission and send data to the backend API
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create an object with the form data
    const patientData = {
      first_name: event.target.first_name.value,
      last_name: event.target.last_name.value,
      date_of_birth: event.target.date_of_birth.value,
      gender: event.target.gender.value,
      phone_number: event.target.phone_number.value,
      email: event.target.email.value,
      password: event.target.password.value,
      address: event.target.address.value,
      city: event.target.city.value,
      state: event.target.state.value,
      postal_code: event.target.postal_code.value,
    };

    patientSignUp(patientData) // Fetch data by user ID
      .then(result => {
        console.log(result); // Logs the doctor data
        alert(result.message);
        navigate('/login');

      })
      .catch(err => { 
        console.log(err); // Handle and log any error
      });

    
  };


  return (
    <div>
      <section className="page-title bg-1">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center">
                <h1 className="text-capitalize mb-5 text-lg">Signup</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="appoinment section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="mt-3">
                <div className="feature-icon mb-3">
                  <i className="icofont-support text-lg"></i>
                </div>
                <span className="h3">Call for an Emergency Service!</span>
                <h2 className="text-color mt-3">0257 226 4881</h2>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="appoinment-wrap mt-5 mt-lg-0 pl-lg-5">
                <div className="card">
                  <h2 className="mb-2 title-color">Signup Form</h2>
                  <div className="login_register">
                    <Link to="/doctor_signup" className="register">Doctor</Link>
                    <Link to="/patient_signup" className="login">Patient</Link>
                  </div>
                  <form onSubmit={handleSubmit} className="appoinment-form">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            name="first_name"
                            id="first_name"
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            name="last_name"
                            id="last_name"
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            name="date_of_birth"
                            id="date_of_birth"
                            type="date"
                            className="form-control"
                            placeholder="dd/mm/yyyy"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            name="gender"
                            id="gender"
                            type="text"
                            className="form-control"
                            placeholder="Gender"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            name="phone_number"
                            id="phone_number"
                            type="text"
                            className="form-control"
                            placeholder="Phone Number"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            name="city"
                            id="city"
                            type="text"
                            className="form-control"
                            placeholder="City"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            name="state"
                            id="state"
                            type="text"
                            className="form-control"
                            placeholder="State"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            name="postal_code"
                            id="postal_code"
                            type="text"
                            className="form-control"
                            placeholder="Postal Code"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group-2 mb-4">
                      <textarea
                        name="address"
                        id="address"
                        className="form-control"
                        rows="3"
                        placeholder="Your Address"
                        required
                      ></textarea>
                    </div>

                    
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            name="email"
                            id="email"
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            name="password"
                            id="password"
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    

                    <div className="d-flex">
                      <button type="submit" className="btn btn-main btn-round-full">
                        Sign Up <i className="icofont-simple-right ml-2"></i>
                      </button>
                      <h6 className="mt-4 ml-2">Already Signed Up? <Link to="/login"><u>Login</u></Link></h6>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Patient_signup;
