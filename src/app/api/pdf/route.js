import { NextResponse, NextRequest } from "next/server";
import puppeteer from "puppeteer";

export async function POST(req, res) {
  try {
    const { htmlContent, currentStyles } = await req.json();
    //
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    //
    const htmlContentAndStyles = `<style>@import url(https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500;600;700;800&display=swap); @import url(https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Roboto+Slab:wght@300;400;500;600;700;800&display=swap); ${currentStyles} </style>${htmlContent}`;
    //
    await page.setContent(htmlContentAndStyles, { waitUntil: "networkidle2" });
    //
    const pdfBuffer = await page.pdf({ format: "A4", printBackground: true });
    //
    await browser.close();
    //
    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=generated.pdf",
      },
    });
  } catch (error) {
    return NextResponse.json({ msg: "Essor", error }, { status: 400 });
  }
}
