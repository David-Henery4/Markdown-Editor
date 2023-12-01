import { ShowPreviewIcon, HidePreviewIcon } from "../../../../../public/assets";

const ShowHidePreview = ({ isPreviewActive, setIsPreviewActive }) => {
  return (
    <div className="hover:cursor-pointer" onClick={() => setIsPreviewActive(!isPreviewActive)}>
      {isPreviewActive ? <HidePreviewIcon /> : <ShowPreviewIcon />}
    </div>
  );
};

export default ShowHidePreview;
