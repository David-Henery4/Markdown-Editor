import {
  VisibleCrossedEyeIcon,
  VisibleEyeIcon,
} from "../../../../../../public/assets";

const CredentialsInput = ({
  name,
  label,
  isInputInvalid,
  setValue,
  value,
  isPasswordVisible = null,
  setIsPasswordVisible = null,
}) => {
  return (
    <div className="full">
      <label htmlFor={name} className="text-white text-sm font-bold capitalize">
        {label}
      </label>
      <div className="relative mt-2 ">
        <input
          id={name}
          name={name}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type={`${
            name === "password" && isPasswordVisible
              ? "text"
              : name === "password"
              ? !isPasswordVisible && "password"
              : "text"
          }`}
          className={`bg-lightBlack text-white w-full rounded-md py-3 pl-4 pr-11 outline-none border ${
            isInputInvalid ? "border-red" : "border-red/0"
          } ${
            name === "password" &&
            !isPasswordVisible &&
            "font-[math] tracking-[2px]"
          }`}
        />
        {name === "password" && isPasswordVisible ? (
          <div className="w-6 h-6 absolute top-1/2 right-4 -translate-y-1/2 hover:cursor-pointer">
            <VisibleEyeIcon
              className="w-full h-full fill-white"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            />
          </div>
        ) : (
          name === "password" &&
          !isPasswordVisible && (
            <div className="w-6 h-6 absolute top-1/2 right-4 -translate-y-1/2 hover:cursor-pointer">
              <VisibleCrossedEyeIcon
                className="w-full h-full fill-white"
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              />
            </div>
          )
        )}
      </div>
      {isInputInvalid && (
        <p className="mt-1 text-xs font-normal text-red">
          {label} is required!
        </p>
      )}
    </div>
  );
};

export default CredentialsInput;
