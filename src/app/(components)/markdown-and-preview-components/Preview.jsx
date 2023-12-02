import { AppHeadingSmall } from "../shared";
import ShowHidePreview from "./components/ShowHidePreview";
import MarkdownComponent from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

// import tempData from "../../../../data.json"

const Preview = ({
  isPreviewActive,
  setIsPreviewActive,
  currentMarkdownContent,
}) => {
  return (
    <div
      className={` h-full flex flex-col ${
        isPreviewActive
          ? "block col-start-1 col-end-3"
          : "hidden col-start-2 col-end-3 tablet:block"
      }`}
    >
      <div className="w-full p-4 flex justify-between items-center text-darkGrey bg-whiteShade">
        <AppHeadingSmall>PREVIEW</AppHeadingSmall>
        <ShowHidePreview
          isPreviewActive={isPreviewActive}
          setIsPreviewActive={setIsPreviewActive}
        />
      </div>
      {/* Can make content server component by passing in as children (But is there any point/benefit) */}
      <div className="flex-1 w-full max-w-[672px] mx-auto p-4 prose tablet:prose-xl">
        <MarkdownComponent
          rehypePlugins={[rehypeRaw]}
          remarkPlugins={[remarkGfm]}
        >
          {currentMarkdownContent}
        </MarkdownComponent>
      </div>
    </div>
  );
};

export default Preview;
