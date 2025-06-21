import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VoucherHub - Redeem Your Rewards",
  description: "Redeem your points for exciting vouchers and rewards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 font-sans">
        {children}
      </body>
    </html>
  );
}
