import { 
  Filter, Plus, AlertTriangle, CalendarClock, 
  Activity, Download, CheckCircle2 
} from "lucide-react";

// --- Dummy Data ---
const tankData = [
  {
    id: "AB-T101", name: "Main Tank A1", sector: "Sektor Utara",
    status: "Kritis", percentage: 12, vol: "12.000", max: "100.000",
    est: "~ 18 Jam", estDanger: true, btnDanger: true
  },
  {
    id: "AB-T202", name: "Sub Tank B2", sector: "Sektor Barat",
    status: "Sedang", percentage: 58, vol: "29.000", max: "50.000",
    est: "~ 4 Hari", estDanger: false, btnDanger: false
  },
  {
    id: "AB-T303", name: "Tower Tank C3", sector: "Sektor Timur",
    status: "Penuh", percentage: 92, vol: "184.000", max: "200.000",
    est: "~ 12 Hari", estDanger: false, btnDanger: false
  },
  {
    id: "AB-T203", name: "Sub Tank B3", sector: "Sektor Selatan",
    status: "Sedang", percentage: 42, vol: "21.000", max: "50.000",
    est: "~ 3 Hari", estDanger: false, btnDanger: false
  },
  {
    id: "AB-R505", name: "Reservoir R5", sector: "Cluster Utama",
    status: "Kritis", percentage: 8, vol: "16.000", max: "200.000",
    est: "~ 12 Jam", estDanger: true, btnDanger: true
  }
];

