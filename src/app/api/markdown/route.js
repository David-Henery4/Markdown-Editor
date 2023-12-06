import markdownList from "@/app/(models)/markdownListSchema";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    console.log("called")
    const allMarkdowns = await markdownList.find({});
    // console.log(allMarkdowns)
    //
    return NextResponse.json(
      { message: "Success", data: allMarkdowns },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse(
      {
        message: "GET markdown failed",
        error,
      },
      { status: 500 }
    );
  }
}
