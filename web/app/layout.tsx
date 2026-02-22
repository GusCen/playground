import "./globals.css";

export const metadata = {
  title: "Dialed",
  description: "MTB suspension setup app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
