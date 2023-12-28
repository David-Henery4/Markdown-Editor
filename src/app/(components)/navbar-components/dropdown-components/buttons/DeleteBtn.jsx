"use client";
import { DeleteIcon } from "../../../../../../public/assets";
import deleteMarkdown from "@/app/(lib)/deleteMarkdown";
import useGlobalContext from "@/app/context/useGlobalContext";
import { useRouter } from "next/navigation";

const DeleteBtn = ({ setIsDropdownOpen }) => {
  const { activeMdData, handleSetActiveMarkdownIndex } = useGlobalContext();
  const { refresh } = useRouter();
  //
  const handleDeleteMarkdown = async () => {
    const res = await deleteMarkdown(activeMdData?.id);
    handleSetActiveMarkdownIndex(0);
    setIsDropdownOpen(false)
    refresh();
    console.log(res);
  };
  //
  return (
    <li
      className={`w-full flex flex-col-reverse gap-2 justify-between items-center group smTablet:gap-12 smTablet:flex-row hover:cursor-pointer ${
        activeMdData?.id === "default-markdown" && "hidden"
      }`}
      onClick={() => handleDeleteMarkdown()}
    >
      <p className="w-max text-white group-hover:text-orange">Delete Markdown</p>
      <button
        disabled={activeMdData?.id === "default-markdown"}
        className={` fill-darkGrey hover:fill-white active:fill-darkGrey ${
          activeMdData?.id === "default-markdown" && "hidden"
        }`}
      >
        <DeleteIcon className="fill-white group-hover:fill-orange" />
      </button>
    </li>
  );
};

export default DeleteBtn;
