import { MenuIcon, CloseIcon } from "../../../../public/assets";
import useGlobalContext from "@/app/context/useGlobalContext";

const BurgerMenu = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();
  return (
    <div className="grid items-center px-4 py-[21px] bg-lighterBlack smTablet:py-[27px] smTablet:px-[21px]">
      {isSidebarOpen ? (
        <CloseIcon
          className="hover:cursor-pointer"
          onClick={() => setIsSidebarOpen(false)}
        />
      ) : (
        <MenuIcon
          className="hover:cursor-pointer"
          onClick={() => setIsSidebarOpen(true)}
        />
      )}
    </div>
  );
};

export default BurgerMenu;
