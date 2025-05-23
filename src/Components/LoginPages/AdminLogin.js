// import React, { useState } from "react";
// import {
//   Form,
//   Button,
//   Container,
//   Row,
//   Col,
//   Card,
//   Alert,
//   InputGroup,
// } from "react-bootstrap";
// import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
// import logo from "../Images/hvac-company-flame.jpg";
// import LoginCard from "./LoginCard"

// const AdminLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (email === "admin@gmail.com" && password === "admin@123") {
//       setSuccess("Admin login successful!");
//       setError("");
//     } else {
//       setError("Invalid email or password");
//       setSuccess("");
//     }
//   };

//   return (
//     <LoginCard
//       title="Admin Login"
//       email={email}
//       password={password}
//       showPassword={showPassword}
//       setEmail={setEmail}
//       setPassword={setPassword}
//       setShowPassword={setShowPassword}
//       handleSubmit={handleSubmit}
//       error={error}
//       success={success}
//     />
//   );
// };

// export default AdminLogin;









// UniversalLogin.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginCard from "./LoginCard";

const UniversalLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const credentialsMap = {
    "admin@gmail.com": {
      password: "admin@123",
      role: "admin",
      route: "/admin/user-management",
    },
    "superadmin@gmail.com": {
      password: "superadmin@123",
      role: "superadmin",
      route: "/superadmin/company-information",
    },
    "servicemanager@gmail.com": {
      password: "service@123",
      role: "servicemanager",
      route: "/servicemanager/new-customer",
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = credentialsMap[email];

    if (user && user.password === password) {
      localStorage.setItem("userRole", user.role);
      navigate(user.route);
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <LoginCard
      title="Login"
      email={email}
      password={password}
      showPassword={showPassword}
      setEmail={setEmail}
      setPassword={setPassword}
      setShowPassword={setShowPassword}
      handleSubmit={handleSubmit}
      error={error}
    />
  );
};

export default UniversalLogin;
