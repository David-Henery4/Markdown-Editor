import { AppHeadingSmall, AppHeadingMedium, AppBody } from "./shared";
import tempData from "../../../data.json";
import { DocumentIcon, LogoIcon } from "../../../public/assets";
import useGlobalContext from "@/app/context/useGlobalContext";
import { ThemeToggle } from "./sidebar-components";

const Sidebar = () => {
  const { isSidebarOpen } = useGlobalContext();
  //
  return (
    <aside
      className={`bg-darkBlack transition-all duration-[.4s] overflow-hidden ${
        isSidebarOpen ? "min-w-[250px]" : "min-w-0"
      }`}
    >
      <div
        className={`h-full px-6 py-7 min-w-[250px] transition-all duration-[.4s] text-white flex flex-col justify-between items-start ${
          isSidebarOpen ? "translate-x-0" : "translate-x-[-250px]"
        }`}
      >
        <div className="w-full">
          <div className="lgTablet:hidden">
            <LogoIcon />
          </div>
          <div className="mt-7">
            <AppHeadingSmall>MY DOCUMENTS</AppHeadingSmall>
          </div>
          <button className="w-full px-3 py-3 mt-7 rounded-[4px] bg-orange text-[15px] active:bg-lightOrange">
            + New Document
          </button>
          <ul className="mt-6 flex flex-col justify-start items-start gap-6">
            {/* Might be able to make re-usable with "FileName" */}
            {tempData.map((item, i) => {
              return (
                <div key={i} className="flex justify-start items-center gap-4">
                  <DocumentIcon />
                  <div className="flex-1">
                    <div className="hidden text-darkGrey smTablet:block">
                      <AppBody>{item.createdAt}</AppBody>
                    </div>
                    <AppHeadingMedium>{item.name}</AppHeadingMedium>
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
        <ThemeToggle />
      </div>
    </aside>
  );
};

export default Sidebar;
