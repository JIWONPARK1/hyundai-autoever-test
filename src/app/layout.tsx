import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import MswComponent from "@/components/MswComponent";
import { TopButton } from "@/components/TopButton/TopButton";

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  import("../../mocks/initMocks").then(({ initMocks }) => initMocks());
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
      <body>
        <Header />
        <MswComponent>{children}</MswComponent>
        <Footer />
        <TopButton />
      </body>
    </html>
  );
}
