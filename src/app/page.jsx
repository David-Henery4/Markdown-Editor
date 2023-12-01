import { Navbar, MarkdownAndPreviewContainer } from "./(components)";

export default function Home() {
  return (
    <main className="min-h-[100svh] w-full">
      <Navbar/>
      <MarkdownAndPreviewContainer/>
    </main>
  );
}
