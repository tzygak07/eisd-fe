import { Search, Bell, BellOff } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-10">
      {/* Search Bar */}
      <div className="relative w-96">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input
          type="text"
          placeholder="Cari node sensor..."
          className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-action focus:ring-1 focus:ring-action transition-all"
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <button className="text-slate-500 hover:text-primary transition-colors">
          <Bell size={20} />
        </button>
        <button className="text-slate-500 hover:text-primary transition-colors">
          <BellOff size={20} />
        </button>
        <div className="w-px h-6 bg-slate-200 mx-2"></div>
        
        {/* User Avatar */}
        <div className="w-8 h-8 rounded-full bg-slate-200 border border-slate-300 overflow-hidden">
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
            alt="User Avatar" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}