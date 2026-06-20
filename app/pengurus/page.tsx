import { Activity, AlertCircle, Timer, Home, Cylinder, Sprout } from "lucide-react";

// --- Sub-Komponen ---

const StatCard = ({ title, value, subtext, icon: Icon, highlight, statusColor }: any) => (
  <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
    <div className="flex justify-between items-start mb-2">
      <p className="text-sm font-medium text-slate-500">{title}</p>
      <div className={`p-2 rounded-lg ${statusColor}`}>
        <Icon size={20} />
      </div>
    </div>
    <div>
      <h2 className="text-3xl font-bold text-foreground mb-1">{value}</h2>
      <p className={`text-xs font-medium ${highlight ? highlight : "text-slate-500"}`}>
        {subtext}
      </p>
    </div>
  </div>
);

const ReservoirStatus = () => (
  <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm h-full flex flex-col">
    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
      <Cylinder size={20} /> Status Reservoir
    </h3>
    <div className="space-y-6 flex-1">
      {/* Item 1 */}
      <div>
        <div className="flex justify-between text-sm font-bold mb-1">
          <span>Reservoir Utama Alpha</span>
          <span className="bg-action text-white text-[10px] px-2 py-0.5 rounded-full">MENGISI</span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-2 mb-1">
          <div className="bg-primary h-2 rounded-full" style={{ width: "88%" }}></div>
        </div>
        <div className="flex justify-between text-xs text-slate-500">
          <span>88% Penuh</span>
          <span>2.4rb L / 3rb L</span>
        </div>
      </div>
      {/* Item 2 */}
      <div>
        <div className="flex justify-between text-sm font-bold mb-1">
          <span>Sub-Tank #02 (RT 05)</span>
          <span className="bg-slate-200 text-slate-600 text-[10px] px-2 py-0.5 rounded-full">STABIL</span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-2 mb-1">
          <div className="bg-slate-400 h-2 rounded-full" style={{ width: "45%" }}></div>
        </div>
        <div className="flex justify-between text-xs text-slate-500">
          <span>45% Penuh</span>
          <span>450 L / 1rb L</span>
        </div>
      </div>
      {/* Item 3 */}
      <div>
        <div className="flex justify-between text-sm font-bold mb-1">
          <span className="text-danger">Sub-Tank #04 (RT 12)</span>
          <span className="bg-red-100 text-danger border border-red-200 text-[10px] px-2 py-0.5 rounded-full">KRITIS</span>
        </div>
        <div className="w-full bg-red-100 rounded-full h-2 mb-1">
          <div className="bg-danger h-2 rounded-full" style={{ width: "96%" }}></div>
        </div>
        <div className="flex justify-between text-xs text-danger">
          <span>96% Penuh - Overpressure</span>
          <span>960 L / 1rb L</span>
        </div>
      </div>
    </div>
    <button className="w-full mt-4 py-2 border border-slate-300 text-sm font-bold rounded-lg hover:bg-slate-50 transition-colors">
      KELOLA SEMUA TANGKI
    </button>
  </div>
);

// --- Halaman Utama Dashboard ---

export default function DashboardPengurus() {
  return (
    <div className="space-y-6">
      
      {/* 4 Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Sensor Aktif" 
          value="128" 
          subtext="✓ 100% Online" 
          highlight="text-success"
          icon={Activity} 
          statusColor="bg-blue-50 text-action" 
        />
        <StatCard 
          title="Alert Aktif" 
          value="03" 
          subtext="⚠ 1 Prioritas Kritis" 
          highlight="text-danger"
          icon={AlertCircle} 
          statusColor="bg-red-50 text-danger" 
        />
        <StatCard 
          title="Status Pompa" 
          value="08 /12" 
          subtext="⟳ 4 Siaga / Pemeliharaan" 
          icon={Timer} 
          statusColor="bg-slate-100 text-slate-600" 
        />
        <StatCard 
          title="Rata-rata Level Tangki" 
          value="74.2%" 
          subtext="↗ +2.1% dari jam lalu" 
          highlight="text-success"
          icon={Home} 
          statusColor="bg-blue-50 text-action" 
        />
      </div>

      {/* Main Grid: Peta & Reservoir */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Kolom Peta (Lebih Lebar) */}
        <div className="lg:col-span-2 bg-white p-5 rounded-xl border border-slate-200 shadow-sm min-h-[400px] flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-foreground">Peta Node Wilayah</h3>
            <div className="flex items-center gap-3 text-xs font-medium">
              <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-primary"></div> Sehat</span>
              <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-danger"></div> Alert</span>
            </div>
          </div>
          {/* Placeholder Peta */}
          <div className="flex-1 bg-slate-100 rounded-lg border border-slate-200 flex items-center justify-center relative overflow-hidden">
             <p className="text-slate-400 font-medium">Map Component / Leaflet.js Render Area</p>
          </div>
        </div>

        {/* Kolom Reservoir */}
        <div className="lg:col-span-1">
          <ReservoirStatus />
        </div>
      </div>

      {/* Bagian Bawah: Serapan Tanah */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-8">
         <div className="md:w-1/3">
           <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
             <Sprout size={20} /> Serapan Tanah
           </h3>
           <p className="text-sm text-slate-500 mb-4">
             Memantau kelembapan tanah dan kapasitas drainase di 8 sub-distrik untuk memprediksi limpasan reservoir.
           </p>
           <button className="bg-foreground text-white text-sm font-bold px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-slate-800 transition-colors">
             Halaman Monitor Lengkap &rarr;
           </button>
         </div>
         <div className="flex-1 w-full flex gap-4">
            {/* Chart Dummy */}
            <div className="flex-1">
              <div className="flex justify-between text-xs font-bold mb-1"><span>RT 01 SEL.</span><span>62%</span></div>
              <div className="h-12 bg-primary mb-1"></div>
              <p className="text-[10px] text-action">Serapan Optimal</p>
            </div>
            <div className="flex-1">
              <div className="flex justify-between text-xs font-bold mb-1"><span>RT 04 TIM.</span><span>88%</span></div>
              <div className="h-12 bg-danger mb-1"></div>
              <p className="text-[10px] text-danger">Peringatan Kejenuhan</p>
            </div>
            <div className="flex-1">
              <div className="flex justify-between text-xs font-bold mb-1"><span>RT 09 BAR.</span><span>45%</span></div>
              <div className="h-12 bg-slate-400 mb-1"></div>
              <p className="text-[10px] text-slate-500">Kondisi Gersang</p>
            </div>
         </div>
      </div>
    </div>
  );
}