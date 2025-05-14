import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-5 footermainheading">
      <div className="footermainheading1">
        <div className="footerheading">
          <div className="head1">
            <div className="head">
              <img src="/images/msp-logo.png" alt="" className="footerlogo" />
              <p className="headp">
                © 2025 Makkal Sinthani Peravai, Inc. <br /> All rights reserved.
              </p>
            </div>
            <p className="headp1">
              All trademarks, logos, and brand names are the property of their
              respective owners.
            </p>
          </div>
          <div className="followmore">
            <div>
              <h2>Follow More</h2>
            </div>
            <div className="socialmedia">
              <div>
                <img src="/images/ig.png" alt="" />
              </div>
              <div>
                <img src="/images/fb.png" alt="" />
              </div>
              <div>
                <img src="/images/yt.png" alt="" />
              </div>
              <div>
                <img src="/images/web.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="footersecheading">
          <div>
            <h2>Quick links</h2>
          </div>
          <ul className="custom-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            {/* <li>
              <Link to="/gallery-range/:range">Time Line</Link>
            </li> */}
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <img
            src="/images/footerbarathi.png"
            alt=""
            className="footerbarathi"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
