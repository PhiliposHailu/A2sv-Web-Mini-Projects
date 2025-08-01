"use client";

import { FcGoogle } from "react-icons/fc";
import SignUpForm from "../components/SignUpForm";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold text-center mb-6">Sign Up Today!</h1>

        <button className="w-full flex items-center justify-center gap-2 border border-gray-300 text-gray-700 py-2 rounded-full hover:bg-gray-100 transition mb-6">
          <FcGoogle size={20} />
          Sign Up with Google
        </button>

        <div className="flex items-center mb-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-sm text-gray-500">Or Sign Up with Email</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <SignUpForm />

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-indigo-900 font-medium hover:underline">
            Login
          </Link>
        </p>

        <p className="text-xs text-center text-gray-500 mt-4 px-2">
          By clicking "Continue", you acknowledge that you have read and accepted our{" "}
          <span className="font-semibold">Terms of Service</span> and{" "}
          <span className="font-semibold">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
}
