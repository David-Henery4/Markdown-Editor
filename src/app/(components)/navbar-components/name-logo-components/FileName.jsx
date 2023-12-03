import { DocumentIcon } from "../../../../../public/assets";
import { AppBody, AppHeadingMedium } from "../../shared";

const FileName = () => {
  return (
    <div className="flex justify-start items-center gap-4">
      <DocumentIcon />
      <div className="flex-1">
        <div className="hidden text-darkGrey smTablet:block">
          <AppBody>Document Name</AppBody>
        </div>
        <AppHeadingMedium>document-name.md</AppHeadingMedium>
      </div>
    </div>
  );
}

export default FileName