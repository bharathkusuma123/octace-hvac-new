// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
//   Link,
//   useNavigate
// } from "react-router-dom";
// import "./App.css";

// // Login Components
// import AdminLogin from "./Components/LoginPages/AdminLogin";

// // Admin Panel Components
// import Component from './Components/Panels/Admin/Components/Component';
// import Products from './Components/Panels/Admin/Products/Product(HVACdevices)';
// import ResourceManagement from './Components/Panels/Admin/Resources/ResourceManagement';
// import UserManagement from './Components/Panels/Admin/Users/UserManagement';

// // Super Admin Panel Components
// import SACompanyInformation from './Components/Panels/SuperAdmin/Company/CompanyInformation';
// import SACustomerComplaints from './Components/Panels/SuperAdmin/CustomerComplaints/CustomerComplaints';
// import SACustomerSatisfactionSurvey from './Components/Panels/SuperAdmin/CustomerSatisfactionSurvey/CustomerSatisfactionSurvey';
// import SAServiceCompletionForm from './Components/Panels/SuperAdmin/ServiceCompletionForm/ServiceCompletionForm';

// // Service Manager Panel Components
// import SMNewCustomer from './Components/Panels/ServiceManager/Customer/NewCustomer';
// import SMCustomerDelegates from './Components/Panels/ServiceManager/CustomerDelegates/CustomerDelegates';
// import SMPreventiveMaintainanceChart from './Components/Panels/ServiceManager/PreventiveMaintainanceChart/PreventiveMaintainanceChart';
// import SMPreventiveMaintainance from './Components/Panels/ServiceManager/PreventiveMaintainanceGroup/PreventiveMaintainance';
// import SMServiceAssignment from './Components/Panels/ServiceManager/ServiceAssignment/ServiceAssignment';
// import SMServiceItemComponents from './Components/Panels/ServiceManager/ServiceItemComponents/ServiceItemComponents';
// import SMNewServiceItem from './Components/Panels/ServiceManager/ServiceItems/NewServiceItem';
// import SMServicePool from './Components/Panels/ServiceManager/ServicePool/ServicePool';

// // Navigation Components
// const AdminNavbar = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("userRole");
//     navigate("/admin-login");
//   };

//   return (
//     <nav className="admin-nav">
//       <h2>Admin Panel</h2>
//       <ul>
//         <li><Link to="/admin/component">Components</Link></li>
//         <li><Link to="/admin/products">Products</Link></li>
//         <li><Link to="/admin/resource-management">Resource Management</Link></li>
//         <li><Link to="/admin/user-management">User Management</Link></li>
//         <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
//       </ul>
//     </nav>
//   );
// };

// const SuperAdminNavbar = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("userRole");
//     navigate("/superadmin-login");
//   };

//   return (
//     <nav className="superadmin-nav">
//       <h2>Super Admin Panel</h2>
//       <ul>
//         <li><Link to="/superadmin/company-information">Company Information</Link></li>
//         <li><Link to="/superadmin/service-completion-form">Service Completion Form</Link></li>
//         <li><Link to="/superadmin/customer-satisfaction-survey">Customer Satisfaction Survey</Link></li>
//         <li><Link to="/superadmin/customer-complaints">Customer Complaints</Link></li>
//         <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
//       </ul>
//     </nav>
//   );
// };

// const ServiceManagerNavbar = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("userRole");
//     navigate("/servicemanager-login");
//   };

//   return (
//     <nav className="servicemanager-nav">
//       <h2>Service Manager Panel</h2>
//       <ul>
//         <li><Link to="/servicemanager/new-customer"> Customer</Link></li>
//         {/* <li><Link to="/servicemanager/customer-delegates">Customer Delegates</Link></li> */}
//         <li><Link to="/servicemanager/preventive-maintainance-chart">P M Chart</Link></li>
//         <li><Link to="/servicemanager/preventive-maintainance">P M Group</Link></li>
//                 <li><Link to="/servicemanager/service-pool">Service Pool</Link></li>

//         <li><Link to="/servicemanager/service-assignment">Service Assignment</Link></li>
//         <li><Link to="/servicemanager/service-item-components">Service Item Components</Link></li>
//         <li><Link to="/servicemanager/new-service-item"> Service Item</Link></li>
//         <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
//       </ul>
//     </nav>
//   );
// };

