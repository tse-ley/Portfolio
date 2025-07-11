import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="bg-light text-center p-3">
      &copy; {new Date().getFullYear()} My Portfolio
    </footer>
  );
}

export default Footer;
