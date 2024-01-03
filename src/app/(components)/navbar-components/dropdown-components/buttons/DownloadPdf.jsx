import { DownloadPDFIcon } from "../../../../../../public/assets";
import { useTheme } from "next-themes";
import pdfStyles from "@/app/(pdf)/pdfStyles";

const DownloadPdf = ({ setIsDropdownOpen }) => {
  const { resolvedTheme } = useTheme();
  //
  const handlePDFCall = async () => {
    //
    const markdownPreviewHtml =
      document.getElementById("markdown-preview").innerHTML;
    //
    setIsDropdownOpen(false);
    //
    try {
      const res = await fetch("/api/pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          htmlContent: markdownPreviewHtml,
          currentStyles: pdfStyles(resolvedTheme),
        }),
      });
      //
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
      console.log("An error occurred:", error);
    }
  };
  //
  return (
    <li
      className="w-full flex flex-col-reverse gap-2 justify-between items-center smTablet:gap-12 smTablet:flex-row group hover:cursor-pointer"
      onClick={handlePDFCall}
    >
      <p className="w-max text-white group-hover:text-orange">
        Download as PDF
      </p>
      <button>
        <DownloadPDFIcon className="fill-white group-hover:fill-orange" />
      </button>
    </li>
  );
};

export default DownloadPdf;
