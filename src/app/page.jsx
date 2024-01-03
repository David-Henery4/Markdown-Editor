import markdownList from "@/app/(models)/markdownListSchema";
import defaultWelcomeMarkdownData from "./default-welcome-markdown/defaultWelcomeMarkdownData";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

import { Navbar, MarkdownAndPreviewContainer, Sidebar } from "./(components)";
import { SidebarContent } from "./(components)/sidebar-components";

export default async function Home() {
  const session = await getServerSession(options)
  if (!session){
    redirect("/auth/signin");
  }
  console.log(session)
  const allUserMarkdowns = await markdownList.find({userId: session?.id});
  const allCurrentMarkdowns = [
    ...JSON.parse(JSON.stringify(allUserMarkdowns)),
    defaultWelcomeMarkdownData,
  ];
  //
  return (
    <main className="h-[100svh] w-full flex justify-start overflow-hidden bg-white dark:bg-veryDarkBlack">
      <Sidebar user={session} >
        <SidebarContent allCurrentMarkdowns={allCurrentMarkdowns} />
      </Sidebar>
      <section className="grid grid-rows-mainInitialRows min-w-full overflow-y-auto">
        <Navbar />
        <MarkdownAndPreviewContainer
          allCurrentMarkdowns={allCurrentMarkdowns}
        />
      </section>
    </main>
  );
}
