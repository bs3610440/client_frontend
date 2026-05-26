import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, Heart, User, Search, Sun, Moon,} from "lucide-react";
import { useTheme } from "../context/Themecontext.jsx";
import { useAuth } from "../context/AllContext.jsx";

const navigation = [
  { name: "Home", href: "/" },
  { name: "New Arrivals", href: "/new-arrivals" },
  { name: "Trending", href: "/trending" },
  { name: "Collections", href: "/collections" },
  { name: "Sale", href: "/sale" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { login, setLogIn, Profile, setProfile } = useAuth();

  // SEARCH STATES
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const searchRef = useRef(null); // ✅ For detecting outside clicks

  // PRODUCTS
  const products = [
    "Kurti",
    "Hoodie",
    "Jeans",
    "Top",
    "Shoes",
    "Watch",
    "Bag",
    "Tshirt",
    "Saree",
    "Lehenga",
    "Jacket",
    "Sweater",
  ];

  const { darkMode, toggleDarkMode } = useTheme();

  // ✅ Filter suggestions based on search
  const getSuggestions = () => {
    if (!search) return [];
    return products.filter(item =>
      item.toLowerCase().includes(search.toLowerCase())
    );
  };

  // ✅ Handle click outside - close search and reset
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
        setSearch("");
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Logout function
  const handleLogout = () => {
    setLogIn(false);
    setProfile({});
    localStorage.removeItem('userToken');
    localStorage.removeItem('userId');
    window.location.href = '/';
  };

  const suggestions = getSuggestions();

  return (
    <>
      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          darkMode
            ? "bg-gray-900 shadow-lg"
            : "bg-white/95 backdrop-blur-md shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="flex-shrink-0"
            >
              <Link to="/" className="flex items-center gap-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full flex items-center justify-center group">
                  <span className="text-white text-lg sm:text-xl group-hover:rotate-12 transition-transform">
                    🦋
                  </span>
                </div>

                <h1 className="text-xl sm:text-2xl font-extrabold italic tracking-wide">
                  <span className="bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
                    She
                  </span>

                  <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
                    Slay
                  </span>
                </h1>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navigation.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    to={item.href}
                    className={`px-3 lg:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      darkMode
                        ? "text-gray-300 hover:text-white hover:bg-gray-800"
                        : "text-gray-700 hover:text-pink-600 hover:bg-pink-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Right Side Icons & Auth */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* SEARCH SECTION - FIXED */}
              <div className="relative" ref={searchRef}>
                <button
                  onClick={() => {
                    setSearchOpen(!searchOpen);
                    if (!searchOpen) {
                      setTimeout(() => {
                        const input = document.querySelector('.search-input');
                        if (input) input.focus();
                      }, 100);
                    }
                  }}
                  className={`p-2 rounded-full transition-colors ${
                    darkMode ? "hover:bg-gray-800" : "hover:bg-pink-50"
                  }`}
                >
                  <Search
                    className={`w-5 h-5 ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    } hover:text-pink-600`}
                  />
                </button>

                {searchOpen && (
                  <div className="absolute right-0 top-12 w-80 z-50">
                    {/* Input - Placeholder gayab on click */}
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      onFocus={(e) => {
                        e.target.placeholder = "";
                      }}
                      onBlur={(e) => {
                        if (!search) {
                          e.target.placeholder = "Search products...";
                        }
                      }}
                      className={`search-input w-full px-4 py-2 rounded-xl border outline-none ${
                        darkMode
                          ? "bg-gray-800 text-white border-gray-700"
                          : "bg-white text-black border-gray-300"
                      }`}
                      autoFocus
                    />

                    {/* Suggestions */}
                    {search && suggestions.length > 0 && (
                      <div
                        className={`mt-2 rounded-xl shadow-lg overflow-hidden ${
                          darkMode ? "bg-gray-800" : "bg-white"
                        }`}
                      >
                        {suggestions.map((item, index) => (
                          <div
                            key={index}
                            className={`px-4 py-2 cursor-pointer transition flex items-center gap-2 ${
                              darkMode
                                ? "hover:bg-gray-700 text-white"
                                : "hover:bg-pink-50 text-black"
                            }`}
                            onClick={() => {
                              setSearch(item);
                              setSearchOpen(false);
                              setSearch("");
                            }}
                          >
                            <Search className="w-4 h-4 text-gray-400" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* No Results */}
                    {search && suggestions.length === 0 && (
                      <div
                        className={`mt-2 rounded-xl shadow-lg p-4 text-center ${
                          darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
                        }`}
                      >
                        <p className="text-sm">❌ No product found for "{search}"</p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Heart Icon */}
              <Link to="/wishlist">
                <button
                  className={`p-2 rounded-full transition-colors ${
                    darkMode ? "hover:bg-gray-800" : "hover:bg-pink-50"
                  }`}
                >
                  <Heart
                    className={`w-5 h-5 ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    } hover:text-pink-600`}
                  />
                </button>
              </Link>

              {/* Cart Icon */}
              <Link to="/cart">
                <button
                  className={`relative p-2 rounded-full transition-colors ${
                    darkMode ? "hover:bg-gray-800" : "hover:bg-pink-50"
                  }`}
                >
                  <ShoppingBag
                    className={`w-5 h-5 ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    } hover:text-pink-600`}
                  />

                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    3
                  </span>
                </button>
              </Link>

              {/* Dark/Light Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-colors ${
                  darkMode ? "hover:bg-gray-800" : "hover:bg-pink-50"
                }`}
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600" />
                )}
              </button>

              {/* Auth Buttons */}
              {!login ? (
                <div className="hidden sm:flex gap-2">
                  <Link
                    to="/login"
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-all bg-gradient-to-r from-pink-500 to-pink-600 text-white hover:shadow-lg"
                  >
                    Login
                  </Link>

                  <Link
                    to="/signup"
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-all border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white"
                  >
                    Sign Up
                  </Link>
                </div>
              ) : (
                <div className="hidden sm:flex items-center gap-2">
                  <div className="relative group">
                    <button
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-pink-500 to-orange-500 text-white`}
                    >
                      <User className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {Profile?.name?.split(' ')[0] || 'Profile'}
                      </span>
                    </button>
                    {/* Dropdown Menu */}
                    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <Link
                        to="/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-pink-50 dark:hover:bg-gray-700 rounded-t-lg"
                        onClick={() => setIsOpen(false)}
                      >
                        My Profile
                      </Link>
                      <Link
                        to="/orders"
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-pink-50 dark:hover:bg-gray-700"
                        onClick={() => setIsOpen(false)}
                      >
                        My Orders
                      </Link>
                      <hr className="my-1 border-gray-200 dark:border-gray-700" />
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-pink-50 dark:hover:bg-gray-700 rounded-b-lg"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-lg transition-colors"
              >
                {isOpen ? (
                  <X
                    className={`w-6 h-6 ${
                      darkMode ? "text-white" : "text-gray-700"
                    }`}
                  />
                ) : (
                  <Menu
                    className={`w-6 h-6 ${
                      darkMode ? "text-white" : "text-gray-700"
                    }`}
                  />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden ${
                darkMode ? "bg-gray-900" : "bg-white"
              } border-t ${
                darkMode ? "border-gray-800" : "border-gray-100"
              }`}
            >
              <div className="px-4 py-4 space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-3 py-2 rounded-lg text-base font-medium transition ${
                      darkMode
                        ? "text-gray-300 hover:bg-gray-800 hover:text-white"
                        : "text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                <div className={`h-px my-2 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`} />

                {!login ? (
                  <div className="space-y-2 pt-2">
                    <Link
                      to="/login"
                      className="block bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-2 rounded-lg text-center font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="block border-2 border-orange-500 text-orange-600 px-4 py-2 rounded-lg text-center font-medium hover:bg-orange-500 hover:text-white transition"
                      onClick={() => setIsOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-3 p-2 bg-pink-50 dark:bg-gray-800 rounded-lg">
                      <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className={`font-semibold ${darkMode ? "text-white" : "text-gray-800"}`}>
                          {Profile?.name || 'User'}
                        </p>
                        <p className="text-xs text-gray-500">{Profile?.email || ''}</p>
                      </div>
                    </div>
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 rounded-lg text-center font-medium bg-pink-50 text-pink-600"
                      onClick={() => setIsOpen(false)}
                    >
                      My Profile
                    </Link>
                    <Link
                      to="/orders"
                      className="block px-4 py-2 rounded-lg text-center font-medium text-gray-700"
                      onClick={() => setIsOpen(false)}
                    >
                      My Orders
                    </Link>
                    <button
                      onClick={() => { handleLogout(); setIsOpen(false); }}
                      className="block w-full px-4 py-2 rounded-lg text-center font-medium text-red-600 border border-red-200"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}