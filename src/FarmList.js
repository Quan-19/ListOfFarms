import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThermometerHalf } from "@fortawesome/free-solid-svg-icons";
import "./FarmList.css"; // Để import CSS

const farms = [
  {
    id: 1,
    name: "FARM 01",
    description: "description here",
    temperature: "29.5",
  },
  {
    id: 2,
    name: "FARM 02",
    description: "description here",
    temperature: "29.5",
  },
  {
    id: 3,
    name: "FARM 03",
    description: "description here",
    temperature: "29.5",
  },
];

const FarmList = () => {
  return (
    <div className="farm-list">
      <h2>LIST OF FARMS</h2>
      <div className="farms-container">
        {farms.map((farm) => (
          <div key={farm.id} className="farm-card">
            <h3>{farm.name}</h3>
            <p>{farm.description}</p>
            <p>
              <FontAwesomeIcon icon={faThermometerHalf} /> {farm.temperature} °C
            </p>
            <button>Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FarmList;
