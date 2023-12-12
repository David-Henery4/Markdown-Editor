import { GoogleIcon, GithubIcon } from "../../../../../public/assets";

const ProvidersSignIn = () => {
  return (
    <div className="w-full">
      <button className="w-full p-6 flex justify-center items-center bg-lightBlack hover:bg-lighterBlack active:bg-lightBlack rounded-[10px]">
        <GoogleIcon className="mr-auto" />
        <span className="mr-auto">Sign in with Google</span>
      </button>
      <button className="w-full p-6 mt-4 flex justify-center items-center rounded-[10px] bg-[#000] hover:bg-veryDarkBlack active:bg-[#000]">
        <GithubIcon className="mr-auto" />
        <span className="mr-auto">Sign in with Google</span>
      </button>
    </div>
  );
};

export default ProvidersSignIn;
