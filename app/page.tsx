import Link from "next/link";
import { Droplets, Users, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-6">
      <div className="max-w-3xl w-full text-center space-y-10">
        
        {/* Header / Logo Section */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="text-primary">
            <Droplets size={72} fill="currentColor" />
          </div>
          <div>
            {/* Menggunakan class .h1 dari Design System kita */}
            <h1 className="h1 text-primary mb-4">AirBersih.id</h1>
            <p className="text-lg text-slate-600 max-w-xl mx-auto">
              Sistem Manajemen Air Bersih & Pemantauan Sensor IoT Terintegrasi untuk Lingkungan RT/RW.
            </p>
          </div>
        </div>

        {/* Portal Navigasi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          
          {/* Akses Warga */}
          <Link 
            href="/warga" 
            className="flex flex-col items-center p-8 bg-white border border-slate-200 rounded-2xl hover:border-action hover:shadow-lg transition-all duration-300 group"
          >
            <div className="p-4 bg-blue-50 text-action rounded-full mb-6 group-hover:bg-action group-hover:text-white transition-colors duration-300">
              <Users size={40} />
            </div>
            {/* Menggunakan class .h2 dari Design System */}
            <h2 className="h2 text-foreground mb-3">Portal Warga</h2>
            <p className="text-sm text-slate-500 text-center leading-relaxed">
              Akses informasi donasi, tagihan air bulanan, dan pantau kualitas air di lingkungan Anda.
            </p>
          </Link>

          {/* Akses Pengurus */}
          <Link 
            href="/pengurus" 
            className="flex flex-col items-center p-8 bg-white border border-slate-200 rounded-2xl hover:border-primary hover:shadow-lg transition-all duration-300 group"
          >
            <div className="p-4 bg-slate-50 text-primary rounded-full mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <ShieldCheck size={40} />
            </div>
            <h2 className="h2 text-foreground mb-3">Panel RT/RW</h2>
            <p className="text-sm text-slate-500 text-center leading-relaxed">
              Kelola data node sensor, monitor operasional pompa, dan kelola peringatan sistem.
            </p>
          </Link>

        </div>
        
        {/* Link Opsional ke Halaman Auth */}
        <div className="pt-10">
          <Link 
            href="/login" 
            className="text-sm font-semibold text-slate-400 hover:text-action transition-colors"
          >
            Masuk sebagai Administrator Sistem &rarr;
          </Link>
        </div>

      </div>
    </div>
  );
}