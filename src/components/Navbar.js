import React, { useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <img src="./assets/logo.png" alt="Logo" />
      </div>
      <div className="links">
        <a href="#home">Home</a>
        <a href="#classes">Classes</a>
        <a href="#trainers">Trainer</a>
        <a href="#review">Review</a>
        <a href="#contactus">Contact</a>
        <a href="#join" className="join">
          JOIN US
        </a>
      </div>
    </header>
  );
};

export default Navbar;
