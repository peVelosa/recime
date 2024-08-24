"use client";

import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import { GSAPInitializer } from "@/lib/gsap";
import { GlobalStyles } from "@/styles/global";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <GSAPInitializer />
            <Navbar />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
