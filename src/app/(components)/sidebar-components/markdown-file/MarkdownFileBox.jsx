"use client"
import { DocumentIcon } from "../../../../../public/assets";
import { AppBody, AppHeadingMedium } from "../../shared";
import useGlobalContext from "@/app/context/useGlobalContext";

const MarkdownFileBox = ({ name, createdAt, index }) => {
  const { handleSetActiveMarkdownIndex } = useGlobalContext();
  // console.log("props: " , props)
  // console.log(name)
  // console.log(createdAt)
  return (
    <div className="w-full flex justify-start items-center gap-4 group hover:cursor-pointer" onClick={() => {
        handleSetActiveMarkdownIndex(index)
    }}>
      <DocumentIcon />
      <div className="flex-1">
        <div className="text-darkGrey">
          <AppBody>{createdAt}</AppBody>
        </div>
        <div className="group-hover:text-orange">
          <AppHeadingMedium>{name}</AppHeadingMedium>
        </div>
      </div>
    </div>
  );
};

export default MarkdownFileBox;
