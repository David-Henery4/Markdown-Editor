"use client"
import { DeleteIcon } from "../../../../public/assets";
import deleteMarkdown from "@/app/(lib)/deleteMarkdown";
import useGlobalContext from "@/app/context/useGlobalContext";
import { useRouter } from "next/navigation";

const DeleteBtn = () => {
  const { activeMdData, handleSetActiveMarkdownIndex } = useGlobalContext();
  const { refresh } = useRouter();
  //
  const handleDeleteMarkdown = async () => {
    const res = await deleteMarkdown(activeMdData?.id)
    handleSetActiveMarkdownIndex(0)
    refresh()
    console.log(res)
  }
  //
  return (
    <button
      onClick={() => handleDeleteMarkdown()}
      disabled={activeMdData?.id === "default-markdown"}
      className={` fill-darkGrey hover:fill-white active:fill-darkGrey ${
        activeMdData?.id === "default-markdown" && "hidden"
      }`}
    >
      <DeleteIcon />
    </button>
  );
}

export default DeleteBtn