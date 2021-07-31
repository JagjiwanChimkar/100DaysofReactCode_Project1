import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {    

  const stat=useSelector(state=>state.stat);


  return (
    <div className="flex justify-between">
      <div className="bg-blue-400 rounded-xl p-5">
        <p className="text-xl">Total Student :</p>
        <p className="text-xl">{stat.student ? Object.keys(stat.student).length :0}</p>
      </div>
      <div className="bg-green-300 rounded-xl p-5">
        <p className="text-xl">Country : {stat.country ? Object.keys(stat.country).length:0}</p>
        <p className="text-xl">City : {stat.city ? Object.keys(stat.city).length:0}</p>
      </div>
      <div className="bg-pink-300 rounded-xl p-5">
          <p className="text-xl">Active: {stat.status.active ? stat.status.active:0}</p>
          <p className="text-xl">Inactive: {stat.status.inactive ? stat.status.inactive :0}</p>
          <p className="text-xl">Progress: {stat.status.inprogress ? stat.status.inprogress :0}</p>
      </div>
    </div>
  );
};

export default Dashboard;
