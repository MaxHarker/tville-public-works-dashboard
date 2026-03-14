import React, { useState, useMemo } from "react";
import StatusBadge from "./StatusBadge";
import "./RequestTable.css";

const RequestTable = ({ requests, onRowClick }) => {
  const [sortField, setSortField] = useState("createdAt"); // default sort by date
  const [sortDirection, setSortDirection] = useState("desc"); // asc or desc

  // Memoized sorted requests for performance
  const sortedRequests = useMemo(() => {
    const sorted = [...requests].sort((a, b) => {
      let aValue = a[sortField];
      let bValue = b[sortField];

      // Convert dates to timestamps
      if (sortField === "createdAt") {
        aValue = new Date(aValue).getTime();
        bValue = new Date(bValue).getTime();
      } else {
        aValue = aValue.toString().toLowerCase();
        bValue = bValue.toString().toLowerCase();
      }

      if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
      if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });

    return sorted;
  }, [requests, sortField, sortDirection]);

  // Toggle sort when clicking header
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc"); // default ascending for new field
    }
  };

  // Arrow indicators for headers
  const renderSortArrow = (field) => {
    if (sortField !== field) return null;
    return sortDirection === "asc" ? " ▲" : " ▼";
  };

  return (
    <div className="request-table-container">
      <table className="request-table">
        <thead>
          <tr>
            <th onClick={() => handleSort("id")}>ID{renderSortArrow("id")}</th>
            <th onClick={() => handleSort("location")}>Location{renderSortArrow("location")}</th>
            <th onClick={() => handleSort("description")}>Description{renderSortArrow("description")}</th>
            <th onClick={() => handleSort("status")}>Status{renderSortArrow("status")}</th>
            <th onClick={() => handleSort("createdAt")}>Date Submitted{renderSortArrow("createdAt")}</th>
          </tr>
        </thead>
        <tbody>
          {sortedRequests.map((request) => (
            <tr
              key={request.id}
              onClick={() => onRowClick(request)}
              style={{ cursor: "pointer" }}
            >
              <td>{request.id}</td>
              <td>{request.location}</td>
              <td>{request.description}</td>
              <td>
                <StatusBadge status={request.status} />
              </td>
              <td>{new Date(request.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestTable;