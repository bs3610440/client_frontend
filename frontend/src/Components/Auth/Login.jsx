import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import { validationLoginSchema } from "../Validation/AllValidation";
import {showErrorToast,showSuccessToast,} from "../Notification/ToastNofication";
import { useAuth } from "../context/AllContext"; // ✅ FIX

const localUrl = "http://localhost:8080";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { setLogIn ,setProfile } = useAuth(); // ✅ FIX
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
        const response = await axios.post(`${localUrl}/user_login`,values );
        if (response.status == 200) {
          showSuccessToast(response?.data?.msg || 'Sucessfully log In')
          localStorage.setItem('userId', response?.data?.id)
          localStorage.setItem('userToken', response?.data?.token)
          setProfile({name:response?.data?.name,email:response?.data?.email,profileImg:response?.data?.img})
          setLogIn(true)
          navigate(`/`)
        }
      }

      catch (error) {
        if (error?.response?.data?.msg == 'Pls verify otp') {
          console.log(error.response.data.id)
          localStorage.setItem('email', error?.response?.data?.email)
          navigate(`/otp/user_otp_verification/${error?.response?.data?.id}`)
          showSuccessToast(error.response?.data?.msg || "server error")
        }
        else if (error?.response?.data?.msg == 'User not found!') {

          navigate(`/create-account`)
          showErrorToast(error.response?.data?.msg || "server error")
        }
        else {
          showErrorToast(error?.response?.data?.msg || 'Server error')
        }
      }
      finally {
        setIsSubmitting(false);
      }
    }
  });


  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] text-white px-4">
      <div className="w-full max-w-md bg-[#0f172a] p-8 rounded-2xl">

        <h2 className="text-3xl font-bold text-center mb-6">
          Login
        </h2>

        <form onSubmit={formik.handleSubmit} className="space-y-5">

          {/* EMAIL */}
          <div>
            <label className="block text-sm mb-1">Email</label>

            <input
              type="email"
              {...formik.getFieldProps("email")}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg text-white bg-gray-800"
            />

            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm">
                {formik.errors.email}
              </p>
            )}
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block text-sm mb-1">Password</label>

            <input
              type={showPassword ? "text" : "password"}
              {...formik.getFieldProps("password")}
              placeholder="Enter password"
              className="w-full px-4 py-2 border rounded-lg text-white bg-gray-800"
            />

            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm">
                {formik.errors.password}
              </p>
            )}
          </div>

          {/* OPTIONS */}
          <div className="flex justify-between text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                onChange={() => setShowPassword(!showPassword)}
              />
              Show password
            </label>

            <Link
              to="/forgot-password"
              className="text-indigo-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-indigo-600 py-2 rounded-lg hover:bg-indigo-700"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>

        </form>

        <p className="text-center mt-5 text-sm">
          Don’t have an account?
          <Link to="/signup" className="text-indigo-500 ml-1">
            Sign up
          </Link>
        </p>

      </div>
    </div>
  );
}