import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {
  showErrorToast,
  showSuccessToast,
} from "../Notification/ToastNofication";

const LocalUrl = "http://localhost:8080";

export default function OtpVerification() {
  const [code, setCode] = useState(new Array(4).fill(""));
  const [isLoading, setIsLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [canResend, setCanResend] = useState(false);

  const { id } = useParams(); // ✅ FIXED
  const navigate = useNavigate();
  const inputRefs = useRef([]);

  const email = localStorage.getItem("email") || "example@gmail.com";

  useEffect(() => {
  }, [id]);

  // ⏱️ Timer
  useEffect(() => {
    if (timeLeft <= 0) {
      setCanResend(true);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  // Focus
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  // Change
  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Paste
  const handlePaste = (e) => {
    e.preventDefault();
    const data = e.clipboardData.getData("text").slice(0, 4);

    if (!/^\d+$/.test(data)) return;

    const pasteCode = data.split("");
    setCode(pasteCode);
  };

  // 🔁 Resend OTP
  const handleResendOTP = async () => {
    if (!canResend) {
      showErrorToast("Wait before resending OTP");
      return;
    }

    if (!id) {
      showErrorToast("User ID not found");
      return;
    }

    setIsLoading(true);

    try {
      const res = await axios.post(
        `${LocalUrl}/resendOtp/${id}`,
        {}
      );

      showSuccessToast(res.data.msg);

      setCode(new Array(4).fill(""));
      setTimeLeft(30);
      setCanResend(false);
    } catch (err) {
      console.log("ERROR:", err?.response?.data);
      showErrorToast(
        err?.response?.data?.msg || "Failed to resend OTP"
      );
    } finally {
      setIsLoading(false);
    }
  };

  // ✅ Verify OTP
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userOtp = code.join("");

    if (userOtp.length < 4) {
      showErrorToast("Enter complete OTP");
      return;
    }

    if (!id) {
      showErrorToast("User ID missing");
      return;
    }

    setIsLoading(true);

    try {
      const res = await axios.post(
        `${LocalUrl}/user_otp_verification/${id}`,
        { otp: userOtp }
      );

      showSuccessToast(res.data.msg);
      navigate("/login");
    } catch (err) {
      console.log("VERIFY ERROR:", err?.response?.data);
      showErrorToast(
        err?.response?.data?.msg || "Verification failed"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">
          OTP Verification
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Enter the code sent to {email}
        </p>

        <form onSubmit={handleSubmit}>
          <div className="flex justify-between mb-6">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) =>
                  handleChange(e.target.value, index)
                }
                onKeyDown={(e) =>
                  handleKeyDown(e, index)
                }
                className="w-14 h-14 text-center border rounded-lg text-xl"
              />
            ))}
          </div>

          <button className="w-full bg-purple-600 text-white py-2 rounded-lg">
            {isLoading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>

        <div className="text-center mt-4">
          {canResend ? (
            <button onClick={handleResendOTP}>
              Resend OTP
            </button>
          ) : (
            <p>Resend in {timeLeft}s</p>
          )}
        </div>
      </div>
    </div>
  );
}