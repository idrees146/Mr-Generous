import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import SessionWrapper from "./Components/SessionWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Mr. Generous - Donate me Some Money",
  description: "Donate me some money so that you may earn your akhirah through it",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className="min-h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white">
        <SessionWrapper>



          <Navbar />

          <div className="min-h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white">



            {children}

          </div>
          <Footer />

        </SessionWrapper>
      </body>
    </html>
  );
}
