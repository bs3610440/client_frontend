import React, { useState } from 'react';
import { useFormik } from 'formik';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { validationSignSchema } from '../Validation/AllValidation.jsx';
import { LocalUrl } from '../GlobalUrl';
import { showErrorToast, showSuccessToast } from '../Notification/ToastNofication';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

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
          showSuccessToast(response?.data?.msg || 'User Created');
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

  // ✅ FIXED GOOGLE LOGIN FUNCTION
  const handlegoglesignup = () => {
    window.location.href = "http://localhost:8080/auth/google";
  };

  const formFields = [
    { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Enter your name' },
    { id: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
    {
      id: 'gender',
      label: 'Gender',
      type: 'select',
      options: [
        { value: '', label: 'Select Gender' },
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
      ],
    },
    {
      id: 'password',
      label: 'Password',
      type: showPassword ? 'text' : 'password',
      placeholder: 'Enter password',
      showToggle: true,
    },
    {
      id: 'confirmpassword',
      label: 'Confirm Password',
      type: showConfirmPassword ? 'text' : 'password',
      placeholder: 'Confirm password',
      showToggle: true,
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] text-white p-4">
      <div className="w-full max-w-md bg-[#0f172a] p-8 rounded-2xl">

        <h2 className="text-2xl font-bold text-center mb-6">
          Create Account
        </h2>

        <AnimatePresence>
          {submitError && (
            <motion.div className="mb-4 text-red-400 text-center">
              {submitError}
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={formik.handleSubmit} className="space-y-4">

          {formFields.map((field) => (
            <div key={field.id}>
              <label className="block mb-1">{field.label}</label>

              {field.type === 'select' ? (
                <select
                  name={field.id}
                  value={formik.values[field.id] || ""}
                  onChange={formik.handleChange}
                  className="w-full p-3 rounded bg-gray-800"
                >
                  {field.options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              ) : (
                <div>
                  <input
                    type={field.type}
                    name={field.id}
                    placeholder={field.placeholder}
                    value={formik.values[field.id] || ""}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full p-3 rounded bg-gray-800 placeholder-gray-400"
                  />

                  {field.showToggle && (
                    <button
                      type="button"
                      onClick={() =>
                        field.id === 'password'
                          ? setShowPassword(!showPassword)
                          : setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="text-sm text-blue-400 mt-1"
                    >
                      Show / Hide
                    </button>
                  )}
                </div>
              )}

              {formik.touched[field.id] && formik.errors[field.id] && (
                <p className="text-red-400 text-sm">
                  {formik.errors[field.id]}
                </p>
              )}
            </div>
          ))}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-red-600 p-3 rounded"
          >
            {isSubmitting ? "Creating..." : "Sign Up"}
          </button>

          <button
            type="button"
            onClick={handlegoglesignup}
            className="w-full bg-white text-black p-3 rounded mt-3"
          >
            Continue with Google
          </button>

          <p className="text-center mt-4">
            Already have account?{" "}
            <Link to="/login" className="text-blue-400">
              Login
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
};

export default Signup;