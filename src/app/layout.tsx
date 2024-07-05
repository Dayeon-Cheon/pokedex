export const metadata = {
  title: "Pokemon Detail",
  description: "포켓몬의 상세 정보를 볼 수 있는 페이지 입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
