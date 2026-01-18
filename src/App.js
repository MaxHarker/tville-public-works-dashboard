import React, { useState } from "react";
import RequestTable from "./components/RequestTable";
import DashboardCard from "./components/DashboardCard";
import "./App.css";

function App() {
  const [filterStatus, setFilterStatus] = useState("All");

  const requests = [
    {
      id: 101,
      location: "4700 S Redwood Rd",
      description: "Large pothole near intersection, dangerous for bikes.",
      status: "Submitted",
      createdAt: "2026-02-18T10:30:00Z",
    },
    {
      id: 102,
      location: "2500 W 5400 S",
      description: "Graffiti on the community center wall.",
      status: "In Progress",
      createdAt: "2026-02-17T09:15:00Z",
    },
    {
      id: 103,
      location: "3600 S 4000 W",
      description: "Streetlight out, causing dark area on sidewalk.",
      status: "Completed",
      createdAt: "2026-02-16T14:00:00Z",
    },
  ];

  // Filter requests based on selected status
  const filteredRequests = requests.filter((req) =>
    filterStatus === "All" ? true : req.status === filterStatus
  );

  return (
    <div className="App" style={{ padding: "2rem", fontFamily: "Arial, sans-serif", backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", color: "#003366" }}>
        Taylorsville Public Works Dashboard
      </h1>

      <DashboardCard>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="statusFilter" style={{ marginRight: "0.5rem", fontWeight: "bold" }}>
            Filter by Status:
          </label>
          <select
            id="statusFilter"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Submitted">Submitted</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <RequestTable requests={filteredRequests} />
      </DashboardCard>
    </div>
  );
}

export default App;