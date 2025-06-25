import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
const inter = localFont({
  src: [
    {
      path: "./fonts/Inter.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Inter.ttf",
      weight: "500",
      style: "normal",
    },
     {
      path: "./fonts/Inter.ttf",
      weight: "600",
      style: "normal",
    },
     {
      path: "./fonts/Inter.ttf",
      weight: "700",
      style: "normal",
    },
     {
      path: "./fonts/Inter.ttf",
      weight: "800",
      style: "normal",
    }
  ],
  variable: "--font-inter",
});
export const metadata: Metadata = {
  title: "JVAI_Task",
  description: "Created by Tanvir Hasan Tamal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}    cz-shortcut-listen="true"
      >
        {children}
      </body>
    </html>
  );
}
