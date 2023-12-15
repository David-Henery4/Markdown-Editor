"use client";
import { useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import createUser from "@/app/(lib)/createUser";
import {
  SignInError,
  SubmitBtn,
  DuplicateUser,
  CredentialsInput,
  LoadingSpinner,
} from "./credentials-signin-components";

const CredentialsSignIn = ({ csrfToken }) => {
  const router = useRouter();
  const {status} = useSession()
  //
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  //
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  //
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isUsernameInvalid, setIsUsernameInvalid] = useState(false);
  const [isSignInError, setIsSignInError] = useState(false);
  const [isDuplicateSignUpOrError, setIsDuplicateSignUpOrError] = useState({
    msg: "",
    isError: false,
  });
  //
  const handleValidation = () => {
    username.trim() === ""
      ? setIsUsernameInvalid(true)
      : setIsUsernameInvalid(false);
    password.trim() === ""
      ? setIsPasswordInvalid(true)
      : setIsPasswordInvalid(false);
    //
    return isPasswordInvalid || isUsernameInvalid ? true : false;
  };
  //
  const handleSubmit = async () => {
    if (username.trim() === "" || password.trim() === "") return;
    setIsPasswordInvalid(false);
    setIsUsernameInvalid(false);
    //
    if (!isSignUp) {
      handleSignIn();
    }
    if (isSignUp) {
      handleSignUp();
    }
  };
  //
  const handleSignIn = async () => {
    try {
      setIsloading(true);
      setIsSignInError(false);
      // Don't think we need userId with the signin
      const data = await signIn("credentials", {
        redirect: false,
        username,
        password,
      });
      //
      if (data.ok) {
        setIsloading(false);
        setIsSignInError(false);
        router.refresh();
        return;
      }
      //
      setIsloading(false);
      setIsSignInError(true);
      //
    } catch (error) {
      setIsSignInError(true);
      setIsloading(false);
      console.error(error);
    }
  };
  //
  const handleSignUp = async () => {
    setIsloading(true);
    setIsDuplicateSignUpOrError({ msg: "", isError: false });
    //
    const res = await createUser({
      username,
      password,
      userId: self.crypto.randomUUID(),
    });
    //
    if (res.message === "Dulicate Username") {
      setIsDuplicateSignUpOrError({
        msg: "Username already exists",
        isError: true,
      });
      setIsloading(false);
      return;
    }
    if (res.message === "Error creating account") {
      setIsDuplicateSignUpOrError({
        msg: res?.message,
        isError: true,
      });
      setIsloading(false);
      return;
    }
    if (res.message === "User Created") {
      handleSignIn();
      return;
    }
  };
  //
  return (
    <form
      className="w-full grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        handleValidation();
        handleSubmit();
      }}
    >
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <CredentialsInput
            name="username"
            label="username"
            value={username}
            setValue={setUsername}
            isInputInvalid={isUsernameInvalid}
          />
          <CredentialsInput
            name="password"
            label="password"
            value={password}
            setValue={setPassword}
            isInputInvalid={isPasswordInvalid}
            isPasswordVisible={isPasswordVisible}
            setIsPasswordVisible={setIsPasswordVisible}
          />
        </>
      )}

      {isSignInError && <SignInError />}
      {isDuplicateSignUpOrError?.isError && (
        <DuplicateUser msg={isDuplicateSignUpOrError?.msg} />
      )}

      <SubmitBtn
        isSignUp={isSignUp}
        isLoading={isLoading}
        setIsSignUp={setIsSignUp}
        setPassword={setPassword}
        setUsername={setUsername}
        setIsSignInError={setIsSignInError}
        setIsDuplicateSignUpOrError={setIsDuplicateSignUpOrError}
      />
    </form>
  );
};

export default CredentialsSignIn;
