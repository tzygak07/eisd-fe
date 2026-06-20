"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, Droplets, Cylinder, Receipt, 
  Bell, Settings, MessageSquareWarning, Headset, LogOut
} from "lucide-react";

export default function SidebarWarga() {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/warga" },
    { name: "Kualitas Air", icon: Droplets, href: "/warga/kualitas-air" },
    { name: "Monitor Tangki", icon: Cylinder, href: "/warga/tangki" },
    { name: "Penagihan", icon: Receipt, href: "/warga/penagihan" },
    { name: "Notifikasi", icon: Bell, href: "/warga/notifikasi" },
    { name: "Pengaturan Akun", icon: Settings, href: "/warga/pengaturan" },
  ];

  return (
    <aside className="w-64 bg-slate-50 border-r border-slate-200 flex flex-col h-screen sticky top-0">
      <div className="p-6 flex items-center gap-3 border-b border-slate-200">
        <div className="text-action">
          <Droplets size={28} fill="currentColor" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-primary leading-none tracking-tight">AirBersih.id</h1>
          <p className="text-[10px] text-slate-500 font-medium mt-1">Warga</p>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-6">
        <ul className="space-y-1 px-4">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-action text-white shadow-sm"
                      : "text-slate-600 hover:bg-slate-200 hover:text-primary"
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

      <div className="p-5 border-t border-slate-200 space-y-3">
        <button className="w-full flex items-center justify-center gap-2 bg-[#006591] hover:bg-blue-800 text-white py-3 rounded-lg text-sm font-bold transition-colors shadow-sm">
          Report Issue
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 text-xs font-bold text-slate-600 hover:text-primary transition-colors">
          <Headset size={16} />
          Technical Support
        </button>
        <button className="w-full flex items-center gap-3 px-3 py-2 text-xs font-bold text-danger hover:text-red-600 transition-colors">
          <LogOut size={16} />
          Log Out
        </button>
      </div>
    </aside>
  );
}