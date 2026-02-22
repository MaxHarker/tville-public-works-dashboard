import React, { useState } from "react";
import RequestTable from "./components/RequestTable";
import DashboardCard from "./components/DashboardCard";
import SummaryCard from "./components/SummaryCard";
import RequestModal from "./components/RequestDetails";
import "./App.css";

function App() {
  const [filterStatus, setFilterStatus] = useState("All");
  const [selectedRequest, setSelectedRequest] = useState(null); // modal state

  const requests = [
    { id: 101, location: "4700 S Redwood Rd", description: "Large pothole near intersection, dangerous for bikes.", status: "Submitted", createdAt: "2026-02-18T10:30:00Z" },
    { id: 102, location: "2500 W 5400 S", description: "Graffiti on the community center wall.", status: "In Progress", createdAt: "2026-02-17T09:15:00Z" },
    { id: 103, location: "3600 S 4000 W", description: "Streetlight out, causing dark area on sidewalk.", status: "Completed", createdAt: "2026-02-16T14:00:00Z" },
  ];

  const filteredRequests = requests.filter((req) =>
    filterStatus === "All" ? true : req.status === filterStatus
  );

  const submittedCount = requests.filter(r => r.status === "Submitted").length;
  const inProgressCount = requests.filter(r => r.status === "In Progress").length;
  const completedCount = requests.filter(r => r.status === "Completed").length;

  return (
    <div className="App" style={{ padding: "2rem", fontFamily: "Arial, sans-serif", backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", color: "#003366" }}>
        Taylorsville Public Works Dashboard
      </h1>

      <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
        <SummaryCard title="Submitted" count={submittedCount} color="#f1c40f" />
        <SummaryCard title="In Progress" count={inProgressCount} color="#3498db" />
        <SummaryCard title="Completed" count={completedCount} color="#2ecc71" />
      </div>

      <DashboardCard>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="statusFilter" style={{ marginRight: "0.5rem", fontWeight: "bold" }}>Filter by Status:</label>
          <select id="statusFilter" value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
            <option value="All">All</option>
            <option value="Submitted">Submitted</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <RequestTable requests={filteredRequests} onRowClick={setSelectedRequest} />
      </DashboardCard>

      {/* Modal */}
      <RequestModal request={selectedRequest} onClose={() => setSelectedRequest(null)} />
    </div>
  );
}

export default App;