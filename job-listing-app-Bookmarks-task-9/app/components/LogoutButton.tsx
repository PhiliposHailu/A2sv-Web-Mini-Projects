"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LogoutButton() {
  const [show, setShow] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) setShow(true);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setShow(!!localStorage.getItem("userEmail"));
    router.push("/");
  };

  if (!show) return null;

  return (
    <div className="p-5">
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 text-white rounded-2xl hover:bg-red-800 transition-all shadow-md"
      >
        Logout
      </button>
    </div>
  );
}
