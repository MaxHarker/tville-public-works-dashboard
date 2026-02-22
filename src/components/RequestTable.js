import React from "react";
import StatusBadge from "./StatusBadge";
import "./RequestTable.css";

const RequestTable = ({ requests, onRowClick }) => {
  return (
    <div className="request-table-container">
      <table className="request-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Location</th>
            <th>Description</th>
            <th>Status</th>
            <th>Date Submitted</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id} onClick={() => onRowClick(request)} style={{ cursor: "pointer" }}>
              <td>{request.id}</td>
              <td>{request.location}</td>
              <td>{request.description}</td>
              <td><StatusBadge status={request.status} /></td>
              <td>{new Date(request.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestTable;