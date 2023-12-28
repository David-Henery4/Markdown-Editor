import { DownloadPDFIcon, DeleteIcon, DownloadIcon } from "../../../../../public/assets";
import { DeleteBtn, DownloadMd } from "./buttons";

const ButtonsList = ({ isDropdownOpen, setIsDropdownOpen }) => {
  return (
    <ul
      className={`absolute top-14 right-0 bg-lighterBlack p-8 rounded-xl text-sm flex flex-col justify-start items-start gap-6 ${
        isDropdownOpen ? "block" : "hidden"
      }`}
    >
      <li className="w-full flex flex-col-reverse gap-2 justify-between items-center smTablet:gap-12 smTablet:flex-row group hover:cursor-pointer">
        <p className="w-max group-hover:text-orange">Download as PDF</p>
        <button>
          <DownloadPDFIcon className="fill-white group-hover:fill-orange" />
        </button>
      </li>
      <DownloadMd setIsDropdownOpen={setIsDropdownOpen}/>
      <DeleteBtn setIsDropdownOpen={setIsDropdownOpen} />
    </ul>
  );
};

export default ButtonsList