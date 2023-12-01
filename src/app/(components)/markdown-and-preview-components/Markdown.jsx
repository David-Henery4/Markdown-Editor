import { AppHeadingSmall } from "../shared";
import ShowHidePreview from "./components/ShowHidePreview";

const Markdown = ({isPreviewActive,
setIsPreviewActive}) => {
  return (
    <div className={`${isPreviewActive ? "hidden" : "block"}`}>
      <div className="w-full p-4 flex justify-between items-center text-darkGrey bg-whiteShade">
        <AppHeadingSmall>MARKDOWN</AppHeadingSmall>
        <ShowHidePreview
          isPreviewActive={isPreviewActive}
          setIsPreviewActive={setIsPreviewActive}
        />
      </div>
      {/* Can make content server component by passing in as children (But is there any point/benefit) */}
      <div></div>
    </div>
  );
}

export default Markdown