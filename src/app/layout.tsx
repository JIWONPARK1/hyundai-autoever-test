import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { MswComponent } from "@/components/MswComponent";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const queryClient = new QueryClient();

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  import("../../mocks/initMocks").then((mod) => mod.initMocks());
}

export const metadata: Metadata = {
  title: "Next.js App with React Query and MSW",
  description: "Example of using React Query and MSW in Next.js App Router",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <QueryClientProvider client={queryClient}>
          <MswComponent />
          {children}
        </QueryClientProvider>
      </body>
      <Footer />
    </html>
  );
}
