import React from "react";
import RequestTable from "./components/RequestTable";
import DashboardCard from "./components/DashboardCard";

function App() {
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

  return (
    <div
      style={{
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#003366" }}>
        Taylorsville Public Works Dashboard
      </h1>

      {/* Use the new DashboardCard component */}
      <DashboardCard>
        <RequestTable requests={requests} />
      </DashboardCard>
    </div>
  );
}

export default App;