"use client"
import { DocumentIcon } from "../../../../../public/assets";
import { AppBody, AppHeadingMedium } from "../../shared";
import useGlobalContext from "@/app/context/useGlobalContext";

const FileName = () => {
  const { activeMdData } = useGlobalContext();
  return (
    <div className="flex justify-start items-center gap-4">
      <DocumentIcon />
      <div className="flex-1">
        <div className="hidden text-darkGrey smTablet:block">
          <AppBody>Document Name</AppBody>
        </div>
        <AppHeadingMedium>{activeMdData?.name}</AppHeadingMedium>
      </div>
    </div>
  );
}

export default FileName