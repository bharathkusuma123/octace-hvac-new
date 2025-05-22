import React, { useState } from "react";
import "./ServicePool.css";

const ServicePool = () => {
  const [formData, setFormData] = useState({
    requestId: "",
    sourceType: "Machine Alert",
    serviceItemId: "",
    preferredDate: "",
    preferredTime: "",
    requestDetails: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Save logic here
  };

  return (
    <div className="service-pool-container container mt-4">
      <h3 className="service-pool-title">Service Pool</h3>
      <p className="service-pool-subtitle">
        Fill in the service request details below
      </p>

      <hr />

      <form onSubmit={handleSubmit} className="service-pool-form">
        <div className="row mb-3">
          <div className="col-md-4">
            <label className="form-label service-pool-label">Request ID</label>
            <input
              type="text"
              className="form-control service-pool-input"
              name="requestId"
              placeholder="001"

              value={formData.requestId}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label service-pool-label">Source Type</label>
            <select
              className="form-select service-pool-select"
              name="sourceType"
              value={formData.sourceType}
              onChange={handleChange}
            >
              <option>Machine Alert</option>
              <option>Manual Entry</option>
              <option>Sensor Notification</option>
            </select>
          </div>
          <div className="col-md-4">
            <label className="form-label service-pool-label">
              Service Item ID
            </label>
            <input
              type="text"
              className="form-control service-pool-input"
              name="serviceItemId"
              placeholder="e.g. serviceid_001"
              value={formData.serviceItemId}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-4">
            <label className="form-label service-pool-label">
              Preferred Date
            </label>
            <input
              type="date"
              className="form-control service-pool-input"
              name="preferredDate"
              value={formData.preferredDate}
              placeholder="dd-mm-yyyy"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label service-pool-label">
              Preferred Time
            </label>
            <input
              type="time"
              className="form-control service-pool-input"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label service-pool-label">
            Request Details
          </label>
          <textarea
            className="form-control service-pool-textarea"
            name="requestDetails"
            placeholder="Add any notes or description..."
            rows="3"
            value={formData.requestDetails}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-outline-secondary service-pool-cancel me-2"
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary service-pool-save">
            Save service item
          </button>
        </div>
      </form>
    </div>
  );
};

export default ServicePool;
