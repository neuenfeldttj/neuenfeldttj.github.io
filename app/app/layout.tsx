import { Barlow_Condensed } from "next/font/google";
import "./globals.css";


const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["500", "700", "900"]
}); 


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-16">
      <body className={`${barlow.variable} font-bold`}>
        {children}
      </body>
    </html>
);
}
