"use client";
import { Navbar, MarkdownAndPreviewContainer, Sidebar } from "./(components)";
import { AppProvider } from "./context/Context";


export default function Home() {
  return (
    <AppProvider>
      <main className="min-h-[100svh] w-full flex justify-start overflow-hidden">
        <Sidebar />
        <section className="grid grid-rows-mainInitialRows min-w-full">
          <Navbar />
          <MarkdownAndPreviewContainer />
        </section>
      </main>
    </AppProvider>
  );
}
