import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { dark } from "@clerk/themes"; 
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{baseTheme:dark}}>
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
        attribute="class"
        forcedTheme="dark"
        storageKey="gamehub-theme"
        >
        {children}
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}