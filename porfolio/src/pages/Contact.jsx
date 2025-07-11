import React from 'react'; 

import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
  return (
    <>
      <div className="container">
        <h1>Contact Me</h1>
        <p>Contact me for any inquiries.</p>
      </div>

      {/* Contact Section */}
      <section className="bg-dark text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="h3 mb-4">Let's Connect There</h2>
              <div className="d-flex align-items-center">
                <span className="me-3">Davy</span>
                <div className="d-flex gap-3">
                  <a href="#" className="text-white-50">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-white-50">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="text-white-50">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="#" className="text-white-50">
                    <i className="fab fa-dribbble"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-md-6">
                  <h6 className="text-white-50 mb-3">Address</h6>
                  <p className="small">
                    123 Design Street<br />
                    Creative City, CC 12345
                  </p>
                </div>
                <div className="col-md-6">
                  <h6 className="text-white-50 mb-3">Contact</h6>
                  <p className="small">
                    hello@davy.com<br />
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
