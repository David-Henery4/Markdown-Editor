import { LogoIcon } from "../../../../public/assets";
import { AppHeadingSmall } from "../shared";
import { AddNewMarkdownBtn, MarkDownFileList } from ".";

const SidebarContent = () => {
  return (
    <div className="w-full">
      <div className="lgTablet:hidden">
        <LogoIcon />
      </div>
      <div className="mt-7">
        <AppHeadingSmall>MY DOCUMENTS</AppHeadingSmall>
      </div>
      <AddNewMarkdownBtn />
      <MarkDownFileList />
    </div>
  );
}

export default SidebarContent