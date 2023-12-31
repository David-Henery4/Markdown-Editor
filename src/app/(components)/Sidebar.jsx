"use client";
import useGlobalContext from "@/app/context/useGlobalContext";
import {
  ThemeToggle,
  SignOut,
} from "./sidebar-components";

const Sidebar = ({ children, user }) => {
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
        <div className="w-full mt-8">
          <SignOut user={user} />
          <ThemeToggle />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
