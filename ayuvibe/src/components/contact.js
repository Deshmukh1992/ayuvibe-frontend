import React from 'react';


const Contact = () => {
  return (
    <div>
        <section className="page-title bg-1">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <div className="block text-center">
                    <span className="text-white">Contact Us</span>
                    <h1 className="text-capitalize mb-5 text-lg">Get in Touch</h1>
                    </div>
                </div>
                </div>
            </div>
        </section>
        <section className="section contact-info pb-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="contact-block mb-4 mb-lg-0">
                            <i className="icofont-live-support"></i>
                            <h5>Call Us</h5>
                            0257 226 4881
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="contact-block mb-4 mb-lg-0">
                            <i className="icofont-support-faq"></i>
                            <h5>Email Us</h5>
                            support@ayuvibe.com
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="contact-block mb-4 mb-lg-0">
                            <i className="icofont-location-pin"></i>
                            <h5>Location</h5>
                            Gate No 57, Shirsoli Rd, Tambapura, Mohadi, Maharashtra 425002
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="contact-form-wrap section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title text-center">
                            <h2 className="text-md mb-2">Contact us</h2>
                            <div className="divider mx-auto my-4"></div>
                            <p className="mb-5">Laboriosam exercitationem molestias beatae eos pariatur, similique, excepturi mollitia sit perferendis maiores ratione aliquam?</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <form id="contact-form" className="contact__form " method="post" action="">
                            <div className="row">
                                <div className="col-12">
                                    <div className="alert alert-success contact__msg" style="display: none" role="alert">
                                        Your message was sent successfully.
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input name="name" id="name" type="text" className="form-control" placeholder="Your Full Name" />
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input name="email" id="email" type="email" className="form-control" placeholder="Your Email Address" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input name="subject" id="subject" type="text" className="form-control" placeholder="Your Query Topic" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input name="phone" id="phone" type="text" className="form-control" placeholder="Your Phone Number" />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group-2 mb-4">
                                <textarea name="message" id="message" className="form-control" rows="8" placeholder="Your Message"></textarea>
                            </div>

                            <div className="text-center">
                                <input className="btn btn-main btn-round-full" name="submit" type="submit" value="Send Messege"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <div className="google-map ">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14903.041694770089!2d75.53444788715821!3d20.962134100000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd90e6dda5a2297%3A0xed1012e1b1c57106!2sG%20H%20Raisoni%20Institute%20of%20Engineering%20and%20Business%20Management%20jalgaon!5e0!3m2!1sen!2sin!4v1728241070624!5m2!1sen!2sin"  style="border:0;width: 100%; height: 400px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  );
}

export default Contact;
