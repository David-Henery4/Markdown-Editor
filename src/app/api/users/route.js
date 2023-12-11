import User from "@/app/(models)/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"

export async function POST (req) {
  try {
    //
    const body = await req.json()
    const userData = body.userData

    // if data missing
    if (!userData.username || !userData.password){
      return NextResponse.json({message: "All fields are required"}, {status: 400})
    }

    // Check for dulicate username
    const duplicate = await User.findOne({username: userData.username}).lean().exec()
    if (duplicate){
      return NextResponse.json({ message: "Duplicate Username"}, {status: 409})
    }

    // Hash password (Hide/bcrypt passowrd)
    const hashPassword = await bcrypt.hash(userData.password, 4)
    // replace password with hashed password
    userData.password = hashPassword
    
    // Create User
    await User.create(userData)
    return NextResponse.json({message: "User Created"}, {status: 201})

  } catch (error) {
    console.log(error)
    return NextResponse.json({message: "Error", error})
  }
}
