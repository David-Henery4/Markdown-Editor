"use client"
import { AppHeadingSmall } from "./shared";
import { LogoIcon } from "../../../public/assets";
import useGlobalContext from "@/app/context/useGlobalContext";
import { ThemeToggle, MarkDownFileList, AddNewMarkdownBtn } from "./sidebar-components";

const Sidebar = ({children}) => {
  const { isSidebarOpen } = useGlobalContext();
  //
  return (
    <aside
      id="sidebar-scroll"
      className={`bg-darkBlack transition-all duration-[.4s] overflow-x-hidden overflow-y-auto ${
        isSidebarOpen ? "min-w-[250px]" : "min-w-0"
      }`}
    >
      <div
        className={`min-h-full px-6 py-7 min-w-[250px] transition-all duration-[.4s] text-white flex flex-col justify-between items-start ${
          isSidebarOpen ? "translate-x-0" : "translate-x-[-250px]"
        }`}
      >
        {children}
        <ThemeToggle />
      </div>
    </aside>
  );
};

export default Sidebar;
