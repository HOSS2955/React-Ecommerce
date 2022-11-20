import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="position-static static-bottom w-100">
      <div id="container ">
        <div id="part1">
          <div id="companyinfo">
            <nav-link id="sitelink" href="#">
              BBbootstrap
            </nav-link>
            <p id="title">Cool and Perfect Snippet code</p>
            <p id="detail">
              We create awesome code snippets that will help you in creating
              your own beautiful site.
            </p>
          </div>
          <div id="explore">
            <p id="txt1">Explore</p>
            <nav-link className="link" href="#">
              Home
            </nav-link>
            <nav-link className="link" href="#">
              About
            </nav-link>
            <nav-link className="link" href="#">
              Snippet
            </nav-link>
            <nav-link className="link" href="#">
              Careers
            </nav-link>
          </div>
          <div id="visit">
            <p id="txt2">Visit</p>
            <p className="text">Lincoln House </p>
            <p className="text">78 Bhulabhai Desai Road </p>
            <p className="text">Mumbai 400 026 </p>
            <p className="text">Phone: (22) 2363-3611 </p>
            <p className="text">Fax: (22) 2363-0350 </p>
          </div>
          <div id="legal">
            <p id="txt3">Legal</p>
            <nav-link className="link1" href="#">
              Terms and Conditions
            </nav-link>
            <nav-link className="link1" href="#">
              Private Policy
            </nav-link>
          </div>
          <div id="subscribe">
            <p id="txt4">Subscribe to US</p>

            <nav-link className="waves-effect waves-light btn">
              Subscribe
            </nav-link>
            <p id="txt5">Connect With US</p>
            <i className="fab fa-facebook-square social fa-2x"></i>
            <i className="fab fa-linkedin social fa-2x"></i>
            <i className="fab fa-twitter-square social fa-2x"></i>
          </div>
        </div>
        <div id="part2">
          <p id="txt6">All right reserved To ITI</p>
        </div>
      </div>
    </div>
  );
}
