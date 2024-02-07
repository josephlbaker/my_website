import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/src/components/header";
import Footer from "@/src/components/footer";
import ActiveSectionContextProvider from "../context/active_section_context";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "../components/theme_switch";
import ThemeContextProvider from "../context/theme_context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Joseph Baker | Portfolio",
  description: "Joseph is a full-stack developer with 5 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute -z-10 top-[-6rem] right-0 sm:right-[11rem] h-[31.25rem] w-full sm:w-[31.25rem] md:w-[50rem] lg:w-[68.75rem] rounded-full blur-[10rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute -z-10 top-[-1rem] left-0 sm:left-[-35rem] h-[31.25rem] w-full sm:w-[50rem] md:w-[68.75rem] rounded-full blur-[10rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>                                 
  );
}