export default function MonitorTangkiPage() {
  return (
    <div className="space-y-6 pb-8">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="h2 text-foreground mb-1">Monitoring Tangki & Ketersediaan</h1>
          <p className="text-sm text-slate-500">Data real-time ketersediaan air bersih di area cakupan.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors">
            <Filter size={16} /> Filter Status
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-foreground text-white rounded-lg text-sm font-semibold hover:bg-slate-800 transition-colors">
            <Plus size={16} /> Tambah Tangki
          </button>
        </div>
      </div>

      {/* 4 Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center">
          <p className="text-[10px] font-bold text-slate-500 mb-2 tracking-wider">TOTAL KAPASITAS</p>
          <h2 className="text-3xl font-bold text-foreground">450.000 <span className="text-sm font-medium text-slate-500">Liter</span></h2>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center">
          <p className="text-[10px] font-bold text-slate-500 mb-2 tracking-wider">TERSEDIA SAAT INI</p>
          <div className="flex items-baseline gap-2">
            <h2 className="text-3xl font-bold text-action">312.450</h2>
            <div className="text-sm font-medium text-action flex flex-col leading-tight">
              <span>Liter</span>
              <span className="text-xs">(69%)</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center">
          <p className="text-[10px] font-bold text-slate-500 mb-2 tracking-wider">STATUS KRITIS</p>
          <h2 className="text-3xl font-bold text-foreground">2 <span className="text-sm font-medium text-slate-500">Tangki Refill</span></h2>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center">
          <p className="text-[10px] font-bold text-slate-500 mb-2 tracking-wider">RATA-RATA KONSUMSI</p>
          <h2 className="text-3xl font-bold text-foreground">42.500 <span className="text-sm font-medium text-slate-500">L / Hari</span></h2>
        </div>
      </div>

      {/* Main Grid: Tanks & Prediction */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        
        {/* Render Tank Cards */}
        {tankData.map((tank, index) => (
          <div key={index} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm flex flex-col">
            
            {/* Header Card */}
            <div className="flex justify-between items-start border-b border-slate-100 pb-4 mb-4">
              <div>
                <h3 className="text-lg font-bold text-foreground">{tank.name}</h3>
                <p className="text-xs text-slate-500">{tank.sector} • ID: {tank.id}</p>
              </div>
              
              {/* Status Badges */}
              {tank.status === "Kritis" && (
                <span className="flex items-center gap-1 bg-red-50 text-danger text-[10px] font-bold px-2.5 py-1 rounded-full border border-red-100">
                  <div className="w-1.5 h-1.5 rounded-full bg-danger"></div> Kritis
                </span>
              )}
              {tank.status === "Sedang" && (
                <span className="flex items-center gap-1 bg-slate-100 text-slate-600 text-[10px] font-bold px-2.5 py-1 rounded-full border border-slate-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div> Sedang
                </span>
              )}
              {tank.status === "Penuh" && (
                <span className="flex items-center gap-1 bg-blue-50 text-action text-[10px] font-bold px-2.5 py-1 rounded-full border border-blue-100">
                  <CheckCircle2 size={10} className="text-action" /> Penuh
                </span>
              )}
            </div>

            {/* Content Container (Visual + Stats) */}
            <div className="flex gap-6 flex-1 mb-5">
              
              {/* Tangki Visual representation */}
              <div className="w-24 h-40 bg-[#E0F2FE] rounded-[2rem] relative overflow-hidden flex flex-col justify-end shadow-inner border border-blue-100/50">
                <div 
                  className={`w-full transition-all duration-500 relative flex items-center justify-center ${tank.percentage < 20 ? 'bg-action/80' : 'bg-action'}`} 
                  style={{ height: `${tank.percentage}%`, minHeight: '15%' }}
                >
                  <span className={`absolute top-1/2 -translate-y-1/2 font-bold text-lg ${tank.percentage < 30 ? 'text-action -top-6 translate-y-0' : 'text-white'}`}>
                    {tank.percentage}%
                  </span>
                </div>
              </div>

              {/* Text Stats */}
              <div className="flex flex-col justify-between py-1">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 tracking-wider">Volume</p>
                  <p className="text-lg font-bold text-foreground">{tank.vol} <span className="text-xs font-medium text-slate-500">L</span></p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 tracking-wider">Kapasitas</p>
                  <p className="text-sm font-semibold text-slate-600">{tank.max} L</p>
                </div>
                <div>
                  <p className={`text-[10px] font-bold tracking-wider ${tank.estDanger ? 'text-danger' : 'text-slate-400'}`}>
                    Est. Ketersediaan
                  </p>
                  <p className={`text-base font-bold ${tank.estDanger ? 'text-danger' : 'text-foreground'}`}>
                    {tank.est}
                  </p>
                </div>
              </div>

            </div>

            {/* Buttons */}
            <div className="flex gap-2 mt-auto">
              <button 
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-colors ${
                  tank.btnDanger 
                    ? "bg-danger hover:bg-red-600 text-white" 
                    : "bg-foreground hover:bg-slate-800 text-white"
                }`}
              >
                <CalendarClock size={16} /> Jadwalkan Pengisian
              </button>
              <button className="p-2.5 bg-slate-50 border border-slate-200 text-slate-600 hover:text-action hover:border-action rounded-lg transition-colors">
                <Activity size={18} />
              </button>
            </div>
            
          </div>
        ))}

        {/* Card 6: Prediksi Konsumsi (Dark Card) */}
        <div className="bg-[#111827] rounded-xl border border-slate-800 p-6 shadow-lg flex flex-col text-white">
          <h3 className="text-lg font-bold mb-3">Prediksi Konsumsi</h3>
          <p className="text-sm text-slate-400 mb-8 leading-relaxed">
            Berdasarkan data 7 hari terakhir, konsumsi air diperkirakan naik 15% akhir pekan ini karena hari libur nasional.
          </p>
          
          <div className="space-y-4 mb-8 flex-1">
            <div className="flex justify-between items-center pb-3 border-b border-slate-700/50">
              <span className="text-sm font-medium text-slate-300">Senin - Jumat</span>
              <span className="text-sm font-bold">42rb L/hari</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-slate-700/50">
              <span className="text-sm font-medium text-slate-300">Sabtu - Minggu</span>
              <span className="text-sm font-bold">58rb L/hari</span>
            </div>
          </div>

          <button className="w-full py-3 bg-white text-foreground hover:bg-slate-200 text-sm font-bold rounded-lg flex items-center justify-center gap-2 transition-colors">
            <Download size={16} /> Unduh Laporan
          </button>
        </div>

      </div>

      {/* Bottom Alert Banner */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-5 flex flex-col sm:flex-row items-center gap-4 shadow-sm">
        <div className="bg-danger text-white p-2 rounded-lg shrink-0">
          <AlertTriangle size={24} />
        </div>
        <div className="flex-1">
          <h4 className="text-danger font-bold text-sm mb-1">Peringatan Sistem Otomatis</h4>
          <p className="text-danger/80 text-xs font-medium">
            Kapasitas Main Tank A1 di bawah ambang batas (15%). Order refill otomatis telah dikirim ke supplier (ID: #REFILL-0922).
          </p>
        </div>
        <button className="shrink-0 bg-white hover:bg-red-50 text-danger border border-red-200 text-xs font-bold px-4 py-2 rounded-lg transition-colors">
          Tinjau Log
        </button>
      </div>

    </div>
  );
}