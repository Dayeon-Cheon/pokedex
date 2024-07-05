import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokedex",
  description:
    "포켓몬 리스트를 한눈에! 모든 포켓몬의 이름, 번호, 타입, 특성 정보 등을 제공하는 사이트.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-blue-500 text-white text-center py-4">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold">포켓몬 도감</h2>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
