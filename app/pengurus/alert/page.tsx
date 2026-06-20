import { 
  Filter, AlertCircle, Map, Eye, ChevronRight, 
  CheckCircle2, Home, Zap, MapPin, Camera
} from "lucide-react";

export default function ManajemenAlertPage() {
  return (
    <div className="space-y-6 pb-8">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-1">Manajemen Alert Wilayah</h1>
          <p className="text-sm text-slate-500">Pemantauan insiden real-time dan manajemen perbaikan infrastruktur air.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors text-slate-700">
            <div className="w-2 h-2 rounded-full bg-danger"></div> 8 Alert Aktif
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors text-slate-700">
            <Filter size={16} /> Filter Data
          </button>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* Kolom Kiri: Summary & Feed */}
        <div className="xl:col-span-1 flex flex-col gap-6">
          
          {/* 3 Summary Cards */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex flex-col items-center justify-center">
              <p className="text-[10px] font-bold text-slate-500 mb-1 tracking-wider">AKTIF</p>
              <h2 className="text-3xl font-bold text-danger">08</h2>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex flex-col items-center justify-center">
              <p className="text-[10px] font-bold text-slate-500 mb-1 tracking-wider">PENANGANAN</p>
              <h2 className="text-3xl font-bold text-action">14</h2>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex flex-col items-center justify-center">
              <p className="text-[10px] font-bold text-slate-500 mb-1 tracking-wider">SELESAI</p>
              <h2 className="text-3xl font-bold text-foreground">122</h2>
            </div>
          </div>

          {/* Feed Alert Real-Time */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex-1 flex flex-col overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h3 className="text-xs font-bold text-slate-600 tracking-wider">FEED ALERT REAL-TIME</h3>
              <span className="text-[10px] font-medium text-slate-400">Pembaruan Langsung Aktif</span>
            </div>
            
            <div className="flex-1 overflow-y-auto">
              
              {/* Alert Item 1: Kritis */}
              <div className="p-5 border-b border-slate-100 bg-red-50/30 relative">
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-red-100 text-danger text-[10px] font-bold px-2.5 py-1 rounded">KRITIS</span>
                  <span className="text-[10px] font-bold text-slate-500">12:45:01</span>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-danger text-white p-2.5 rounded-lg shrink-0 mt-1">
                    <Home size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-foreground mb-1">Pipa Utama Bocor - Sektor C</h4>
                    <p className="text-xs text-slate-500 mb-3">Node ID: PMP-SC-042</p>
                    <div className="w-full bg-slate-200 h-1 rounded-full relative">
                      <div className="absolute top-0 left-0 h-full bg-danger rounded-full w-2/3"></div>
                      <span className="absolute -top-4 right-0 text-[10px] font-bold text-danger">Aktif 42m</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Alert Item 2: Penanganan */}
              <div className="p-5 border-b border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer">
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-blue-50 text-action border border-blue-100 text-[10px] font-bold px-2.5 py-1 rounded">PENANGANAN</span>
                  <span className="text-[10px] font-bold text-slate-500">11:30:22</span>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-[#006591] text-white p-2.5 rounded-lg shrink-0 mt-1">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground mb-1">Tegangan Rendah Terdeteksi</h4>
                    <p className="text-xs text-slate-500 mb-2">Node ID: EL-RT5-01</p>
                    <p className="text-[10px] font-medium text-slate-400 italic">Ditugaskan ke: Teknis_Ahmad</p>
                  </div>
                </div>
              </div>

              {/* Alert Item 3: Selesai */}
              <div className="p-5 hover:bg-slate-50 transition-colors cursor-pointer opacity-70">
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-slate-100 text-slate-500 text-[10px] font-bold px-2.5 py-1 rounded">SELESAI</span>
                  <span className="text-[10px] font-bold text-slate-500">09:15:00</span>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-slate-200 text-slate-500 p-2.5 rounded-lg shrink-0 mt-1">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-600 mb-1 line-through decoration-slate-300">Peringatan Level Tangki - Tinggi</h4>
                    <p className="text-xs text-slate-400">Node ID: TNK-C-012</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Kolom Kanan: Detail Panel */}
        <div className="xl:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm p-6 lg:p-8 flex flex-col">
          
          {/* Header Detail */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-2">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-2xl font-bold text-foreground">Detail Alert: PMP-SC-042</h2>
                <span className="bg-red-50 text-danger border border-red-200 text-[10px] font-bold px-3 py-1 rounded-full">
                  TINDAKAN DIPERLUKAN
                </span>
              </div>
              <p className="text-sm text-slate-500">Infrastruktur Pipa Distribusi Utama Wilayah Sektor C, Blok 4B</p>
            </div>
            
            <div className="bg-danger text-white rounded-xl p-3 flex flex-col items-center justify-center min-w-[140px] shadow-md shadow-red-100">
              <span className="text-[8px] font-bold tracking-wider mb-1 opacity-80 uppercase">Relay Distribusi</span>
              <div className="flex items-center gap-1.5 font-bold text-sm">
                <AlertCircle size={16} /> TERPUTUS<br/>(NONAKTIF)
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-slate-100 my-6"></div>

          {/* Grid Konten Detail */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
            
            {/* Kiri: Spesifikasi & Resolusi */}
            <div className="space-y-6">
              
              {/* Spesifikasi Teknis */}
              <div>
                <h3 className="text-[10px] font-bold text-slate-500 tracking-wider mb-3">SPESIFIKASI TEKNIS</h3>
                <div className="bg-slate-50 rounded-xl border border-slate-200 p-4 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500 w-1/3">Tipe Alert</span>
                    <span className="font-semibold text-foreground w-2/3">Penurunan Tekanan Mendadak</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500 w-1/3">Waktu Terpicu</span>
                    <span className="font-semibold text-foreground w-2/3">24 Nov, 2024 - 12:45:01</span>
                  </div>
                  <div className="flex justify-between text-sm border-t border-slate-200 pt-3">
                    <span className="text-slate-500">Durasi Aktif</span>
                    <span className="font-bold text-danger">00:42:15</span>
                  </div>
                  <div className="flex justify-between text-sm border-t border-slate-200 pt-3">
                    <span className="text-slate-500 w-1/3">Ambang Batas Sensor</span>
                    <span className="font-semibold text-foreground w-2/3">5.2 Bar (Min 4.0 Bar)</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Nilai Saat Ini</span>
                    <span className="font-bold text-danger">1.2 Bar</span>
                  </div>
                </div>
              </div>

              {/* Alur Kerja Resolusi */}
              <div>
                <h3 className="text-[10px] font-bold text-slate-500 tracking-wider mb-3">ALUR KERJA RESOLUSI</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-between p-3 bg-blue-50 border border-blue-100 rounded-lg text-primary font-bold text-sm hover:bg-blue-100 transition-colors">
                    <div className="flex items-center gap-2">
                      <Eye size={18} /> Akui Alert
                    </div>
                    <ChevronRight size={18} />
                  </button>
                  
                  <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-sm">
                    <p className="text-[10px] font-bold text-slate-500 mb-2">Catatan Internal / Perbarui Status</p>
                    <textarea 
                      className="w-full border border-slate-200 rounded p-2 text-sm text-slate-700 focus:outline-none focus:border-action resize-none" 
                      rows={3} 
                      placeholder="Ketik catatan insiden di sini..."
                    ></textarea>
                    <div className="flex justify-end mt-2">
                      <button className="bg-primary hover:bg-blue-700 text-white text-xs font-bold px-4 py-2 rounded transition-colors">
                        Perbarui Status
                      </button>
                    </div>
                  </div>

                  <button className="w-full flex items-center justify-center gap-2 p-3 bg-[#111827] hover:bg-slate-800 text-white rounded-lg text-sm font-bold transition-colors shadow-md">
                    <CheckCircle2 size={18} /> Tandai Sebagai Selesai
                  </button>
                </div>
              </div>
            </div>

            {/* Kanan: Snapshot, Map, History */}
            <div className="space-y-6">
              
              {/* Snapshot ESP32-CAM */}
              <div>
                <h3 className="text-[10px] font-bold text-slate-500 tracking-wider mb-3">SNAPSHOT ESP32-CAM (PEMICU KEJADIAN)</h3>
                <div className="bg-[#111827] w-full h-40 rounded-xl relative overflow-hidden flex items-center justify-center group shadow-inner">
                  {/* Gambar Dummy (Bisa diganti dengan tag <img> asli nanti) */}
                  <div className="absolute inset-0 bg-slate-800 opacity-50"></div>
                  <Camera size={32} className="text-slate-600 absolute z-0" />
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3 bg-danger text-white text-[8px] font-bold px-2 py-1 rounded flex items-center gap-1 z-10">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                    TANGKAPAN LANGSUNG @ T-05
                  </div>
                  
                  {/* Simulasi Noise/Garis Kamera */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20 pointer-events-none"></div>
                </div>
              </div>

              {/* Geo-Lokasi */}
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-center justify-between">
                <div className="flex gap-3 items-center">
                  <div className="bg-[#111827] text-white p-2.5 rounded-lg">
                    <Map size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">Geo-Lokasi Terlampir</h4>
                    <p className="text-xs text-slate-500">Lat: -6.2088, Lon: 106.8456</p>
                  </div>
                </div>
                <a href="#" className="text-primary text-sm font-bold hover:underline">Lihat Peta</a>
              </div>

              {/* Riwayat Penanganan */}
              <div>
                <h3 className="text-[10px] font-bold text-slate-500 tracking-wider mb-4">RIWAYAT PENANGANAN</h3>
                <div className="relative border-l-2 border-slate-200 ml-2 space-y-5">
                  
                  <div className="relative pl-5">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1 ring-4 ring-white"></div>
                    <h4 className="text-sm font-bold text-foreground leading-none mb-1">Relay Otomatis Terputus</h4>
                    <p className="text-[10px] text-slate-500">Sistem • 12:45:02</p>
                  </div>
                  
                  <div className="relative pl-5">
                    <div className="absolute w-3 h-3 bg-slate-300 rounded-full -left-[7px] top-1 ring-4 ring-white"></div>
                    <h4 className="text-sm font-semibold text-slate-500 leading-none mb-1">Menunggu Konfirmasi Pengiriman</h4>
                    <p className="text-[10px] text-slate-400">Admin • Tertunda</p>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}