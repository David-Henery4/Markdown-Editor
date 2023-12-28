import { DownloadIcon } from "../../../../../../public/assets";
import useGlobalContext from "@/app/context/useGlobalContext";

const DownloadMd = ({ setIsDropdownOpen }) => {
  const { activeMdData } = useGlobalContext();
  //
  const handleDownloadMarkdown = () => {
    const link = document.createElement("a");
    const file = new Blob([activeMdData?.content], { type: "text/plain" });
    link.href = URL.createObjectURL(file);
    link.download = "untitled.md";
    link.click();
    URL.revokeObjectURL(link.href);
    setIsDropdownOpen(false)
  };
  //
  return (
    <li
      className="w-full flex flex-col-reverse gap-2 justify-between items-center group smTablet:gap-12 smTablet:flex-row hover:cursor-pointer"
      onClick={handleDownloadMarkdown}
    >
      <p className="w-max text-white group-hover:text-orange">
        Download as Markdown
      </p>
      <button>
        <DownloadIcon className="fill-white group-hover:fill-orange" />
      </button>
    </li>
  );
};

export default DownloadMd;
