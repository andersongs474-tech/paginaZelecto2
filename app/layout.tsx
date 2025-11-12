import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import LottieIcon from "./components/UI/LottieIcon";
// import Aurora from "./components/UI/Aura";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zelecto Lab",
  description: "Pagina web de zelecto lab - empresa de marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative min-h-screen bg-negro text-white">
          {/* <Aurora /> */}
          <Navbar />
          <main>{children}</main> {/* Envuelve a children en un <main> es buena práctica */}
        </div>
        
      </body>
      {/* <LottieIcon 
              src="animations/panda call center.lottie" 
              className="fixed bottom-0 right-0 -translate-x-1/2 -translate-y-1/4 w-64 h-64"
            /> */}
    </html>
  );
}
