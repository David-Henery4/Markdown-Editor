"use client";
import { useState } from "react";
import { Toggle, Overlay, ButtonsList } from "./dropdown-components";

const Dropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div className="relative">
      <Toggle
        setIsDropdownOpen={setIsDropdownOpen}
        isDropdownOpen={isDropdownOpen}
      />
      <Overlay
        setIsDropdownOpen={setIsDropdownOpen}
        isDropdownOpen={isDropdownOpen}
      />
      <ButtonsList
        setIsDropdownOpen={setIsDropdownOpen}
        isDropdownOpen={isDropdownOpen}
      />
    </div>
  );
};

export default Dropdown;
