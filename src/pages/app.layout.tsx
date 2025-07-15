import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../global-components/navbar/navbar.tsx";
import { Footer } from "../global-components/footer/footer.tsx";
import { Toaster } from "sonner";

export function AppLayout() {
  return (
    <div>
      <Toaster richColors position="bottom-center" />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
