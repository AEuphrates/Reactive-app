import React, { useState } from "react";
import YogaSection from "./YogaSection";
import GroupSection from "./GroupSection";
import SoloSection from "./SoloSection"; // Add SoloSection similarly
import StretchingSection from "./StretchingSection"; // Add StretchingSection similarly

const Classes = () => {
  const [activeClass, setActiveClass] = useState("yoga");

  const renderClassSection = () => {
    switch (activeClass) {
      case "yoga":
        return <YogaSection />;
      case "group":
        return <GroupSection />;
      case "solo":
        return <SoloSection />;
      case "stretching":
        return <StretchingSection />;
      default:
        return <YogaSection />;
    }
  };

  return (
    <section className="classes" id="classes">
      <h2>OUR CLASSES</h2>
      <div className="orange-border"></div>
      <p className="paragraph-info">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>
      <div className="btn-container">
        <button className="btn" onClick={() => setActiveClass("yoga")}>
          Yoga
        </button>
        <button className="btn" onClick={() => setActiveClass("group")}>
          Group
        </button>
        <button className="btn" onClick={() => setActiveClass("solo")}>
          Solo
        </button>
        <button className="btn" onClick={() => setActiveClass("stretching")}>
          Stretching
        </button>
      </div>
      {renderClassSection()}
    </section>
  );
};

export default Classes;
