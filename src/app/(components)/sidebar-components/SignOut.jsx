"use client"
import {signOut} from "next-auth/react"

const SignOut = ({user}) => {
  //
  const handleSignOut = () => {
    signOut()
  }
  //
  return (
    <div className="w-full flex justify-between items-center">
      <button className="font-bold text-orange hover:text-lightOrange active:text-orange" onClick={() => handleSignOut()}>Sign Out</button>
      <p className="text-xs">{user?.name || user?.username}</p>
    </div>
  )
}

export default SignOut