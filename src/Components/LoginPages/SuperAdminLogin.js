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

// const SuperAdminLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (email === "superadmin@gmail.com" && password === "superadmin@123") {
//       setSuccess("Super Admin login successful!");
//       setError("");
//     } else {
//       setError("Invalid email or password");
//       setSuccess("");
//     }
//   };

//   return (
//     <LoginCard
//       title="Super Admin Login"
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

// export default SuperAdminLogin;
















// SuperAdminLogin.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginCard from "./LoginCard";

const SuperAdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "superadmin@gmail.com" && password === "superadmin@123") {
      localStorage.setItem("userRole", "superadmin");
      navigate("/superadmin/company-information");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <LoginCard
      title="Super Admin Login"
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

export default SuperAdminLogin;