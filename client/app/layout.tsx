import { Montserrat } from "next/font/google";
import Header from "@/components/Header/Header";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Stories from "@/components/Stories/Stories";
import Providers from "@/components/Providers/Providers";

const mont = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={mont.className}>
      <body className="bg-neutral-200 transition-all">
        <Providers>
          <Header />
          <Stories />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
