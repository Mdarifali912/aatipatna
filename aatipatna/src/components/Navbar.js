import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div class="topdiv">
      <nav
        id="navbar"
        class="navbar navbar-expand-md position-sticky z-index-1  w-100 "
      >
        <Link class="navbar-brand h2 text-white" to="/">
          Al-Arabia
        </Link>
        <button
          class="navbar-toggler bg-white "
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span class="navbar-toggler-icon "></span> */}
          <i class="ri-menu-3-line"></i>
        </button>

        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto p-2">
            <li class="nav-item ">
              <Link class="nav-link h6 text-uppercase text-white" to="/">
                Home <span class="sr-only"></span>
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link h6 text-uppercase text-white"
                to="/services"
              >
                Services
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link h6 text-uppercase text-white" to="/about">
                About Us
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link h6 text-uppercase text-white" to="/contact">
                Contact
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link h6 text-uppercase text-white" to="/result">
                Results
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link h6 text-uppercase text-white" to="/courses">
                Courses
              </Link>
            </li>
          </ul>

          <div class="btndiv">

            <div>
            <Link
              to="/login"
              id="login"
              class="btn btn-primary btn-lg active text-uppercase text-white "
            >
              Login
            </Link>
            </div>
            
            <div>
            <Link
              id="register"
              to="/register"
              class="btn btn-secondary btn-lg active text-uppercase text-white"
            >
              Register
            </Link>
            </div>
           
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
