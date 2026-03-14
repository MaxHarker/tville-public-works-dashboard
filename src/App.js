import React, { useState } from "react";
import RequestTable from "./components/RequestTable";
import DashboardCard from "./components/DashboardCard";
import SummaryCard from "./components/SummaryCard";
import RequestModal from "./components/RequestDetails";
import RequestMap from "./components/RequestMap";
import FilterPanel from "./components/FilterPanel";
import "leaflet/dist/leaflet.css";
import "./App.css";
import requests from "./testData.js";

function App() {
  const [filterStatus, setFilterStatus] = useState(["Submitted", "In Progress", "Completed"]);
  const [searchTerm, setSearchTerm] = useState("");     // search by location/description
  const [startDate, setStartDate] = useState("");       // optional date range start
  const [endDate, setEndDate] = useState("");           // optional date range end
  const [selectedRequest, setSelectedRequest] = useState(null);

  // --- Filter logic ---
  const filteredRequests = requests.filter(req => {
    const matchesStatus =
      filterStatus.length === 0 || filterStatus.includes(req.status);
    const matchesSearch =
      req.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.description.toLowerCase().includes(searchTerm.toLowerCase());
    const reqDate = new Date(req.createdAt);
    const matchesStart = startDate ? reqDate >= new Date(startDate) : true;
    const matchesEnd = endDate ? reqDate <= new Date(endDate) : true;

    return matchesStatus && matchesSearch && matchesStart && matchesEnd;
  });

  const submittedCount = requests.filter(r => r.status === "Submitted").length;
  const inProgressCount = requests.filter(r => r.status === "In Progress").length;
  const completedCount = requests.filter(r => r.status === "Completed").length;

  return (
    <div
      className="App"
      style={{
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh"
      }}
    >
      <h1 style={{ textAlign: "center", color: "#003366" }}>
        Taylorsville Public Works Dashboard
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "0.5rem",
          marginBottom: "1.5rem",
          flexWrap: "wrap"
        }}
      >
        <SummaryCard title="Submitted" count={submittedCount} color="#f1c40f" />
        <SummaryCard title="In Progress" count={inProgressCount} color="#3498db" />
        <SummaryCard title="Completed" count={completedCount} color="#2ecc71" />
      </div>

      <DashboardCard>
        {/* Filter Panel */}
        <FilterPanel
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />

        {/* Request Map */}
        <div className="dashboard-section">
          <h2>Request Map</h2>
          <RequestMap requests={filteredRequests} />
        </div>

        {/* Request Table */}
        <RequestTable requests={filteredRequests} onRowClick={setSelectedRequest} />
      </DashboardCard>

      {/* Modal */}
      <RequestModal request={selectedRequest} onClose={() => setSelectedRequest(null)} />
    </div>
  );
}

export default App;