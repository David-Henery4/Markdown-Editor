import { DarkModeIcon, LightModeIcon } from "../../../../public/assets"
import { useState } from "react";

const ThemeToggle = () => {
  const [isDarkMode,setIsDarkMode] = useState(false)
  return (
    <div className="flex justify-start items-center gap-3">
      <DarkModeIcon
        className={`${isDarkMode ? "fill-white" : "fill-veryDarkGrey"}`}
      />
      <div
        className="relative w-12 h-6 p-[6px] rounded-[14.5px] bg-veryDarkGrey hover:cursor-pointer"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        <div
          className={`w-3 h-3 rounded-full bg-white transition-all absolute top-1/2 left-1/2 -translate-y-1/2 ${
            isDarkMode ? "-translate-x-[150%]" : "translate-x-1/2"
          }`}
        ></div>
      </div>
      <LightModeIcon
        className={`${isDarkMode ? "fill-veryDarkGrey" : "fill-white"}`}
      />
    </div>
  );
}

export default ThemeToggle