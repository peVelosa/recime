"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";

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
            <Navbar />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
