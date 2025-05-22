import React from 'react';
import './CustomerSatisfactionSurvey.css';

const Satisfaction = () => {
  return (
    <div className="satisfaction-container container mt-4 p-4 rounded shadow-sm">
      <h2 className="satisfaction-title mb-1">Customer Survey</h2>
      <p className="satisfaction-subtitle mb-4">Fill in the feedback details below</p>

      <hr />

      <form>
        <div className="row g-3">
          {/* Service Order */}
          <div className="col-md-6">
            <label className="form-label satisfaction-label">Service Order</label>
            <select className="form-select satisfaction-input">
              <option>Select Service Order</option>
            </select>
          </div>

          {/* Service Engineer */}
          <div className="col-md-6">
            <label className="form-label satisfaction-label">Service Engineer</label>
            <select className="form-select satisfaction-input">
              <option>Select Engineer</option>
            </select>
          </div>

          {/* Engineer Rating */}
          <div className="col-md-6">
            <label className="form-label satisfaction-label">Engineer Rating (1-10)</label>
            <input type="number" className="form-control satisfaction-input" placeholder="Enter rating" />
          </div>

          {/* Service Rating */}
          <div className="col-md-6">
            <label className="form-label satisfaction-label">Service Rating (1-10)</label>
            <input type="number" className="form-control satisfaction-input" placeholder="Enter rating" />
          </div>

          {/* Engineer Rating Reason */}
          <div className="col-md-6">
            <label className="form-label satisfaction-label">Engineer Rating Reason</label>
            <textarea className="form-control satisfaction-input" placeholder="Optional comment for engineer rating" rows="3" />
          </div>

          {/* Service Rating Reason */}
          <div className="col-md-6">
            <label className="form-label satisfaction-label">Service Rating Reason</label>
            <textarea className="form-control satisfaction-input" placeholder="Optional comment for service rating" rows="3" />
          </div>

          {/* Suggestions */}
          <div className="col-12">
            <label className="form-label satisfaction-label">Suggestions</label>
            <textarea className="form-control satisfaction-input" placeholder="Suggestions for improvement" rows="3" />
          </div>

          {/* Buttons */}
          <div className="col-12 d-flex justify-content-end gap-2 mt-3">
            <button type="button" className="btn btn-outline-secondary">Cancel</button>
            <button type="submit" className="btn btn-primary">Save Survey</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Satisfaction;
