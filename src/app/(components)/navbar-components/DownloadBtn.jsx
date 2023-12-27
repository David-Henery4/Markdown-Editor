"use client";
import { DownloadIcon } from "../../../../public/assets";
import useGlobalContext from "@/app/context/useGlobalContext";
import { useTheme } from "next-themes";

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
    //
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
          currentStyles
        }),
      });
      if (res.ok) {
        // Handle successful response
        console.log("PDF generation request successful");
        // Create a Blob from the response data
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
  return (
    <button onClick={handlePDFCall}>
      <DownloadIcon className="fill-darkGrey hover:fill-white active:fill-darkGrey" />
    </button>
  );
};

export default DownloadBtn;
