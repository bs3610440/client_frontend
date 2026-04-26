import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-0 pt-0">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            SheSlay 👗
          </h2>
          <p className="text-sm">
            Your go-to fashion destination for trendy and stylish outfits.
            Slay every look with confidence 💖
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/dashboard" className="hover:text-white">Dashboard</Link></li>
            <li><Link to="/login" className="hover:text-white">Login</Link></li>
            <li><Link to="/signup" className="hover:text-white">Signup</Link></li>
          </ul>
        </div>

        {/* CATEGORIES */}
        <div>
          <h3 className="text-white font-semibold mb-3">
            Categories
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Western Wear</li>
            <li>Ethnic Wear</li>
            <li>Summer Collection</li>
            <li>Winter Collection</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="text-white font-semibold mb-3">
            Subscribe
          </h3>
          <p className="text-sm mb-3">
            Get latest fashion updates ✨
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter email"
              className="px-3 py-2 w-full rounded-l-md text-black"
            />
            <button className="bg-indigo-600 px-4 py-2 rounded-r-md text-white hover:bg-indigo-700">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-700 mt-6 py-4 flex flex-col sm:flex-row items-center justify-between max-w-7xl mx-auto px-6">

        <p className="text-sm">
          © {new Date().getFullYear()} SheSlay. All rights reserved.
        </p>

        {/* SOCIAL */}
        <div className="flex space-x-4 mt-3 sm:mt-0">
          <FaInstagram className="hover:text-white cursor-pointer" />
          <FaFacebook className="hover:text-white cursor-pointer" />
          <FaTwitter className="hover:text-white cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}