import { AppHeadingSmall } from "../shared";
import ShowHidePreview from "./components/ShowHidePreview";
import useGlobalContext from "@/app/context/useGlobalContext";
import TextareaAutosize from 'react-textarea-autosize';

const Markdown = ({
  isPreviewActive,
  setIsPreviewActive,
  currentMarkdownContent,
  setCurrentMarkdownContent,
}) => {
  const { activeMdData, setActiveMdData } = useGlobalContext();
  //
  return (
    <div
      className={`h-full grid grid-rows-markdownContainerRows col-start-1 col-end-3 tablet:border-r tablet:border-r-lighterGrey dark:tablet:border-r-veryDarkGrey tablet:col-start-1 tablet:col-end-2  ${
        isPreviewActive ? "hidden" : "block"
      }`}
    >
      <div className="w-full p-4 flex justify-between items-center text-darkGrey bg-whiteShade dark:bg-darkBlack dark:text-lightGrey">
        <AppHeadingSmall>MARKDOWN</AppHeadingSmall>
        <div className="tablet:hidden">
          <ShowHidePreview
            isPreviewActive={isPreviewActive}
            setIsPreviewActive={setIsPreviewActive}
          />
        </div>
      </div>
      {/* Can make content server component by passing in as children (But is there any point/benefit) */}
      {/* <div> */}
      {/* </div> */}
      <TextareaAutosize
        cacheMeasurements
        name="markdown-text"
        id="markdown-text"
        className="resize-none w-full p-4 overflow-hidden outline-none text-[14px] leading-[24px] text-lighterBlack font-robotoMono max-w-[672px] mx-auto dark:bg-veryDarkBlack dark:text-lightGrey"
        value={activeMdData.content}
        onChange={(e) =>
          setActiveMdData((oldValues) => {
            return { ...oldValues, content: e.target.value };
          })
        }
      />
    </div>
  );
};

export default Markdown;
