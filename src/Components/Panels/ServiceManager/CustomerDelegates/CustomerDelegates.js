import React from 'react';
import './CustomerDelegates.css';

const CustomerDelegate = () => {
  return (
    <div className="delegate-form-container">
      <h2 className="delegate-title">Customer Delegate</h2>
      <p className="delegate-subtitle">Fill in the delegate details below</p>

      <form className="delegate-form">
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Customer</label>
            <select className="form-select">
              <option>Select Customer</option>
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">Service Item (Optional)</label>
            <select className="form-select">
              <option>Select Service Item</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Delegate Mobile</label>
            <input type="text" className="form-control" placeholder="Enter mobile number" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Status</label>
            <select className="form-select">
              <option>Select Status</option>
            </select>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6">
            <label className="form-label">Registered At</label>
            <input type="datetime-local" className="form-control" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Recalled At</label>
            <input type="datetime-local" className="form-control" />
          </div>
        </div>

        <div className="d-flex justify-content-end gap-2">
          <button type="button" className="btn btn-outline-secondary">Cancel</button>
          <button type="submit" className="btn btn-primary">Save Delegate</button>
        </div>
      </form>
    </div>
  );
};

export default CustomerDelegate;
