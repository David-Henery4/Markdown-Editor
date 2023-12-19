import { SaveBtn, BurgerMenu, DeleteBtn, FileNameAndLogo, DownloadBtn } from "./navbar-components";

const Navbar = () => {
  return (
    <nav className="w-full bg-lightBlack grid grid-cols-nav">
      <BurgerMenu />

      <FileNameAndLogo />

      <div className="flex justify-center items-center p-2 gap-6 smTablet:p-4">
        <DownloadBtn/>
        <DeleteBtn />
        <SaveBtn />
      </div>
    </nav>
  );
};

export default Navbar;
