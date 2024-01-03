import { AppHeadingSmall } from "../shared";
import ShowHidePreview from "./components/ShowHidePreview";
import MarkdownComponent from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import {
  HeadingPrimary,
  HeadingSecondary,
  HeadingThree,
  HeadingFour,
  HeadingFive,
  HeadingSix,
} from "../shared/previewHeadings";
import {
  PreviewParagraph,
  PreviewParagraphBold,
  PreviewListItem,
  PreviewBlockquote,
  PreviewLink,
  PreviewCode,
  PreviewPre,
} from "../shared/previewParagraphs";
import useGlobalContext from "@/app/context/useGlobalContext";

const Preview = ({
  isPreviewActive,
  setIsPreviewActive
}) => {
  const { activeMdData } = useGlobalContext();
  //
  return (
    <div
      className={` h-full flex flex-col ${
        isPreviewActive
          ? "block col-start-1 col-end-3"
          : "hidden col-start-2 col-end-3 tablet:block"
      }`}
    >
      <div className="w-full p-4 flex justify-between items-center text-darkGrey bg-whiteShade dark:bg-darkBlack dark:text-lightGrey">
        <AppHeadingSmall>PREVIEW</AppHeadingSmall>
        <ShowHidePreview
          isPreviewActive={isPreviewActive}
          setIsPreviewActive={setIsPreviewActive}
        />
      </div>
      <div
        id="markdown-preview"
        className="flex-1 w-full max-w-[672px] mx-auto p-4 text-darkGrey dark:text-lightGrey bg-white dark:bg-veryDarkBlack prose"
      >
        <div
        >
          <MarkdownComponent
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
            components={{
              h1: HeadingPrimary,
              h2: HeadingSecondary,
              h3: HeadingThree,
              h4: HeadingFour,
              h5: HeadingFive,
              h6: HeadingSix,
              p: PreviewParagraph,
              li: PreviewListItem,
              blockquote: PreviewBlockquote,
              strong: PreviewParagraphBold,
              a: PreviewLink,
              code: PreviewCode,
              pre: PreviewPre,
            }}
          >
            {activeMdData?.content}
          </MarkdownComponent>
        </div>
      </div>
    </div>
  );
};

export default Preview;
