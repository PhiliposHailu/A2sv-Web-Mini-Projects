"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("https://akil-backend.onrender.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.message || "Login failed");
      }

      localStorage.setItem("accessToken", result.data.accessToken);
      localStorage.setItem("refreshToken", result.data.refreshToken);
      localStorage.setItem("userName", result.data.name);
      localStorage.setItem("userEmail", result.data.email);

      const redirectPath = localStorage.getItem("redirectAfterLogin");
      router.push(redirectPath || "/"); // Go to saved path or home
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white p-8 rounded-lg shadow"
      >
        <h2 className="text-2xl font-bold mb-2 text-center">Welcome Back,</h2>

        <div className="flex justify-between items-center my-4">
          <div className="border-t border-gray-300 w-1/3"></div>
          <div className="border-t border-gray-300 w-1/3"></div>
        </div>

        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email address"
          className="w-full px-4 py-2 border border-gray-300 rounded mb-4"
          required
        />

        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className="w-full px-4 py-2 border border-gray-300 rounded mb-6"
          required
        />

        <button
          type="submit"
          className="w-full bg-indigo-900 text-white py-2 rounded-full hover:bg-indigo-700transition"
        >
          Login
        </button>

        <p className="text-sm text-center mt-6">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="text-indigo-900 hover:underline font-medium"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}
