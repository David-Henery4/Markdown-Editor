"use client"
import { DarkModeIcon, LightModeIcon } from "../../../../public/assets";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  //
  return (
    <div className="flex justify-start items-center gap-3">
      <DarkModeIcon
        className={`${resolvedTheme === "dark" ? "fill-white" : "fill-veryDarkGrey"}`}
      />
      <div
        className="relative w-12 h-6 p-[6px] rounded-[14.5px] bg-veryDarkGrey hover:cursor-pointer"
        onClick={() =>
          resolvedTheme === "dark" ? setTheme("light") : setTheme("dark")
        }
      >
        <div
          className={`w-3 h-3 rounded-full bg-white transition-all absolute top-1/2 left-1/2 -translate-y-1/2 ${
            resolvedTheme === "dark" ? "-translate-x-[150%]" : "translate-x-1/2"
          }`}
        ></div>
      </div>
      <LightModeIcon
        className={`${resolvedTheme === "dark" ? "fill-veryDarkGrey" : "fill-white"}`}
      />
    </div>
  );
};

export default ThemeToggle;
