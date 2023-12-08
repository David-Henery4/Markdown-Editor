import markdownList from "@/app/(models)/markdownListSchema";
import { NextResponse } from "next/server";

export async function DELETE(req, { params: { id } }) {
  try {
    console.log("Delete request: ", req)
    console.log("Delete id: ", id)
    const res = await markdownList.findOneAndDelete({ id: id });
    console.log("Delete response: ", res);
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
    console.log("update request: ", req)
    const body = await req.json();
    console.log("update body: ", body);
    const newMarkdownData = body.markdownData;
    console.log("update data recieved: ", newMarkdownData);
    //
    const newData = await markdownList.findOneAndUpdate(
      { id: id },
      { ...newMarkdownData },
      { new: true }
    );
    console.log("update newData: ", newData);
    //
    return NextResponse.json({message: "Markdown Successfully updated"}, {status: 201})
  } catch (error) {
    console.log(error)
    NextResponse.json({message: "Failed to update"}, {status: 500})
  }
}
