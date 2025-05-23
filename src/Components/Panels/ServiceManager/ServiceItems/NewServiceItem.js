import React from 'react';
import './NewServiceItem.css';

const ServiceItem = () => {
  return (
    <div className="service-item-container">
      <h2 className="service-item-title">New Service Item Card</h2>
      <p className="service-item-subtitle">Fill in the service item details below</p>
<hr/>
      {/* Basic Information */}
     <div className="service-item-section">
  <h3 className="service-item-section-title">Basic Information</h3>

  {/* First row: Serial Number, Product, PM Group ID */}
  <div className="service-item-row">
    <div className="service-item-group">
      <label className="service-item-label">Serial Number</label>
      <input type="text" className="service-item-input" placeholder="Enter serial number" />
    </div>
    <div className="service-item-group">
      <label className="service-item-label">Product</label>
      <select className="service-item-input">
        <option>Select Product</option>
      </select>
    </div>
    <div className="service-item-group">
      <label className="service-item-label">PM Group ID</label>
      <input type="text" className="service-item-input" placeholder="Enter PM Group ID" />
    </div>
  </div>

  {/* Second row: Product Description */}
  <div className="service-item-row">
    <div className="service-item-group service-item-full">
      <label className="service-item-label">Product Description</label>
      <textarea className="service-item-textarea" placeholder="Add any notes or description..."></textarea>
    </div>
  </div>
</div>


      {/* Customer & Location */}
      <div className="service-item-section">
        <h3 className="service-item-section-title">Customer & Location</h3>
        <div className="service-item-row">
          <div className="service-item-group">
            <label className="service-item-label">Customer</label>
            <select className="service-item-input">
              <option>Select Customer</option>
            </select>
          </div>
          <div className="service-item-group">
            <label className="service-item-label">Installation Location</label>
            <input type="text" className="service-item-input" placeholder="Address" />
          </div>
          <div className="service-item-group">
            <label className="service-item-label">Latitude</label>
            <input type="text" className="service-item-input" placeholder="e.g. 12.971599" />
          </div>
          <div className="service-item-group">
            <label className="service-item-label">Longitude</label>
            <input type="text" className="service-item-input" placeholder="e.g. 77.594566" />
          </div>
        </div>
      </div>

      {/* Dates & Status */}
      <div className="service-item-section">
        <h3 className="service-item-section-title">Important Dates & Status</h3>
        <div className="service-item-row">
          <div className="service-item-group">
            <label className="service-item-label">Installation Date</label>
            <input type="date" className="service-item-input" />
          </div>
          <div className="service-item-group">
            <label className="service-item-label">Warranty Start Date</label>
            <input type="date" className="service-item-input" />
          </div>
          <div className="service-item-group">
            <label className="service-item-label">Warranty End Date</label>
            <input type="date" className="service-item-input" />
          </div>
          <div className="service-item-group">
            <label className="service-item-label">Contract End Date</label>
            <input type="date" className="service-item-input" />
          </div>
          <div className="service-item-group">
            <label className="service-item-label">Last Service</label>
            <input type="date" className="service-item-input" />
          </div>
        
          <div className="service-item-group">
            <label className="service-item-label">Operational Status</label>
            <select className="service-item-input">
              <option>Select Status</option>
            </select>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="service-item-buttons">
        <button className="  btn btn-outline-secondary service-item-btn service-item-cancel">Cancel</button>
        <button className=" btn btn-primary service-item-btn service-item-save">Save Item</button>
      </div>
    </div>
  );
};

export default ServiceItem;
