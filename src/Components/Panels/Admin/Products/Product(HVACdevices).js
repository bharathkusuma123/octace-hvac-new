import React from "react";
import "./Product(HVACdevices).css";

const ProductForm = () => {
  return (
    <div className="prod-form-wrapper container shadow-sm">
      <div className="prod-header mb-4">
        <h2 className="prod-title">Product (HVAC Devices)</h2>
        <p className="prod-subtitle">Fill in the Product details below</p>
      </div>

      <form className="prod-form">
        <div className="row prod-form-row">
          <div className="col-md-4 mb-3">
            <label htmlFor="product-id" className="prod-label">
              Product ID
            </label>
            <input
              type="text"
              id="product-id"
              className="form-control prod-input"
              placeholder="Please enter product ID"
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="product-name" className="prod-label">
              Product Name
            </label>
            <input
              type="text"
              id="product-name"
              className="form-control prod-input"
              placeholder="Please enter product name"
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="pm-group-id" className="prod-label">
              PM Group ID
            </label>
            <input
              type="text"
              id="pm-group-id"
              className="form-control prod-input"
              placeholder="Please enter PM group ID"
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="product-description" className="prod-label">
            Product Description
          </label>
          <textarea
            id="product-description"
            className="form-control prod-textarea"
            rows="4"
            placeholder="Add any notes or description..."
          ></textarea>
        </div>

        <div className="d-flex justify-content-end gap-2 prod-button-group">
          <button type="button" className="btn prod-btn-cancel">
            Cancel
          </button>
          <button type="submit" className="btn prod-btn-save">
            Save Products
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
