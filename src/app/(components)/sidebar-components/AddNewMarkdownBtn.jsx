"use client"
import createMarkdown from "@/app/(lib)/createMarkdown";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSession } from "next-auth/react";

const AddNewMarkdownBtn = () => {
  const { data } = useSession();
  // console.log(self.crypto.randomUUID());
  // console.log(`${typeof data.id}: ${data.id}`);
  // console.log(`${typeof +data.id}: ${+data.id}`);
  //
  const [newMarkdown, setNewMarkdown] = useState({
    id: self.crypto.randomUUID(),
    userId: `${data?.id}`, // temp till user set up
    createdAt: new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(),
    name: "untitled-document.md",
    content: "",
  });
  const { refresh } = useRouter();
  //
  const handleCreateNewMarkdown = async (newDefaultMarkdown) => {
    setNewMarkdown((oldValues) => {
      return {
        ...oldValues,
        id: self.crypto.randomUUID(),
      };
    })
    const res = await createMarkdown(newDefaultMarkdown);
    console.log(res);
    refresh();
  };
  //
  return (
    <button
      className="w-full px-3 py-3 mt-7 rounded-[4px] bg-orange text-[15px] active:bg-lightOrange"
      onClick={() => handleCreateNewMarkdown(newMarkdown)}
    >
      + New Document
    </button>
  );
}

export default AddNewMarkdownBtn