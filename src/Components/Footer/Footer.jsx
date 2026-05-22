import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent mb-4">
              SheSlay Fashion
            </h3>
            <p className="text-sm">Your one-stop destination for trendy and affordable fashion.</p>
            <div className="flex gap-4 mt-4">
              <span className="text-2xl cursor-pointer hover:text-pink-400 transition">📘</span>
              <span className="text-2xl cursor-pointer hover:text-pink-400 transition">📸</span>
              <span className="text-2xl cursor-pointer hover:text-pink-400 transition">🐦</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-pink-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-pink-400 transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-pink-400 transition">FAQs</a></li>
              <li><a href="#" className="hover:text-pink-400 transition">Size Guide</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Policies</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-pink-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-pink-400 transition">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-pink-400 transition">Return Policy</a></li>
              <li><a href="#" className="hover:text-pink-400 transition">Shipping Info</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">📞 +91 98765 43210</li>
              <li className="flex items-center gap-2">✉️ support@sheslay.com</li>
              <li className="flex items-center gap-2">📍 Mumbai, India</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>© 2026 SheSlay Fashion. All rights reserved. | Designed with 💕 for fashion lovers</p>
        </div>
      </div>
    </footer>
  );
}