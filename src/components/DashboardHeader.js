import React from "react";
import "../styles/DashboardHeader.css";
import dashboardDot from "../assets/shape2.png";

const DashboardHeader = () => {
  return (
    <div className="dashboard-header">
      <h1 className="dashboard-title">
        <span>AI</span> to write code, blogs & more
      </h1>
      <p className="dashboard-description">
        Enhance everything you do by using the latest from OpenAI to solve
        problems, write solutions and make life easier
      </p>
      <div className="dashboard-btn">Get Started</div>
      <img src={dashboardDot} alt="" className="dashboard-sub-icon" />
    </div>
  );
};

export default DashboardHeader;
