"use client"
import { DownloadIcon } from "../../../../public/assets"
import useGlobalContext from "@/app/context/useGlobalContext";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
//
import html2PDF from "jspdf-html2canvas";

const DownloadBtn = () => {
  const { activeMdData } = useGlobalContext();
  //
  const handleDownloadMarkdown = () => {
    const link = document.createElement("a");
    const file = new Blob([activeMdData?.content], { type: "text/plain" });
    link.href = URL.createObjectURL(file);
    link.download = "untitled.md";
    link.click();
    URL.revokeObjectURL(link.href);
  }
  //
  const handlePDFDownload = async () => {
    const markdownPreview = document.getElementById("markdown-preview");
    // html2canvas(markdownPreview).then((canvas) => {
    //   const imgData = canvas.toDataURL("img/png")
    //   const doc = new jsPDF("p", "mm", "a4")
    //   const componentWidth = doc.internal.pageSize.getWidth()
    //   const componentHeight = doc.internal.pageSize.getHeight()
    //   doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight)
    //   doc.save("markdown.pdf")
    // })
    // html2PDF(markdownPreview, {
    //   jsPDF: {
    //     format: "a4",
    //   },
    //   imageType: "image/jpeg",
    //   output: "./pdf/generate.pdf",
    // });
    // window.print();
    //
    // let pdf = await new jsPDF();
    // await pdf.html(markdownPreview, {
    //   callback: function (doc) {
    //     doc.save("untitled.pdf");
    //   },
    //   margin: [10, 10, 10, 10],
    //   autoPaging: "text",
    //   x: 0,
    //   y: 0,
    //   width: 190, //target width in the PDF document
    //   windowWidth: 675, //window width in CSS pixels
    // });
    //
    let pdf = new jsPDF({
      orientation: "p",
      unit: "pt",
      format: "letter",
      putOnlyUsedFonts: true,
      compress: true,
    });
    await pdf.html(markdownPreview, {
      width: 580,
      windowWidth: 580,
      margin: 15,
    });
    // pdf.setFont("RobotoSlab", "normal");
    // pdf.lineH
    pdf.save();
    //
    // let pdf = new jsPDF();
    // await pdf.html(markdownPreview, {
    //   callback: function (doc) {
    //     doc.save("untitled.pdf");
    //   },
    //   margin: [10, 10, 10, 10],
    //   autoPaging: "text",

    //   x: 0,
    //   y: 0,
    //   width: 190, //target width in the PDF document
    //   windowWidth: 675, //window width in CSS pixels
    // })
    // pdf.save()
  }
  //
  console.log("Download component")
  //
  return (
    <button onClick={handlePDFDownload}>
      <DownloadIcon className="fill-darkGrey hover:fill-white active:fill-darkGrey" />
    </button>
  );
}

export default DownloadBtn