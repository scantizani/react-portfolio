// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../src/assets/logo.png";
import '../components/Layout.css';
import Swal from 'sweetalert2';


const viewCredits = () => {
    Swal.fire({
        title: 'Thanks for visiting my portfolio!',
        html: `
            <p>Here is the information about me:</p>
            <ul style="text-align: left;">
              <li><strong>My name:</strong> Silvana Rondina</li>
              <li><strong>StudentID:</strong> 301430530</li>
              <li><strong>Contact Number:</strong>(647) 204-9924</li>
              <li><strong>Last Update:</strong> 02-07-2025</li>
            </ul>`,
        icon: 'info',
        confirmButtonText: 'Close'
    });
};





export default function Layout() {
  return (
      <>
          <div className="image-container">
              <img src={logo} alt="Logo" className="logo-image"/>

              <a>
                  <button onClick={viewCredits} className={"creditsBt"}>Centennial College Student Info</button>
              </a>
          </div>
          <nav>
              <Link to="/">Home</Link> |
              <Link to="/about">About me</Link> |
              <Link to="/education">Education</Link> |
              <Link to="/projects">Projects</Link> |
              <Link to="/services">Services</Link> |
              <Link to="/contact">Contact Me</Link>
          </nav>
          <br/>
          <hr/>
      </>
  );
}
