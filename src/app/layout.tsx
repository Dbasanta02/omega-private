import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Omega AI Dashboard",
  description: "God-tier Autonomous Trading Intelligence",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
