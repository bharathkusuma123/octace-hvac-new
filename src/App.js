import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Importing all components
import CompanyInformation from './Components/Company/CompanyInformation';
import Component from './Components/Components/Component';
import NewCustomer from './Components/Customer/NewCustomer';
import CustomerComplaints from './Components/CustomerComplaints/CustomerComplaints';
import CustomerDelegates from './Components/CustomerDelegates/CustomerDelegates';
import CustomerSatisfactionSurvey from './Components/CustomerSatisfactionSurvey/CustomerSatisfactionSurvey';
import PreventiveMaintainanceChart from './Components/PreventiveMaintainanceChart/PreventiveMaintainanceChart';
import PreventiveMaintainance from './Components/PreventiveMaintainanceGroup/PreventiveMaintainance';
import Products from './Components/Products/Product(HVACdevices)';
import ResourceManagement from './Components/Resources/ResourceManagement';
import ServiceAssignment from './Components/ServiceAssignment/ServiceAssignment';
import ServiceCompletionForm from './Components/ServiceCompletionForm/ServiceCompletionForm';
import ServiceItemComponents from './Components/ServiceItemComponents/ServiceItemComponents';
import NewServiceItem from './Components/ServiceItems/NewServiceItem';
import ServicePool from './Components/ServicePool/ServicePool';
import UserManagement from './Components/Users/UserManagement';

// Optional: Create a simple Home component for the root route
const Home = () => <h1>Welcome to the Service Dashboard</h1>;

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company-information" element={<CompanyInformation />} />
          <Route path="/component" element={<Component />} />
          <Route path="/new-customer" element={<NewCustomer />} />
          <Route path="/customer-complaints" element={<CustomerComplaints />} />
          <Route path="/customer-delegates" element={<CustomerDelegates />} />
          <Route path="/customer-satisfaction-survey" element={<CustomerSatisfactionSurvey />} />
          <Route path="/preventive-maintainance-chart" element={<PreventiveMaintainanceChart />} />
          <Route path="/preventive-maintainance" element={<PreventiveMaintainance />} />
          <Route path="/products" element={<Products />} />
          <Route path="/resource-management" element={<ResourceManagement />} />
          <Route path="/service-assignment" element={<ServiceAssignment />} />
          <Route path="/service-completion-form" element={<ServiceCompletionForm />} />
          <Route path="/service-item-components" element={<ServiceItemComponents />} />
          <Route path="/new-service-item" element={<NewServiceItem />} />
          <Route path="/service-pool" element={<ServicePool />} />
          <Route path="/user-management" element={<UserManagement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
