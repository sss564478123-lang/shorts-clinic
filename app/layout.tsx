import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "쇼츠 제목 썸네일 점검 | 유튜브 쇼츠 업로드 전 점검 서비스",
  description:
    "유튜브 쇼츠 제목 추천, 썸네일 문구, 첫 3초 오프닝, 설명문을 업로드 전에 점검해드립니다. 쇼츠 업로드 전 점검이 필요할 때 바로 신청할 수 있습니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}