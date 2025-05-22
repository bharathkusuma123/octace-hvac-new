import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Home Component

// ----------------- ADMIN PANEL -----------------
import CompanyInformation from './Components/Panels/Admin/Company/CompanyInformation';
import Component from './Components/Panels/Admin/Components/Component';
import NewCustomer from './Components/Panels/Admin/Customer/NewCustomer';
import CustomerComplaints from './Components/Panels/Admin/CustomerComplaints/CustomerComplaints';
import CustomerDelegates from './Components/Panels/Admin/CustomerDelegates/CustomerDelegates';
import CustomerSatisfactionSurvey from './Components/Panels/Admin/CustomerSatisfactionSurvey/CustomerSatisfactionSurvey';
import PreventiveMaintainanceChart from './Components/Panels/Admin/PreventiveMaintainanceChart/PreventiveMaintainanceChart';
import PreventiveMaintainance from './Components/Panels/Admin/PreventiveMaintainanceGroup/PreventiveMaintainance';
import Products from './Components/Panels/Admin/Products/Product(HVACdevices)';
import ResourceManagement from './Components/Panels/Admin/Resources/ResourceManagement';
import ServiceAssignment from './Components/Panels/Admin/ServiceAssignment/ServiceAssignment';
import ServiceCompletionForm from './Components/Panels/Admin/ServiceCompletionForm/ServiceCompletionForm';
import ServiceItemComponents from './Components/Panels/Admin/ServiceItemComponents/ServiceItemComponents';
import ServiceItem from './Components/Panels/Admin/ServiceItems/ServiceItem';
import ServicePool from './Components/Panels/Admin/ServicePool/ServicePool';
import UserManagement from './Components/Panels/Admin/Users/UserManagement';

// ----------------- SUPER ADMIN PANEL -----------------
import SACompanyInformation from './Components/Panels/SuperAdmin/Company/CompanyInformation';
import SAComponent from './Components/Panels/SuperAdmin/Components/Component';
import SANewCustomer from './Components/Panels/SuperAdmin/Customer/NewCustomer';
import SACustomerComplaints from './Components/Panels/SuperAdmin/CustomerComplaints/CustomerComplaints';
import SACustomerDelegates from './Components/Panels/SuperAdmin/CustomerDelegates/CustomerDelegates';
import SACustomerSatisfactionSurvey from './Components/Panels/SuperAdmin/CustomerSatisfactionSurvey/CustomerSatisfactionSurvey';
import SAPreventiveMaintainanceChart from './Components/Panels/SuperAdmin/PreventiveMaintainanceChart/PreventiveMaintainanceChart';
import SAPreventiveMaintainance from './Components/Panels/SuperAdmin/PreventiveMaintainanceGroup/PreventiveMaintainance';
import SAProducts from './Components/Panels/SuperAdmin/Products/Product(HVACdevices)';
import SAResourceManagement from './Components/Panels/SuperAdmin/Resources/ResourceManagement';
import SAServiceAssignment from './Components/Panels/SuperAdmin/ServiceAssignment/ServiceAssignment';
import SAServiceCompletionForm from './Components/Panels/SuperAdmin/ServiceCompletionForm/ServiceCompletionForm';
import SAServiceItemComponents from './Components/Panels/SuperAdmin/ServiceItemComponents/ServiceItemComponents';
import SANewServiceItem from './Components/Panels/SuperAdmin/ServiceItems/NewServiceItem';
import SAServicePool from './Components/Panels/SuperAdmin/ServicePool/ServicePool';
import SAUserManagement from './Components/Panels/SuperAdmin/Users/UserManagement';

// ----------------- SERVICE MANAGER PANEL -----------------
import SMCompanyInformation from './Components/Panels/ServiceManager/Company/CompanyInformation';
import SMComponent from './Components/Panels/ServiceManager/Components/Component';
import SMNewCustomer from './Components/Panels/ServiceManager/Customer/NewCustomer';
import SMCustomerComplaints from './Components/Panels/ServiceManager/CustomerComplaints/CustomerComplaints';
import SMCustomerDelegates from './Components/Panels/ServiceManager/CustomerDelegates/CustomerDelegates';
import SMCustomerSatisfactionSurvey from './Components/Panels/ServiceManager/CustomerSatisfactionSurvey/CustomerSatisfactionSurvey';
import SMPreventiveMaintainanceChart from './Components/Panels/ServiceManager/PreventiveMaintainanceChart/PreventiveMaintainanceChart';
import SMPreventiveMaintainance from './Components/Panels/ServiceManager/PreventiveMaintainanceGroup/PreventiveMaintainance';
import SMProducts from './Components/Panels/ServiceManager/Products/Product(HVACdevices)';
import SMResourceManagement from './Components/Panels/ServiceManager/Resources/ResourceManagement';
import SMServiceAssignment from './Components/Panels/ServiceManager/ServiceAssignment/ServiceAssignment';
import SMServiceCompletionForm from './Components/Panels/ServiceManager/ServiceCompletionForm/ServiceCompletionForm';
import SMServiceItemComponents from './Components/Panels/ServiceManager/ServiceItemComponents/ServiceItemComponents';
import SMNewServiceItem from './Components/Panels/ServiceManager/ServiceItems/NewServiceItem';
import SMServicePool from './Components/Panels/ServiceManager/ServicePool/ServicePool';
import SMUserManagement from './Components/Panels/ServiceManager/Users/UserManagement';

