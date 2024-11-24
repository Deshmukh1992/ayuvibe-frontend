import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../services/login'; // Import your login function

const Patient_login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Send login credentials to the API
      const userData = await login(email, password);
      
      // Assuming the API returns a token and user data like { token: '...', user: {...} }
      if (userData.status === 200) {
        // Save token and user data to localStorage
        // localStorage.setItem('token', userData.token);
        localStorage.setItem('user', JSON.stringify(userData.data));

        if (userData.data.user_type == "patient"){
            // Redirect to the patient page with user data
            navigate('/patient', { state: { user: userData.data } });
        }
        else if (userData.data.user_type == "doctor"){
            // Redirect to the patient page with user data
            navigate('/doctor', { state: { user: userData.data } });
        }
        else {
            setError('Login failed. Please try again.');
        }

        
      } else {
        // Handle missing data or error response
        setError('Login failed. Please try again.');
      }
    } catch (err) {
      // Handle login errors (e.g., network issues, server errors)
      setError('Invalid email or password.');
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
                <h1 className="text-capitalize mb-5 text-lg">Login</h1>
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
                  <h2 className="mb-2 title-color">Login Form</h2>
                  {error && <p style={{ color: 'red' }}>{error}</p>}
                  
                  <form className="appoinment-form" onSubmit={handleLogin}>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            name="email"
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            placeholder="UserName/Email"
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            placeholder="Password"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="d-flex">
                      <button className="btn btn-main btn-round-full" type="submit">
                        Login <i className="icofont-simple-right ml-2"></i>
                      </button>
                      <h6 className="mt-4 ml-2">
                        Not a Member? <Link to="/patient_signup"><u>Signup</u></Link>
                      </h6>
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

export default Patient_login;
