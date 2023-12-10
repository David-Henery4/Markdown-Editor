"use client";
import { DocumentIcon } from "../../../../../public/assets";
import { AppBody, AppHeadingMedium } from "../../shared";
import useGlobalContext from "@/app/context/useGlobalContext";

const MarkdownFileBox = ({ name, createdAt, index }) => {
  const { handleSetActiveMarkdownIndex, activeMd, activeMdData } =
    useGlobalContext();
  // console.log("props: " , props)
  // console.log(name)
  // console.log(createdAt)
  return (
    <div
      className={`w-full pb-2 flex justify-start items-center gap-4 group hover:cursor-pointer ${
        activeMd === index && "border-b-lighterBlack border-b-2"
      }`}
      onClick={() => {
        handleSetActiveMarkdownIndex(index);
      }}
    >
      <DocumentIcon />
      <div className="flex-1">
        <div className="text-darkGrey">
          <AppBody>{createdAt}</AppBody>
        </div>
        <div
          className={`group-hover:text-orange ${
            activeMd === index && "text-orange"
          }`}
        >
          <AppHeadingMedium>
            {activeMd === index ? activeMdData?.name : name}
          </AppHeadingMedium>
        </div>
      </div>
    </div>
  );
};

export default MarkdownFileBox;
