import { AppHeadingSmall } from "../shared";
import ShowHidePreview from "./components/ShowHidePreview";

const Markdown = ({
  isPreviewActive,
  setIsPreviewActive,
  currentMarkdownContent,
  setCurrentMarkdownContent,
}) => {
  return (
    <div
      className={`h-full flex flex-col col-start-1 col-end-3 tablet:border-r tablet:border-r-lighterGrey dark:tablet:border-r-veryDarkGrey tablet:col-start-1 tablet:col-end-2  ${
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
      <textarea
        name="markdown-text"
        id="markdown-text"
        className="resize-none flex-1 w-full p-4 outline-none text-[14px] leading-[24px] text-lighterBlack font-robotoMono max-w-[672px] mx-auto dark:bg-veryDarkBlack dark:text-lightGrey"
        value={currentMarkdownContent}
        onChange={(e) => setCurrentMarkdownContent(e.target.value)}
      ></textarea>
    </div>
  );
};

export default Markdown;
