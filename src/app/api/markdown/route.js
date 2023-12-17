import markdownList from "@/app/(models)/markdownListSchema";
import { NextResponse } from "next/server";

// Get all markdowns
export async function GET() {
  try {
    console.log("called")
    const allMarkdowns = await markdownList.find({});
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

// Create markdown
export async function POST (req) {
  try {
    const body = await req.json()
    const newMarkdownData = body.markdownData;
    //
    await markdownList.create(newMarkdownData)
    //
    return NextResponse.json({message: "Markdown created"}, {status: 201})
  } catch (error) {
    return NextResponse.json({message: "Markdown Creation Failed"}, {status: 500})
  }
}