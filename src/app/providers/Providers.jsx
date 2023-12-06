"use client";
import { AppProvider } from "../context/Context";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

const Providers = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  //
  if (!mounted) {
    return null;
  }
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <AppProvider>{children}</AppProvider>
    </ThemeProvider>
  );
};

export default Providers;
