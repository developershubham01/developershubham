import { Manrope, Sora } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata = {
  title: "Shubham Sharma | Python Full Stack Developer",
  description:
    "Portfolio of Shubham Sharma, a Python Full Stack Developer building scalable web apps with FastAPI, React, PostgreSQL, and AI integrations.",
  icons: {
    icon: "/profile-photo.jpg",
    shortcut: "/profile-photo.jpg",
    apple: "/profile-photo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${sora.variable}`}>{children}</body>
    </html>
  );
}
