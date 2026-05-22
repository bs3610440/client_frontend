import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import { motion, AnimatePresence } from "framer-motion";
import { validationLoginSchema } from "../Validation/AllValidation";
import { showErrorToast, showSuccessToast } from "../Notification/ToastNofication";
import { useAuth } from "../context/AllContext";
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  LogIn, 
  Sparkles,
  Shield,
  TrendingUp,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const localUrl = "http://localhost:8080";

// Custom Google Icon
const GoogleIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const { setLogIn, setProfile } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationLoginSchema,

    onSubmit: async (values) => {
      setIsSubmitting(true);

      try {
        const response = await axios.post(`${localUrl}/user_login`, values);
        if (response.status == 200) {
          showSuccessToast(response?.data?.msg || 'Successfully logged in');
          localStorage.setItem('userId', response?.data?.id);
          localStorage.setItem('userToken', response?.data?.token);
          setProfile({
            name: response?.data?.name,
            email: response?.data?.email,
            profileImg: response?.data?.img
          });
          setLogIn(true);
          navigate(`/dashboard`);
        }
      } catch (error) {
        if (error?.response?.data?.msg == 'Pls verify otp') {
          localStorage.setItem('email', error?.response?.data?.email);
          navigate(`/otp/user_otp_verification/${error?.response?.data?.id}`);
          showSuccessToast(error.response?.data?.msg || "server error");
        } else if (error?.response?.data?.msg == 'User not found!') {
          navigate(`/create-account`);
          showErrorToast(error.response?.data?.msg || "server error");
        } else {
          showErrorToast(error?.response?.data?.msg || 'Server error');
        }
      } finally {
        setIsSubmitting(false);
      }
    }
  });

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8080/auth/google";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-orange-50 p-4">
      
      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          
          {/* Decorative Top Bar */}
          <div className="h-2 bg-gradient-to-r from-pink-500 via-pink-400 to-orange-500"></div>
          
          {/* Header */}
          <div className="px-8 pt-8 pb-4 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-20 h-20 bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
            >
              <LogIn className="w-10 h-10 text-white" />
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-800">Welcome Back! 👋</h2>
            <p className="text-gray-500 text-sm mt-2">Login to continue shopping</p>
          </div>

          {/* Form Body */}
          <div className="px-8 pb-8">
            <form onSubmit={formik.handleSubmit} className="space-y-5">

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="space-y-1"
              >
                <label className="block text-sm font-semibold text-gray-700">
                  Email Address
                </label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-pink-500 transition-colors" />
                  <input
                    type="email"
                    {...formik.getFieldProps("email")}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="hello@example.com"
                    className={`w-full pl-11 pr-4 py-3 bg-gray-50 border-2 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:bg-white transition-all duration-200
                      ${focusedField === "email" 
                        ? 'border-pink-500 shadow-md' 
                        : 'border-gray-200 hover:border-gray-300'
                      }`}
                  />
                </div>
                {formik.touched.email && formik.errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-pink-500 text-xs mt-1 flex items-center gap-1"
                  >
                    <span>⚠️</span> {formik.errors.email}
                  </motion.p>
                )}
              </motion.div>

              {/* Password Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-1"
              >
                <label className="block text-sm font-semibold text-gray-700">
                  Password
                </label>
                <div className="relative group">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-pink-500 transition-colors" />
                  <input
                    type={showPassword ? "text" : "password"}
                    {...formik.getFieldProps("password")}
                    onFocus={() => setFocusedField("password")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Enter your password"
                    className={`w-full pl-11 pr-12 py-3 bg-gray-50 border-2 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:bg-white transition-all duration-200
                      ${focusedField === "password" 
                        ? 'border-pink-500 shadow-md' 
                        : 'border-gray-200 hover:border-gray-300'
                      }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-pink-500 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {formik.touched.password && formik.errors.password && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-pink-500 text-xs mt-1 flex items-center gap-1"
                  >
                    <span>⚠️</span> {formik.errors.password}
                  </motion.p>
                )}
              </motion.div>

              {/* Options Row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-between text-sm"
              >
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    onChange={() => setShowPassword(!showPassword)}
                    className="w-4 h-4 rounded border-gray-300 text-pink-500 focus:ring-pink-500 cursor-pointer"
                  />
                  <span className="text-gray-600 group-hover:text-gray-800 transition">
                    Show password
                  </span>
                </label>

                <Link
                  to="/forgot-password"
                  className="text-pink-600 hover:text-pink-700 font-semibold transition hover:underline"
                >
                  Forgot Password?
                </Link>
              </motion.div>

              {/* Login Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full bg-gradient-to-r from-pink-600 to-orange-500 text-white py-3.5 rounded-xl font-semibold mt-6 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-pink-200'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Logging in...
                  </>
                ) : (
                  <>
                    Login
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </motion.button>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              {/* Google Login Button */}
              <motion.button
                type="button"
                onClick={handleGoogleLogin}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white border-2 border-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 hover:border-pink-200 transition-all flex items-center justify-center gap-3 group"
              >
                <GoogleIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Continue with Google
              </motion.button>

              {/* Signup Link */}
              <p className="text-center text-gray-600 text-sm mt-6">
                Don't have an account?{" "}
                <Link to="/signup" className="text-pink-600 hover:text-pink-700 font-semibold transition hover:underline">
                  Create Account
                </Link>
              </p>
            </form>
          </div>
        </div>

        {/* Features Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-center text-gray-500 text-xs flex justify-center gap-6"
        >
          <span className="flex items-center gap-1">
            <CheckCircle className="w-3 h-3 text-green-500" /> Secure Login
          </span>
          <span className="flex items-center gap-1">
            <Shield className="w-3 h-3 text-blue-500" /> Data Protected
          </span>
          <span className="flex items-center gap-1">
            <TrendingUp className="w-3 h-3 text-purple-500" /> Fast Support
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}