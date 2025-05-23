import React, { useState } from "react";
import "./ServiceCompletionForm.css";

const ServiceCompletion = () => {
  const [formData, setFormData] = useState({
    startDateTime: "",
    endDateTime: "",
    materialCost: "",
    labourHours: "",
    labourCost: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Service Completion Submitted:", formData);
    // Your submission logic
  };

  return (
    <div className="service-completion-container container mt-4">
      <h3 className="service-completion-title">Service Completion</h3>
      <p className="service-completion-subtitle">
        Fill in the service assignment details below
      </p>
      <hr />

      <form className="service-completion-form mt-3" onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-4">
            <label className="form-label service-completion-label">
              Act Start Date & Time
            </label>
            <input
              type="datetime-local"
              className="form-control service-completion-input"
              name="startDateTime"
              value={formData.startDateTime}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label service-completion-label">
              Act End Date & Time
            </label>
            <input
              type="datetime-local"
              className="form-control service-completion-input"
              name="endDateTime"
              value={formData.endDateTime}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label service-completion-label">
              Act Material Cost
            </label>
            <input
              type="number"
              className="form-control service-completion-input"
              name="materialCost"
              value={formData.materialCost}
              onChange={handleChange}
              placeholder="21.20"
            />
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-4">
            <label className="form-label service-completion-label">
              Act Labour Hours
            </label>
            <input
              type="number"
              className="form-control service-completion-input"
              name="labourHours"
              value={formData.labourHours}
              onChange={handleChange}
              placeholder="1.5"
            />
          </div>
          <div className="col-md-4">
            <label className="form-label service-completion-label">
              Act Labour Cost
            </label>
            <input
              type="number"
              className="form-control service-completion-input"
              name="labourCost"
              value={formData.labourCost}
              onChange={handleChange}
              placeholder="21.20"
            />
          </div>
        </div>

        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-outline-secondary service-completion-cancel me-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn-primary service-completion-submit"
          >
            Save service Completion
          </button>
        </div>
      </form>
    </div>
  );
};

export default ServiceCompletion;
