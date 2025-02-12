"use client";

import { usePathname } from "next/navigation";
import NavBar from "@/Components/NavBar";

export default function NavbarWrapper() {
  const pathname = usePathname();
  const isAdminDashboard = pathname.startsWith("/dashboard");

  if (isAdminDashboard) return null; // Hide navbar on dashboard

  return <NavBar />;
}