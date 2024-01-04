"use client";
import { useState } from "react";
import { DocumentIcon } from "../../../../../public/assets";
import { AppBody } from "../../shared";
import useGlobalContext from "@/app/context/useGlobalContext";
import updateMarkdown from "@/app/(lib)/updateMarkdown";
import { useRouter } from "next/navigation";

const FileName = () => {
  const {refresh} = useRouter()
  const [isNameInputActive, setIsNameInputActive] = useState(false);
  const { activeMdData, setActiveMdData } = useGlobalContext();
  //
  const handleSaveNameChange = async (newData) => {
    const res = await updateMarkdown(newData?.id, newData)
    console.log(res)
    refresh()
  }
  //
  return (
    <div className="flex justify-start items-center gap-4 tablet:flex-1">
      <DocumentIcon />
      <div className="flex-1">
        <div className="hidden text-darkGrey smTablet:block">
          <AppBody>Document Name</AppBody>
        </div>
        <div className="font-normal text-[15px] ">
          <label
            htmlFor="markdown-name"
            onClick={() => {
              if (activeMdData.id !== "default-markdown") {
                setIsNameInputActive(!isNameInputActive);
              }
            }}
            className={`${
              isNameInputActive && activeMdData.id !== "default-markdown"
                ? "hidden"
                : "block"
            }`}
          >
            {activeMdData?.name}
          </label>
          {activeMdData.id !== "default-markdown" && (
            <input
              id="markdown-name"
              name="markdown-name"
              type="text"
              onBlur={(e) => {
                setIsNameInputActive(false);
                setActiveMdData((oldValues) => {
                  const newData = {
                    ...oldValues,
                    name:
                      e.target.value.endsWith(".md") &&
                      e.target.value.trim().length >= 4
                        ? e.target.value
                        : !e.target.value.endsWith(".md") &&
                          e.target.value.trim().length >= 1
                        ? `${e.target.value}.md`
                        : "untitled-document.md",
                  };
                  handleSaveNameChange(newData);
                  return newData;
                });
              }}
              className={`w-full bg-veryDarkBlack/0 border-b border-white outline-none caret-orange py-[6px] tablet:w-1/2 ${
                isNameInputActive ? "block" : "hidden"
              }`}
              value={activeMdData?.name}
              onChange={(e) => {
                setActiveMdData((oldValues) => {
                  return { ...oldValues, name: e.target.value };
                });
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FileName;
