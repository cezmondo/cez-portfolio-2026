import Header from "../components/Header";
import { HeaderThemeProvider } from "../components/HeaderThemeContext";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <HeaderThemeProvider>
      <Header />
      <main className="pt-20">{children}</main>
    </HeaderThemeProvider>
  );
}
