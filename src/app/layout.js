import { Inter } from "next/font/google";
import "./globals.css";
import Navber from "./Components/Header";
import Footer from "./Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pet Zone Website",
  description: "Pet Adoption Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <Navber></Navber>
        {children}
        <Footer></Footer>
        </body>
    </html>
  );
}
