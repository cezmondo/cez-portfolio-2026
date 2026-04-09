import SidebarNav from "../components/SidebarNav";
import Footer from "../components/Footer";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SidebarNav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
