import { 
  Droplet, Lock, Megaphone, CheckCircle2, 
  Clock, User, ChevronDown, Camera
} from "lucide-react";

// --- Dummy Data ---
const notifications = [
  {
    id: 1,
    type: "danger",
    icon: Droplet,
    title: "Kualitas Air: pH Melebihi Batas Normal",
    statusText: "Dalam Pengecekan",
    statusColor: "bg-red-50 text-danger",
    desc: "Sensor di Blok B-12 mendeteksi tingkat pH di atas 8.5. Disarankan untuk membatasi konsumsi langsung hingga penyeimbangan selesai.",
    time: "15 Menit yang lalu",
    duration: "45 menit",
    personnel: "Teknisi: Andi Wijaya",
    personnelIcon: CheckCircle2,
    personnelColor: "text-[#006591]"
  },
  {
    id: 2,
    type: "warning",
    icon: Lock,
    title: "Pengisian Tangki: Kapasitas Rendah",
    statusText: "Menunggu Antrian",
    statusColor: "bg-slate-100 text-slate-500",
    desc: "Cadangan air tangki utama RT 04 mencapai 15%. Pompa otomatis akan diaktifkan pada pukul 21:00 WIB.",
    time: "2 Jam yang lalu",
    duration: "2 jam 10 menit",
    personnel: "",
  },
  {
    id: 3,
    type: "info",
    icon: Megaphone,
    title: "Informasi RT/RW: Kerja Bakti Bulanan",
    statusText: "Selesai",
    statusColor: "bg-green-50 text-success",
    desc: "Terima kasih atas partisipasi warga dalam pembersihan area filter komunal pagi ini. Sistem kini beroperasi maksimal.",
    time: "Hari ini, 10:30 WIB",
    personnel: "Sumber: Pengurus RW 08",
    personnelIcon: User,
    personnelColor: "text-slate-500"
  },
  {
    id: 4,
    type: "success",
    icon: CheckCircle2,
    title: "Pemeliharaan Selesai: Filter Blok C",
    statusText: "Selesai",
    statusColor: "bg-green-50 text-success",
    desc: "Penggantian membran filter sand di Blok C telah rampung. Aliran air kembali normal dengan TDS 120 ppm.",
    time: "Kemarin, 16:45 WIB",
    duration: "3 jam",
    personnel: "",
  }
];

export default function NotifikasiWargaPage() {
  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-10">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Pusat Notifikasi</h1>
          <p className="text-sm text-slate-500 max-w-md">
            Pantau seluruh riwayat peringatan sistem dan pengumuman lingkungan secara real-time.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex bg-white rounded-xl border border-slate-200 p-1.5 shadow-sm overflow-x-auto hide-scrollbar">
          <button className="px-5 py-2 text-sm font-bold bg-[#006591] text-white rounded-lg shadow-sm whitespace-nowrap">
            Semua
          </button>
          <button className="px-5 py-2 text-sm font-semibold text-slate-600 hover:text-foreground whitespace-nowrap transition-colors">
            Kualitas Air
          </button>
          <button className="px-5 py-2 text-sm font-semibold text-slate-600 hover:text-foreground whitespace-nowrap transition-colors">
            Tangki
          </button>
          <button className="px-5 py-2 text-sm font-semibold text-slate-600 hover:text-foreground whitespace-nowrap transition-colors">
            Info Lingkungan
          </button>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Kolom Kiri: Statistik & Image Card */}
        <div className="lg:col-span-1 space-y-6">
          
          {/* Statistik 24 Jam */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-[10px] font-bold text-slate-500 tracking-wider mb-6 uppercase">Statistik 24 Jam</h3>
            
            <div className="space-y-5">
              <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                <span className="text-sm font-semibold text-slate-600">Total Notifikasi</span>
                <span className="text-xl font-bold text-foreground">12</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                <span className="text-sm font-semibold text-slate-600">Butuh Tindakan</span>
                <span className="text-xl font-bold text-danger">2</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-slate-600">Selesai</span>
                <span className="text-xl font-bold text-success">10</span>
              </div>
            </div>
          </div>

          {/* Image Card Overlay */}
          <div className="bg-[#111827] rounded-2xl h-40 relative overflow-hidden shadow-sm group cursor-pointer">
            <div className="absolute inset-0 bg-slate-800/80 mix-blend-overlay"></div>
            {/* Camera Icon as placeholder for background image */}
            <Camera className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/10" size={64} />
            
            <div className="absolute bottom-0 left-0 p-5">
              <p className="text-xs font-semibold text-slate-300 mb-1">Laporan Kebersihan Terakhir</p>
              <h4 className="text-base font-bold text-white">12 Okt 2024</h4>
            </div>
          </div>

        </div>

        {/* Kolom Kanan: Daftar Notifikasi */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          
          {notifications.map((notif) => (
            <div 
              key={notif.id} 
              className={`bg-white rounded-2xl border-y border-r border-slate-200 shadow-sm p-6 relative overflow-hidden transition-all hover:shadow-md
                border-l-4 
                ${notif.type === 'danger' ? 'border-l-danger' : ''}
                ${notif.type === 'warning' ? 'border-l-warning' : ''}
                ${notif.type === 'info' ? 'border-l-[#006591]' : ''}
                ${notif.type === 'success' ? 'border-l-success' : ''}
              `}
            >
              <div className="flex gap-4 sm:gap-5 items-start">
                
                {/* Icon Circle */}
                <div className={`p-2.5 rounded-full shrink-0 mt-1
                  ${notif.type === 'danger' ? 'bg-red-50 text-danger' : ''}
                  ${notif.type === 'warning' ? 'bg-orange-50 text-warning' : ''}
                  ${notif.type === 'info' ? 'bg-blue-50 text-[#006591]' : ''}
                  ${notif.type === 'success' ? 'bg-green-50 text-success' : ''}
                `}>
                  <notif.icon size={20} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                    <h3 className="text-base font-bold text-foreground">{notif.title}</h3>
                    <span className={`text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap w-fit ${notif.statusColor}`}>
                      {notif.statusText}
                    </span>
                  </div>
                  
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {notif.desc}
                  </p>

                  {/* Metadata Row */}
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} className="text-slate-400" />
                      {notif.time}
                    </div>
                    
                    {notif.duration && (
                      <div className="flex items-center gap-1.5">
                        <Clock size={14} className="text-slate-400" />
                        Durasi: {notif.duration}
                      </div>
                    )}

                    {notif.personnel && (
                      <div className={`flex items-center gap-1.5 ${notif.personnelColor}`}>
                        {notif.personnelIcon && <notif.personnelIcon size={14} />}
                        {notif.personnel}
                      </div>
                    )}
                  </div>

                </div>
              </div>
            </div>
          ))}

          {/* Load More Button */}
          <button className="w-full sm:w-fit mx-auto mt-2 px-6 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 text-sm font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm">
            Tampilkan Lebih Banyak <ChevronDown size={16} />
          </button>

        </div>

      </div>

    </div>
  );
}