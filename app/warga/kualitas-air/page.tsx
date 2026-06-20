import { 
  RefreshCw, Droplet, Thermometer, CheckCircle2, 
  Info, Ban, Filter, AlertCircle, Download, ClipboardList
} from "lucide-react";

export default function KualitasAirWargaPage() {
  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-10">
      
      {/* Top Status Bar */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-success rounded-full ring-4 ring-green-50"></div>
          <div>
            <p className="text-sm font-bold text-foreground">Kualitas Air: Aman</p>
            <p className="text-xs font-medium text-slate-500">Update terakhir: Hari ini, 10:45 WIB</p>
          </div>
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-[#006591] hover:bg-blue-800 text-white rounded-lg text-sm font-bold transition-colors">
          <RefreshCw size={16} /> Refresh Data
        </button>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Metric 1: Turbidity */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <p className="text-xs font-bold text-slate-500 tracking-wider">TURBIDITY (KEJERNIHAN)</p>
            <Droplet size={18} className="text-action" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            0.85 <span className="text-sm font-medium text-slate-500">NTU</span>
          </h2>
          <p className="text-xs font-bold text-success flex items-center gap-1.5 mt-auto">
            <CheckCircle2 size={14} /> Di bawah ambang batas (5 NTU)
          </p>
        </div>

        {/* Metric 2: Suhu Air */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <p className="text-xs font-bold text-slate-500 tracking-wider">SUHU AIR</p>
            <Thermometer size={18} className="text-[#006591]" />
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            24.2 <span className="text-sm font-medium text-slate-500">°C</span>
          </h2>
          <p className="text-xs font-bold text-success flex items-center gap-1.5 mt-auto">
            <CheckCircle2 size={14} /> Suhu optimal
          </p>
        </div>

      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column (Charts) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Line Chart: Grafik Historis */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col h-[320px]">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-sm font-bold text-foreground">Grafik Historis Turbidity</h3>
              <div className="flex bg-slate-100 p-1 rounded-lg">
                <button className="px-3 py-1 text-xs font-bold bg-white text-foreground rounded shadow-sm">Hari</button>
                <button className="px-3 py-1 text-xs font-medium text-slate-500 hover:text-foreground">Minggu</button>
              </div>
            </div>
            
            <div className="flex-1 relative flex flex-col justify-between">
              {/* Fake grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-6 opacity-30">
                 <div className="w-full border-t border-slate-200"></div>
                 <div className="w-full border-t border-slate-200"></div>
                 <div className="w-full border-t border-slate-200"></div>
                 <div className="w-full border-t border-slate-200"></div>
              </div>
              
              {/* SVG Line Chart (Simulated) */}
              <div className="absolute inset-0 pb-6 overflow-hidden">
                <svg viewBox="0 0 100 40" className="w-full h-full preserve-3d" preserveAspectRatio="none">
                  <path d="M0,30 C15,28 25,32 40,28 C55,24 65,15 80,25 C90,32 95,25 100,20" fill="none" stroke="#006591" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  {/* Subtle area fill */}
                  <path d="M0,30 C15,28 25,32 40,28 C55,24 65,15 80,25 C90,32 95,25 100,20 L100,40 L0,40 Z" fill="url(#gradient)" opacity="0.1" />
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#006591" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* X Axis Labels */}
              <div className="absolute bottom-0 w-full flex justify-between text-[10px] font-bold text-slate-400">
                <span>06:00</span>
                <span>09:00</span>
                <span>12:00</span>
                <span>15:00</span>
                <span>18:00</span>
                <span>21:00</span>
              </div>
            </div>
          </div>

          {/* Bar Chart: Suhu Rata-rata */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col h-[280px]">
            <h3 className="text-sm font-bold text-foreground mb-8">Suhu Rata-rata Mingguan</h3>
            
            <div className="flex-1 flex items-end justify-between gap-2 md:gap-4 relative px-2">
              {[
                { day: "SEN", h: "45%", val: "23.5°" },
                { day: "SEL", h: "55%", val: "23.8°" },
                { day: "RAB", h: "40%", val: "23.2°" },
                { day: "KAM", h: "65%", val: "24.0°" },
                { day: "JUM", h: "50%", val: "23.6°" },
                { day: "SAB", h: "35%", val: "23.0°" },
                { day: "MIN", h: "75%", val: "24.2°", active: true },
              ].map((bar, i) => (
                <div key={i} className="flex-1 flex flex-col items-center group h-full justify-end relative">
                  {bar.active && (
                    <span className="absolute -top-6 text-[10px] font-bold text-action">{bar.val}</span>
                  )}
                  <div 
                    className={`w-full max-w-[40px] rounded-t-md transition-all ${bar.active ? 'bg-[#006591]' : 'bg-[#E0F2FE] hover:bg-[#BAE6FD]'}`} 
                    style={{ height: bar.h }}
                  ></div>
                  <span className={`text-[10px] font-bold mt-3 ${bar.active ? 'text-action' : 'text-slate-400'}`}>{bar.day}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column (Side Panel) */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col h-full">
            
            <div className="flex items-center gap-2 mb-2">
              <ClipboardList className="text-primary" size={20} />
              <h3 className="text-base font-bold text-foreground">Panduan Tindakan</h3>
            </div>
            <p className="text-xs text-slate-500 mb-6">Berdasarkan status air saat ini</p>

            <div className="space-y-6 mb-8 flex-1">
              {/* Item 1 */}
              <div className="flex gap-4 items-start">
                <div className="bg-green-50 text-success p-1.5 rounded-full shrink-0 border border-green-100 mt-0.5">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground mb-1">Dapat Dikonsumsi Langsung</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Nilai kejernihan (NTU) sangat baik. Air aman untuk diminum setelah dimasak.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-4 items-start">
                <div className="bg-blue-50 text-action p-1.5 rounded-full shrink-0 border border-blue-100 mt-0.5">
                  <Info size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground mb-1">Perawatan Filter Rutin</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Meskipun status aman, pastikan filter utama rumah tangga dibersihkan setiap 30 hari.
                  </p>
                </div>
              </div>

              {/* Warning Box */}
              <div className="bg-red-50/50 border border-red-100 rounded-xl p-4 mt-4">
                <h4 className="text-[11px] font-bold text-danger uppercase tracking-wide mb-4">
                  JIKA STATUS BERUBAH KUNING/MERAH:
                </h4>
                <ul className="space-y-3">
                  <li className="flex gap-3 items-start">
                    <Ban size={14} className="text-danger shrink-0 mt-0.5" />
                    <span className="text-xs text-danger/90 leading-relaxed">Hindari konsumsi langsung tanpa filtrasi tambahan.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Filter size={14} className="text-danger shrink-0 mt-0.5" />
                    <span className="text-xs text-danger/90 leading-relaxed">Gunakan filter karbon aktif atau sediment filter 0.5 micron.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <AlertCircle size={14} className="text-danger shrink-0 mt-0.5" />
                    <span className="text-xs text-danger/90 leading-relaxed">Segera laporkan melalui menu "Report Issue" di navigasi.</span>
                  </li>
                </ul>
              </div>
            </div>

            <button className="w-full flex items-center justify-center gap-2 py-3 bg-white border-2 border-slate-200 hover:border-action text-action rounded-lg text-sm font-bold transition-colors">
              <Download size={16} /> Unduh Laporan Lengkap (PDF)
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}