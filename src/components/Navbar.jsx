import React from "react";
import { Link } from "react-router-dom";
import cloudyLogo from "../assets/images/cloudy-img.png";

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="logo-brand">
          <Link>
            <img src={cloudyLogo} alt="logo" />
          </Link>
        </div>
      </nav>
    </div>
  );
}
