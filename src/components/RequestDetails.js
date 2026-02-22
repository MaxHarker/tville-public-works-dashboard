// RequestDetails.js
import React from "react";
import "./RequestDetails.css";

const RequestDetails = ({ request, onClose }) => {
  if (!request) return null; // nothing to show

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Request Details</h2>
        <p><strong>ID:</strong> {request.id}</p>
        <p><strong>Location:</strong> {request.location}</p>
        <p><strong>Description:</strong> {request.description}</p>
        <p><strong>Status:</strong> {request.status}</p>
        <p><strong>Date Submitted:</strong> {new Date(request.createdAt).toLocaleString()}</p>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default RequestDetails;