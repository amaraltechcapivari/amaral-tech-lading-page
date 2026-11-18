import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { siteConfig, getLocationLabel } from "@/config/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const location = getLocationLabel();
const description = location ? `${siteConfig.seo.description} Atendimento em ${location}.` : siteConfig.seo.description;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.seo.title,
    template: `%s | ${siteConfig.name}`,
  },
  description,
  keywords: [...siteConfig.seo.keywords, ...(location ? [location] : [])],
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.seo.locale,
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.seo.title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description,
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#080d19",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${manrope.variable} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
