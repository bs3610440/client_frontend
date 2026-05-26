import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Components/Auth/Signup.jsx";
import Home from "./Components/Home/Home.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Login from "./Components/Auth/Login.jsx";
import Dashboard from "./Components/Dashboard/Homedashboard.jsx";
 import Footer from "./Components/Footer/Footer.jsx";
import OtpVerification from "./Components/OtpVerification/Otp.jsx";
import { CartProvider } from "./Pages/CartContext.jsx"
import {AuthProvider} from "./Components/context/AllContext.jsx"

import Newarrival from "./Components/Newarrival.jsx";
import Collection from "./Components/Collection.jsx";
import Trending from "./Components/Trending.jsx";
import Sale from "./Components/Sale.jsx";


import { ThemeProvider } from "./Components/context/Themecontext.jsx"
import SearchResults from "./Components/Search/SearchBar.jsx";
import Cart from "./Pages/Cart.jsx";
import Wishlist from "./Pages/Wishlist.jsx";



export default function App() {
  return (
    <ThemeProvider>
    <AuthProvider>  
    <CartProvider> 
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/otp/user_otp_verification/:id" element={<OtpVerification />} />


          <Route path="/new-arrivals" element={<Newarrival/>} />
           <Route path="/trending" element={<Trending/>} />
          <Route path="/collections" element={<Collection/>} />
          <Route path="/sale" element={<Sale/>} />
           <Route path="/wishlist" element={<Wishlist/>} />
          <Route path="/cart" element={<Cart/>} />
         <Route path="/search" element={<SearchResults />} />



        </Routes>
      <Footer />
    </BrowserRouter>
     </CartProvider>
      </AuthProvider>
        </ThemeProvider>

  );
}