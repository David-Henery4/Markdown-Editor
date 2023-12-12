"use client"
import { useState } from "react";
import {useSession, signIn} from "next-auth/react"
import { useRouter } from "next/navigation";
import createUser from "@/app/(lib)/createUser";

const CredentialsSignIn = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [isLoading, setIsloading] = useState(false)
  //
  const [password,setPassword] = useState("")
  const [username,setUsername] = useState("")
  //
  return (
    <form className="w-full" onClick={(e) => e.preventDefault()}>

      <div className="w-full">
        <label htmlFor="username" className="text-sm font-bold">
          Username
        </label>
        <input
          id="username"
          name="username"
          className="w-full rounded-md py-3 px-4 outline-none mt-2"
          type="text"
        />
      </div>

      <div className="w-full mt-4">
        <label htmlFor="password" className="text-sm font-bold">
          Password
        </label>
        <input
          id="password"
          name="password"
          className="w-full rounded-md py-3 px-4 outline-none mt-2"
          type="text"
        />
      </div>

      <button className="w-full py-6 px-3 mt-9 rounded-[10px] font-bold bg-orange hover:bg-lightOrange active:bg-orange">
        Login
      </button>

      <div className="w-full text-xs mt-4">
        <p>
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <span
            className="text-orange ml-1 hover:cursor-pointer"
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup ? "Log in!" : "Sign up!"}
          </span>
        </p>
      </div>

    </form>
  );
}

export default CredentialsSignIn