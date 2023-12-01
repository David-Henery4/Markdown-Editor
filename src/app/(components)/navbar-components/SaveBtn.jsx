import { SaveIcon } from "../../../../public/assets";
import { AppHeadingMedium } from "../shared";

const SaveBtn = () => {
  return (
    <button className="p-3 flex items-center gap-2 text-white bg-orange rounded-[4px] hover:bg-lightOrange active:bg-orange">
      <SaveIcon />
      <div className="hidden smTablet:block">
        <AppHeadingMedium>Save Changes</AppHeadingMedium>
      </div>
    </button>
  );
}

export default SaveBtn