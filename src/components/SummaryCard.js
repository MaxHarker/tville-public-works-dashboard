// SummaryCard.js
import React from "react";
import "./SummaryCard.css";

const SummaryCard = ({ title, count, color }) => {
  return (
    <div className="summary-card" style={{ borderLeft: `5px solid ${color}` }}>
      <h3 className="summary-title">{title}</h3>
      <p className="summary-count">{count}</p>
    </div>
  );
};

export default SummaryCard;