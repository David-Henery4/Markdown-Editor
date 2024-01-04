import { ChevDown, ChevUp } from "../../../../../public/assets";
import useGlobalContext from "@/app/context/useGlobalContext";

const Toggle = ({ isDropdownOpen, setIsDropdownOpen }) => {
  const { activeMdData } = useGlobalContext();
  //
  return (
    <div
      className={`relative py-4 z-10 hover:cursor-pointer group ${
        activeMdData?.id === "default-markdown" && "hidden"
      }`}
      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
    >
      {isDropdownOpen ? (
        <ChevUp className="fill-white/75 group-hover:fill-white group-hover:scale-110" />
      ) : (
        <ChevDown className="fill-white/75 group-hover:fill-white group-hover:scale-110" />
      )}
    </div>
  );
};

export default Toggle