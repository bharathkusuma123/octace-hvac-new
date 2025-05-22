import React from 'react';
import './UserManagement.css';

const UserManagement = () => {
  return (
    <div className="user-management-container">
      <h2 className="user-management-title">User Management</h2>
      <p className="user-management-subtitle">Add, view and manage user accounts</p>

      <form className="user-management-form">
        {/* Basic Information */}
        <section className="user-management-section">
          <h3>Basic Information</h3>
          <div className="user-management-row">
            <input type="text" placeholder="Enter username" className="user-management-input" />
            <input type="text" placeholder="Enter full name" className="user-management-input" />
            <input type="email" placeholder="user@example.com" className="user-management-input" />
            <select className="user-management-input">
              <option>Select role</option>
            </select>
          </div>
        </section>

        {/* Contact Information */}
        <section className="user-management-section">
          <h3>Contact Information</h3>
          <div className="user-management-row">
            <input type="text" placeholder="e.g., +1 123-456-7890" className="user-management-input" />
            <input type="text" placeholder="e.g., +1 987-654-3210" className="user-management-input" />
            <input type="text" placeholder="Enter city" className="user-management-input" />
            <input type="text" placeholder="e.g., +966" className="user-management-input" />
          </div>
        </section>

        {/* Address */}
        <section className="user-management-section">
          <h3>Address</h3>
          <textarea className="user-management-textarea" placeholder="Enter complete postal address" />
        </section>

        {/* Account Settings */}
        <section className="user-management-section">
          <h3>Account Settings</h3>
          <div className="user-management-row">
            <input type="password" placeholder="Enter password" className="user-management-input" />
            <input type="password" placeholder="Confirm password" className="user-management-input" />
            <div className="user-management-status">
              <label><input type="radio" name="status" defaultChecked /> Active</label>
              <label><input type="radio" name="status" /> Inactive</label>
              <label><input type="radio" name="status" /> Blocked</label>
            </div>
            <input type="number" placeholder="0.00" className="user-management-input" />
          </div>
        </section>

        {/* Security Questions */}
        <section className="user-management-section">
          <h3>Security Questions</h3>
          <div className="user-management-row">
            <select className="user-management-input">
              <option>Select a security question</option>
            </select>
            <input type="text" placeholder="Enter your answer" className="user-management-input" />
            <select className="user-management-input">
              <option>Select a security question</option>
            </select>
            <input type="text" placeholder="Enter your answer" className="user-management-input" />
          </div>
        </section>

        {/* Additional Notes */}
        <section className="user-management-section">
          <h3>Additional Notes</h3>
          <textarea className="user-management-textarea" placeholder="Optional remarks or notes" />
        </section>

        {/* Buttons */}
        <div className="user-management-buttons">
          <button type="button" className="user-management-cancel-btn">Cancel</button>
          <button type="submit" className="user-management-save-btn">Save User</button>
        </div>
      </form>
    </div>
  );
};

export default UserManagement;
