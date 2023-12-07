// import getAllMarkdowns from "@/app/(lib)/getAllMarkdowns";
import markdownList from "@/app/(models)/markdownListSchema";
import defaultWelcomeMarkdownData from "./default-welcome-markdown/defaultWelcomeMarkdownData";

import { Navbar, MarkdownAndPreviewContainer, Sidebar } from "./(components)";
import { SidebarContent } from "./(components)/sidebar-components";

export default async function Home() {
  const allMarkdowns = await markdownList.find({});
  // const allMarkdownsList = allMarkdowns.json()
  // console.log("home", JSON.parse(JSON.stringify(allMarkdowns)))
  const allCurrentMarkdowns = [
    ...JSON.parse(JSON.stringify(allMarkdowns)),
    defaultWelcomeMarkdownData,
  ];
  //
  return (
    <main className="min-h-[100svh] w-full flex justify-start overflow-hidden bg-white dark:bg-veryDarkBlack">
      <Sidebar>
        <SidebarContent allCurrentMarkdowns={allCurrentMarkdowns} />
      </Sidebar>
      <section className="grid grid-rows-mainInitialRows min-w-full">
        <Navbar />
        <MarkdownAndPreviewContainer
          allCurrentMarkdowns={allCurrentMarkdowns}
        />
      </section>
    </main>
  );
}
