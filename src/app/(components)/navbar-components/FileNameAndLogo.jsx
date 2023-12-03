import { LogoIcon } from "../../../../public/assets";
import { FileName } from "./name-logo-components";

const FileNameAndLogo = () => {
  return (
    <div className="flex justify-start items-center pl-6 pr-2 text-white">
      <div className="hidden lgTablet:block">
        <LogoIcon />
      </div>
      <div className="w-[1px] h-10 bg-veryDarkGrey mx-7 hidden lgTablet:block"></div>
      <FileName/>
    </div>
  );
};

export default FileNameAndLogo;
