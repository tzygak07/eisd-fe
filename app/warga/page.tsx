import { Info, CheckCircle2, Megaphone } from "lucide-react";

export default function DashboardWarga() {
  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-10">
      
      {/* Hero Section */}
      <div className="bg-[#111827] rounded-2xl p-8 shadow-lg text-white">
        <h1 className="text-3xl font-bold mb-2">Halo, Bpk. Sudirman</h1>
        <p className="text-slate-400 text-sm">
          Selamat pagi! Kondisi air di lingkungan Anda hari ini terpantau <br/>
          <span className="font-bold text-white underline decoration-action decoration-2 underline-offset-4">Jernih & Layak</span> untuk dikonsumsi.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Kualitas Air Real-Time */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
          <div className="flex justify-between items-start mb-6 border-t-4 border-success pt-4 -mt-6">
            <div>
              <p className="text-[10px] font-bold text-action tracking-wider mb-2">KUALITAS AIR REAL-TIME</p>
              <h2 className="text-2xl font-bold text-success flex items-center gap-2">
                <div className="w-3 h-3 bg-success rounded-full ring-4 ring-green-50"></div>
                Jernih & Layak
              </h2>
            </div>
            <span className="bg-slate-50 border border-slate-100 text-slate-500 text-[10px] font-bold px-3 py-1.5 rounded-lg">
              Update: 2 menit yang lalu
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-slate-50 rounded-xl p-4 flex flex-col items-center justify-center text-center">
              <p className="text-xs font-semibold text-slate-500 mb-2">pH Level</p>
              <h3 className="text-3xl font-bold text-foreground mb-1">7.2</h3>
              <p className="text-[8px] font-bold text-success tracking-widest uppercase">Normal</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 flex flex-col items-center justify-center text-center">
              <p className="text-xs font-semibold text-slate-500 mb-2">TDS (PPM)</p>
              <h3 className="text-3xl font-bold text-foreground mb-1">120</h3>
              <p className="text-[8px] font-bold text-success tracking-widest uppercase">Sangat Baik</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 flex flex-col items-center justify-center text-center">
              <p className="text-xs font-semibold text-slate-500 mb-2">Turbidity</p>
              <h3 className="text-3xl font-bold text-foreground mb-1">0.8</h3>
              <p className="text-[8px] font-bold text-success tracking-widest uppercase">Jernih</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 flex flex-col items-center justify-center text-center">
              <p className="text-xs font-semibold text-slate-500 mb-2">Temp</p>
              <h3 className="text-3xl font-bold text-foreground mb-1">24°C</h3>
              <p className="text-[8px] font-bold text-success tracking-widest uppercase">Sejuk</p>
            </div>
          </div>
        </div>

        {/* Level Tangki Komunal */}
        <div className="lg:col-span-1 bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
          <p className="text-[10px] font-bold text-action tracking-wider mb-6">LEVEL TANGKI KOMUNAL</p>
          
          <div className="w-24 h-32 border-4 border-slate-200 rounded-t-2xl rounded-b-lg relative overflow-hidden mb-6 flex flex-col justify-end">
            <div className="bg-action w-full relative flex items-center justify-center" style={{ height: "78%" }}>
               <div className="absolute top-0 left-0 w-full h-2 bg-white/20"></div>
               <span className="text-white font-bold text-sm">78%</span>
            </div>
          </div>

          <p className="text-xs font-medium text-slate-600 mb-1">Cukup untuk 12 jam kedepan</p>
          <p className="text-xs font-bold text-primary">Status: Pengisian Aktif</p>
        </div>

        {/* Konsumsi Mingguan */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-slate-100 min-h-[300px] flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-bold text-foreground">Konsumsi Mingguan</h3>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
              <span className="text-[8px] font-bold text-slate-500 tracking-wider">LITER / HARI</span>
            </div>
          </div>
          
          {/* Chart Placeholder */}
          <div className="flex-1 flex items-end justify-between px-4 pb-2">
             {[
                { day: "SEN", h: "40%" }, { day: "SEL", h: "60%" }, 
                { day: "RAB", h: "50%" }, { day: "KAM", h: "80%", active: true }, 
                { day: "JUM", h: "30%" }, { day: "SAB", h: "70%" }, { day: "MIN", h: "90%" }
             ].map((bar, i) => (
                <div key={i} className="flex flex-col items-center gap-3 w-8 h-full justify-end">
                   <div className={`w-full rounded-t-sm ${bar.active ? 'bg-action' : 'bg-slate-100'}`} style={{ height: bar.h }}></div>
                   <span className={`text-[9px] font-bold ${bar.active ? 'text-action' : 'text-slate-400'}`}>{bar.day}</span>
                </div>
             ))}
          </div>
        </div>

        {/* Notifikasi Terbaru */}
        <div className="lg:col-span-1 bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col">
          <h3 className="text-lg font-bold text-foreground mb-6">Notifikasi Terbaru</h3>
          
          <div className="space-y-6 flex-1">
            <div className="flex gap-4 items-start">
              <div className="bg-green-50 text-success p-2 rounded-full shrink-0">
                <CheckCircle2 size={16} />
              </div>
              <div>
                <p className="text-xs font-bold text-foreground mb-1">Tagihan Air Lunas</p>
                <p className="text-[10px] text-slate-500 mb-1 leading-relaxed">Pembayaran untuk periode Mei 2024 berhasil.</p>
                <p className="text-[8px] font-semibold text-slate-400">Tadi pagi, 08:30</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-orange-50 text-warning p-2 rounded-full shrink-0">
                <Info size={16} />
              </div>
              <div>
                <p className="text-xs font-bold text-foreground mb-1">Pembersihan Filter</p>
                <p className="text-[10px] text-slate-500 mb-1 leading-relaxed">Jadwal pembersihan rutin tangki utama besok pukul 10:00.</p>
                <p className="text-[8px] font-semibold text-slate-400">Kemarin, 15:45</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-blue-50 text-action p-2 rounded-full shrink-0">
                <Megaphone size={16} />
              </div>
              <div>
                <p className="text-xs font-bold text-foreground mb-1">Tips Hemat Air</p>
                <p className="text-[10px] text-slate-500 mb-1 leading-relaxed">Gunakan shower daripada gayung untuk hemat air hingga 30%.</p>
                <p className="text-[8px] font-semibold text-slate-400">2 hari yang lalu</p>
              </div>
            </div>
          </div>

          <button className="w-full mt-4 py-2.5 border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors">
            Lihat Semua Notifikasi
          </button>
        </div>

      </div>
    </div>
  );
}