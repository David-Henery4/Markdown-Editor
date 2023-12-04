import { DarkModeIcon, LightModeIcon } from "../../../../public/assets";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  //
  return (
    <div className="flex justify-start items-center gap-3">
      <DarkModeIcon
        className={`${theme === "dark" ? "fill-white" : "fill-veryDarkGrey"}`}
      />
      <div
        className="relative w-12 h-6 p-[6px] rounded-[14.5px] bg-veryDarkGrey hover:cursor-pointer"
        onClick={() =>
          theme === "dark" ? setTheme("light") : setTheme("dark")
        }
      >
        <div
          className={`w-3 h-3 rounded-full bg-white transition-all absolute top-1/2 left-1/2 -translate-y-1/2 ${
            theme === "dark" ? "-translate-x-[150%]" : "translate-x-1/2"
          }`}
        ></div>
      </div>
      <LightModeIcon
        className={`${theme === "dark" ? "fill-veryDarkGrey" : "fill-white"}`}
      />
    </div>
  );
};

export default ThemeToggle;
