import React, { useState } from 'react';
import './CompanyInformation.css';

const CompanyInformation = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    crNumber: '',
    vatNumber: '',
    serviceEmail: '',
    gmEmail: '',
    currencyCode: '',
    timeZone: '',
    status: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Company Data Submitted:', formData);
  };

  return (
    <div className="company-form-container">
      {/* <h2 className="company-form-title">Company</h2> */}
      <div className="company-form-box">
        <h3 className="company-form-heading">Company Information</h3>
        <p className="company-form-subtitle">Fill in the company details below</p>
        <form className="company-form" onSubmit={handleSubmit}>
          <div className="company-form-row">
            <div className="company-form-group">
              <label>Company Name</label>
              <input type="text" name="companyName" placeholder="Enter company name" onChange={handleChange} />
            </div>
            <div className="company-form-group">
              <label>C.R Number</label>
              <input type="text" name="crNumber" placeholder="Enter C.R Number" onChange={handleChange} />
            </div>
          </div>

          <div className="company-form-row">
            <div className="company-form-group">
              <label>VAT Number</label>
              <input type="text" name="vatNumber" placeholder="Enter VAT number" onChange={handleChange} />
            </div>
            <div className="company-form-group">
              <label>Service Email</label>
              <input type="email" name="serviceEmail" placeholder="Enter service email" onChange={handleChange} />
            </div>
          </div>

          <div className="company-form-row">
            <div className="company-form-group">
              <label>General Manager Email</label>
              <input type="email" name="gmEmail" placeholder="Enter GM email" onChange={handleChange} />
            </div>
            <div className="company-form-group">
              <label>Currency Code</label>
              <input type="text" name="currencyCode" placeholder="e.g. SAR, USD, EUR" onChange={handleChange} />
            </div>
          </div>

          <div className="company-form-row">
            <div className="company-form-group">
              <label>Time Zone</label>
              <input type="text" name="timeZone" placeholder="e.g. Asia/Riyadh, UTC+3" onChange={handleChange} />
            </div>
            <div className="company-form-group">
              <label>Status</label>
              <select name="status" onChange={handleChange}>
                <option value="">Select Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>

          <div className="company-form-actions">
            <button type="button" className="  btn btn-outline-secondary company-cancel-btn">Cancel</button>
            <button type="submit" className=" btn btn-primary company-save-btn">Save Company</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanyInformation;
