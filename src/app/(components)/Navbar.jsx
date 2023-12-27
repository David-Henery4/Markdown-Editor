import { SaveBtn, BurgerMenu, DeleteBtn, FileNameAndLogo, DownloadBtn, Dropdown } from "./navbar-components";

const Navbar = () => {
  return (
    <nav className="w-full bg-lightBlack grid grid-cols-nav">
      <BurgerMenu />

      <FileNameAndLogo />

      <div className="flex justify-center items-center p-2 gap-6 smTablet:p-4">
        <Dropdown/>
        {/* <DownloadBtn/>
        <DeleteBtn /> */}
        <SaveBtn />
      </div>
    </nav>
  );
};

export default Navbar;
