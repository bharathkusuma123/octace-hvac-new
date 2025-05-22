import React from "react";
import "./ServiceItemComponents.css";

const ServiceItemComponents = () => {
  return (
    <div className="svc-form-wrapper container shadow-sm">
      <div className="svc-header mb-4">
        <h2 className="svc-title">Service Item Components</h2>
        <p className="svc-subtitle">Fill in the service item details below</p>
      </div>

      <form className="svc-form">
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="svc-label" htmlFor="serviceItem">
              Service Item
            </label>
            <select id="serviceItem" className="form-select svc-input">
              <option>Select Service Item</option>
            </select>
          </div>
          <div className="col-md-6">
            <label className="svc-label" htmlFor="component">
              Component
            </label>
            <select id="component" className="form-select svc-input">
              <option>Select Component</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="svc-label" htmlFor="serialNumber">
              Component Serial Number
            </label>
            <input
              type="text"
              id="serialNumber"
              className="form-control svc-input"
              placeholder="Enter serial number"
            />
          </div>
          <div className="col-md-6">
            <label className="svc-label" htmlFor="vendor">
              Vendor (optional)
            </label>
            <select id="vendor" className="form-select svc-input">
              <option>Select Vendor</option>
            </select>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6">
            <label className="svc-label" htmlFor="warrantyStart">
              Warranty Start Date
            </label>
            <input
              type="date"
              id="warrantyStart"
              className="form-control svc-input"
            />
          </div>
          <div className="col-md-6">
            <label className="svc-label" htmlFor="warrantyEnd">
              Warranty End Date
            </label>
            <input
              type="date"
              id="warrantyEnd"
              className="form-control svc-input"
            />
          </div>
        </div>

        <div className="d-flex justify-content-end gap-2 svc-button-group">
          <button type="button" className="btn svc-btn-cancel">
            Cancel
          </button>
          <button type="submit" className="btn svc-btn-save">
            Save Item Component
          </button>
        </div>
      </form>
    </div>
  );
};

export default ServiceItemComponents;
