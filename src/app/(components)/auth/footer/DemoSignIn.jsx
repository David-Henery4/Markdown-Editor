"use client"
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const DemoSignIn = () => {
  const router = useRouter()
  //
  const handleDemoSignIn = async () => {
    const data = await signIn("credentials", {
      redirect: false,
      username: "demo1234",
      password: "demo123456",
    });
    if (data.ok){
      router.refresh()
      return
    }
    console.log("Demo Sign-in error")
    console.error("Demo Sign-in error")
    return
  }
  //
  return (
    <div className="w-full text-xs mt-4 text-orange hover:text-lightOrange">
      <button onClick={handleDemoSignIn}>(Click here to login with a demo account)</button>
    </div>
  );
}

export default DemoSignIn