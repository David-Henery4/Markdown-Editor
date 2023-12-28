import { DownloadPDFIcon } from "../../../../../../public/assets";

const DownloadPdf = ({ setIsDropdownOpen }) => {
  return (
    <li className="w-full flex flex-col-reverse gap-2 justify-between items-center smTablet:gap-12 smTablet:flex-row group hover:cursor-pointer">
      <p className="w-max group-hover:text-orange">Download as PDF</p>
      <button>
        <DownloadPDFIcon className="fill-white group-hover:fill-orange" />
      </button>
    </li>
  );
};

export default DownloadPdf