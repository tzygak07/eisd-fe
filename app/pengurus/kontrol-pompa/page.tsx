import { 
  CheckCircle2, AlertTriangle, Clock, Filter, 
  ToggleRight, ToggleLeft
} from "lucide-react";

// --- Dummy Data ---
const auditLogData = [
  { waktu: "2024-05-20 14:23:45", idPompa: "Submersible-01", aksi: "NYALA", oleh: "Aditya R. (ID: 402)", metode: "Manual", status: "Berhasil", statusType: "success-text" },
  { waktu: "2024-05-20 12:00:00", idPompa: "Sentrifugal-02", aksi: "MATI", oleh: "Kernel Sistem", metode: "Jadwal", status: "Berhasil", statusType: "success-text" },
  { waktu: "2024-05-20 10:45:12", idPompa: "Submersible-01", aksi: "BERHENTI DARURAT", oleh: "Kelebihan Beban Sensor", metode: "Auto-Fail", status: "Pemutusan Aman", statusType: "danger-pill" },
  { waktu: "2024-05-20 08:30:00", idPompa: "Sentrifugal-03", aksi: "PEMELIHARAAN", oleh: "Budi S. (ID: 211)", metode: "Manual", status: "Tercatat", statusType: "info-pill" },
];

export default function KontrolPompaPage() {
  return (
    <div className="space-y-6">
      
      {/* Top Grid: Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Card 1: Submersible-01 (Normal) */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-xl font-bold text-foreground">Submersible-01</h2>
              <p className="text-xs text-slate-500">Tangki Penyimpanan Utama Alpha</p>
            </div>
            <span className="flex items-center gap-1.5 bg-green-50 text-success text-[10px] font-bold px-2 py-1 rounded-full border border-green-100">
              <div className="w-1.5 h-1.5 rounded-full bg-success"></div> AKTIF
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-5 p-4 bg-slate-50 rounded-lg border border-slate-100">
            <div>
              <p className="text-[10px] font-bold text-slate-500 mb-1 tracking-wider">ARUS (ACS712)</p>
              <p className="text-2xl font-bold text-foreground">
                8.42 <span className="text-sm font-medium text-slate-500">Ampere</span>
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-500 mb-1 tracking-wider">KESEHATAN</p>
              <p className="text-success font-semibold flex items-center gap-1">
                <CheckCircle2 size={16} /> Normal
              </p>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-4 mt-auto">
            <p className="text-[10px] font-bold text-slate-500 mb-2 tracking-wider">SAKLAR PERINTAH</p>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-400 bg-slate-100 px-6 py-2 rounded-full border border-slate-200">
                TERKUNCI
              </span>
              {/* Toggle Active (Dummy) */}
              <div className="w-12 h-6 bg-action rounded-full relative cursor-pointer shadow-inner">
                <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1 shadow"></div>
              </div>
            </div>
            <p className="text-xs text-slate-500 text-center mt-3">Klik tombol untuk mengaktifkan saklar</p>
          </div>
        </div>

        {/* Card 2: Sentrifugal-02 (Warning) */}
        <div className="bg-white rounded-xl border border-danger p-5 shadow-sm shadow-red-50 flex flex-col relative overflow-hidden">
          {/* Subtle red tint background at the top */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-danger"></div>
          
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-xl font-bold text-foreground">Sentrifugal-02</h2>
              <p className="text-xs text-slate-500">Filtrasi Zona B</p>
            </div>
            <span className="flex items-center gap-1.5 bg-red-50 text-danger text-[10px] font-bold px-2 py-1 rounded-full border border-red-100">
              <div className="w-1.5 h-1.5 rounded-full bg-danger"></div> STANDBY
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-5 p-4 bg-slate-50 rounded-lg border border-slate-100">
            <div>
              <p className="text-[10px] font-bold text-slate-500 mb-1 tracking-wider">ARUS (ACS712)</p>
              <p className="text-2xl font-bold text-danger">
                12.8 <span className="text-sm font-medium text-slate-500">Ampere</span>
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-500 mb-1 tracking-wider">KESEHATAN</p>
              <p className="text-danger font-semibold flex items-start gap-1 leading-tight text-sm">
                <AlertTriangle size={16} className="shrink-0 mt-0.5" /> Lonjakan<br/>Terdeteksi
              </p>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-4 mt-auto">
            <p className="text-[10px] font-bold text-slate-500 mb-2 tracking-wider">SAKLAR PERINTAH</p>
            <div className="flex items-center justify-between mb-2 opacity-60">
              <span className="text-xs font-bold text-slate-400 bg-slate-100 px-6 py-2 rounded-full border border-slate-200">
                TERKUNCI
              </span>
              {/* Toggle Inactive (Dummy) */}
              <div className="w-12 h-6 bg-slate-200 rounded-full relative cursor-not-allowed shadow-inner">
                <div className="w-4 h-4 bg-white rounded-full absolute left-1 top-1 shadow"></div>
              </div>
            </div>
            <p className="text-xs text-danger font-medium text-center mt-3">Risiko lonjakan tinggi: Terkunci</p>
          </div>
        </div>

        {/* Card 3: Mesin Otomatisasi (Dark) */}
        <div className="bg-[#111827] rounded-xl border border-slate-800 p-5 shadow-lg flex flex-col text-white">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="text-action" size={24} />
            <h2 className="text-lg font-bold">Mesin Otomatisasi</h2>
          </div>
          
          <p className="text-sm text-slate-400 mb-6 leading-relaxed">
            Urutan berikutnya: Pompa-01 jam 18:00<br/>(Pengisian Malam)
          </p>

          <div className="space-y-3 mb-6 flex-1">
            <div className="flex justify-between items-center pb-2 border-b border-slate-700/50">
              <span className="text-sm font-semibold text-slate-200">06:00 - 08:00</span>
              <span className="text-[10px] font-bold bg-action/20 text-action px-2 py-0.5 rounded border border-action/30">Harian</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-700/50">
              <span className="text-sm font-semibold text-slate-200">18:00 - 20:00</span>
              <span className="text-[10px] font-bold bg-action/20 text-action px-2 py-0.5 rounded border border-action/30">Harian</span>
            </div>
          </div>

          <button className="w-full py-2.5 mt-auto border border-slate-600 hover:border-action hover:bg-action/10 text-sm font-bold rounded-lg transition-colors">
            Konfigurasi Jadwal
          </button>
        </div>

      </div>

      {/* Bottom Table: Log Audit */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-200 flex justify-between items-center">
          <h2 className="text-lg font-bold text-foreground">Log Audit</h2>
          <button className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-action transition-colors">
            <Filter size={16} /> Filter Log
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-500 bg-slate-50/50 border-b border-slate-200">
              <tr>
                <th className="px-5 py-3 font-semibold tracking-wider">WAKTU</th>
                <th className="px-5 py-3 font-semibold tracking-wider">ID POMPA</th>
                <th className="px-5 py-3 font-semibold tracking-wider">AKSI</th>
                <th className="px-5 py-3 font-semibold tracking-wider">DILAKUKAN OLEH</th>
                <th className="px-5 py-3 font-semibold tracking-wider">METODE</th>
                <th className="px-5 py-3 font-semibold tracking-wider">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {auditLogData.map((log, index) => (
                <tr key={index} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-4 text-slate-600 font-medium">{log.waktu}</td>
                  <td className="px-5 py-4 text-foreground font-medium">{log.idPompa}</td>
                  <td className={`px-5 py-4 font-bold ${log.aksi === "BERHENTI DARURAT" ? "text-danger" : "text-foreground"}`}>
                    {log.aksi}
                  </td>
                  <td className="px-5 py-4 text-slate-600">{log.oleh}</td>
                  <td className="px-5 py-4 text-slate-600">{log.metode}</td>
                  <td className="px-5 py-4">
                    {log.statusType === "success-text" && (
                      <span className="text-success font-semibold">{log.status}</span>
                    )}
                    {log.statusType === "danger-pill" && (
                      <span className="bg-red-100 text-danger text-xs font-bold px-3 py-1 rounded-full">{log.status}</span>
                    )}
                    {log.statusType === "info-pill" && (
                      <span className="bg-blue-100 text-primary text-xs font-bold px-3 py-1 rounded-full">{log.status}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}