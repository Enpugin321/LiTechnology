// app/layout.tsx
import "./[locale]/globals.css";
import { montserrat } from "./[locale]/ui/fonts"; // если лежит там

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} relative`}>{children}</body>
    </html>
  );
}
