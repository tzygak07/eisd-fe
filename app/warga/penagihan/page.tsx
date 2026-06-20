import { 
  Download, Droplet, Wallet, Filter, 
  ChevronDown, ChevronLeft, ChevronRight, 
  TrendingDown, Zap
} from "lucide-react";

// --- Dummy Data ---
const riwayatTagihan = [
  { periode: "Juni 2024", penggunaan: "24.5 m³", tarif: "Rp 12.500 / m³", total: "Rp 306.250", status: "Belum Bayar", isLunas: false },
  { periode: "Mei 2024", penggunaan: "28.2 m³", tarif: "Rp 12.500 / m³", total: "Rp 352.500", status: "Lunas", isLunas: true },
  { periode: "April 2024", penggunaan: "25.8 m³", tarif: "Rp 12.000 / m³", total: "Rp 309.600", status: "Lunas", isLunas: true },
  { periode: "Maret 2024", penggunaan: "31.0 m³", tarif: "Rp 12.000 / m³", total: "Rp 372.000", status: "Lunas", isLunas: true },
  { periode: "Februari 2024", penggunaan: "22.4 m³", tarif: "Rp 12.000 / m³", total: "Rp 268.800", status: "Lunas", isLunas: true },
];

export default function PenagihanWargaPage() {
  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-10">
      
      {/* Breadcrumb */}
      <div className="text-[10px] font-bold text-slate-400 tracking-wide uppercase">
        Portal <span className="mx-1">&gt;</span> <span className="text-action">Billing & History</span>
      </div>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-1">Riwayat Konsumsi & Tagihan</h1>
          <p className="text-sm text-slate-500 max-w-lg">
            Pantau penggunaan air Anda secara transparan dan unduh laporan resmi untuk keperluan administrasi.
          </p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-[#006591] hover:bg-blue-800 text-white rounded-lg text-sm font-bold transition-colors shadow-sm shrink-0">
          <Download size={16} /> Unduh Laporan PDF
        </button>
      </div>

      {/* Top Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Konsumsi */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-6">
            <div className="bg-blue-50 p-2 rounded-lg text-action">
              <Droplet size={20} />
            </div>
            <span className="text-xs font-bold text-success">~ 12% vs bln lalu</span>
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-500 tracking-wider mb-1 uppercase">Konsumsi Bulan Ini</p>
            <h2 className="text-3xl font-bold text-foreground">
              24.5 <span className="text-sm font-medium text-slate-500">m³</span>
            </h2>
          </div>
        </div>

        {/* Card 2: Tagihan Tertunda */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-6">
            <div className="bg-orange-50 p-2 rounded-lg text-warning">
              <Wallet size={20} />
            </div>
            <div className="w-2.5 h-2.5 bg-warning rounded-full"></div>
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-500 tracking-wider mb-1 uppercase">Tagihan Tertunda</p>
            <h2 className="text-3xl font-bold text-foreground">
              Rp 345.000
            </h2>
          </div>
        </div>

        {/* Card 3: Tren Konsumsi */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm flex flex-col">
          <p className="text-[10px] font-bold text-slate-500 tracking-wider mb-4 uppercase">Tren Konsumsi 6 Bulan</p>
          <div className="flex-1 flex items-end justify-between gap-2 h-16">
            {[40, 60, 50, 70, 45, 30].map((h, i) => (
              <div 
                key={i} 
                className={`w-full rounded-sm ${i === 5 ? 'bg-[#006591]' : 'bg-slate-100'}`} 
                style={{ height: `${h}%` }}
              ></div>
            ))}
          </div>
          <div className="flex justify-between text-[8px] font-bold text-slate-400 mt-2">
            <span>Jan</span>
            <span className="text-foreground">Jun (Aktif)</span>
          </div>
        </div>

      </div>

      {/* Main Table Section */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
        
        {/* Table Header & Actions */}
        <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-lg font-bold text-foreground">Rincian Per Periode</h2>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 cursor-pointer">
              <span className="text-xs font-bold text-slate-600">Tahun 2024</span>
              <ChevronDown size={14} className="text-slate-400" />
            </div>
            <button className="p-1.5 text-slate-500 hover:text-foreground hover:bg-slate-50 rounded border border-transparent hover:border-slate-200 transition-colors">
              <Filter size={18} />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left whitespace-nowrap">
            <thead className="text-[10px] font-bold text-slate-400 border-b border-slate-100 uppercase tracking-wider bg-slate-50/30">
              <tr>
                <th className="px-6 py-4">Periode</th>
                <th className="px-6 py-4">Penggunaan</th>
                <th className="px-6 py-4">Tarif Dasar</th>
                <th className="px-6 py-4">Total Tagihan</th>
                <th className="px-6 py-4 text-center">Status</th>
                <th className="px-6 py-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {riwayatTagihan.map((row, i) => (
                <tr key={i} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-foreground">{row.periode}</td>
                  <td className="px-6 py-4 text-slate-600">{row.penggunaan}</td>
                  <td className="px-6 py-4 text-slate-500">{row.tarif}</td>
                  <td className="px-6 py-4 font-bold text-foreground">{row.total}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border flex items-center justify-center gap-1.5 w-fit mx-auto ${
                      row.isLunas 
                        ? "bg-green-50 text-success border-green-100" 
                        : "bg-orange-50 text-warning border-orange-100"
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${row.isLunas ? 'bg-success' : 'bg-warning'}`}></div>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-xs font-bold text-action hover:underline">Detail</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-500 bg-slate-50/30">
          <p>Menampilkan 5 dari 12 periode</p>
          <div className="flex gap-2">
            <button className="w-6 h-6 flex items-center justify-center rounded border border-slate-200 bg-white text-slate-400 hover:bg-slate-50">
              <ChevronLeft size={14} />
            </button>
            <button className="w-6 h-6 flex items-center justify-center rounded border border-slate-200 bg-white text-slate-700 hover:bg-slate-50">
              <ChevronRight size={14} />
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Section: Analysis & Payment */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Analisis Penggunaan */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-6 lg:p-8 shadow-sm">
          <h2 className="text-lg font-bold text-foreground mb-6">Analisis Penggunaan</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="bg-blue-50 text-action p-3 rounded-xl shrink-0 mt-1">
                <TrendingDown size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground mb-1">Tren Menurun</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Penggunaan air Anda di bulan Juni turun 3.7 m³ dibanding bulan Mei. Penghematan ini setara dengan Rp 46.250.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="bg-orange-50 text-warning p-3 rounded-xl shrink-0 mt-1">
                <Zap size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground mb-1">Waktu Puncak</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Konsumsi tertinggi tercatat pada pukul 06:00 - 08:00 WIB. Pastikan tidak ada keran yang bocor di pagi hari.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bayar Sekarang (Payment Card) */}
        <div className="lg:col-span-1 bg-[#111827] rounded-xl border border-slate-800 p-6 lg:p-8 shadow-lg flex flex-col justify-center text-white">
          <h2 className="text-xl font-bold mb-2">Bayar Sekarang</h2>
          <p className="text-xs text-slate-400 leading-relaxed mb-6">
            Selesaikan tagihan Anda dengan berbagai metode pembayaran digital.
          </p>
          
          {/* Payment Method Placeholders */}
          <div className="flex gap-2 mb-6">
            <div className="w-10 h-6 bg-slate-800 rounded border border-slate-700"></div>
            <div className="w-10 h-6 bg-slate-800 rounded border border-slate-700"></div>
            <div className="w-10 h-6 bg-slate-800 rounded border border-slate-700"></div>
          </div>

          <button className="w-full py-3 bg-[#39B8FD] hover:bg-blue-400 text-white text-sm font-bold rounded-lg transition-colors">
            Proses Pembayaran
          </button>
        </div>

      </div>

    </div>
  );
}