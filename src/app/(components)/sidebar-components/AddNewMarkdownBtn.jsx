"use client"
import createMarkdown from "@/app/(lib)/createMarkdown";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddNewMarkdownBtn = () => {
  const [newMarkdown, setNewMarkdown] = useState({
    id: +new Date(),
    userId: +new Date(), // temp till user set up
    createdAt: new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(),
    name: "untitled-document.md",
    content: "",
  });
  const {refresh} = useRouter()
  //
  const handleCreateNewMarkdown = async (newDefaultMarkdown) => {
    const res = await createMarkdown(newDefaultMarkdown)
    console.log(res)
    refresh()
  }
  //
  return (
    <button className="w-full px-3 py-3 mt-7 rounded-[4px] bg-orange text-[15px] active:bg-lightOrange" onClick={() => handleCreateNewMarkdown(newMarkdown)}>
      + New Document
    </button>
  );
}

export default AddNewMarkdownBtn