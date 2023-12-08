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

export async function POST (req) {
  try {
    console.log("request data: ",req)
    const body = await req.json()
    console.log("body data: ",body)
    const newMarkdownData = body.markdownData;
    console.log("new markdown data: ",newMarkdownData)
    //
    await markdownList.create(newMarkdownData)
    //
    return NextResponse.json({message: "Markdown created"}, {status: 201})
  } catch (error) {
    return NextResponse.json({message: "Markdown Creation Failed"}, {status: 500})
  }
}