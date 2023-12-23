import { NextResponse, NextRequest } from "next/server";
import puppeteer from "puppeteer";
import stylePdf from "@/app/helpers/stylePdf";

export async function POST(req, res) {
  try {
    const { htmlContent, theme, currentStyles } = await req.json();
    // console.log(htmlContent);
    // console.log("currentStyles: ", currentStyles)
    // console.log("theme: ", theme)
    //
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // const htmlContent = "<h1>Hello, Puppeteer!</h1>";
    // await page.setContent(
    //   "<style>div {color: red;font-size: 16px;}</style><div>Hello, World!</div>"
    // );
    // const currentPDFStyles = await stylePdf(theme)
    // const currentPDFStylesString = await currentPDFStyles.text()
    // console.log(currentPDFStylesString)
    //
    // console.log("current styles (working): ", stylePdf(theme));
    // console.log("called styles (not-working): ", currentStyles);
    // console.log("current styles (working): ",typeof stylePdf(theme));
    // console.log("called styles (not-working): ",typeof currentStyles);
    // https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Roboto+Slab:wght@300;400;500;600;700;800&display=swap
    const htmlContentAndStyles = `<style>@import url(https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500;600;700;800&display=swap); @import url(https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Roboto+Slab:wght@300;400;500;600;700;800&display=swap); ${currentStyles} </style>${htmlContent}`;
    await page.setContent(htmlContentAndStyles, { waitUntil: "networkidle2" });

    // // Generate PDF
    // await page.pdf({ path: "test.pdf", format: "A4" });

    //
    const pdfBuffer = await page.pdf({ format: "A4", printBackground: true });
    // await page.setViewport({ width: 1080, height: 1024 });
    // const buffer = await page.pdf({ format: "A4" })
    //
    await browser.close();
    //
    // res.setHeader("Content-Type", "application/pdf");
    // res.setHeader("Content-Disposition", "attachment; filename=generated.pdf");
    // res.status(200).send(pdfBuffer);
    //
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
