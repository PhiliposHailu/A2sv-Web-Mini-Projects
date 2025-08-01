"use client";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function OtpVerification() {
  const [otpValues, setOtpValues] = useState(["", "", "", ""]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (index: number, value: string) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otpValues];
      newOtp[index] = value;
      setOtpValues(newOtp);

      if (value && index < 3) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleResend = async () => {
    setMessage("Resending code...");
    setTimeLeft(30);
    try {
      const res = await fetch("https://akil-backend.onrender.com/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("✅ Code resent to your email.");
      } else {
        setMessage(`❌ ${data.message || "Failed to resend code."}`);
      }
    } catch (error) {
      setMessage("❌ Something went wrong.");
      console.error("Verification error:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const otp = otpValues.join("");
    if (otp.length < 4) return;

    setLoading(true);
    console.log("Sending:", { email, OTP: otp });
    try {
      const res = await fetch(
        "https://akil-backend.onrender.com/verify-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email,
            OTP: otp,
          }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Email verified successfully! Redirecting...");
        setTimeout(() => router.push("/login"), 2000);
      } else {
        setMessage(`❌ ${data.message || "Verification failed."}`);
      }
    } catch {
      setMessage("❌ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-12 p-4 space-y-6"
    >
      <h2 className="text-2xl font-bold text-center">Verify Email</h2>
      <p className="text-center text-gray-500">
        We've sent a verification code to the email address you provided. To
        complete the verification process, please enter the code here.
      </p>

      <div className="flex justify-center gap-3">
        {otpValues.map((digit, i) => (
          <input
            key={i}
            type="text"
            inputMode="numeric"
            maxLength={1}
            placeholder="0"
            className="w-12 h-12 text-center border border-gray-300 rounded text-xl"
            value={digit}
            onChange={(e) => handleChange(i, e.target.value)}
            ref={(el) => {
              if (el) inputRefs.current[i] = el;
            }}
          />
        ))}
      </div>

      <div className="text-center text-sm text-gray-600">
        You can request to{" "}
        <button
          type="button"
          onClick={handleResend}
          disabled={timeLeft !== 0}
          className={`font-semibold ${
            timeLeft === 0
              ? "text-indigo-700 hover:underline"
              : "text-indigo-700 cursor-not-allowed"
          }`}
        >
          Resend code
        </button>{" "}
        in{" "}
        <div className="font-mono">{`00:${String(timeLeft).padStart(
          2,
          "0"
        )}`}</div>
      </div>

      <button
        type="submit"
        disabled={otpValues.some((v) => v === "") || loading}
        className={`w-full py-2 rounded text-white font-semibold ${
          otpValues.every((v) => v) && !loading
            ? "bg-indigo-900 hover:bg-indigo-900"
            : "bg-indigo-900 opacity-50 rounded-full cursor-not-allowed"
        }`}
      >
        {loading ? "Verifying..." : "Continue"}
      </button>

      {message && (
        <p className="text-center text-sm text-gray-700 mt-2">{message}</p>
      )}
    </form>
  );
}
