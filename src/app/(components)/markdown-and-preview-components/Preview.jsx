import { AppHeadingSmall } from "../shared";
import ShowHidePreview from "./components/ShowHidePreview";

const Preview = ({ isPreviewActive, setIsPreviewActive }) => {
  return (
    <div className={`${isPreviewActive ? "block" : "hidden"}`}>
      <div className="w-full p-4 flex justify-between items-center text-darkGrey bg-whiteShade">
        <AppHeadingSmall>PREVIEW</AppHeadingSmall>
        <ShowHidePreview
          isPreviewActive={isPreviewActive}
          setIsPreviewActive={setIsPreviewActive}
        />
      </div>
      {/* Can make content server component by passing in as children (But is there any point/benefit) */}
      <div></div>
    </div>
  );
};

export default Preview;