// // Layout Components
// const AdminLayout = ({ children }) => {
//   return (
//     <div className="layout">
//       <AdminNavbar />
//       <div className="content">{children}</div>
//     </div>
//   );
// };

// const SuperAdminLayout = ({ children }) => {
//   return (
//     <div className="layout">
//       <SuperAdminNavbar />
//       <div className="content">{children}</div>
//     </div>
//   );
// };

// const ServiceManagerLayout = ({ children }) => {
//   return (
//     <div className="layout">
//       <ServiceManagerNavbar />
//       <div className="content">{children}</div>
//     </div>
//   );
// };

// // Protected Route Component
// const ProtectedRoute = ({ role, children }) => {
//   const userRole = localStorage.getItem("userRole");

//   if (userRole !== role) {
//     return <Navigate to={`/${role}-login`} replace />;
//   }

//   return children;
// };

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<AdminLogin />} />
//           {/* Admin Routes */}
//           <Route path="/admin/component" element={
//             <ProtectedRoute role="admin">
//               <AdminLayout>
//                 <Component />
//               </AdminLayout>
//             </ProtectedRoute>
//           } />
//           <Route path="/admin/products" element={
//             <ProtectedRoute role="admin">
//               <AdminLayout>
//                 <Products />
//               </AdminLayout>
//             </ProtectedRoute>
//           } />
//           <Route path="/admin/resource-management" element={
//             <ProtectedRoute role="admin">
//               <AdminLayout>
//                 <ResourceManagement />
//               </AdminLayout>
//             </ProtectedRoute>
//           } />
//           <Route path="/admin/user-management" element={
//             <ProtectedRoute role="admin">
//               <AdminLayout>
//                 <UserManagement />
//               </AdminLayout>
//             </ProtectedRoute>
//           } />

//           {/* Super Admin Routes */}
//           <Route path="/superadmin/company-information" element={
//             <ProtectedRoute role="superadmin">
//               <SuperAdminLayout>
//                 <SACompanyInformation />
//               </SuperAdminLayout>
//             </ProtectedRoute>
//           } />
//           <Route path="/superadmin/service-completion-form" element={
//             <ProtectedRoute role="superadmin">
//               <SuperAdminLayout>
//                 <SAServiceCompletion />
//               </SuperAdminLayout>
//             </ProtectedRoute>
//           } />
//           <Route path="/superadmin/customer-satisfaction-survey" element={
//             <ProtectedRoute role="superadmin">
//               <SuperAdminLayout>
//                 <SACustomerSatisfactionSurvey />
//               </SuperAdminLayout>
//             </ProtectedRoute>
//           } />
//           <Route path="/superadmin/customer-complaints" element={
//             <ProtectedRoute role="superadmin">
//               <SuperAdminLayout>
//                 <SACustomerComplaints />
//               </SuperAdminLayout>
//             </ProtectedRoute>
//           } />

//           {/* Service Manager Routes */}
//           <Route path="/servicemanager/new-customer" element={
//             <ProtectedRoute role="servicemanager">
//               <ServiceManagerLayout>
//                 <SMNewCustomer />
//               </ServiceManagerLayout>
//             </ProtectedRoute>
//           } />
//           <Route path="/servicemanager/customer-delegates" element={
//             <ProtectedRoute role="servicemanager">
//               <ServiceManagerLayout>
//                 <SMCustomerDelegates />
//               </ServiceManagerLayout>
//             </ProtectedRoute>
//           } />
//             <Route path="/servicemanager/service-pool" element={
//             <ProtectedRoute role="servicemanager">
//               <ServiceManagerLayout>
//                 <SMServicePool />
//               </ServiceManagerLayout>
//             </ProtectedRoute>
//           } />
//           <Route path="/servicemanager/preventive-maintainance-chart" element={
//             <ProtectedRoute role="servicemanager">
//               <ServiceManagerLayout>
//                 <SMPreventiveMaintainanceChart />
//               </ServiceManagerLayout>
//             </ProtectedRoute>
//           } />
//           <Route path="/servicemanager/preventive-maintainance" element={
//             <ProtectedRoute role="servicemanager">
//               <ServiceManagerLayout>
//                 <SMPreventiveMaintainance />
//               </ServiceManagerLayout>
//             </ProtectedRoute>
//           } />
//           <Route path="/servicemanager/service-assignment" element={
//             <ProtectedRoute role="servicemanager">
//               <ServiceManagerLayout>
//                 <SMServiceAssignment />
//               </ServiceManagerLayout>
//             </ProtectedRoute>
//           } />
//           <Route path="/servicemanager/service-item-components" element={
//             <ProtectedRoute role="servicemanager">
//               <ServiceManagerLayout>
//                 <SMServiceItemComponents />
//               </ServiceManagerLayout>
//             </ProtectedRoute>
//           } />
//           <Route path="/servicemanager/new-service-item" element={
//             <ProtectedRoute role="servicemanager">
//               <ServiceManagerLayout>
//                 <SMNewServiceItem />
//               </ServiceManagerLayout>
//             </ProtectedRoute>
//           } />
//           <Route path="/servicemanager/new-customer" element={
//             <ProtectedRoute role="servicemanager">
//               <ServiceManagerLayout>
//                 <SMNewCustomer />
//               </ServiceManagerLayout>
//             </ProtectedRoute>
//           } />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import "./App.css";

