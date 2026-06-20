import { 
  Calendar, Lightbulb, CheckCircle2, Thermometer 
} from "lucide-react";

export default function MonitorTangkiWargaPage() {
  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-10">
      
      {/* Header Section */}
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-1">Monitoring Tangki Komunal</h1>
        <p className="text-sm text-slate-500">Blok A-12 &bull; Terakhir diperbarui: 2 menit yang lalu</p>
      </div>

      {/* Top Section Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Kolom Kiri: Visual Tangki & Info Utama */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-6 lg:p-8 shadow-sm flex flex-col relative">
          
          {/* Live Streaming Badge */}
          <div className="absolute top-6 right-6 flex items-center gap-1.5">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-[10px] font-bold text-success uppercase tracking-wider">Live Streaming</span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12 mt-4">
            
            {/* Visual Tangki */}
            <div className="w-48 h-64 border-4 border-slate-100 rounded-t-[2rem] rounded-b-xl relative overflow-hidden flex flex-col justify-end bg-slate-50 shrink-0">
              <div 
                className="bg-[#7DD3FC] w-full flex items-center justify-center relative transition-all duration-1000" 
                style={{ height: '72%' }}
              >
                {/* Gelombang air sederhana */}
                <div className="absolute top-0 left-0 w-full h-1 bg-white/30"></div>
                <span className="text-[#0369A1] text-3xl font-bold z-10">72%</span>
              </div>
            </div>

            {/* Info Teks */}
            <div className="flex-1 w-full">
              <p className="text-[10px] font-bold text-slate-500 tracking-wider mb-2 uppercase">Volume Saat Ini</p>
              <h2 className="text-5xl font-bold text-[#006591] mb-2 flex items-baseline gap-2">
                14.400 <span className="text-lg font-medium text-slate-700">Liter</span>
              </h2>
              <p className="text-sm text-slate-500 mb-8">Kapasitas Maks: 20.000 L</p>

              {/* Estimation Box */}
              <div className="bg-[#F0F9FF] border border-[#BAE6FD] rounded-xl p-4 flex gap-3">
                <Calendar className="text-[#0369A1] shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="text-sm font-bold text-[#0369A1] mb-1">Cukup untuk 3 hari kedepan</h4>
                  <p className="text-xs text-[#0369A1]/80 leading-relaxed">
                    Berdasarkan rata-rata konsumsi harian warga blok Anda.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Kolom Kanan: Tips & Metrik Tambahan */}
        <div className="lg:col-span-1 space-y-6 flex flex-col h-full">
          
          {/* Card Tips Hemat Air */}
          <div className="bg-white rounded-xl border-t-4 border-t-warning border-x border-b border-slate-200 p-6 shadow-sm flex-1">
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2 mb-4">
              <Lightbulb className="text-warning" size={20} /> 
              Tips Hemat Air
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#006591] mt-1.5 shrink-0"></div>
                <p className="text-xs text-slate-600 leading-relaxed">Gunakan shower dengan aliran rendah untuk menghemat hingga 15 liter per menit.</p>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#006591] mt-1.5 shrink-0"></div>
                <p className="text-xs text-slate-600 leading-relaxed">Pastikan semua keran tertutup rapat setelah digunakan untuk menghindari kebocoran halus.</p>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#006591] mt-1.5 shrink-0"></div>
                <p className="text-xs text-slate-600 leading-relaxed">Gunakan kembali air bekas mencuci sayuran untuk menyiram tanaman di sore hari.</p>
              </li>
            </ul>
          </div>

          {/* Mini Cards Row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex flex-col justify-between">
              <p className="text-[10px] font-bold text-slate-500 mb-2">Tekanan</p>
              <div className="flex items-end justify-between">
                <h4 className="text-lg font-bold text-foreground">2.4 Bar</h4>
                <CheckCircle2 size={16} className="text-success mb-0.5" />
              </div>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex flex-col justify-between">
              <p className="text-[10px] font-bold text-slate-500 mb-2">Suhu Air</p>
              <div className="flex items-end justify-between">
                <h4 className="text-lg font-bold text-foreground">26.5°C</h4>
                <Thermometer size={16} className="text-success mb-0.5" />
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Section: Chart */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 lg:p-8 shadow-sm flex flex-col min-h-[350px]">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div>
            <h3 className="text-lg font-bold text-foreground">Tren Penurunan Level</h3>
            <p className="text-sm text-slate-500">Analisis konsumsi 24 jam terakhir</p>
          </div>
          <div className="flex bg-slate-100 p-1 rounded-lg">
            <button className="px-4 py-1.5 text-xs font-bold bg-white text-[#006591] rounded shadow-sm">24 Jam</button>
            <button className="px-4 py-1.5 text-xs font-medium text-slate-500 hover:text-foreground">7 Hari</button>
            <button className="px-4 py-1.5 text-xs font-medium text-slate-500 hover:text-foreground">30 Hari</button>
          </div>
        </div>

        <div className="flex-1 relative flex flex-col">
          
          {/* Y-Axis Labels & Grid Lines */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-8 z-0">
             <div className="w-full flex items-center gap-4">
                <span className="text-[10px] text-slate-400 w-8">100%</span>
                <div className="flex-1 border-t border-slate-100"></div>
             </div>
             <div className="w-full flex items-center gap-4">
                <span className="text-[10px] text-slate-400 w-8">75%</span>
                <div className="flex-1 border-t border-slate-100"></div>
             </div>
             <div className="w-full flex items-center gap-4">
                <span className="text-[10px] text-slate-400 w-8">50%</span>
                <div className="flex-1 border-t border-slate-100"></div>
             </div>
             <div className="w-full flex items-center gap-4">
                <span className="text-[10px] text-slate-400 w-8">25%</span>
                <div className="flex-1 border-t border-slate-100"></div>
             </div>
             <div className="w-full flex items-center gap-4">
                <span className="text-[10px] text-slate-400 w-8">0%</span>
                <div className="flex-1 border-t border-slate-100"></div>
             </div>
          </div>

          {/* SVG Area Chart */}
          <div className="absolute inset-0 pb-8 pl-12 overflow-hidden z-10">
             {/* Chart background box */}
             <div className="w-full h-full bg-[#F0F9FF] rounded-lg overflow-hidden relative">
               <svg viewBox="0 0 100 40" className="w-full h-full preserve-3d" preserveAspectRatio="none">
                 {/* 
                    Simulated trend curve showing water level drop over 24 hours.
                    Starts high (y=10), drops during day (y=25), slight fill/leveling, drops at night (y=35).
                 */}
                 <path d="M0,10 C20,10 30,25 50,25 C70,25 80,10 100,35" fill="none" stroke="#006591" strokeWidth="1" strokeLinecap="round" />
               </svg>
             </div>
          </div>

          {/* X-Axis Labels */}
          <div className="absolute bottom-0 left-12 right-0 flex justify-between text-[10px] font-bold text-slate-500">
            <span>Pagi (06:00)</span>
            <span>Siang (12:00)</span>
            <span>Sore (18:00)</span>
            <span>Malam (00:00)</span>
          </div>

        </div>
      </div>

    </div>
  );
}