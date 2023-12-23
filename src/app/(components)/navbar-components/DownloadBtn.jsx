"use client";
// import {} from "../../../../public/local-fonts/RobotoSlab-VariableFont_wght.ttf";
// import {} from "../../(pdf)/pdf-styles.css";
import { DownloadIcon } from "../../../../public/assets";
import useGlobalContext from "@/app/context/useGlobalContext";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useTheme } from "next-themes";
//
import html2PDF from "jspdf-html2canvas";

const DownloadBtn = () => {
  const { theme } = useTheme();
  const { activeMdData } = useGlobalContext();
  //
  const handleDownloadMarkdown = () => {
    const link = document.createElement("a");
    const file = new Blob([activeMdData?.content], { type: "text/plain" });
    link.href = URL.createObjectURL(file);
    link.download = "untitled.md";
    link.click();
    URL.revokeObjectURL(link.href);
  };
  //
  const handlePDFCall = async () => {
    let getStyles;
    if (theme === "dark"){
      getStyles = await fetch(`/(pdf)/pdf-styles-dark.css`);
    }
    if (theme === "light"){
      getStyles = await fetch(`/(pdf)/pdf-styles.css`);
    }
    const currentStyles = await getStyles?.text();
    // console.log(await getStyles?.text())
    // console.log(getStyles)
    // console.log(await getStyles.text())
    const markdownPreviewHtml =
      document.getElementById("markdown-preview").innerHTML;
    try {
      const res = await fetch("http://localhost:3000/api/pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          htmlContent: markdownPreviewHtml,
          currentStyles,
          theme
        }),
      });
      if (res.ok) {
        // Handle successful response
        console.log("PDF generation request successful");
        //
        // Create a Blob from the response data
        console.log(res)
        const pdfBlob = await res.blob();

        // Create a link element to trigger the download
        const link = document.createElement("a");
        link.href = URL.createObjectURL(pdfBlob);
        link.download = "generated.pdf";

        // Trigger the download
        link.click();

        // Clean up the URL.createObjectURL
        URL.revokeObjectURL(link.href);
      } else {
        // Handle error response
        console.error("PDF generation request failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
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
  };
  //
  console.log("Download component");
  //
  return (
    <button onClick={handlePDFCall}>
      <DownloadIcon className="fill-darkGrey hover:fill-white active:fill-darkGrey" />
    </button>
  );
};

export default DownloadBtn;
