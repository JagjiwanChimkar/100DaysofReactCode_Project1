import React from "react";
import "./Dashboard.css";

function Dashboard({ Data }) {
  return (
    <div>
      <h1 className="heading">Welcome to Dashboard</h1>
      <div className="statistics">
        <div className="student_stat">
          <p>Total Students</p>
          <p>{Data.length}</p>
        </div>
        <div className="address_stat">
          <p>Countries:</p>
          <p>City :</p>
        </div>
        <div className="status_stat">
          <p>Active:</p>
          <p>Inactive:</p>
          <p>Progress:</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
