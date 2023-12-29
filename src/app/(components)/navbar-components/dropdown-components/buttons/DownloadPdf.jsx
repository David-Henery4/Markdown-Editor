import { DownloadPDFIcon } from "../../../../../../public/assets";
import { useTheme } from "next-themes";

const DownloadPdf = ({ setIsDropdownOpen }) => {
  const { theme } = useTheme();
  //
  const handlePDFCall = async () => {
    let getStyles;
    if (theme === "dark") {
      getStyles = await fetch(`/(pdf)/pdf-styles-dark.css`);
    }
    if (theme === "light") {
      getStyles = await fetch(`/(pdf)/pdf-styles.css`);
    }
    const currentStyles = await getStyles?.text();
    //
    const markdownPreviewHtml =
      document.getElementById("markdown-preview").innerHTML;
    //
    setIsDropdownOpen(false);
    // Prod:url https://markdown-editor-md.vercel.app/
    // Dev:url http://localhost:3000/
    try {
      const res = await fetch("http://localhost:3000/api/pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          htmlContent: markdownPreviewHtml,
          currentStyles,
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
