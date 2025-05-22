// import React from "react";
// import "./PreventiveMaintainanceChart.css";

// const PreventiveMaintainanceChart = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your submit logic here
//     console.log("Form submitted");
//   };

//   return (
//     <div className="preventive-maintenance-chart-container">
//       <h1 className="preventive-maintenance-chart-title">Preventive Maintenance Chart</h1>
//       <p className="preventive-maintenance-chart-subtitle">
//         Create and manage maintenance tasks and schedules
//       </p>

//       <form className="preventive-maintenance-chart-form" onSubmit={handleSubmit}>
//         {/* Basic Information */}
//         <div className="preventive-maintenance-chart-section">
//           <h3 className="preventive-maintenance-chart-section-title">Basic Information</h3>
//           <div className="preventive-maintenance-chart-row">
//             <div className="preventive-maintenance-chart-group">
//               <label>Chart ID</label>
//               <input type="text" className="preventive-maintenance-chart-input" placeholder="Auto-generated" readOnly />
//             </div>
//             <div className="preventive-maintenance-chart-group">
//               <label>PM Group ID</label>
//               <select className="preventive-maintenance-chart-input">
//                 <option>Select PM Group</option>
//               </select>
//             </div>
//             <div className="preventive-maintenance-chart-group">
//               <label>PM ID</label>
//               <input type="text" className="preventive-maintenance-chart-input" placeholder="e.g., A0101" />
//             </div>
//             <div className="preventive-maintenance-chart-group">
//               <label>Task Type</label>
//               <select className="preventive-maintenance-chart-input">
//                 <option>Select task type</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         {/* Task Details */}
//         <div className="preventive-maintenance-chart-section">
//           <h3 className="preventive-maintenance-chart-section-title">Task Details</h3>
//           <div className="preventive-maintenance-chart-group">
//             <label>Description</label>
//             <textarea className="preventive-maintenance-chart-textarea" placeholder="Enter maintenance task description"></textarea>
//           </div>
//           <div className="preventive-maintenance-chart-row">
//             <div className="preventive-maintenance-chart-group">
//               <label>Frequency (Days)</label>
//               <input type="number" className="preventive-maintenance-chart-input" placeholder="e.g., 90" />
//             </div>
//             <div className="preventive-maintenance-chart-group">
//               <label>Alert (Days)</label>
//               <input type="number" className="preventive-maintenance-chart-input" placeholder="e.g., 14" />
//             </div>
//             <div className="preventive-maintenance-chart-group">
//               <label>Responsible Party</label>
//               <div className="preventive-maintenance-chart-radio-group">
//                 <label>
//                   <input type="radio" name="responsible" defaultChecked /> Factory
//                 </label>
//                 <label>
//                   <input type="radio" name="responsible" /> Customer
//                 </label>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Additional Information */}
//         <div className="preventive-maintenance-chart-section">
//           <h3 className="preventive-maintenance-chart-section-title">Additional Information</h3>
//           <div className="preventive-maintenance-chart-group">
//             <label>Remarks</label>
//             <textarea className="preventive-maintenance-chart-textarea" placeholder="Additional notes"></textarea>
//           </div>
//         </div>

//         {/* Buttons */}
//         <div className="preventive-maintenance-chart-buttons">
//           <button type="button" className="preventive-maintenance-chart-btn cancel">Cancel</button>
//           <button type="submit" className="preventive-maintenance-chart-btn save">Save Chart</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default PreventiveMaintainanceChart;





import React from "react";
import "./PreventiveMaintainanceChart.css";

const PreventiveMaintainanceChart = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="pm-container">
      <h2 className="delegate-title">Preventive Maintenance Chart</h2>
      <p className="delegate-subtitle">
        Create and manage maintenance tasks and schedules
      </p>
      <hr />

      <form className="pm-form" onSubmit={handleSubmit}>
        {/* Basic Information */}
        <h3 className="pm-title">Basic Information</h3>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Chart ID</label>
            <input
              type="text"
              className="form-control"
              placeholder="Auto-generated"
              readOnly
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">PM Group ID</label>
            <select className="form-select">
              <option>Select PM Group</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">PM ID</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g., A0101"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Task Type</label>
            <select className="form-select">
              <option>Select task type</option>
            </select>
          </div>
        </div>

        {/* Task Details */}
        <h3 className="pm-title">Task Details</h3>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows="3"
            placeholder="Enter maintenance task description"
          ></textarea>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Frequency (Days)</label>
            <input
              type="number"
              className="form-control"
              placeholder="e.g., 90"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Alert (Days)</label>
            <input
              type="number"
              className="form-control"
              placeholder="e.g., 14"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="form-label">Responsible Party</label>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="responsible"
              className="form-check-input"
              defaultChecked
            />
            <label className="form-check-label">Factory</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              name="responsible"
              className="form-check-input"
            />
            <label className="form-check-label">Customer</label>
          </div>
        </div>

        {/* Additional Information */}
        <h3 className="pm-title">Additional Information</h3>
        <div className="mb-3">
          <label className="form-label">Remarks</label>
          <textarea
            className="form-control"
            rows="3"
            placeholder="Additional notes"
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-end gap-2">
          <button type="button" className="btn btn-outline-secondary">
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Save Chart
          </button>
        </div>
      </form>
    </div>
  );
};

export default PreventiveMaintainanceChart;
