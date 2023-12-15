import { roboto, robotoSlab, robotoMono } from "./font/font";
import "./globals.css";
import Providers from "./providers/Providers";
import AuthProvider from "./(components)/AuthProvider";

export const metadata = {
  title: "Markdown Editor",
  description: "An In-browser markdown editor",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${robotoSlab.variable} ${robotoMono.variable}`}
    >
      <body className="font-roboto">
        <AuthProvider>
          <Providers>{children}</Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