const Home = () => <h1>Welcome to the Dashboard</h1>;

function App() {
  return (
    
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Admin Routes */}
          <Route path="/admin/company-information" element={<CompanyInformation />} />
          <Route path="/admin/component" element={<Component />} />
          <Route path="/admin/new-customer" element={<NewCustomer />} />
          <Route path="/admin/customer-complaints" element={<CustomerComplaints />} />
          <Route path="/admin/customer-delegates" element={<CustomerDelegates />} />
          <Route path="/admin/customer-satisfaction-survey" element={<CustomerSatisfactionSurvey />} />
          <Route path="/admin/preventive-maintainance-chart" element={<PreventiveMaintainanceChart />} />
          <Route path="/admin/preventive-maintainance" element={<PreventiveMaintainance />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/resource-management" element={<ResourceManagement />} />
          <Route path="/admin/service-assignment" element={<ServiceAssignment />} />
          <Route path="/admin/service-completion-form" element={<ServiceCompletionForm />} />
          <Route path="/admin/service-item-components" element={<ServiceItemComponents />} />
          <Route path="/admin/service-item" element={<ServiceItem />} />
          <Route path="/admin/service-pool" element={<ServicePool />} />
          <Route path="/admin/user-management" element={<UserManagement />} />

          {/* Super Admin Routes */}
          <Route path="/superadmin/company-information" element={<SACompanyInformation />} />
          <Route path="/superadmin/component" element={<SAComponent />} />
          <Route path="/superadmin/new-customer" element={<SANewCustomer />} />
          <Route path="/superadmin/customer-complaints" element={<SACustomerComplaints />} />
          <Route path="/superadmin/customer-delegates" element={<SACustomerDelegates />} />
          <Route path="/superadmin/customer-satisfaction-survey" element={<SACustomerSatisfactionSurvey />} />
          <Route path="/superadmin/preventive-maintainance-chart" element={<SAPreventiveMaintainanceChart />} />
          <Route path="/superadmin/preventive-maintainance" element={<SAPreventiveMaintainance />} />
          <Route path="/superadmin/products" element={<SAProducts />} />
          <Route path="/superadmin/resource-management" element={<SAResourceManagement />} />
          <Route path="/superadmin/service-assignment" element={<SAServiceAssignment />} />
          <Route path="/superadmin/service-completion-form" element={<SAServiceCompletionForm />} />
          <Route path="/superadmin/service-item-components" element={<SAServiceItemComponents />} />
          <Route path="/superadmin/new-service-item" element={<SANewServiceItem />} />
          <Route path="/superadmin/service-pool" element={<SAServicePool />} />
          <Route path="/superadmin/user-management" element={<SAUserManagement />} />

          {/* Service Manager Routes */}
          <Route path="/servicemanager/company-information" element={<SMCompanyInformation />} />
          <Route path="/servicemanager/component" element={<SMComponent />} />
          <Route path="/servicemanager/new-customer" element={<SMNewCustomer />} />
          <Route path="/servicemanager/customer-complaints" element={<SMCustomerComplaints />} />
          <Route path="/servicemanager/customer-delegates" element={<SMCustomerDelegates />} />
          <Route path="/servicemanager/customer-satisfaction-survey" element={<SMCustomerSatisfactionSurvey />} />
          <Route path="/servicemanager/preventive-maintainance-chart" element={<SMPreventiveMaintainanceChart />} />
          <Route path="/servicemanager/preventive-maintainance" element={<SMPreventiveMaintainance />} />
          <Route path="/servicemanager/products" element={<SMProducts />} />
          <Route path="/servicemanager/resource-management" element={<SMResourceManagement />} />
          <Route path="/servicemanager/service-assignment" element={<SMServiceAssignment />} />
          <Route path="/servicemanager/service-completion-form" element={<SMServiceCompletionForm />} />
          <Route path="/servicemanager/service-item-components" element={<SMServiceItemComponents />} />
          <Route path="/servicemanager/new-service-item" element={<SMNewServiceItem />} />
          <Route path="/servicemanager/service-pool" element={<SMServicePool />} />
          <Route path="/servicemanager/user-management" element={<SMUserManagement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
