import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata = {
  title: "ztzt",
  description: "Personal website to showcase my projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geist.className}>
      <body className={`antialiased bg-[#0f0f0f] text-[#ccc6c2]`}>
        {children}
      </body>
    </html>
  );
}
