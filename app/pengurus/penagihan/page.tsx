import { 
  Wallet, ClipboardList, AlertCircle, TrendingUp, 
  Download, FileText, MoreVertical, Send, 
  ChevronLeft, ChevronRight, Activity, Sparkles
} from "lucide-react";

// --- Dummy Data ---
const billingData = [
  {
    init: "AS", name: "Andi Saputra", type: "Residensial - Tipe 36", 
    id: "AB-001-2294", zona: "Zona A", konsumsi: "24.5", 
    visW: "45%", visColor: "bg-[#006591]", tagihan: "Rp 245.000", 
    status: "Lunas", statusColor: "bg-blue-50 text-action border-blue-100"
  },
  {
    init: "RM", name: "Rina Mardiana", type: "Residensial - Tipe 45", 
    id: "AB-002-1182", zona: "Zona B", konsumsi: "38.2", 
    visW: "65%", visColor: "bg-[#006591]", tagihan: "Rp 382.000", 
    status: "Jatuh Tempo", statusColor: "bg-red-50 text-danger border-red-200"
  },
  {
    init: "BP", name: "Budi Pratama", type: "Komersial - UKM", 
    id: "AB-005-9081", zona: "Zona A", konsumsi: "112.0", 
    visW: "95%", visColor: "bg-danger", tagihan: "Rp 1.120.000", 
    status: "Belum Bayar", statusColor: "bg-slate-100 text-slate-500 border-slate-200"
  },
  {
    init: "SH", name: "Siti Hartati", type: "Residensial - Tipe 36", 
    id: "AB-001-4432", zona: "Zona C", konsumsi: "15.8", 
    visW: "25%", visColor: "bg-[#006591]", tagihan: "Rp 158.000", 
    status: "Lunas", statusColor: "bg-blue-50 text-action border-blue-100"
  },
  {
    init: "DJ", name: "Dedi Junaedi", type: "Residensial - Tipe 70", 
    id: "AB-003-8821", zona: "Zona B", konsumsi: "44.1", 
    visW: "75%", visColor: "bg-[#006591]", tagihan: "Rp 441.000", 
    status: "Belum Bayar", statusColor: "bg-slate-100 text-slate-500 border-slate-200"
  },
];

