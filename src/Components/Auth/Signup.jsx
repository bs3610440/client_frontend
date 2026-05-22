import React, { useState } from 'react';
import { useFormik } from 'formik';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { validationSignSchema } from '../Validation/AllValidation.jsx';
import { LocalUrl } from '../GlobalUrl';
import { showErrorToast, showSuccessToast } from '../Notification/ToastNofication';
import { 
  User, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  UserCheck, 
  TrendingUp,
  Shield,
  Sparkles,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

// Custom Google Icon Component
const GoogleIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [focusedField, setFocusedField] = useState(null);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      gender: '',
      password: '',
      confirmpassword: '',
    },
    validationSchema: validationSignSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      setSubmitError('');

      try {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("email", values.email);
        formData.append("password", values.password);
        formData.append("gender", values.gender);

        const response = await axios.post(`${LocalUrl}create_user`, formData);

        if (response.status === 200 || response.status === 201) {
          showSuccessToast(response?.data?.msg || 'User Created Successfully!');
          localStorage.setItem('email', response?.data?.userDb?.email);
          navigate(`/otp/user_otp_verification/${response.data.userDb._id}`);
        }
      } catch (error) {
        if (error?.response?.data?.msg === 'user already verified pls LogIn') {
          navigate('/login');
          showSuccessToast(error?.response?.data?.msg);
        } else {
          showErrorToast(error?.response?.data?.msg || 'Server error');
        }
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  const handlegoglesignup = () => {
    window.location.href = "http://localhost:8080/auth/google";
  };

  const formFields = [
    { id: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe', icon: User },
    { id: 'email', label: 'Email Address', type: 'email', placeholder: 'hello@example.com', icon: Mail },
    {
      id: 'gender',
      label: 'Gender',
      type: 'select',
      icon: UserCheck,
      options: [
        { value: '', label: 'Select Gender' },
        { value: 'male', label: '👨 Male' },
        { value: 'female', label: '👩 Female' },
        { value: 'other', label: '🌈 Other' },
      ],
    },
    {
      id: 'password',
      label: 'Password',
      type: showPassword ? 'text' : 'password',
      placeholder: 'Create a strong password',
      icon: Lock,
      showToggle: true,
    },
    {
      id: 'confirmpassword',
      label: 'Confirm Password',
      type: showConfirmPassword ? 'text' : 'password',
      placeholder: 'Confirm your password',
      icon: Shield,
      showToggle: true,
    },
  ];

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
              <Sparkles className="w-10 h-10 text-white" />
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
            <p className="text-gray-500 text-sm mt-2">Join our fashion community</p>
          </div>

          {/* Form Body */}
          <div className="px-8 pb-8">
            <AnimatePresence>
              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-center text-sm"
                >
                  {submitError}
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={formik.handleSubmit} className="space-y-5">
              {formFields.map((field, index) => (
                <motion.div
                  key={field.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-1"
                >
                  <label className="block text-sm font-semibold text-gray-700">
                    {field.label}
                  </label>

                  {field.type === 'select' ? (
                    <div className="relative group">
                      <select
                        name={field.id}
                        value={formik.values[field.id] || ""}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full pl-11 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:border-pink-500 focus:bg-white transition-all duration-200 appearance-none cursor-pointer"
                      >
                        {field.options.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                      <field.icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-pink-500 transition-colors" />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">▼</div>
                    </div>
                  ) : (
                    <div className="relative group">
                      <field.icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-pink-500 transition-colors" />
                      <input
                        type={field.type}
                        name={field.id}
                        placeholder={field.placeholder}
                        value={formik.values[field.id] || ""}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        onFocus={() => setFocusedField(field.id)}
                        className={`w-full pl-11 pr-12 py-3 bg-gray-50 border-2 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:bg-white transition-all duration-200
                          ${focusedField === field.id 
                            ? 'border-pink-500 shadow-md' 
                            : 'border-gray-200 hover:border-gray-300'
                          }`}
                      />
                      
                      {field.showToggle && (
                        <button
                          type="button"
                          onClick={() =>
                            field.id === 'password'
                              ? setShowPassword(!showPassword)
                              : setShowConfirmPassword(!showConfirmPassword)
                          }
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-pink-500 transition-colors"
                        >
                          {field.id === 'password' ? (
                            showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />
                          ) : (
                            showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />
                          )}
                        </button>
                      )}
                    </div>
                  )}

                  {formik.touched[field.id] && formik.errors[field.id] && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-pink-500 text-xs mt-1 flex items-center gap-1"
                    >
                      <span className="text-xs">⚠️</span> {formik.errors[field.id]}
                    </motion.p>
                  )}
                </motion.div>
              ))}

              {/* Password Strength Indicator */}
              {formik.values.password && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="space-y-2 mt-2"
                >
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((level) => (
                      <div
                        key={level}
                        className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                          formik.values.password.length >= level * 2
                            ? formik.values.password.length >= 8
                              ? 'bg-gradient-to-r from-pink-500 to-orange-500'
                              : 'bg-yellow-400'
                            : 'bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-500">
                    {formik.values.password.length < 6
                      ? '🔒 Weak - Use at least 6 characters'
                      : formik.values.password.length < 10
                      ? '👍 Medium - Getting stronger!'
                      : '💪 Strong - Great password!'}
                  </p>
                </motion.div>
              )}

              {/* Submit Button */}
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
                    Creating Account...
                  </>
                ) : (
                  <>
                    Sign Up
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

              {/* Google Sign Up Button */}
              <motion.button
                type="button"
                onClick={handlegoglesignup}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white border-2 border-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 hover:border-pink-200 transition-all flex items-center justify-center gap-3 group"
              >
                <GoogleIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Continue with Google
              </motion.button>

              {/* Terms & Conditions */}
              <p className="text-center text-xs text-gray-500 mt-6">
                By signing up, you agree to our 
                <Link to="/terms" className="text-pink-600 hover:underline mx-1">Terms</Link>
                and 
                <Link to="/privacy" className="text-pink-600 hover:underline ml-1">Privacy Policy</Link>
              </p>

              {/* Login Link */}
              <p className="text-center text-gray-600 text-sm mt-4">
                Already have an account?{" "}
                <Link to="/login" className="text-pink-600 hover:text-pink-700 font-semibold transition hover:underline">
                  Login here
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
            <CheckCircle className="w-3 h-3 text-green-500" /> Secure
          </span>
          <span className="flex items-center gap-1">
            <Shield className="w-3 h-3 text-blue-500" /> Privacy Protected
          </span>
          <span className="flex items-center gap-1">
            <TrendingUp className="w-3 h-3 text-purple-500" /> 24/7 Support
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Signup;