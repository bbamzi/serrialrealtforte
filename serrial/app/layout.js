import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./ui/header/Header";
import Footer from "./ui/footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Serrial Realty Forte Limited",
  description: "Land and Landed Property Management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {" "}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