// Login Components
import AdminLogin from "./Components/LoginPages/AdminLogin";

// Admin Panel Components
import Component from "./Components/Panels/Admin/Components/Component";
import Products from "./Components/Panels/Admin/Products/Product(HVACdevices)";
import ResourceManagement from "./Components/Panels/Admin/Resources/ResourceManagement";
import UserManagement from "./Components/Panels/Admin/Users/UserManagement";

// Super Admin Panel Components
import SACompanyInformation from "./Components/Panels/SuperAdmin/Company/CompanyInformation";
import SACustomerComplaints from "./Components/Panels/SuperAdmin/CustomerComplaints/CustomerComplaints";
import SACustomerSatisfactionSurvey from "./Components/Panels/SuperAdmin/CustomerSatisfactionSurvey/CustomerSatisfactionSurvey";
import SAServiceCompletion from "./Components/Panels/SuperAdmin/ServiceCompletionForm/ServiceCompletion";

// Service Manager Panel Components
import SMNewCustomer from "./Components/Panels/ServiceManager/Customer/NewCustomer";
import SMCustomerDelegates from "./Components/Panels/ServiceManager/CustomerDelegates/CustomerDelegates";
import SMPreventiveMaintainanceChart from "./Components/Panels/ServiceManager/PreventiveMaintainanceChart/PreventiveMaintainanceChart";
import SMPreventiveMaintainance from "./Components/Panels/ServiceManager/PreventiveMaintainanceGroup/PreventiveMaintainance";
import SMServiceAssignment from "./Components/Panels/ServiceManager/ServiceAssignment/ServiceAssignment";
import SMServiceItemComponents from "./Components/Panels/ServiceManager/ServiceItemComponents/ServiceItemComponents";
import SMNewServiceItem from "./Components/Panels/ServiceManager/ServiceItems/NewServiceItem";
import SMServicePool from "./Components/Panels/ServiceManager/ServicePool/ServicePool";

