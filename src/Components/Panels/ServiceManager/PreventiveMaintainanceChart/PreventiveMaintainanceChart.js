import React from "react";
import "./PreventiveMaintainanceChart.css";

const PreventiveMaintainanceChart = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="pm-container">
      <h2 className="delegate-title">Preventive Maintenance Chart</h2>
      <p className="delegate-subtitle">
        Create and manage maintenance tasks and schedules
      </p>
      <hr />

      <form className="pm-form" onSubmit={handleSubmit}>
        {/* Basic Information */}
        <h3 className="pm-title">Basic Information</h3>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Chart ID</label>
            <input
              type="text"
              className="form-control"
              placeholder="Auto-generated"
              readOnly
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">PM Group ID</label>
            <select className="form-select">
              <option>Select PM Group</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">PM ID</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g., A0101"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Task Type</label>
            <select className="form-select">
              <option>Select task type</option>
        <option>Replace  </option>
              <option>Clean  </option>
              <option>Topup  </option>

            </select>
          </div>
        </div>

        {/* Task Details */}
        <h3 className="pm-title">Task Details</h3>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows="3"
            placeholder="Enter maintenance task description"
          ></textarea>
        </div>

       <div className="row mb-3">
  <div className="col-md-4">
    <label className="form-label">Frequency (Days)</label>
    <input
      type="number"
      className="form-control"
      placeholder="e.g., 90"
    />
  </div>
  <div className="col-md-4">
    <label className="form-label">Alert (Days-before end date)</label>
    <input
      type="number"
      className="form-control"
      placeholder="e.g., 14"
    />
  </div>
  <div className="col-md-4">
    <label className="form-label d-block">Responsible Party</label>
    <div className="form-check form-check-inline " >
      <input
        type="radio"
        name="responsible"
        id="factory"
        className="form-check-input"
        defaultChecked
      />
      <label className="form-check-label" htmlFor="factory">Factory</label>
    </div>
    <div className="form-check form-check-inline">
      <input
        type="radio"
        name="responsible"
        id="customer"
        className="form-check-input"
      />
      <label className="form-check-label" htmlFor="customer">Customer</label>
    </div>
  </div>
</div>

        {/* Additional Information */}
        <h3 className="pm-title">Additional Information</h3>
        <div className="mb-3">
          <label className="form-label">Remarks</label>
          <textarea
            className="form-control"
            rows="3"
            placeholder="Additional notes"
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-end gap-2">
          <button type="button" className="btn btn-outline-secondary">
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Save Chart
          </button>
        </div>
      </form>
    </div>
  );
};

export default PreventiveMaintainanceChart;