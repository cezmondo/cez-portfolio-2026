import Header from "../components/Header";
import SidebarNav from "../components/SidebarNav";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <SidebarNav />
      <main>{children}</main>
    </>
  );
}
