const SubmitBtn = ({
  isSignUp,
  isLoading,
  setIsSignUp,
  setUsername,
  setPassword,
  setIsSignInError,
  setIsDuplicateSignUpOrError,
}) => {
  return (
    <div className="w-full mt-6">
      <button
        className="w-full py-6 px-3 rounded-[10px] font-semibold bg-orange hover:bg-lightOrange active:bg-orange"
        type="submit"
        disabled={isLoading}
      >
        {isSignUp ? "Sign Up" : "Login"}
      </button>
      <p className="text-sm mt-4">
        {isSignUp ? "Already have an account?" : "Don't have an account?"}
        <span
          className="text-orange ml-1 hover:text-lightOrange hover:cursor-pointer"
          onClick={() => {
            setIsSignUp(!isSignUp)
            setPassword("")
            setUsername("")
            setIsSignInError(false)
            setIsDuplicateSignUpOrError({
              msg:"",
              isError: false
            })
          }}
        >
          {isSignUp ? "Log in!" : "Sign up!"}
        </span>
      </p>
    </div>
  );
};

export default SubmitBtn;
