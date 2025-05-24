// import React, { useState } from "react";
// import "./ServiceAssignment.css";

// const ServiceAssignment = () => {
//   const [formData, setFormData] = useState({
//     engineerId: "",
//     completionTime: "",
//     estimatedPrice: "",
//     startDateTime: "",
//     endDateTime: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitted:", formData);
//     // Submit logic here
//   };

//   return (
//     <div className="service-assignment-container container mt-4">
//       <h2 className="service-assignment-title">Service Assignment</h2>
//       <p className="service-assignment-subtitle">
//         Fill in the service assignment details below
//       </p>

//       <hr />

//       <form onSubmit={handleSubmit} className="service-assignment-form mt-3">
//         <div className="row mb-3">
//           <div className="col-md-4">
//             <label className="form-label service-assignment-label">
//               Assigned Engineer ID
//             </label>
//             <input
//               type="text"
//               className="form-control service-assignment-input"
//               name="engineerId"
//               value={formData.engineerId}
//               onChange={handleChange}
//               placeholder="001"
//             />
//           </div>
//           <div className="col-md-4">
//             <label className="form-label service-assignment-label">
//               Estimated Completion Time
//             </label>
//             <input
//               type="time"
//               className="form-control service-assignment-input"
//               name="completionTime"
//               value={formData.completionTime}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="col-md-4">
//             <label className="form-label service-assignment-label">
//               Estimated Price
//             </label>
//             <input
//               type="number"
//               className="form-control service-assignment-input"
//               name="estimatedPrice"
//               value={formData.estimatedPrice}
//               onChange={handleChange}
//               placeholder="21.20"
//             />
//           </div>
//         </div>

//         <div className="row mb-4">
//           <div className="col-md-4">
//             <label className="form-label service-assignment-label">
//               Estimated Start Date & Time
//             </label>
//             <input
//               type="datetime-local"
//               className="form-control service-assignment-input"
//               name="startDateTime"
//               value={formData.startDateTime}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="col-md-4">
//             <label className="form-label service-assignment-label">
//               Estimated End Date & Time
//             </label>
//             <input
//               type="datetime-local"
//               className="form-control service-assignment-input"
//               name="endDateTime"
//               value={formData.endDateTime}
//               onChange={handleChange}
//             />
//           </div>
//         </div>

//         <div className="d-flex justify-content-end">
//           <button
//             type="button"
//             className="btn btn-outline-secondary service-assignment-cancel me-2"
//           >
//             Cancel
//           </button>
//           <button type="submit" className="btn btn-primary service-assignment-submit">
//             Save service Assignment
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ServiceAssignment;










import React, { useState } from "react";
import "./ServiceAssignment.css";

const ServiceAssignment = () => {
  const [showForm, setShowForm] = useState(false);
  const [assignments, setAssignments] = useState([
    // Sample data - replace with your actual data
    {
      assignment_id: 1,
      request_id: 101,
      assigned_engineer_id: 501,
      assigned_by: 201,
      assigned_at: "2023-05-01 10:00:00",
      assignment_type: "Assign",
      status: "Accepted",
      decline_reason: null,
      comments: "Initial assignment"
    },
    {
      assignment_id: 2,
      request_id: 102,
      assigned_engineer_id: 502,
      assigned_by: 202,
      assigned_at: "2023-05-02 11:30:00",
      assignment_type: "Reassign",
      status: "Pending",
      decline_reason: null,
      comments: "Reassignment needed"
    }
  ]);

  const [formData, setFormData] = useState({
    engineerId: "",
    completionTime: "",
    estimatedPrice: "",
    startDateTime: "",
    endDateTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    // Submit logic here
    setShowForm(false);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
    if (showForm) {
      // Reset form when hiding it
      setFormData({
        engineerId: "",
        completionTime: "",
        estimatedPrice: "",
        startDateTime: "",
        endDateTime: "",
      });
    }
  };

  return (
    <div className="service-assignment-container container mt-4">
      <h2 className="service-assignment-title">Service Assignment</h2>
      <p className="service-assignment-subtitle">
        Manage service assignments
      </p>

      <hr />

      {!showForm ? (
        <>
          <div className="d-flex justify-content-end mb-3">
            <button 
              onClick={toggleForm}
              className="btn btn-primary service-assignment-submit"
            >
              Create New Assignment
            </button>
          </div>

          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead className="table-dark">
                <tr>
                  <th>Assignment ID</th>
                  <th>Request ID</th>
                  <th>Engineer ID</th>
                  <th>Assigned By</th>
                  <th>Assigned At</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Comments</th>
                </tr>
              </thead>
              <tbody>
                {assignments.map((assignment) => (
                  <tr key={assignment.assignment_id}>
                    <td>{assignment.assignment_id}</td>
                    <td>{assignment.request_id}</td>
                    <td>{assignment.assigned_engineer_id}</td>
                    <td>{assignment.assigned_by}</td>
                    <td>{assignment.assigned_at}</td>
                    <td>{assignment.assignment_type}</td>
                    <td>
                      <span className={`badge ${
                        assignment.status === 'Accepted' ? 'bg-success' :
                        assignment.status === 'Pending' ? 'bg-warning text-dark' :
                        assignment.status === 'Declined' ? 'bg-danger' :
                        'bg-info'
                      }`}>
                        {assignment.status}
                      </span>
                    </td>
                    <td>{assignment.comments}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <form onSubmit={handleSubmit} className="service-assignment-form mt-3">
          <div className="row mb-3">
            <div className="col-md-4">
              <label className="form-label service-assignment-label">
                Assigned Engineer ID
              </label>
              <input
                type="text"
                className="form-control service-assignment-input"
                name="engineerId"
                value={formData.engineerId}
                onChange={handleChange}
                placeholder="001"
                required
              />
            </div>
            <div className="col-md-4">
              <label className="form-label service-assignment-label">
                Estimated Completion Time
              </label>
              <input
                type="time"
                className="form-control service-assignment-input"
                name="completionTime"
                value={formData.completionTime}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4">
              <label className="form-label service-assignment-label">
                Estimated Price
              </label>
              <input
                type="number"
                className="form-control service-assignment-input"
                name="estimatedPrice"
                value={formData.estimatedPrice}
                onChange={handleChange}
                placeholder="21.20"
                required
              />
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-4">
              <label className="form-label service-assignment-label">
                Estimated Start Date & Time
              </label>
              <input
                type="datetime-local"
                className="form-control service-assignment-input"
                name="startDateTime"
                value={formData.startDateTime}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4">
              <label className="form-label service-assignment-label">
                Estimated End Date & Time
              </label>
              <input
                type="datetime-local"
                className="form-control service-assignment-input"
                name="endDateTime"
                value={formData.endDateTime}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="d-flex justify-content-end">
            <button
              type="button"
              onClick={toggleForm}
              className="btn btn-outline-secondary service-assignment-cancel me-2"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary service-assignment-submit">
              Save Service Assignment
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ServiceAssignment;