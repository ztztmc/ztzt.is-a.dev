import { Geist } from "next/font/google";
import "./globals.css";
import PixelArt from "./components/PixelArt";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata = {
  title: "ztzt",
  description: "Personal website to showcase my projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.className}>
      <body className={`antialiased select-none bg-[#0f0f0f] text-[#ccc6c2]`}>
        <div className="relative">
          <PixelArt />
          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
