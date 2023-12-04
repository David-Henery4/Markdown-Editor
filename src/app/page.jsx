"use client";
import { Navbar, MarkdownAndPreviewContainer, Sidebar } from "./(components)";
import { AppProvider } from "./context/Context";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
      setMounted(true);
    }, []);
    //
    if (!mounted) {
      return null;
    }
  return (
    <ThemeProvider attribute="class" enableSystem = {true}>
      <AppProvider>
        <main className="min-h-[100svh] w-full flex justify-start overflow-hidden bg-white dark:bg-veryDarkBlack">
          <Sidebar />
          <section className="grid grid-rows-mainInitialRows min-w-full">
            <Navbar />
            <MarkdownAndPreviewContainer />
          </section>
        </main>
      </AppProvider>
    </ThemeProvider>
  );
}
