import { 
  User, Bell, Lock, Droplet, MapPin, 
  Home, ChevronRight, Key, ShieldCheck
} from "lucide-react";

// Komponen mini untuk Toggle Switch (agar kode lebih bersih)
const Toggle = ({ active }: { active: boolean }) => (
  <div className={`w-11 h-6 rounded-full relative cursor-pointer transition-colors shrink-0 ${active ? 'bg-[#006591]' : 'bg-slate-200'}`}>
    <div className={`w-4 h-4 bg-white rounded-full absolute top-1 shadow-sm transition-all ${active ? 'right-1' : 'left-1'}`}></div>
  </div>
);

export default function PengaturanWargaPage() {
  return (
    <div className="max-w-6xl mx-auto pb-10">
      
      {/* Main Grid Layout (2/3 Kiri, 1/3 Kanan) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* =========================================
            KOLOM KIRI (Data Diri & Notifikasi)
            ========================================= */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          
          {/* Card: Data Diri */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 lg:p-8 shadow-sm">
            <h2 className="text-lg font-bold text-foreground flex items-center gap-2 mb-6">
              <User className="text-primary" size={20} /> Data Diri
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="text-[10px] font-bold text-slate-500 mb-1.5 block">Nama Lengkap</label>
                <input 
                  type="text" 
                  readOnly 
                  defaultValue="Budi Setiawan" 
                  className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 text-sm text-foreground font-medium outline-none" 
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-500 mb-1.5 block">Email</label>
                <input 
                  type="text" 
                  readOnly 
                  defaultValue="budi.setiawan@example.com" 
                  className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 text-sm text-foreground font-medium outline-none" 
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-500 mb-1.5 block">Nomor Telepon</label>
                <input 
                  type="text" 
                  readOnly 
                  defaultValue="+62 812 3456 7890" 
                  className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 text-sm text-foreground font-medium outline-none" 
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-500 mb-1.5 block">NIK</label>
                <input 
                  type="text" 
                  readOnly 
                  defaultValue="3275010000000001" 
                  className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 text-sm text-foreground font-medium outline-none" 
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] font-bold text-slate-500 mb-1.5 block">Alamat Korespondensi</label>
              <textarea 
                readOnly 
                defaultValue="Jl. Mawar Indah No. 42, Kel. Sukamaju, Kec. Kayuringin, Kota Bekasi, Jawa Barat 17144" 
                className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-3 text-sm text-foreground font-medium outline-none resize-none h-20" 
              />
            </div>
          </div>

          {/* Card: Preferensi Notifikasi */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 lg:p-8 shadow-sm">
            <h2 className="text-lg font-bold text-foreground flex items-center gap-2 mb-2">
              <Bell className="text-primary" size={20} /> Preferensi Notifikasi
            </h2>
            <div className="space-y-1">
              
              <div className="flex items-center justify-between py-4 border-b border-slate-100">
                <div className="pr-4">
                  <h4 className="text-sm font-bold text-foreground mb-0.5">Peringatan Kualitas Air</h4>
                  <p className="text-[10px] text-slate-500">Terima info real-time jika pH atau TDS melebihi batas.</p>
                </div>
                <Toggle active={true} />
              </div>

              <div className="flex items-center justify-between py-4 border-b border-slate-100">
                <div className="pr-4">
                  <h4 className="text-sm font-bold text-foreground mb-0.5">Notifikasi Tagihan</h4>
                  <p className="text-[10px] text-slate-500">Pengingat pembayaran 3 hari sebelum jatuh tempo.</p>
                </div>
                <Toggle active={true} />
              </div>

              <div className="flex items-center justify-between py-4">
                <div className="pr-4">
                  <h4 className="text-sm font-bold text-foreground mb-0.5">Push Notification (Mobile)</h4>
                  <p className="text-[10px] text-slate-500">Aktifkan notifikasi langsung ke smartphone Anda.</p>
                </div>
                <Toggle active={false} />
              </div>

            </div>
          </div>

        </div>


        {/* =========================================
            KOLOM KANAN (Kartu, Lokasi, Keamanan)
            ========================================= */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          
          {/* Card: Nomor Pelanggan (Dark) */}
          <div className="bg-[#111827] rounded-2xl p-6 shadow-lg text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#006591]/20 blur-2xl rounded-full -translate-y-10 translate-x-10"></div>
            
            <div className="flex justify-between items-start mb-8 relative z-10">
              <Droplet size={24} className="text-action" />
              <div className="bg-success/20 border border-success/30 text-success text-[8px] font-bold px-2 py-1 rounded-full flex items-center gap-1 uppercase tracking-wider">
                <div className="w-1.5 h-1.5 bg-success rounded-full"></div> Aktif
              </div>
            </div>

            <div className="relative z-10 mb-8">
              <p className="text-[10px] font-semibold text-slate-400 mb-1">Nomor Pelanggan</p>
              <h3 className="text-2xl font-bold tracking-wider">AB-99281-2024</h3>
            </div>

            <div className="relative z-10 flex flex-col gap-2 text-xs">
              <div className="flex justify-between border-b border-slate-700/50 pb-2">
                <span className="text-slate-400">Tipe Sambungan</span>
                <span className="font-semibold">Residensial R1</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-slate-400">Meteran IoT</span>
                <span className="font-semibold">SmartMeter v2.1</span>
              </div>
            </div>
          </div>

          {/* Card: Informasi Lokasi */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-[10px] font-bold text-slate-500 tracking-wider mb-4 uppercase">Informasi Lokasi</h3>
            
            {/* Map Placeholder */}
            <div className="w-full h-32 bg-slate-100 rounded-lg mb-4 relative overflow-hidden border border-slate-200 flex items-center justify-center">
              {/* Fake Map Elements */}
              <div className="absolute inset-0 bg-slate-200/50"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="bg-white p-1.5 rounded-full shadow-md mb-1">
                  <div className="bg-action text-white p-1.5 rounded-full">
                    <MapPin size={16} />
                  </div>
                </div>
                <div className="w-4 h-1.5 bg-black/20 blur-[2px] rounded-[100%]"></div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Home size={16} className="text-slate-400 shrink-0 mt-0.5" />
              <p className="text-xs font-bold text-foreground leading-relaxed">
                Cluster Sakura, Blok G No. 12, Perumahan Mutiara Gading, Bekasi.
              </p>
            </div>
          </div>

          {/* Card: Keamanan */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 lg:p-8 shadow-sm flex-1 flex flex-col">
            <h2 className="text-lg font-bold text-foreground flex items-center gap-2 mb-6">
              <Lock className="text-primary" size={20} /> Keamanan
            </h2>

            <div className="space-y-3 flex-1">
              <button className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 transition-colors rounded-xl border border-slate-100 group">
                <div className="flex gap-4 items-center">
                  <div className="text-slate-400 bg-white p-2 rounded shadow-sm border border-slate-100"><Key size={16} /></div>
                  <div className="text-left">
                    <h4 className="text-sm font-bold text-foreground mb-0.5">Ubah Kata Sandi</h4>
                    <p className="text-[10px] text-slate-500">Terakhir diubah 3 bulan yang lalu.</p>
                  </div>
                </div>
                <ChevronRight size={18} className="text-slate-400 group-hover:text-primary transition-colors" />
              </button>

              <button className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 transition-colors rounded-xl border border-slate-100 group">
                <div className="flex gap-4 items-center">
                  <div className="text-slate-400 bg-white p-2 rounded shadow-sm border border-slate-100"><ShieldCheck size={16} /></div>
                  <div className="text-left">
                    <h4 className="text-sm font-bold text-foreground mb-0.5">Verifikasi Dua Faktor (2FA)</h4>
                    <p className="text-[10px] font-bold text-warning">Belum Aktif - Tingkatkan Keamanan.</p>
                  </div>
                </div>
                <ChevronRight size={18} className="text-slate-400 group-hover:text-primary transition-colors" />
              </button>
            </div>

            <p className="text-[10px] text-slate-400 italic text-center mt-6">
              Sesi aktif Anda saat ini: Chrome di macOS (Bekasi, ID)
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}