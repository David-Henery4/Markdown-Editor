import markdownList from "@/app/(models)/markdownListSchema";
import { NextResponse } from "next/server";

export async function DELETE(req, { params: { id } }) {
  try {
    const res = await markdownList.findOneAndDelete({ id: id });
    //
    return NextResponse.json(
      { message: "Markdown Successfully delete" },
      { status: 201 }
    );
  } catch (error) {
    //
    return NextResponse.json(
      { message: "Failed to delete", error },
      { status: 500 }
    );
  }
}

export async function PUT(req, { params: { id } }) {
  try {
    const body = await req.json();
    const newMarkdownData = body.markdownData;
    //
    const newData = await markdownList.findOneAndUpdate(
      { id: id },
      { ...newMarkdownData },
      { new: true }
    );
    //
    return NextResponse.json({message: "Markdown Successfully updated"}, {status: 201})
  } catch (error) {
    console.log(error)
    NextResponse.json({message: "Failed to update"}, {status: 500})
  }
}
