import AppProvider from "@/context/appProvider";
import "../styles/sass/index.scss";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <p style={{ color: "red" }}>Root layout</p>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
