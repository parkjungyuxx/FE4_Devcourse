import Link from "next/link";
import { Nanum_Pen_Script } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
const nanumPen = Nanum_Pen_Script({
  variable: "--font-pen",
  weight: "400",
  subsets: ["latin"],
});

const doldam = localFont({
  variable: "--font-doldam",
  src: [
    {
      path: "../assets/fonts/doldam.woff2",
    },
    {
      path: "../assets/fonts/doldam.woff",
    },
  ],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nanumPen.variable} ${doldam.variable}`}>
        <nav>
          <ul>
            <li className="font-pen">
              <Link href="/login">/login</Link>
            </li>
            <li>
              <Link href="/register" prefetch={false}>
                /register
              </Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
