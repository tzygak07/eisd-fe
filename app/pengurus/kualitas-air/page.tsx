import { 
  Filter, Download, MoreVertical, MapPin, 
  AlertCircle, History, Info 
} from "lucide-react";

// --- Dummy Data ---
const nodesData = [
  { id: "ND-001", lokasi: "Waduk Timur A", ntu: "0.42", suhu: "24.5", kategori: "JERNIH", status: "Live" },
  { id: "ND-004", lokasi: "Stasiun Intake Barat", ntu: "3.15", suhu: "26.1", kategori: "WASPADA", status: "Live" },
  { id: "ND-009", lokasi: "Filter Sektor 7", ntu: "12.80", suhu: "28.4", kategori: "KRITIS", status: "Live", isError: true },
  { id: "ND-012", lokasi: "Outlet Katup Utama", ntu: "--", suhu: "--", kategori: "N/A", status: "Offline" },
  { id: "ND-015", lokasi: "Unit Pengolahan Pusat", ntu: "0.21", suhu: "24.2", kategori: "JERNIH", status: "Live" },
  { id: "ND-018", lokasi: "Stasiun Pompa Utara", ntu: "0.88", suhu: "25.0", kategori: "JERNIH", status: "Live" },
];

const logData = [
  { waktu: "14:42:10 - 24 FEB", pesan: "Turbiditas terukur pada 0.42 NTU. Parameter operasi normal." },
  { waktu: "12:15:05 - 24 FEB", pesan: "Pemeriksaan kalibrasi sensor periodik: BERHASIL." },
  { waktu: "08:00:00 - 24 FEB", pesan: "Diagnostik harian selesai. Semua modul operasional." },
];

export default function KualitasAirPage() {
  return (
    <div className="space-y-6">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="h2 text-foreground mb-1">Jaringan Kualitas Air</h1>
          <p className="text-sm text-slate-500">Pemantauan status real-time untuk seluruh node sensor IoT terdistribusi.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors">
            <Filter size={16} /> Filter Tampilan
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-foreground text-white rounded-lg text-sm font-semibold hover:bg-slate-800 transition-colors">
            <Download size={16} /> Ekspor ke CSV
          </button>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* Kolom Kiri: Tabel & Banner (Lebih Lebar) */}
        <div className="xl:col-span-2 space-y-6">
          
          {/* Card Tabel */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
            <div className="bg-slate-50 px-5 py-3 border-b border-slate-200 flex justify-between items-center">
              <span className="small-body text-slate-700 tracking-wider">REGISTRI NODE LIVE</span>
              <span className="text-xs font-semibold text-slate-500">32 Aktif / 2 Kritis</span>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 border-b border-slate-200">
                  <tr>
                    <th className="px-5 py-4 font-semibold">ID Node</th>
                    <th className="px-5 py-4 font-semibold">Lokasi</th>
                    <th className="px-5 py-4 font-semibold">Turbiditas (NTU)</th>
                    <th className="px-5 py-4 font-semibold">Suhu (°C)</th>
                    <th className="px-5 py-4 font-semibold">Kategori</th>
                    <th className="px-5 py-4 font-semibold">Status</th>
                    <th className="px-5 py-4 font-semibold">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {nodesData.map((node, index) => (
                    <tr key={index} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className={`px-5 py-4 font-bold ${node.isError ? "text-danger" : "text-foreground"}`}>
                        {node.id}
                      </td>
                      <td className="px-5 py-4 text-slate-600 font-medium">{node.lokasi}</td>
                      <td className={`px-5 py-4 font-semibold ${node.isError ? "text-danger" : "text-slate-700"}`}>
                        {node.ntu}
                      </td>
                      <td className="px-5 py-4 text-slate-600">{node.suhu}</td>
                      <td className="px-5 py-4">
                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border
                          ${node.kategori === "JERNIH" ? "bg-green-50 text-success border-green-200" : 
                            node.kategori === "WASPADA" ? "bg-yellow-50 text-warning border-yellow-200" : 
                            node.kategori === "KRITIS" ? "bg-red-50 text-danger border-red-200" : 
                            "bg-slate-100 text-slate-500 border-slate-200"}`}>
                          {node.kategori}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <div className={`flex items-center gap-2 font-semibold ${node.status === "Offline" ? "text-slate-400" : node.isError ? "text-danger" : "text-primary"}`}>
                          <div className={`w-2 h-2 rounded-full ${node.status === "Offline" ? "bg-slate-300" : node.isError ? "bg-danger" : "bg-primary"}`}></div>
                          {node.status}
                        </div>
                      </td>
                      <td className="px-5 py-4 text-slate-400">
                        {node.isError ? (
                          <MapPin size={18} className="text-danger cursor-pointer" />
                        ) : node.status === "Offline" ? (
                          <AlertCircle size={18} className="cursor-pointer" />
                        ) : (
                          <MoreVertical size={18} className="cursor-pointer hover:text-slate-600" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Banner Saran Sistem */}
          <div className="bg-[#111827] rounded-xl p-5 flex flex-col sm:flex-row items-center gap-4 shadow-md">
            <div className="bg-blue-900/50 p-2 rounded-full text-action shrink-0">
              <Info size={20} />
            </div>
            <div className="flex-1">
              <h4 className="text-white font-semibold text-sm mb-1">Saran Sistem</h4>
              <p className="text-slate-400 text-xs">Kalibrasi sensor dijadwalkan untuk Klaster 3 dan 5 dalam 12 jam ke depan. Override manual diaktifkan untuk node kritis.</p>
            </div>
            <button className="shrink-0 bg-action hover:bg-blue-500 text-white text-xs font-bold px-4 py-2 rounded transition-colors">
              Lihat Jadwal
            </button>
          </div>

        </div>

        {/* Kolom Kanan: Log Riwayat & Mini Map */}
        <div className="xl:col-span-1 space-y-4">
          
          {/* Card Log Riwayat */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col h-fit">
            <div className="px-5 py-4 border-b border-slate-200 flex justify-between items-start">
              <div>
                <h3 className="small-body text-slate-700 tracking-wider">LOG RIWAYAT NODE</h3>
                <p className="text-action text-xs font-bold mt-1">AKTIF: ND-001</p>
              </div>
              <History size={18} className="text-slate-400" />
            </div>
            
            <div className="p-5 flex-1">
              {/* Timeline List */}
              <div className="relative border-l border-slate-200 ml-2 space-y-6 pb-4">
                {logData.map((log, index) => (
                  <div key={index} className="relative pl-6">
                    <div className="absolute w-2 h-2 bg-primary rounded-full -left-[4.5px] top-1.5 ring-4 ring-white"></div>
                    <div className="text-[11px] font-bold text-slate-500 mb-1">{log.waktu}</div>
                    <div className="text-sm text-slate-700 border border-slate-100 bg-slate-50/50 p-3 rounded-lg">
                      {log.pesan}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 border-t border-slate-100">
              <button className="w-full py-2 border border-slate-300 text-primary text-sm font-bold rounded-lg hover:bg-slate-50 transition-colors">
                Lihat Analitik Lengkap
              </button>
            </div>
          </div>

          {/* Mini Map Placeholder */}
          <div className="bg-slate-200 h-32 rounded-xl border border-slate-200 flex items-end p-3 relative overflow-hidden">
             {/* Map text placeholder to mimic design */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
               <span className="font-bold text-xl">MAP AREA</span>
            </div>
            <div className="relative z-10">
              <p className="text-xs font-bold text-slate-700">Konteks Geospasial</p>
              <p className="text-[10px] text-slate-600">Waduk Timur A, Klaster 1</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}