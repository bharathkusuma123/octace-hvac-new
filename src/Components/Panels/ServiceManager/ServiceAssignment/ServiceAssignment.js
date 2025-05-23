import React, { useState } from "react";
import "./ServiceAssignment.css";

const ServiceAssignment = () => {
  const [formData, setFormData] = useState({
    engineerId: "",
    completionTime: "",
    estimatedPrice: "",
    startDateTime: "",
    endDateTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    // Submit logic here
  };

  return (
    <div className="service-assignment-container container mt-4">
      <h2 className="service-assignment-title">Service Assignment</h2>
      <p className="service-assignment-subtitle">
        Fill in the service assignment details below
      </p>

      <hr />

      <form onSubmit={handleSubmit} className="service-assignment-form mt-3">
        <div className="row mb-3">
          <div className="col-md-4">
            <label className="form-label service-assignment-label">
              Assigned Engineer ID
            </label>
            <input
              type="text"
              className="form-control service-assignment-input"
              name="engineerId"
              value={formData.engineerId}
              onChange={handleChange}
              placeholder="001"
            />
          </div>
          <div className="col-md-4">
            <label className="form-label service-assignment-label">
              Estimated Completion Time
            </label>
            <input
              type="time"
              className="form-control service-assignment-input"
              name="completionTime"
              value={formData.completionTime}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label service-assignment-label">
              Estimated Price
            </label>
            <input
              type="number"
              className="form-control service-assignment-input"
              name="estimatedPrice"
              value={formData.estimatedPrice}
              onChange={handleChange}
              placeholder="21.20"
            />
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-4">
            <label className="form-label service-assignment-label">
              Estimated Start Date & Time
            </label>
            <input
              type="datetime-local"
              className="form-control service-assignment-input"
              name="startDateTime"
              value={formData.startDateTime}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label service-assignment-label">
              Estimated End Date & Time
            </label>
            <input
              type="datetime-local"
              className="form-control service-assignment-input"
              name="endDateTime"
              value={formData.endDateTime}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-outline-secondary service-assignment-cancel me-2"
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary service-assignment-submit">
            Save service Assignment
          </button>
        </div>
      </form>
    </div>
  );
};

export default ServiceAssignment;
