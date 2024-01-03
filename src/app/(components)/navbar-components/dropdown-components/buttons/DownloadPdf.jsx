import { DownloadPDFIcon } from "../../../../../../public/assets";
import { useTheme } from "next-themes";
import pdfStyles from "@/app/(pdf)/pdfStyles";
// import CreatedPdf from "@/app/(pdf)/CreatedPdf";
// import { usePDF, Document, Page, pdf, Font } from "@react-pdf/renderer";
// import { Html } from "react-pdf-html";
// import { useState } from "react";
// import { Roboto_Slab } from "next/font/google";

// Font.register({
//   family: "Roboto Slab",
//   src: "/assets/RobotoSlab-VariableFont_wght.ttf",
//   fontWeight: 700,
// });

// const getDoc = (styles, htmlContent) => {
//   // const htmlAndStyles = `<html><body><style>${styles}</style>${htmlContent}</body></html>`;
//   // console.log(htmlAndStyles);
//   const MyDoc = (
//     <Document>
//       <Page>
//         <Html>
//           {`<html>
//         <body>
//         <style>
//         html,
//         body {
//           background-color: #151619;
//           color: #c1c4cb;
//           padding: 24px 40px;
//           font-family: "Roboto Slab";
//           }
//         h1 {
//           font-size: 32px;
//           color: #fff;
//           font-weight: 700;
//         }
//         h2 {
          
//           font-size: 28px;
//           color: #fff;
//         }
//         h3 {
          
//           font-size: 24px ;
//           color: #fff;
//         }
//         h4 {
          
//           font-size: 20px ;
//           color: #fff;
//         }
//         h5 {
          
//           font-size: 16px;
//           color: #fff;
//         }
//         h6 {
          
//           font-size: 14px ;
//           color: #e46643;
//         }
//         p {
          
//           font-size: 14px;
//         }
//         blockquote {
//           padding: 24px;
//           border-radius: 4px;
//           border-left-width: 4px;
//           border-left-color: #e46643;
//           background-color: #2b2d31;
//           color: #fff;
//         }
//         code {
//           width: 100%;
//           display: inline-block;
          
//           font-size: 14px ;
//           color: #fff;
//         }
//         a {
//           font-style: italic;
//           color: #e46643;
//         }
//         a:hover {
//           color: #f39765;
//         }
//         li {
          
//           font-size: 14px;
//         }
//         strong{
          
//           font-size: 14px;
//         }
//         pre{
//           width: 100%;
//           padding: 24px;
//           margin-top: 20px;
//           margin-bottom: 20px ;
//           background-color: #2B2D31;
//           border-radius: 4px;
          
//           font-size: 14px ;
//           color: #fff;
//         }
//         img{
//           width: 100%;
//         }
//         </style>
//         ${htmlContent}
//         </body></html>`}
//         </Html>
//       </Page>
//     </Document>
//   );
//   return MyDoc;
// };

// const MyDoc = (
//   <Document>
//     <Page>
//       <Html>
//         {`<html>
//         <body>
//         <style>
//         h1 {
//           color: red;
//         }
//         </style>
//         <h1>Hello there</h1>
//         </body></html>`}
//       </Html>
//     </Page>
//   </Document>
// );

const DownloadPdf = ({ setIsDropdownOpen }) => {
  // const [instance, updateInstance] = usePDF({ document: getDoc() });
  // const [doc, setDoc] = useState({})
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
    // const checkStyles = await getStyles;
    // console.log(checkStyles);
    const currentStyles = await getStyles?.text();
    //
    const markdownPreviewHtml =
      document.getElementById("markdown-preview").innerHTML;
    //
    setIsDropdownOpen(false);
    //

    // // const PdfDoc = CreatedPdf(JSON.stringify(currentStyles), JSON.stringify(markdownPreviewHtml));
    // // const PdfDoc = CreatedPdf(currentStyles, markdownPreviewHtml);
    // // setDoc(PdfDoc)
    // // console.log(PdfDoc)
    // // console.log(instance)
    // // setInstance({ document: PdfDoc });
    // //
    // console.log(getDoc());
    // const newDoc = getDoc(currentStyles, markdownPreviewHtml);
    // // console.log(newDoc)
    // const blob = await pdf(newDoc).toBlob();
    // console.log(blob);
    // // console.log(updateInstance)
    // // updateInstance(newDoc);
    // console.log(instance);
    // //
    // const link = document.createElement("a");
    // link.href = URL.createObjectURL(blob);
    // // link.href = URL.createObjectURL(instance.url);
    // // link.href = instance.url;
    // link.download = "untitled.pdf";
    // link.click();
    // URL.revokeObjectURL(link.href);
    //
    // Prod:url https://markdown-editor-md.vercel.app/
    // Dev:url http://localhost:3000/
    try {
      const res = await fetch("/api/pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          htmlContent: markdownPreviewHtml,
          currentStyles: pdfStyles(theme)
        }),
      });
      console.log("response",res)
      console.log("theme",theme)
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
