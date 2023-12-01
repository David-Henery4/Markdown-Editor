import { MenuIcon } from "../../../../public/assets";

const BurgerMenu = () => {
  return (
    <div className="grid items-center px-4 py-[21px] bg-lighterBlack smTablet:py-[27px] smTablet:px-[21px]">
      <MenuIcon className="hover:cursor-pointer" />
    </div>
  );
}

export default BurgerMenu