export default function PenagihanPage() {
  return (
    <div className="space-y-6 pb-8">
      
      {/* Breadcrumb / Header */}
      <div className="text-[11px] font-bold text-slate-400 tracking-wide mb-2 uppercase">
        Penagihan <span className="mx-1">&gt;</span> <span className="text-foreground">Laporan Konsumsi & Penagihan</span>
      </div>

      {/* 1. Top Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Total Pendapatan */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm flex items-start justify-between">
          <div>
            <p className="text-xs font-bold text-slate-500 mb-2">Total Pendapatan (Bulan Ini)</p>
            <h2 className="text-2xl font-bold text-foreground mb-2">Rp 45.280.000</h2>
            <p className="text-xs font-bold text-action flex items-center gap-1">
              <TrendingUp size={14} /> + 12.4% vs Bulan Lalu
            </p>
          </div>
          <div className="bg-blue-50 p-3 rounded-xl text-primary border border-blue-100">
            <Wallet size={24} />
          </div>
        </div>

        {/* Card 2: Tingkat Penagihan */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm flex items-start justify-between">
          <div className="w-full">
            <p className="text-xs font-bold text-slate-500 mb-2">Tingkat Penagihan</p>
            <h2 className="text-2xl font-bold text-foreground mb-3">84.2%</h2>
            <div className="w-full bg-slate-100 rounded-full h-1.5 max-w-[80%]">
              <div className="bg-primary h-1.5 rounded-full w-[84.2%]"></div>
            </div>
          </div>
          <div className="bg-slate-50 p-3 rounded-xl text-slate-600 border border-slate-200">
            <ClipboardList size={24} />
          </div>
        </div>

        {/* Card 3: Tunggakan */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm flex items-start justify-between">
          <div>
            <p className="text-xs font-bold text-slate-500 mb-2">Tunggakan (Belum Bayar)</p>
            <h2 className="text-2xl font-bold text-danger mb-2">Rp 7.120.500</h2>
            <p className="text-xs font-medium text-slate-500">
              Dari 42 pelanggan aktif
            </p>
          </div>
          <div className="bg-red-50 p-3 rounded-xl text-danger border border-red-100">
            <AlertCircle size={24} />
          </div>
        </div>

      </div>

      {/* 2. Main Table Section */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
        
        {/* Filters & Actions */}
        <div className="p-5 border-b border-slate-100 flex flex-col xl:flex-row xl:items-end justify-between gap-4">
          <div className="flex flex-wrap items-end gap-4">
            {/* Filter Bulan */}
            <div>
              <label className="block text-[10px] font-bold text-slate-500 mb-1 tracking-wider">BULAN</label>
              <select className="border border-slate-200 rounded-lg text-sm px-3 py-2 text-slate-700 focus:outline-none focus:border-action min-w-[120px] bg-slate-50">
                <option>Juni 2024</option>
                <option>Mei 2024</option>
              </select>
            </div>
            {/* Filter Zona */}
            <div>
              <label className="block text-[10px] font-bold text-slate-500 mb-1 tracking-wider">ZONA</label>
              <select className="border border-slate-200 rounded-lg text-sm px-3 py-2 text-slate-700 focus:outline-none focus:border-action min-w-[140px] bg-slate-50">
                <option>Semua Zona</option>
                <option>Zona A</option>
                <option>Zona B</option>
              </select>
            </div>
            {/* Search ID */}
            <div>
              <label className="block text-[10px] font-bold text-slate-500 mb-1 tracking-wider">ID SAMBUNGAN</label>
              <input 
                type="text" 
                placeholder="ID Sambungan..." 
                className="border border-slate-200 rounded-lg text-sm px-3 py-2 text-slate-700 focus:outline-none focus:border-action min-w-[160px]"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="flex items-center gap-2 text-sm font-bold text-slate-700 bg-white border border-slate-300 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors">
              <Download size={16} /> Ekspor ke CSV
            </button>
            <button className="flex items-center gap-2 text-sm font-bold text-white bg-foreground px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors">
              <FileText size={16} /> Ekspor ke PDF
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left whitespace-nowrap">
            <thead className="text-[10px] font-bold text-slate-400 border-b border-slate-100 uppercase tracking-wider bg-slate-50/50">
              <tr>
                <th className="px-5 py-4">Pelanggan</th>
                <th className="px-5 py-4">ID Sambungan</th>
                <th className="px-5 py-4">Zona</th>
                <th className="px-5 py-4">Konsumsi (M³)</th>
                <th className="px-5 py-4 w-48">Visualisasi</th>
                <th className="px-5 py-4">Total Tagihan</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4"></th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {billingData.map((row, i) => (
                <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-primary flex items-center justify-center font-bold text-xs border border-blue-100 shrink-0">
                      {row.init}
                    </div>
                    <div>
                      <p className="font-bold text-foreground">{row.name}</p>
                      <p className="text-[10px] font-medium text-slate-500">{row.type}</p>
                    </div>
                  </td>
                  <td className="px-5 py-4 font-semibold text-slate-600">{row.id}</td>
                  <td className="px-5 py-4 text-slate-600">{row.zona}</td>
                  <td className="px-5 py-4 font-bold text-foreground">{row.konsumsi}m³</td>
                  <td className="px-5 py-4">
                    <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${row.visColor}`} style={{ width: row.visW }}></div>
                    </div>
                  </td>
                  <td className="px-5 py-4 font-bold text-foreground">{row.tagihan}</td>
                  <td className="px-5 py-4">
                    <span className={`text-[10px] font-bold px-3 py-1.5 rounded-full border ${row.statusColor}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-slate-400">
                    <MoreVertical size={18} className="cursor-pointer hover:text-slate-600" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-5 py-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/50 text-sm">
          <p className="text-slate-500">Menampilkan 5 dari 1.280 data warga</p>
          <div className="flex gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 bg-white text-slate-500 hover:bg-slate-50">
              <ChevronLeft size={16} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-foreground text-white font-bold">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 font-medium">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 font-medium">3</button>
            <span className="w-8 h-8 flex items-center justify-center text-slate-500">...</span>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 bg-white text-slate-500 hover:bg-slate-50">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

      </div>

      {/* 3. Bottom Row: Chart & AI Analytic */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[300px]">
        
        {/* Tren Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-foreground">Tren Konsumsi 6 Bulan Terakhir</h2>
            <Activity size={20} className="text-action" />
          </div>
          
          <div className="flex-1 border-b border-l border-slate-200 relative flex items-end">
            {/* Pseudo-chart axes & labels */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-8">
               <div className="w-full border-t border-slate-100/50 h-full"></div>
               <div className="w-full border-t border-slate-100/50 h-full"></div>
               <div className="w-full border-t border-slate-100/50 h-full"></div>
            </div>

            {/* Simulating a line chart with a curvy SVG path wrapper */}
            <div className="absolute inset-0 pb-8 overflow-hidden flex items-center px-4">
               <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible preserve-3d" preserveAspectRatio="none">
                 <path d="M0,30 C20,35 30,10 50,15 C70,20 80,5 100,20" fill="none" stroke="#006591" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                 {/* Points */}
                 <circle cx="0" cy="30" r="1.5" fill="#39B8FD" />
                 <circle cx="20" cy="22" r="1.5" fill="#39B8FD" />
                 <circle cx="50" cy="15" r="1.5" fill="#39B8FD" />
                 <circle cx="75" cy="10" r="1.5" fill="#39B8FD" />
                 <circle cx="100" cy="20" r="1.5" fill="#39B8FD" />
               </svg>
            </div>

            {/* X Axis Labels */}
            <div className="absolute bottom-0 w-full flex justify-between text-[10px] font-bold text-slate-400 px-2 translate-y-6">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>Mei</span>
              <span>Jun</span>
            </div>
          </div>
        </div>

        {/* AI Analytics */}
        <div className="lg:col-span-1 bg-[#111827] rounded-xl border border-slate-800 shadow-lg p-6 text-white flex flex-col justify-between relative overflow-hidden h-full">
          {/* Wave background pattern */}
          <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0,0 L100,0 L100,40 C75,60 25,20 0,40 Z" fill="#39B8FD" />
              <path d="M0,20 L100,20 L100,50 C75,70 25,30 0,50 Z" fill="#006591" opacity="0.5"/>
            </svg>
          </div>

          <div className="relative z-10">
            <span className="bg-action text-white text-[10px] font-bold px-3 py-1 rounded-full mb-4 inline-flex items-center gap-1 uppercase tracking-wider">
               <Sparkles size={12}/> Analitik AI
            </span>
            <h3 className="text-xl font-bold mb-2 mt-2">Anomali Terdeteksi</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Terdapat lonjakan konsumsi sebesar 45% di Zona B dalam 24 jam terakhir. Potensi kebocoran pada pipa distribusi utama.
            </p>
          </div>
          
          <button className="relative z-10 w-full py-3 mt-4 bg-[#006591] hover:bg-action text-white text-sm font-bold rounded-lg flex items-center justify-center gap-2 transition-colors">
            <Send size={16} /> Periksa Lokasi
          </button>
        </div>

      </div>

    </div>
  );
}