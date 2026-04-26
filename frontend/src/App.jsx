import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Components/Auth/Signup.jsx";
import Home from "./Components/Home/Home.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Login from "./Components/Auth/Login.jsx";
import Dashboard from "./Components/Dashboard/Homedashboard.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import OtpVerification from "./Components/OtpVerification/Otp.jsx";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/otp/user_otp_verification/:id" element={<OtpVerification />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}