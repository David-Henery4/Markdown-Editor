"use client";
import { useState } from "react";
import {
  ChevDown,
  ChevUp,
  DeleteIcon,
  DownloadIcon,
  DownloadPDFIcon,
} from "../../../../public/assets";

const Dropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div className="relative">
      <div
        className="py-4 hover:cursor-pointer group"
        onClick={() => setIsDropdownOpen(true)}
      >
        {isDropdownOpen ? (
          <ChevUp className="fill-white/75 group-hover:fill-white group-hover:scale-110" />
        ) : (
          <ChevDown className="fill-white/75 group-hover:fill-white group-hover:scale-110" />
        )}
      </div>
      <div
        className={`fixed w-full h-full top-0 left-0 ${
          isDropdownOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsDropdownOpen(false)}
      ></div>
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
        <li className="w-full flex flex-col-reverse gap-2 justify-between items-center group smTablet:gap-12 smTablet:flex-row hover:cursor-pointer">
          <p className="w-max group-hover:text-orange">Download as Markdown</p>
          <button>
            <DownloadIcon className="fill-white group-hover:fill-orange" />
          </button>
        </li>
        <li className="w-full flex flex-col-reverse gap-2 justify-between items-center group smTablet:gap-12 smTablet:flex-row hover:cursor-pointer">
          <p className="w-max group-hover:text-orange">Delete Markdown</p>
          <button>
            <DeleteIcon className="fill-white group-hover:fill-orange" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
