import React from 'react';
import './NewCustomer.css';

const NewCustomer = () => {
  return (
    <div className="customer-form-container">
      <h2 className="customer-title">New Customer</h2>
      <p className="customer-subtitle">Fill in the customer details below</p>

      <form className="customer-form">
        {/* Basic Information */}
        <div className="section-title">Basic Information</div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Customer ID</label>
            <input type="text" className="form-control" placeholder="e.g. C04049" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control" placeholder="Enter full name" />
          </div>
        </div>

        {/* Contact Information */}
        <div className="section-title">Contact Information</div>
        <div className="row mb-3">
          <div className="col-md-4">
            <label className="form-label">Telephone</label>
            <input type="text" className="form-control" placeholder="Landline number" />
          </div>
          <div className="col-md-4">
            <label className="form-label">Mobile</label>
            <input type="text" className="form-control" placeholder="Mobile number" />
          </div>
          <div className="col-md-4">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Email address" />
          </div>
        </div>

        {/* Location Information */}
        <div className="section-title">Location Information</div>
        <div className="row mb-3">
          <div className="col-md-4">
            <label className="form-label">City</label>
            <input type="text" className="form-control" placeholder="City name" />
          </div>
          <div className="col-md-4">
            <label className="form-label">Country Code</label>
            <input type="text" className="form-control" placeholder="e.g. KSA" />
          </div>
          <div className="col-md-4">
            <label className="form-label">Address</label>
            <textarea className="form-control" placeholder="Full address" rows="1" />
          </div>
        </div>

        {/* Type & Status */}
        <div className="section-title">Type & Status</div>
        <div className="row mb-3 align-items-end">
          <div className="col-md-6">
            <label className="form-label">Customer Type</label>
            <select className="form-select">
              <option>Select Type</option>
            </select>
          </div>
          <div className="col-md-6 d-flex align-items-center gap-3">
            <label className="form-label me-2 mb-0">Status</label>
            <div>
              <input type="radio" name="status" className="form-check-input me-1" defaultChecked /> Active
            </div>
            <div>
              <input type="radio" name="status" className="form-check-input me-1" /> Inactive
            </div>
            <div>
              <input type="radio" name="status" className="form-check-input me-1" /> Blocked
            </div>
          </div>
        </div>

        {/* Security Information */}
        <div className="section-title">Security Information</div>
        <div className="row mb-4">
          <div className="col-md-3">
            <label className="form-label">Security Question 1</label>
            <select className="form-select">
              <option>Select Security Question 1</option>
            </select>
          </div>
          <div className="col-md-3">
            <label className="form-label">Answer 1</label>
            <input type="text" className="form-control" placeholder="Answer 1" />
          </div>
          <div className="col-md-3">
            <label className="form-label">Security Question 2</label>
            <select className="form-select">
              <option>Select Security Question 2</option>
            </select>
          </div>
          <div className="col-md-3">
            <label className="form-label">Answer 2</label>
            <input type="text" className="form-control" placeholder="Answer 2" />
          </div>
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-end gap-2">
          <button type="button" className="btn btn-outline-secondary">Cancel</button>
          <button type="submit" className="btn btn-primary">Save Customer</button>
        </div>
      </form>
    </div>
  );
};

export default NewCustomer;
