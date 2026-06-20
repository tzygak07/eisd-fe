import { Search, Bell, HelpCircle } from "lucide-react";

export default function TopbarWarga() {
  return (
    <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-10">
      <div className="relative w-96">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
        <input
          type="text"
          placeholder="Cari data..."
          className="w-full bg-slate-50 border border-slate-200 rounded-full pl-12 pr-4 py-2.5 text-sm font-medium focus:outline-none focus:border-action focus:ring-1 focus:ring-action transition-all"
        />
      </div>

      <div className="flex items-center gap-5">
        <button className="text-slate-400 hover:text-primary transition-colors">
          <Bell size={20} />
        </button>
        <button className="text-slate-400 hover:text-primary transition-colors">
          <HelpCircle size={20} />
        </button>
        
        <div className="w-px h-8 bg-slate-200 mx-2"></div>
        
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="text-right">
            <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">Bpk. Sudirman</p>
            <p className="text-[10px] font-semibold text-slate-400">Blok A2 / No. 14</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-slate-100 overflow-hidden shadow-sm">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sudirman" 
              alt="Avatar" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}