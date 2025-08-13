"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export const useAuthRedirect = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      localStorage.setItem("redirectAfterLogin", pathname);
      router.replace("/login");
    }
  }, []);
};
