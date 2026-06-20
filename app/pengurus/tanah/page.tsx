import { 
  Droplet, TrendingUp, Sparkles, CloudRain, 
  CloudSun, Sun, CloudLightning, Zap, AlertTriangle
} from "lucide-react";

// --- Dummy Data ---
// Pola warna heatmap (B: Biru/Lembab, R: Merah/Kering, Y: Kuning/Menengah)
const heatmapPattern = [
  'B','B','Y','R','B','B','Y','R','B','R','R','Y',
  'Y','B','R','Y','Y','B','R','Y','B','B','R','Y',
  'R','Y','B','B','B','R','Y','R','Y','R','R','R',
  'B','B','B','B','B','B','R','R','Y','R','Y','Y'
];

const powerStatusData = [
  { id: "Node-A1", battery: 12, status: "LEMAH", color: "bg-danger", textColor: "text-danger" },
  { id: "Node-A2", battery: 92, status: "VOLUM", color: "bg-action", textColor: "text-action" },
  { id: "Node-A3", battery: 88, status: "LISTRIK", color: "bg-primary", textColor: "text-primary" },
  { id: "Node-B1", battery: 34, status: "SIAGA", color: "bg-warning", textColor: "text-warning" },
];

const meshMetricsData = [
  { lokasi: "Sektor A-1 (Utara)", kelembaban: "72.4%", ph: "6.8", kondisi: "SEHAT", kondisiColor: "text-action bg-blue-50 border-blue-100", waktu: "2 menit yang lalu" },
  { lokasi: "Sektor B-2 (Timur)", kelembaban: "18.1%", ph: "7.2", kondisi: "GERSANG", kondisiColor: "text-danger bg-red-50 border-red-100", waktu: "13 menit yang lalu" },
  { lokasi: "Sektor C-2 (Tengah)", kelembaban: "64.0%", ph: "6.5", kondisi: "SEHAT", kondisiColor: "text-action bg-blue-50 border-blue-100", waktu: "Baru saja" },
  { lokasi: "Sektor D-1 (Selatan)", kelembaban: "45.2%", ph: "6.9", kondisi: "STANDAR", kondisiColor: "text-slate-500 bg-slate-50 border-slate-200", waktu: "1 jam yang lalu" },
];

