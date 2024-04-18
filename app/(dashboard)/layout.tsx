import Navbar from "@/app/(dashboard)/_components/navbar";
import Sidebar from "./_components/sidebar";
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
        <Navbar />
      </div>
      <div className="fixed inset-y-0 hidden w-56 h-full md:flex-col md:flex z:50">
        <Sidebar />
      </div>
      <main className="h-full md:pl-56 pt-[80px]">{children}</main>
    </div>
  );
};

export default DashboardLayout;
