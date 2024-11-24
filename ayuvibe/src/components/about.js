import React from 'react';


const About = () => {
  return (
    <div>
        <section className="page-title bg-1">
        <div className="overlay"></div>
        <div className="container">
            <div className="row">
            <div className="col-md-12">
                <div className="block text-center">
                <span className="text-white">About Us</span>
                <h1 className="text-capitalize mb-5 text-lg">About Us</h1>
                </div>
            </div>
            </div>
        </div>
        </section>

        <section className="section testimonial mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-6">
                        <div className="section-title">
                            <h2 className="mb-4">What we say about us</h2>
                            <div className="divider  my-4"></div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6 testimonial-wrap offset-lg-6">
                    AyuVibe is dedicated to bringing the ancient wisdom of Ayurveda into the modern world. Our mission is to provide holistic health solutions through personalized Ayurvedic treatments, remedies, and expert consultations. With a comprehensive database of natural herbs and a network of certified Ayurvedic doctors, we empower individuals to embrace a balanced lifestyle rooted in wellness. Whether you're seeking preventative care or natural remedies, AyuVibe is your trusted partner on the journey to holistic health.
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default About;
