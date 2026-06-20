import Link from "next/link";
import { Droplets, Mail, Lock, User, Home, ArrowLeft } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex bg-background">
      
      {/* Kiri: Branding & Banner (Hidden di Mobile) */}
      <div className="hidden lg:flex w-1/2 bg-[#006591] relative overflow-hidden items-center justify-center p-12">
        {/* Dekorasi Latar */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-action blur-[100px] rounded-full opacity-50"></div>
        
        <div className="relative z-10 text-white max-w-lg">
          <div className="flex items-center gap-3 mb-8">
            <Droplets size={48} className="text-white" />
            <h1 className="text-4xl font-bold tracking-tight">AirBersih<span className="text-action">.id</span></h1>
          </div>
          <h2 className="text-2xl font-bold mb-4 leading-snug">
            Transparansi Kualitas & Penggunaan Air Anda.
          </h2>
          <ul className="space-y-4 text-sm text-blue-100 mb-8">
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-action rounded-full"></div>
              Pantau tagihan dan konsumsi air bulanan secara transparan.
            </li>
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-action rounded-full"></div>
              Dapatkan notifikasi jika kualitas air menurun.
            </li>
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-action rounded-full"></div>
              Akses cepat untuk pelaporan kendala (Report Issue).
            </li>
          </ul>
        </div>
      </div>

      {/* Kanan: Form Register */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 overflow-y-auto">
        <div className="w-full max-w-md my-auto">
          
          <div className="mb-8 text-center lg:text-left">
            <Link href="/" className="inline-flex items-center gap-2 text-primary lg:hidden mb-6">
              <Droplets size={28} />
              <span className="text-xl font-bold">AirBersih.id</span>
            </Link>
            <h2 className="text-3xl font-bold text-foreground mb-2">Daftar Akun Warga</h2>
            <p className="text-sm text-slate-500">Lengkapi data diri Anda untuk mengakses portal lingkungan.</p>
          </div>

          <form className="space-y-4">
            
            {/* Nama Lengkap */}
            <div>
              <label className="block text-[10px] font-bold text-slate-500 mb-1.5 tracking-wide uppercase">Nama Lengkap</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <User size={16} />
                </div>
                <input 
                  type="text" 
                  placeholder="Sesuai KTP" 
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-action focus:ring-1 focus:ring-action transition-all"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-[10px] font-bold text-slate-500 mb-1.5 tracking-wide uppercase">Alamat Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Mail size={16} />
                </div>
                <input 
                  type="email" 
                  placeholder="nama@email.com" 
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-action focus:ring-1 focus:ring-action transition-all"
                />
              </div>
            </div>

            {/* Blok & Nomor Rumah */}
            <div>
              <label className="block text-[10px] font-bold text-slate-500 mb-1.5 tracking-wide uppercase">Blok & Nomor Rumah</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Home size={16} />
                </div>
                <input 
                  type="text" 
                  placeholder="Contoh: Blok A2 / No. 14" 
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-action focus:ring-1 focus:ring-action transition-all"
                />
              </div>
            </div>

            {/* Password Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-[10px] font-bold text-slate-500 mb-1.5 tracking-wide uppercase">Kata Sandi</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Lock size={16} />
                  </div>
                  <input 
                    type="password" 
                    placeholder="••••••••" 
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-action focus:ring-1 focus:ring-action transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 mb-1.5 tracking-wide uppercase">Ulangi Sandi</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Lock size={16} />
                  </div>
                  <input 
                    type="password" 
                    placeholder="••••••••" 
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-action focus:ring-1 focus:ring-action transition-all"
                  />
                </div>
              </div>
            </div>

            <button type="button" className="w-full bg-primary hover:bg-blue-800 text-white py-3 rounded-lg text-sm font-bold transition-colors mt-8 shadow-sm">
              Buat Akun Warga
            </button>
          </form>

          {/* Kembali ke Login */}
          <div className="mt-8 pt-6 border-t border-slate-200 text-center">
            <p className="text-sm text-slate-500 mb-4">Sudah mendaftar sebelumnya?</p>
            <Link 
              href="/login" 
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 rounded-lg text-sm font-bold transition-colors"
            >
              <ArrowLeft size={16} /> Kembali ke Halaman Login
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
}