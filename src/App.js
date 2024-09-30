import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Information from "./components/Information";
import Classes from "./components/Classes";
import BMICalculator from "./components/BMICalculator";
import Trainers from "./components/Trainers";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Information />
      <Classes />
      <BMICalculator />
      <Trainers />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
