"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, Droplets, SlidersHorizontal, Cylinder, 
  Sprout, Receipt, AlertTriangle, Settings, Phone, LogOut, ShieldAlert
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/pengurus" },
    { name: "Kualitas Air", icon: Droplets, href: "/pengurus/kualitas-air" },
    { name: "Kontrol Pompa", icon: SlidersHorizontal, href: "/pengurus/kontrol-pompa" },
    { name: "Monitor Tangki", icon: Cylinder, href: "/pengurus/tangki" },
    { name: "Monitoring Tanah", icon: Sprout, href: "/pengurus/tanah" },
    { name: "Penagihan", icon: Receipt, href: "/pengurus/penagihan" },
    { name: "Manajemen Alert", icon: AlertTriangle, href: "/pengurus/alert" },
    { name: "Pengaturan Sistem", icon: Settings, href: "/pengurus/pengaturan" },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col h-screen sticky top-0">
      {/* Logo Area */}
      <div className="p-6 flex items-center gap-3 border-b border-slate-100">
        <div className="text-action">
          <Droplets size={28} fill="currentColor" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-primary leading-none tracking-tight">AirBersih.id</h1>
          <p className="text-[10px] text-slate-500 font-medium mt-1">Manajemen RT/RW</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-3">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-action text-white"
                      : "text-slate-600 hover:bg-slate-50 hover:text-primary"
                  }`}
                >
                  <item.icon size={18} />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-slate-100 space-y-2">
        <button className="w-full flex items-center justify-center gap-2 bg-danger hover:bg-red-600 text-white py-2.5 rounded-lg text-sm font-bold transition-colors">
          <ShieldAlert size={18} />
          Berhenti Darurat
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:text-primary transition-colors">
          <Phone size={18} />
          Dukungan Teknis
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-danger hover:text-red-600 transition-colors">
          <LogOut size={18} />
          Log Out
        </button>
      </div>
    </aside>
  );
}