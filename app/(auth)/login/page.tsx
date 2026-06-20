import Link from "next/link";
import { Droplets, Mail, Lock, ArrowRight, ShieldCheck, Home } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex bg-background">
      
      {/* Kiri: Branding & Banner (Hidden di Mobile) */}
      <div className="hidden lg:flex w-1/2 bg-[#111827] relative overflow-hidden items-center justify-center p-12">
        {/* Dekorasi Latar */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,100 C30,60 70,60 100,100 Z" fill="#39B8FD" />
            <path d="M0,100 C30,40 70,40 100,100 Z" fill="#006591" opacity="0.5"/>
          </svg>
        </div>
        
        <div className="relative z-10 text-white max-w-lg">
          <div className="flex items-center gap-3 mb-8">
            <Droplets size={48} className="text-action" />
            <h1 className="text-4xl font-bold tracking-tight">AirBersih<span className="text-action">.id</span></h1>
          </div>
          <h2 className="text-2xl font-bold mb-4 leading-snug">
            Sistem Manajemen Air Bersih & Pemantauan IoT Lingkungan.
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-8">
            Akses dashboard pemantauan kualitas air real-time, kontrol pompa otomatis, dan kelola tagihan warga dalam satu platform terpadu.
          </p>
          
          {/* Info Box untuk Testing */}
          <div className="bg-white/10 border border-white/20 rounded-xl p-4 backdrop-blur-sm">
            <p className="text-xs font-bold text-action mb-2 flex items-center gap-2">
              <ShieldCheck size={14} /> INFO LOGIN PENGURUS
            </p>
            <p className="text-xs text-slate-300">Email: <span className="font-mono text-white">admin@rt.id</span></p>
            <p className="text-xs text-slate-300">Pass: <span className="font-mono text-white">admin123</span></p>
          </div>
        </div>
      </div>

      {/* Kanan: Form Login */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12">
        <div className="w-full max-w-md">
          
          <div className="mb-8 text-center lg:text-left">
            <Link href="/" className="inline-flex items-center gap-2 text-primary lg:hidden mb-6">
              <Droplets size={28} />
              <span className="text-xl font-bold">AirBersih.id</span>
            </Link>
            <h2 className="text-3xl font-bold text-foreground mb-2">Selamat Datang</h2>
            <p className="text-sm text-slate-500">Silakan masuk menggunakan email dan kata sandi Anda.</p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-500 mb-2 tracking-wide uppercase">Email / ID Pengguna</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Mail size={18} />
                </div>
                <input 
                  type="email" 
                  placeholder="nama@email.com" 
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-action focus:ring-1 focus:ring-action transition-all"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-bold text-slate-500 tracking-wide uppercase">Kata Sandi</label>
                <a href="#" className="text-xs font-bold text-primary hover:text-action transition-colors">Lupa sandi?</a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Lock size={18} />
                </div>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-action focus:ring-1 focus:ring-action transition-all"
                />
              </div>
            </div>

            <button type="button" className="w-full flex items-center justify-center gap-2 bg-foreground hover:bg-slate-800 text-white py-3 rounded-lg text-sm font-bold transition-colors mt-6 shadow-sm">
              Masuk ke Dashboard <ArrowRight size={16} />
            </button>
          </form>

          {/* Registrasi Warga */}
          <div className="mt-10 pt-6 border-t border-slate-200 text-center">
            <p className="text-sm text-slate-500 mb-4">Warga baru di lingkungan ini?</p>
            <Link 
              href="/register" 
              className="inline-flex items-center justify-center gap-2 w-full py-3 bg-blue-50 text-primary border border-blue-100 hover:bg-blue-100 rounded-lg text-sm font-bold transition-colors"
            >
              <Home size={16} /> Registrasi Akun Warga
            </Link>
          </div>

        </div>
      </div>

    </div>
  );
}