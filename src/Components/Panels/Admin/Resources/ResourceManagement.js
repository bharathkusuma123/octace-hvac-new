import React, { useState } from 'react';
import './ResourceManagement.css';

const ResourceManagement = () => {
  const [formData, setFormData] = useState({
    resourceId: '',
    fullName: '',
    phone: '',
    email: '',
    status: 'active',
    hourlyRate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleStatusChange = (e) => {
    setFormData(prev => ({ ...prev, status: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Resource Data Submitted:', formData);
  };

  return (
    <div className="resource-mgmt-container">
      <div className="resource-mgmt-box">
              <h2 className="resource-mgmt-title2">Resource Management</h2>

        <p className="resource-mgmt-subtitle">Add, view and manage your engineering resources</p>
        <form className="resource-mgmt-form" onSubmit={handleSubmit}>
          
          <div className="resource-mgmt-section">
            <h3 className="resource-mgmt-heading">Resource Details</h3>
            <div className="resource-mgmt-row">
              <div className="resource-mgmt-group">
                <label>Resource ID</label>
                <input
                  type="text"
                  name="resourceId"
                  placeholder="e.g., ABC-0101"
                  value={formData.resourceId}
                  onChange={handleChange}
                />
              </div>
              <div className="resource-mgmt-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter full name"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="resource-mgmt-section">
            <h3 className="resource-mgmt-heading">Contact Information</h3>
            <div className="resource-mgmt-row">
              <div className="resource-mgmt-group">
                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="e.g., +91 9876543210"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="resource-mgmt-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="e.g., engineer@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="resource-mgmt-section">
            <h3 className="resource-mgmt-heading">Resource Status & Hourly Rate</h3>
            <div className="resource-mgmt-status-row">
              <label>
                <input
                  type="radio"
                  name="status"
                  value="active"
                  checked={formData.status === 'active'}
                  onChange={handleStatusChange}
                /> Active
              </label>
              <label>
                <input
                  type="radio"
                  name="status"
                  value="inactive"
                  checked={formData.status === 'inactive'}
                  onChange={handleStatusChange}
                /> Inactive
              </label>
              <label>
                <input
                  type="radio"
                  name="status"
                  value="blocked"
                  checked={formData.status === 'blocked'}
                  onChange={handleStatusChange}
                /> Blocked
              </label>
            </div>
            <div className="resource-mgmt-row">
              <div className="resource-mgmt-group">
                <label>Hourly Rate</label>
                <input
                  type="number"
                  name="hourlyRate"
                  placeholder="0.00"
                  value={formData.hourlyRate}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="resource-mgmt-actions">
            <button type="button" className="  btn btn-outline-secondary resource-mgmt-cancel">Cancel</button>
            <button type="submit" className="  btn  btn-primary resource-mgmt-save">Save Resources</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResourceManagement;
