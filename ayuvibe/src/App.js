import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Doctors from './components/doctors';
import DoctorAppointments from './components/doctor_appointments';
import DoctorPatients from './components/doctor_patients';
import DoctorChangePw from './components/doctor_change_pw';
import HerbsRemedies from './components/herbs_remedies';

import Patient_login from './components/patient_login';
import Patient_signup from './components/patient_signup';
import Doctor_login from './components/doctor_login';
import Doctor_signup from './components/doctor_signup';
import Patient from './components/patient';
import Doctor from './components/doctor';
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


import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';



  const steps = [
      {
          id: '0',
          message: 'Hey! I am AyuVibe Bot',

          // This calls the next id
          // i.e. id 1 in this case
          trigger: '1',
      }, {
          id: '1',

          // This message appears in
          // the bot chat bubble
          message: 'Please write your username',
          trigger: '2'
      }, {
          id: '2',

          // Here we want the user
          // to enter input
          user: true,
          trigger: '3',
      }, {
          id: '3',
          message: " hi {previousValue}, how can I help you?",
          end: true
      }
  ];

// Creating our own theme
const theme = {
    background: '#fff',
    headerBgColor: '#147a90',
    headerFontSize: '20px',
    botBubbleColor: '#8aba2f',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#147a90',
    userFontColor: 'white',
};

// Set some properties of the bot
const config = {
    floating: true,
};



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
          <Route path="/login" element={<Patient_login/>} />
          <Route path="/patient_signup" element={<Patient_signup/>} />
          <Route path="/doctor_login" element={<Doctor_login/>} />
          <Route path="/doctor_signup" element={<Doctor_signup/>} />
          <Route path="/patient" element={<Patient/>} />
          <Route path="/doctor" element={<Doctor/>} />
          <Route path="/doctor_appointments" element={<DoctorAppointments/>} />
          <Route path="/doctor_patients" element={<DoctorPatients/>} />
          <Route path="/herbs_remedies" element={<HerbsRemedies/>} />
          <Route path="/doctor_change_pw" element={<DoctorChangePw/>} />
          <Route path="/medical_details" element={<Patient_medical_details/>} />
          <Route path="/patient_appointments" element={<Patient_appointments/>} />
          <Route path="/change_password" element={<Change_password/>} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
    <ThemeProvider theme={theme}>
        <ChatBot

            // This appears as the header
            // text for the chat bot
            headerTitle="AyuVibe Bot"
            steps={steps}
            {...config}

        />
      </ThemeProvider>
    </div>
  );
}


export default App;
