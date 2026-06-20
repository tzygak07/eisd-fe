import SidebarWarga from "@/components/layouts/SidebarWarga";
import TopbarWarga from "@/components/layouts/TopbarWarga";

export default function WargaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <SidebarWarga />
      <div className="flex-1 flex flex-col h-screen overflow-hidden bg-slate-50">
        <TopbarWarga />
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}