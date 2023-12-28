"use client";
import createMarkdown from "@/app/(lib)/createMarkdown";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

const AddNewMarkdownBtn = () => {
  const { data } = useSession();
  //
  const [newMarkdown, setNewMarkdown] = useState({
    id: self.crypto.randomUUID(),
    userId: `${data?.id}`,
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
    });
    const res = await createMarkdown(newDefaultMarkdown);
    console.log(res);
    refresh();
  };
  //
  useEffect(() => {
    setNewMarkdown((oldValues) => {
      return {
        ...oldValues,
        userId: `${data?.id}`,
      };
    });
  }, [data?.id]);
  //
  return (
    <button
      className="w-full px-3 py-3 mt-7 rounded-[4px] bg-orange text-[15px] active:bg-lightOrange"
      onClick={() => handleCreateNewMarkdown(newMarkdown)}
    >
      + New Document
    </button>
  );
};

export default AddNewMarkdownBtn;
