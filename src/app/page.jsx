
import { Navbar, MarkdownAndPreviewContainer, Sidebar } from "./(components)";
import { SidebarContent } from "./(components)/sidebar-components";

export default function Home() {
  return (
    <main className="min-h-[100svh] w-full flex justify-start overflow-hidden bg-white dark:bg-veryDarkBlack">
      <Sidebar>
        <SidebarContent/>
      </Sidebar>
      <section className="grid grid-rows-mainInitialRows min-w-full">
        <Navbar />
        <MarkdownAndPreviewContainer />
      </section>
    </main>
  );
}
