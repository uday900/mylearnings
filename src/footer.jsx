import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center bg-body-tertiary">

      <div className="container pt-4">
        {/* Section: Social media */}
        <section className="mb-4">
          {/* Facebook */}
          <a
            data-mdb-ripple-init="true"
            className="btn btn-link btn-floating btn-lg text-body m-1"
            href="#"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          {/* Twitter */}
          <a
            data-mdb-ripple-init="true"
            className="btn btn-link btn-floating btn-lg text-body m-1"
            href="#"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-twitter"></i>
          </a>

          

          {/* Instagram */}
          <a
            data-mdb-ripple-init="true"
            className="btn btn-link btn-floating btn-lg text-body m-1"
            href="#"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-instagram"></i>
          </a>

          {/* LinkedIn */}
          <a
            data-mdb-ripple-init="true"
            className="btn btn-link btn-floating btn-lg text-body m-1"
            href="https://www.linkedin.com/in/darla-uday-kiran-18a450239"
            role="button"
            target='_blank'
            data-mdb-ripple-color="dark"
          >
            <i class="fab fa-linkedin"></i>
          </a>

          {/* Github */}
          <a
            data-mdb-ripple-init="true"
            className="btn btn-link btn-floating btn-lg text-body m-1"
            href="https://github.com/uday900"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i class="fab fa-github"></i>
          </a>
        </section>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
      >
        © 2024 Copyright:
        <a className="text-body" href="#">
          Mylearnings.uday
        </a>
      </div>
    </footer>
  );
};

export default Footer;
