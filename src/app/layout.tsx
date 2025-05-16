import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge} from "tailwind-merge";

import "@fortawesome/fontawesome-svg-core/styles.css";
import {config} from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false;

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PICE",
  description: "Landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative" suppressHydrationWarning={true}>
      <head>

        <script
          // you might need to get a newer version
          src="https://kit.fontawesome.com/fbadad80a0.js"
          crossOrigin="anonymous"
        ></script>

        <link 
          rel="stylesheet" 
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" 
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        />

        {/* <!-- Make sure you put this AFTER Leaflet's CSS --> */}
        <script 
          type="text/javascript"
          src="/static/leaflet.js" 
        ></script>

        <script 
          defer 
          type="text/javascript" 
          src="/static/script.js"
        ></script>

      </head>
      <body className={twMerge(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        {children}
      </body>
    </html>
  );
}
