import React from 'react';
import { Link } from 'react-router-dom';

const Doctor_login = () => {
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
                            <h2 className="text-color mt-3">0257 226 4881 </h2>
                        </div>
                    </div>

                    <div className="col-lg-8">
                    <div className="appoinment-wrap mt-5 mt-lg-0 pl-lg-5">
                            <div className="card">
                                <h2 className="mb-2 title-color">Login Form</h2>
                                <div className="login_register">
                                    <Link to="/doctor_login" className="register" target="blank">Doctor</Link>
                                    <Link to="/patient_login" className="login" target="blank">Patient</Link>
                                </div>
                                <form id="#" className="appoinment-form" method="post" action="#">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input name="email" id="email" type="text" className="form-control" placeholder="UserName/ Email" />
                                            </div>
                                        </div>
                                        
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input name="password" id="password" type="password" className="form-control" placeholder="Password" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex"><a className="btn btn-main btn-round-full" >Login<i className="icofont-simple-right ml-2"></i></a> <h6 className="mt-4 ml-2">Not a Member <Link to="/patient_signup"><u>Signup</u></Link></h6></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Doctor_login;
