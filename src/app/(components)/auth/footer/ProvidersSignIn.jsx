"use client";
import { GoogleIcon, GithubIcon } from "../../../../../public/assets";
import { signIn } from "next-auth/react";

const ProvidersSignIn = ({ providers }) => {
  return (
    <div className="w-full">
      {Object?.values(providers)
        .filter((pro) => pro.id === "google" || pro.id === "github")
        .map((provider) => {
          const isGoogle = provider.id === "google";
          const isGitHub = provider.id === "github";
          console.log(providers)
          return (
            <button
              key={provider.name}
              onClick={() => signIn(provider.id)}
              className={`text-white w-full p-6 mt-4 flex justify-center items-center rounded-[10px] ${
                isGitHub && "bg-[#000] hover:bg-veryDarkBlack active:bg-[#000]"
              } ${
                isGoogle &&
                "bg-lightBlack hover:bg-lighterBlack active:bg-lightBlack"
              }`}
            >
              {isGitHub && <GithubIcon className="mr-auto" />}
              {isGoogle && <GoogleIcon className="mr-auto" />}
              <span className="mr-auto">Sign in with {provider.name}</span>
            </button>
          );
        })}
    </div>
  );
};

export default ProvidersSignIn;
