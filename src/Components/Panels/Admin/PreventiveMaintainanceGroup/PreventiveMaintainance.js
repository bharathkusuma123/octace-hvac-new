import React from 'react';
import './PreventiveMaintainance.css';

const PreventiveMaintenance = () => {
  return (
    <div className="pm-container">

        <h2 className="delegate-title">Preventive Maintainance </h2>
      <p className="delegate-subtitle">Enter details for preventive maintenance</p>
            <hr />

      <form className="pm-form">
        <h3 className="pm-title">Machine Information</h3>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Machine ID</label>
            <input type="text" className="form-control" placeholder="e.g. 101 or MCH-001" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Maintenance Type</label>
            <select className="form-select">
              <option>Select type</option>
            </select>
          </div>
        </div>

        <h3 className="pm-title">Schedule Details</h3>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Frequency (in days)</label>
            <input type="text" className="form-control" placeholder="e.g. 30" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Maintenance Status</label>
            <select className="form-select">
              <option>Select status</option>
            </select>
          </div>
        </div>

        <h3 className="pm-title">Service Dates</h3>
        <div className="row mb-4">
          <div className="col-md-6">
            <label className="form-label">Last Service Date</label>
            <input type="datetime-local" className="form-control" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Next Service Due</label>
            <input type="datetime-local" className="form-control" />
          </div>
        </div>

        <div className="d-flex justify-content-end gap-2">
          <button type="button" className="btn btn-outline-secondary">Cancel</button>
          <button type="submit" className="btn btn-primary">Save Maintenance</button>
        </div>
      </form>
    </div>
  );
};

export default PreventiveMaintenance;
