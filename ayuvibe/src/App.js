import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Doctors from './components/doctors';
import Patient_login from './components/patient_login';
import Patient_signup from './components/patient_signup';
import Doctor_login from './components/doctor_login';
import Doctor_signup from './components/doctor_signup';
import Patient from './components/patient';
import Change_password from './components/change_password';
import Patient_medical_details from './components/patient_medical_details';
import Patient_appointments from './components/patient_appointments';
import Footer from './components/footer';


import './plugins/bootstrap/css/bootstrap.min.css';
import './plugins/icofont/icofont.min.css';
import './plugins/slick-carousel/slick/slick.css';
import './plugins/slick-carousel/slick/slick-theme.css';
import "./plugins/owl.carousel.min.css"

import './css/style.css';

import './css/maps/style.css.map'



function App() {
  return (
    <div className="App">
      <Router>
      <div>
        {/* Header */}
        <Header />

        {/* Main Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/patient_login" element={<Patient_login/>} />
          <Route path="/patient_signup" element={<Patient_signup/>} />
          <Route path="/doctor_login" element={<Doctor_login/>} />
          <Route path="/doctor_signup" element={<Doctor_signup/>} />
          <Route path="/patient" element={<Patient/>} />
          <Route path="/medical_details" element={<Patient_medical_details/>} />
          <Route path="/patient_appointments" element={<Patient_appointments/>} />
          <Route path="/change_password" element={<Change_password/>} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
    </div>
  );
}


export default App;
