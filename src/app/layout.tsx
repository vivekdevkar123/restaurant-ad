import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
import FaviconLinks from "@/components/FaviconLinks";
import { Metadata } from "next";

const font = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], });

export const metadata: Metadata = {
  title: "Sopu's Cloud Kitchen - Authentic Biryani & Indian Cuisine",
  description: "Order authentic, handcrafted biryanis from Sopu's Cloud Kitchen. Experience traditional slow-cooked biryani with aromatic spices and fresh ingredients. Available on Zomato & Swiggy.",
  keywords: "biryani, cloud kitchen, Sopu's kitchen, authentic biryani, Indian food, online food order, Zomato, Swiggy, home delivery, best biryani",
  authors: [{ name: "Sopu's Cloud Kitchen" }],
  creator: "Sopu's Cloud Kitchen",
  publisher: "Sopu's Cloud Kitchen",
  metadataBase: new URL('https://sopuskitchen.com'),
  openGraph: {
    title: "Sopu's Cloud Kitchen - Authentic Biryani",
    description: "Order authentic, handcrafted biryanis from Sopu's Cloud Kitchen. Experience traditional slow-cooked biryani with aromatic spices.",
    url: 'https://sopuskitchen.com',
    siteName: "Sopu's Cloud Kitchen",
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sopu's Cloud Kitchen - Authentic Biryani",
    description: "Order authentic, handcrafted biryanis from Sopu's Cloud Kitchen",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://sopuskitchen.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ef4444" />
      </head>
      <body className={`${font.className}`}>
        <FaviconLinks />
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          defaultTheme="system"
        >
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
