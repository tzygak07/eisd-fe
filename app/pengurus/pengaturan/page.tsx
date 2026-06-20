import { 
  Waves, Info, Save, Cylinder, HelpCircle, 
  Banknote, Plus, GripHorizontal, Lightbulb
} from "lucide-react";

export default function PengaturanSistemPage() {
  return (
    <div className="space-y-6 pb-8">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <h1 className="text-2xl font-bold text-foreground">Konfigurasi Sistem</h1>
        <div className="flex items-center gap-4">
          <button className="text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors">
            Batal
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-foreground text-white rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors shadow-sm">
            <Save size={16} /> Simpan Perubahan
          </button>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Kolom Kiri: Form Sensor & Tangki (Lebih Lebar) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Card 1: Ambang Batas Kualitas Air */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 lg:p-8">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <Waves className="text-primary" size={24} /> 
                Ambang Batas Kualitas Air (NTU)
              </h2>
              <Info size={20} className="text-slate-400 cursor-pointer" />
            </div>
            <p className="text-sm text-slate-500 mb-6">Tetapkan batas kekeruhan air untuk memicu peringatan dan pemutusan otomatis.</p>

            <div className="space-y-4">
              {/* Level Peringatan */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 border border-slate-200 rounded-lg bg-slate-50/50">
                <div className="flex items-center gap-3 sm:w-1/3">
                  <div className="w-3 h-3 rounded-full bg-warning"></div>
                  <span className="font-bold text-foreground">Level Peringatan</span>
                </div>
                <div className="flex items-center gap-2 sm:w-1/3">
                  <input type="text" defaultValue="1.5" className="w-20 border border-slate-300 rounded px-3 py-1.5 text-sm font-medium focus:outline-none focus:border-action bg-white" />
                  <span className="text-sm text-slate-500 font-medium">NTU</span>
                </div>
                <div className="sm:w-1/3 sm:text-right">
                  <span className="text-xs font-medium text-slate-500">Kirim notifikasi ke Admin</span>
                </div>
              </div>

              {/* Level Bahaya */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 border border-slate-200 rounded-lg bg-slate-50/50">
                <div className="flex items-center gap-3 sm:w-1/3">
                  <div className="w-3 h-3 rounded-full bg-[#F97316]"></div> {/* Orange custom */}
                  <span className="font-bold text-foreground">Level Bahaya</span>
                </div>
                <div className="flex items-center gap-2 sm:w-1/3">
                  <input type="text" defaultValue="3.0" className="w-20 border border-slate-300 rounded px-3 py-1.5 text-sm font-medium focus:outline-none focus:border-action bg-white" />
                  <span className="text-sm text-slate-500 font-medium">NTU</span>
                </div>
                <div className="sm:w-1/3 sm:text-right">
                  <span className="text-xs font-medium text-slate-500">Peringatan sistem prioritas tinggi</span>
                </div>
              </div>

              {/* Level Kritis (Active/Danger) */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 border border-red-200 rounded-lg bg-red-50/30">
                <div className="flex items-center gap-3 sm:w-1/3">
                  <div className="w-3 h-3 rounded-full bg-danger"></div>
                  <span className="font-bold text-danger">Level Kritis</span>
                </div>
                <div className="flex items-center gap-2 sm:w-1/3">
                  <input type="text" defaultValue="5.0" className="w-20 border border-red-300 rounded px-3 py-1.5 text-sm font-bold text-danger focus:outline-none focus:border-danger bg-white" />
                  <span className="text-sm text-danger font-medium">NTU</span>
                </div>
                <div className="sm:w-1/3 flex items-center justify-between sm:justify-end gap-3">
                  <div className="text-right">
                    <p className="text-xs font-bold text-danger">Relay Auto-Cut</p>
                    <p className="text-[10px] text-danger/80">Hentikan pompa otomatis</p>
                  </div>
                  {/* Toggle Switch On (Red) */}
                  <div className="w-10 h-5 bg-danger rounded-full relative cursor-pointer shadow-inner shrink-0">
                    <div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5 shadow"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Ambang Batas Tangki */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 lg:p-8">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2 mb-2">
              <Cylinder className="text-primary" size={24} /> 
              Ambang Batas Penyimpanan Tangki
            </h2>
            <p className="text-sm text-slate-500 mb-6">Konfigurasi volume minimum untuk manajemen ketersediaan air bersih.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
              
              {/* Kapasitas Total */}
              <div>
                <label className="block text-xs font-bold text-slate-500 tracking-wider mb-2 uppercase">Kapasitas Total Tangki</label>
                <div className="flex items-center gap-3">
                  <input type="text" defaultValue="5000" className="flex-1 border border-slate-300 rounded-lg px-4 py-2 text-sm font-medium bg-slate-50 focus:outline-none focus:border-action" />
                  <span className="text-sm font-semibold text-slate-600">Liter</span>
                </div>
              </div>

              {/* Batas Peringatan */}
              <div>
                <label className="block text-xs font-bold text-slate-500 tracking-wider mb-2 uppercase">Batas Peringatan Minimum</label>
                <div className="flex items-center gap-3">
                  <input type="text" defaultValue="500" className="flex-1 border border-slate-300 rounded-lg px-4 py-2 text-sm font-bold text-foreground focus:outline-none focus:border-action" />
                  <span className="text-sm font-semibold text-slate-600">Liter</span>
                  <HelpCircle size={18} className="text-slate-400 cursor-pointer shrink-0" />
                </div>
                
                {/* Visual Slider Bar */}
                <div className="mt-4">
                  <div className="h-1.5 w-full bg-blue-100 rounded-full relative">
                    {/* Progress Fill */}
                    <div className="absolute top-0 left-0 h-full bg-[#006591] rounded-full w-[10%]"></div>
                    {/* Thumb/Handle */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-[10%] w-4 h-4 bg-action rounded-full border-2 border-white shadow shadow-blue-200"></div>
                  </div>
                  <div className="flex justify-between mt-2 text-[10px] font-bold text-slate-400">
                    <span>Kosong</span>
                    <span className="text-slate-600">10% Garis Peringatan</span>
                    <span>Penuh</span>
                  </div>
                </div>
              </div>

            </div>
            
            <p className="text-[10px] text-slate-400 mt-6">* Berdasarkan spesifikasi hardware terpasang.</p>
          </div>

        </div>

        {/* Kolom Kanan: Struktur Tarif */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col h-full">
            
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                <Banknote className="text-primary" size={20} /> 
                Struktur Tarif
              </h2>
              <button className="text-xs font-bold text-primary hover:text-action transition-colors flex items-center gap-1">
                <Plus size={14} /> Tier Baru
              </button>
            </div>

            {/* Biaya Admin Box */}
            <div className="bg-slate-50 border border-slate-100 rounded-lg p-4 mb-6">
              <p className="text-[10px] font-bold text-slate-500 tracking-wider mb-1 uppercase">Biaya Admin Bulanan</p>
              <p className="text-xl font-bold text-foreground">
                <span className="text-sm font-semibold text-slate-500 mr-1">Rp</span>15.000
              </p>
            </div>

            {/* List Tier Harga */}
            <div className="flex-1 space-y-4">
              <p className="text-[10px] font-bold text-slate-500 tracking-wider mb-2 uppercase">Tier Harga (Per M³)</p>
              
              {/* Tier 1 */}
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <p className="text-[10px] font-bold text-slate-600 mb-1">0 - 10 m³</p>
                  <div className="flex items-center border border-slate-300 rounded px-3 py-1.5 bg-white focus-within:border-action">
                    <span className="text-xs font-bold text-slate-500 mr-2">Rp</span>
                    <input type="text" defaultValue="3.500" className="w-full text-sm font-medium focus:outline-none" />
                  </div>
                </div>
                <GripHorizontal size={16} className="text-slate-300 mt-5 cursor-grab" />
              </div>

              {/* Tier 2 */}
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <p className="text-[10px] font-bold text-slate-600 mb-1">11 - 20 m³</p>
                  <div className="flex items-center border border-slate-300 rounded px-3 py-1.5 bg-white focus-within:border-action">
                    <span className="text-xs font-bold text-slate-500 mr-2">Rp</span>
                    <input type="text" defaultValue="4.750" className="w-full text-sm font-medium focus:outline-none" />
                  </div>
                </div>
                <GripHorizontal size={16} className="text-slate-300 mt-5 cursor-grab" />
              </div>

              {/* Tier 3 */}
              <div className="flex items-center gap-3">
                <div className="flex-1 border-b border-dashed border-slate-300 pb-4">
                  <p className="text-[10px] font-bold text-slate-600 mb-1">&gt; 20 m³</p>
                  <div className="flex items-center border border-slate-300 rounded px-3 py-1.5 bg-white focus-within:border-action">
                    <span className="text-xs font-bold text-slate-500 mr-2">Rp</span>
                    <input type="text" defaultValue="6.000" className="w-full text-sm font-medium focus:outline-none" />
                  </div>
                </div>
                <GripHorizontal size={16} className="text-slate-300 mt-1 cursor-grab" />
              </div>
            </div>

            {/* Info Box Bottom */}
            <div className="mt-6 bg-blue-50/50 border border-blue-100 rounded-lg p-4 flex gap-3">
              <Lightbulb size={16} className="text-action shrink-0 mt-0.5" />
              <p className="text-[10px] text-action/90 font-medium leading-relaxed">
                Tarif progresif mendorong penghematan air. Perubahan akan berlaku pada siklus penagihan bulan berikutnya.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}