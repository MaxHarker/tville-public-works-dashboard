import React from "react";
import "./FilterPanel.css";

const FilterPanel = ({
  filterStatus,
  setFilterStatus,
  searchTerm,
  setSearchTerm,
  startDate,
  setStartDate,
  endDate,
  setEndDate
}) => {
  const statuses = ["Submitted", "In Progress", "Completed"];

  return (
    <div className="filter-panel">
      <h2>Filters</h2>

      <div className="status-checkboxes">
        {statuses.map(status => (
          <label key={status}>
            <input
              type="checkbox"
              checked={filterStatus.includes(status)}
              onChange={e => {
                if (e.target.checked) {
                  setFilterStatus([...filterStatus, status]);
                } else {
                  setFilterStatus(filterStatus.filter(s => s !== status));
                }
              }}
            />
            {status}
          </label>
        ))}
      </div>

      <div className="filter-inputs">
        <input
          type="text"
          placeholder="Search location or description..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />

        <label>
          From:
          <input
            type="date"
            value={startDate}
            onChange={e => setStartDate(e.target.value)}
          />
        </label>

        <label>
          To:
          <input
            type="date"
            value={endDate}
            onChange={e => setEndDate(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

export default FilterPanel;