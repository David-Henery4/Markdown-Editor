import { Document, Page } from "@react-pdf/renderer";
import { Html } from "react-pdf-html";

const CreatedPdf = (styles, htmlContent) => {
  const htmlAndStyles = `<html>
      <body>
        <style>@import url(https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500;600;700;800&display=swap); @import url(https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Roboto+Slab:wght@300;400;500;600;700;800&display=swap); ${styles} </style>
        ${htmlContent}
      </body>
    </html>`;
  //
  const PdfDoc = (
    <Document>
      <Page>
        <Html>{htmlAndStyles}</Html>
      </Page>
    </Document>
  );
  return PdfDoc;
};

export default CreatedPdf;
