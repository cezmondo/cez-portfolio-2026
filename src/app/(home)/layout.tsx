import Header from "../components/Header";
import SidebarNav from "../components/SidebarNav";
import { HeaderThemeProvider } from "../components/HeaderThemeContext";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <HeaderThemeProvider>
      <Header />
      <SidebarNav />
      <main>{children}</main>
    </HeaderThemeProvider>
  );
}
