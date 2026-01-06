import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata = {
  title: "ztzt",
  description: "Personal website to showcase projects I have worked on.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geist.className}>
      <body className={`antialiased bg-neutral-950`}>{children}</body>
    </html>
  );
}
