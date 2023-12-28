

const Overlay = ({ isDropdownOpen, setIsDropdownOpen }) => {
  return (
    <div
      className={`fixed w-full h-full top-0 left-0 ${
        isDropdownOpen ? "block" : "hidden"
      }`}
      onClick={() => setIsDropdownOpen(false)}
    ></div>
  );
};

export default Overlay