// Top Navigation Bar Component
const TopNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userRole = localStorage.getItem("userRole");

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    navigate(`/`);
  };

  const getNavItems = () => {
    switch (userRole) {
      case "admin":
        return [
          { path: "/admin/component", label: "Components" },
          { path: "/admin/products", label: "Products" },
          { path: "/admin/resource-management", label: "Resources" },
          { path: "/admin/user-management", label: "Users" },
        ];
      case "superadmin":
        return [
          {
            path: "/superadmin/company-information",
            label: "Company Information",
          },
          {
            path: "/superadmin/service-completion-form",
            label: "Service Completion Form",
          },
          {
            path: "/superadmin/customer-satisfaction-survey",
            label: "Customer Satisfaction Survey",
          },
          {
            path: "/superadmin/customer-complaints",
            label: "Customer Complaints",
          },
        ];
      case "servicemanager":
        return [
          { path: "/servicemanager/new-customer", label: "Customer" },
          {
            label: "Preventive Maintenance",
            dropdown: [
              {
                path: "/servicemanager/preventive-maintainance-chart",
                label: "P M Chart",
              },
              {
                path: "/servicemanager/preventive-maintainance-group",
                label: "P M Group",
              },
            ],
          },
          { path: "/servicemanager/service-pool", label: "Service Pool" },
          {
            path: "/servicemanager/service-assignment",
            label: "Service Assignment",
          },
          {
            path: "/servicemanager/service-item-components",
            label: "Service Item Components",
          },
          { path: "/servicemanager/new-service-item", label: "Service Item" },
        ];
      default:
        return [];
    }
  };

  if (!userRole) return null;

  return (
    <nav className="top-navbar">
      <div className="nav-container">
        <div className="nav-brand">
          {userRole === "admin" && "Admin Panel"}
          {userRole === "superadmin" && "Super Admin Panel"}
          {userRole === "servicemanager" && "Service Manager Panel"}
        </div>
        <div className="nav-links">
          {getNavItems().map((item) =>
            item.dropdown ? (
              <div key={item.label} className="dropdown">
                <button className="dropdown-toggle">{item.label}</button>
                <div className="dropdown-menu">
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.path}
                      to={subItem.path}
                      className={
                        location.pathname === subItem.path ? "active" : ""
                      }
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className={location.pathname === item.path ? "active" : ""}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
        <div className="nav-user">
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

// Layout Component (now simplified since navbar is at top)
const PanelLayout = ({ children }) => {
  return (
    <div className="panel-layout">
      <TopNavbar />
      <div className="panel-content">{children}</div>
    </div>
  );
};

// Protected Route Component
const ProtectedRoute = ({ role, children }) => {
  const userRole = localStorage.getItem("userRole");

  if (userRole !== role) {
    return <Navigate to={`/${role}-login`} replace />;
  }

  return <PanelLayout>{children}</PanelLayout>;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AdminLogin />} />

          {/* Admin Routes */}
          <Route
            path="/admin/component"
            element={
              <ProtectedRoute role="admin">
                <Component />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/products"
            element={
              <ProtectedRoute role="admin">
                <Products />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/resource-management"
            element={
              <ProtectedRoute role="admin">
                <ResourceManagement />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/user-management"
            element={
              <ProtectedRoute role="admin">
                <UserManagement />
              </ProtectedRoute>
            }
          />

          {/* Super Admin Routes */}
          <Route
            path="/superadmin/company-information"
            element={
              <ProtectedRoute role="superadmin">
                <SACompanyInformation />
              </ProtectedRoute>
            }
          />
          <Route
            path="/superadmin/service-completion-form"
            element={
              <ProtectedRoute role="superadmin">
                <SAServiceCompletion />
              </ProtectedRoute>
            }
          />
          <Route
            path="/superadmin/customer-satisfaction-survey"
            element={
              <ProtectedRoute role="superadmin">
                <SACustomerSatisfactionSurvey />
              </ProtectedRoute>
            }
          />
          <Route
            path="/superadmin/customer-complaints"
            element={
              <ProtectedRoute role="superadmin">
                <SACustomerComplaints />
              </ProtectedRoute>
            }
          />

          {/* Service Manager Routes */}
          <Route
            path="/servicemanager/new-customer"
            element={
              <ProtectedRoute role="servicemanager">
                <SMNewCustomer />
              </ProtectedRoute>
            }
          />
          <Route
            path="/servicemanager/customer-delegates"
            element={
              <ProtectedRoute role="servicemanager">
                <SMCustomerDelegates />
              </ProtectedRoute>
            }
          />
          <Route
            path="/servicemanager/service-pool"
            element={
              <ProtectedRoute role="servicemanager">
                <SMServicePool />
              </ProtectedRoute>
            }
          />
          <Route
            path="/servicemanager/preventive-maintainance-chart"
            element={
              <ProtectedRoute role="servicemanager">
                <SMPreventiveMaintainanceChart />
              </ProtectedRoute>
            }
          />
          <Route
            path="/servicemanager/preventive-maintainance-group"
            element={
              <ProtectedRoute role="servicemanager">
                <SMPreventiveMaintainance />
              </ProtectedRoute>
            }
          />
          <Route
            path="/servicemanager/service-assignment"
            element={
              <ProtectedRoute role="servicemanager">
                <SMServiceAssignment />
              </ProtectedRoute>
            }
          />
          <Route
            path="/servicemanager/service-item-components"
            element={
              <ProtectedRoute role="servicemanager">
                <SMServiceItemComponents />
              </ProtectedRoute>
            }
          />
          <Route
            path="/servicemanager/new-service-item"
            element={
              <ProtectedRoute role="servicemanager">
                <SMNewServiceItem />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
