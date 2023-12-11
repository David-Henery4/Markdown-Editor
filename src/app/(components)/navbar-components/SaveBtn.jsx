"use client"
import { SaveIcon } from "../../../../public/assets";
import { AppHeadingMedium } from "../shared";
import useGlobalContext from "@/app/context/useGlobalContext";
import { useRouter } from "next/navigation";
import updateMarkdown from "@/app/(lib)/updateMarkdown";


const SaveBtn = () => {
  const { activeMdData, handleSetActiveMarkdownIndex } = useGlobalContext();
  const { refresh } = useRouter();
  //
  const handleUpdateMarkdown = async () => {
    const res = await updateMarkdown(activeMdData?.id, activeMdData)
    console.log(res)
    refresh()
  }
  //
  return (
    <button
      className={`p-3 flex items-center gap-2 text-white bg-orange rounded-[4px] hover:bg-lightOrange active:bg-orange ${
        activeMdData?.id === "default-markdown" && "hidden"
      }`}
      onClick={() => {
        handleUpdateMarkdown();
      }}
      disabled={activeMdData?.id === "default-markdown"}
    >
      <SaveIcon />
      <div className="hidden smTablet:block">
        <AppHeadingMedium>Save Changes</AppHeadingMedium>
      </div>
    </button>
  );
}

export default SaveBtn