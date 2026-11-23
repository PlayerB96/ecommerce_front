import type { Metadata } from "next";
import { Libre_Baskerville, Montserrat } from "next/font/google";
import { env } from "@/shared/config/env";
import "./globals.css";

/** Únicas tipografías permitidas — ver brand.fonts */
const brandSans = Montserrat({
  variable: "--font-brand-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const brandSerif = Libre_Baskerville({
  variable: "--font-brand-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(env.siteUrl),
  title: {
    default: `${env.siteName} | Tienda online Perú`,
    template: `%s | ${env.siteName}`,
  },
  description: `Compra online en ${env.siteName}. Prendas, calzado y moda con envío a todo el Perú.`,
  openGraph: {
    siteName: env.siteName,
    locale: "es_PE",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-PE"
      className={`${brandSans.variable} ${brandSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-brand-white font-sans text-brand-black">
        {children}
      </body>
    </html>
  );
}