export default function MonitoringTanahPage() {
  return (
    <div className="space-y-6 pb-8">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-1">Monitoring Tanah</h1>
          <p className="text-sm text-slate-500">Pemantauan kelembapan tanah, prakiraan cuaca, dan metrik node mesh wilayah.</p>
        </div>
      </div>

      {/* 1. Top Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {/* Card 1: Kelembaban */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <p className="text-xs font-bold text-slate-500 tracking-wide">Kelembaban Rata - rata</p>
            <Droplet size={16} className="text-action" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-1">64.2%</h2>
            <p className="text-xs font-bold text-action flex items-center gap-1">
              <TrendingUp size={12} /> + 2.4% dari kemarin
            </p>
          </div>
        </div>

        {/* Card 2: Indeks Serapan */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <p className="text-xs font-bold text-slate-500 tracking-wide">Indeks Serapan</p>
            <Droplet size={16} className="text-primary" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-3">0.78</h2>
            <div className="w-full bg-slate-100 rounded-full h-1.5">
              <div className="bg-primary h-1.5 rounded-full w-[78%]"></div>
            </div>
          </div>
        </div>

        {/* Card 3: Proyeksi 7 Hari */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <p className="text-xs font-bold text-slate-500 tracking-wide">Proyeksi 7 Hari</p>
            <TrendingUp size={16} className="text-slate-400" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-1">Kritis</h2>
            <p className="text-xs font-medium text-danger flex items-center gap-1">
              <AlertTriangle size={12} /> Prakiraan curah hujan rendah
            </p>
          </div>
        </div>

        {/* Card 4: Rekomendasi AI (Dark) */}
        <div className="bg-[#111827] p-5 rounded-xl border border-slate-800 shadow-lg text-white flex flex-col justify-between relative overflow-hidden">
          {/* Subtle glow effect */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-action/10 blur-2xl rounded-full translate-x-10 -translate-y-10"></div>
          
          <div className="relative z-10">
            <h3 className="text-[10px] font-bold text-action flex items-center gap-1.5 mb-2 tracking-wider">
              <Sparkles size={12} /> REKOMENDASI AI
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Tingkat penyerapan optimal tetapi diproyeksikan turun 15% karena laju penguapan yang tinggi. 
              <span className="font-semibold text-white ml-1">Tindakan: Isi tangki cadangan sebelum Selasa untuk memastikan pasokan selama jam tekanan rendah.</span>
            </p>
          </div>
          <button className="relative z-10 w-full py-2 bg-action hover:bg-blue-500 text-white text-xs font-bold rounded-lg transition-colors">
            Terapkan Strategi
          </button>
        </div>
      </div>

      {/* 2. Middle Row: Heatmap & Cuaca */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* Heatmap Kelembaban Tanah */}
        <div className="xl:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm p-5 flex flex-col">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
            <div>
              <h2 className="text-lg font-bold text-foreground">Heatmap Kelembaban Tanah</h2>
              <p className="text-xs text-slate-500">Jaringan mesh mode waktu nyata (Sektor A-1 ke E-12)</p>
            </div>
            <div className="flex gap-3 text-[10px] font-bold text-slate-500">
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-danger rounded-sm"></div> Kering</div>
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-warning rounded-sm"></div> Menengah</div>
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 bg-primary rounded-sm"></div> Lembab</div>
            </div>
          </div>
          
          {/* Grid Render */}
          <div className="grid grid-cols-12 gap-1 flex-1 min-h-[200px]">
            {heatmapPattern.map((color, i) => (
              <div 
                key={i} 
                className={`w-full h-full rounded-sm ${
                  color === 'B' ? 'bg-[#006591]' : 
                  color === 'R' ? 'bg-[#EF4444]' : 
                  'bg-[#F59E0B]'
                } hover:opacity-80 transition-opacity cursor-pointer`}
              ></div>
            ))}
          </div>
        </div>

        {/* Prakiraan Curah Hujan */}
        <div className="xl:col-span-1 bg-white rounded-xl border border-slate-200 shadow-sm p-5 flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-lg font-bold text-foreground leading-tight">Prakiraan Curah<br/>Hujan</h2>
            <div className="bg-slate-100 text-[10px] font-bold text-slate-500 px-2 py-1 rounded text-right">
              Sumber:<br/>BMKG
            </div>
          </div>
          
          <div className="space-y-5 flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CloudRain size={20} className="text-action" />
                <span className="text-sm font-semibold text-slate-700">Senin</span>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-foreground">12mm</p>
                <p className="text-[10px] text-slate-500">Probabilitas Tinggi</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CloudSun size={20} className="text-slate-400" />
                <span className="text-sm font-semibold text-slate-700">Selasa</span>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-foreground">2mm</p>
                <p className="text-[10px] text-slate-500">Berawan Sebagian</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Sun size={20} className="text-warning" />
                <span className="text-sm font-semibold text-slate-700">Rabu</span>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-foreground">0mm</p>
                <p className="text-[10px] text-slate-500">Cerah</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Sun size={20} className="text-warning" />
                <span className="text-sm font-semibold text-slate-700">Kamis</span>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-foreground">0mm</p>
                <p className="text-[10px] text-slate-500">Cerah</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CloudLightning size={20} className="text-primary" />
                <span className="text-sm font-semibold text-slate-700">Jumat</span>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-foreground">28mm</p>
                <p className="text-[10px] text-slate-500">Peringatan Badai</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* 3. Third Row: Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        
        {/* Tren Kelembaban vs Curah Hujan */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 h-[300px] flex flex-col">
          <h2 className="text-sm font-bold text-foreground mb-4">Tren Kelembaban vs Curah Hujan</h2>
          <div className="flex-1 flex items-end gap-2 relative">
            {/* Pseudo-chart using flex and heights */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
               <div className="w-full border-t border-slate-100"></div>
               <div className="w-full border-t border-slate-100"></div>
               <div className="w-full border-t border-slate-100"></div>
               <div className="w-full border-t border-slate-100"></div>
            </div>
            {[30, 40, 30, 50, 60, 45, 35, 25, 20, 25, 30, 30, 25, 25, 35].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col justify-end group h-full relative z-10 pb-6">
                <div 
                  className={`w-full rounded-t-sm transition-all ${i === 14 ? 'bg-[#006591] ring-2 ring-offset-2 ring-[#006591]' : 'bg-[#7EACBE] hover:bg-[#006591]'}`} 
                  style={{ height: `${h}%` }}
                ></div>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[8px] font-bold text-slate-400">
                  {14 - i === 0 ? 'H' : 14 - i}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Proyeksi Air Tanah */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 h-[300px] flex flex-col">
          <h2 className="text-sm font-bold text-foreground mb-4">Proyeksi Air Tanah</h2>
          <div className="flex-1 flex flex-col justify-between">
            {[
              { day: 'Sen', w: '85%', color: 'bg-[#39B8FD]', label: 'Optimal', lcolor: 'text-action' },
              { day: 'Sel', w: '75%', color: 'bg-[#39B8FD]', label: 'Optimal', lcolor: 'text-action' },
              { day: 'Rab', w: '50%', color: 'bg-[#39B8FD]', label: 'Peringatan', lcolor: 'text-warning' },
              { day: 'Kam', w: '30%', color: 'bg-danger', label: 'Kritis', lcolor: 'text-danger' },
              { day: 'Jum', w: '18%', color: 'bg-danger', label: 'Kritis', lcolor: 'text-danger' },
              { day: 'Sab', w: '40%', color: 'bg-[#39B8FD]', label: 'Isi Ulang', lcolor: 'text-warning' },
              { day: 'Min', w: '80%', color: 'bg-[#39B8FD]', label: 'Aman', lcolor: 'text-action' },
            ].map((bar, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-6 text-[10px] font-bold text-slate-500">{bar.day}</span>
                <div className="flex-1 h-5 bg-slate-100 rounded-sm overflow-hidden">
                  <div className={`h-full ${bar.color}`} style={{ width: bar.w }}></div>
                </div>
                <span className={`w-16 text-right text-[10px] font-bold ${bar.lcolor}`}>{bar.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 4. Bottom Row: Tables */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* Status Daya */}
        <div className="xl:col-span-1 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <h2 className="text-sm font-bold text-foreground">Status Daya</h2>
            <Zap size={14} className="text-primary" />
          </div>
          <table className="w-full text-left">
            <thead className="text-[10px] text-slate-400 border-b border-slate-100 uppercase bg-slate-50/50">
              <tr>
                <th className="px-5 py-3 font-bold">ID Node</th>
                <th className="px-5 py-3 font-bold">Baterai</th>
                <th className="px-5 py-3 font-bold">Status</th>
              </tr>
            </thead>
            <tbody className="text-xs font-semibold">
              {powerStatusData.map((row, i) => (
                <tr key={i} className="border-b border-slate-50">
                  <td className="px-5 py-3 text-slate-700">{row.id}</td>
                  <td className="px-5 py-3 flex items-center gap-2">
                    <span className={row.textColor}>{row.battery}%</span>
                    <div className="w-12 h-1.5 bg-slate-100 rounded-full">
                      <div className={`h-full rounded-full ${row.color}`} style={{ width: `${row.battery}%` }}></div>
                    </div>
                  </td>
                  <td className="px-5 py-3">
                    <span className={`flex items-center gap-1.5 ${row.textColor}`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${row.color}`}></div>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Metrik Node Mesh */}
        <div className="xl:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <h2 className="text-sm font-bold text-foreground">Metrik Node Mesh</h2>
            <div className="flex gap-2">
              <button className="text-[10px] font-bold text-slate-600 bg-white border border-slate-200 px-3 py-1 rounded shadow-sm hover:bg-slate-50">Ekspor CSV</button>
              <button className="text-[10px] font-bold text-primary bg-blue-50 border border-blue-100 px-3 py-1 rounded shadow-sm hover:bg-blue-100">Segarkan</button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left whitespace-nowrap">
              <thead className="text-[10px] text-slate-400 border-b border-slate-100 bg-slate-50/50">
                <tr>
                  <th className="px-5 py-3 font-bold">Lokasi</th>
                  <th className="px-5 py-3 font-bold">Kelembaban</th>
                  <th className="px-5 py-3 font-bold">PH Tanah</th>
                  <th className="px-5 py-3 font-bold">Kondisi</th>
                  <th className="px-5 py-3 font-bold">Pembaruan Terakhir</th>
                </tr>
              </thead>
              <tbody className="text-xs">
                {meshMetricsData.map((row, i) => (
                  <tr key={i} className="border-b border-slate-50">
                    <td className="px-5 py-4 font-semibold text-slate-700">{row.lokasi}</td>
                    <td className="px-5 py-4 font-semibold text-slate-600">{row.kelembaban}</td>
                    <td className="px-5 py-4 font-semibold text-slate-600">{row.ph}</td>
                    <td className="px-5 py-4">
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded border ${row.kondisiColor}`}>
                        {row.kondisi}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-slate-500 font-medium">{row.waktu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

    </div>
  );
}