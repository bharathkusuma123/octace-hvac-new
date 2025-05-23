import React from 'react';
import './PreventiveMaintainance.css';

const PreventiveMaintenance = () => {
  return (
    <div className="pm-container">

        <h2 className="delegate-title">Preventive Maintainance Group </h2>
      <p className="delegate-subtitle">Enter details for preventive maintenance</p>
            <hr />

      <form className="pm-form">
        <div className="row mb-3">
          <div className="col-md-4">
            <label className="form-label">PM Group ID</label>
            <input type="text" className="form-control" placeholder="e.g. 101 or MCH-001" />
          </div>
           <div className="col-md-4">
            <label className="form-label">PM Group Name</label>
            <input type="text" className="form-control" placeholder="e.g. 101 or MCH-001" />
          </div>
           <div className="col-md-4">
            <label className="form-label">Series</label>
            <input type="text" className="form-control" placeholder="e.g. 101 or MCH-001" />
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
