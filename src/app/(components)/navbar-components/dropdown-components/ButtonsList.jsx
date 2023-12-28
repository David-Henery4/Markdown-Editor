import { DeleteBtn, DownloadMd, DownloadPdf } from "./buttons";

const ButtonsList = ({ isDropdownOpen, setIsDropdownOpen }) => {
  return (
    <ul
      className={`absolute top-14 right-0 bg-lighterBlack p-8 rounded-xl text-sm flex flex-col justify-start items-start gap-6 ${
        isDropdownOpen ? "block" : "hidden"
      }`}
    >
      <DownloadPdf setIsDropdownOpen={setIsDropdownOpen} />
      <DownloadMd setIsDropdownOpen={setIsDropdownOpen} />
      <DeleteBtn setIsDropdownOpen={setIsDropdownOpen} />
    </ul>
  );
};

export default ButtonsList