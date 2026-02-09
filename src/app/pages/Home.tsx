import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Cpu, ShieldCheck, Cog, Bell, 
  ChevronRight, Facebook, Twitter, Linkedin
} from "lucide-react";

// Asset Imports
import logo from "../../assets/logo.png";
import siet1 from "../../assets/siet1.jpg";
import siet2 from "../../assets/siet2.webp";
import siet3 from "../../assets/siet-panchkula-building.jpg";
import director from "../../assets/director.jpeg";

const SLIDES = [siet1, siet2, siet3];

export function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % SLIDES.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Helmet>
        <title>SIET Panchkula | State Institute of Engineering & Technology</title>
      </Helmet>

      {/* 1. HERO SECTION */}
      <section className="relative h-[85vh] overflow-hidden bg-black">
        <AnimatePresence mode="wait">
          <motion.div 
            key={current} 
            initial={{ opacity: 0, scale: 1.05 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 1.5 }} 
            className="absolute inset-0"
          >
            <img src={SLIDES[current]} className="w-full h-full object-cover" alt="Campus" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001A33]/80 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#003366]/10 backdrop-blur-[2px] skew-x-[-12deg] translate-x-24 border-l border-white/10" />
        </div>
      </section>

      {/* 2. FLOATING INFO STRIP */}
      <section className="-mt-14 relative z-20 max-w-6xl mx-auto px-6 w-full">
        <div className="bg-white shadow-2xl overflow-hidden border border-slate-200">
          <div className="grid md:grid-cols-3 divide-x divide-slate-100 items-stretch">
            <div className="bg-[#003366] hover:bg-[#002147] p-8 text-center text-white flex flex-col justify-center transition-all duration-500 cursor-pointer group">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-200/70 mb-2">ENROLLMENT OPEN</p>
              <p className="text-sm font-bold uppercase tracking-widest">ADMISSIONS 2026-27</p>
            </div>
            <div className="bg-white hover:bg-slate-50 p-8 text-center text-[#001A33] flex flex-col justify-center transition-all duration-500 cursor-pointer group">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2 font-bold">GOVT. STANDARDS</p>
              <p className="text-sm font-bold uppercase tracking-widest text-[#001A33]">AICTE APPROVED</p>
            </div>
            <div className="bg-white hover:bg-slate-50 p-8 text-center text-[#001A33] flex flex-col justify-center transition-all duration-500 cursor-pointer group">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2 font-bold">KURUKSHETRA UNIVERSITY</p>
              <p className="text-sm font-bold uppercase tracking-widest text-[#001A33]">KU AFFILIATED</p>
            </div>
          </div>
          <div className="h-1.5 w-full bg-[#FFB800]"></div>
        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-7">
            <span className="text-[#003366] font-black text-[10px] uppercase tracking-[0.5em] mb-4 block underline underline-offset-8 decoration-[#FFB800]">THE INSTITUTION</span>
            <h2 className="text-5xl font-light text-slate-900 leading-tight mb-8">
              Pioneering the next <br /><span className="font-bold italic text-[#003366]">Engineering Frontier</span> in Haryana.
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">Established by the Government of Haryana, SIET Panchkula is a center of excellence focusing on Industry 4.0 and emerging technologies.</p>
            <button className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-[#003366] group transition-all underline underline-offset-4 decoration-[#FFB800]">
              LEARN MORE ABOUT SIET <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
          <div className="md:col-span-5 relative">
            <img src={siet3} className="aspect-[4/5] object-cover shadow-2xl relative z-10" alt="Building" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#FFB800]/10 -z-0" />
          </div>
        </div>
      </section>

      {/* 4. PROGRAMS OFFERED (RESTORED) */}
      <section className="py-32 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#001A33] uppercase tracking-tighter mb-20 underline decoration-[#FFB800] underline-offset-8">Programs Offered</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { title: "B.Tech CSE (AI & ML)", icon: <Cpu size={32} /> },
              { title: "B.Tech CSE (Cyber Security)", icon: <ShieldCheck size={32} /> },
              { title: "B.Tech Robotics", icon: <Cog size={32} /> }
            ].map((p, i) => (
              <div key={i} className="bg-white group shadow-lg overflow-hidden border border-slate-200 transition-all hover:shadow-2xl p-10 border-b-4 border-b-transparent hover:border-b-[#FFB800]">
                <div className="text-[#003366] mb-6">{p.icon}</div>
                <h3 className="text-lg font-bold text-slate-800 uppercase tracking-tight mb-4">{p.title}</h3>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed">Advanced curriculum aligned with Industry 4.0 standards and emerging digital security frameworks.</p>
                <button className="flex items-center gap-2 text-[10px] font-black uppercase text-[#003366] hover:text-[#FFB800] transition-colors">
                  View Details <ChevronRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DIRECTOR ADDRESS */}
      <section className="py-32 bg-[#001A33] text-white px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-4 relative">
             <img src={director} className="w-full shadow-2xl border-8 border-[#00284D] relative z-10" alt="Director" />
             <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FFB800]/20 -z-0" />
          </div>
          <div className="md:col-span-8">
            <p className="text-[#FFB800] font-black uppercase tracking-[0.4em] text-xs mb-8">DIRECTOR'S MESSAGE</p>
            <p className="text-3xl font-serif italic leading-relaxed mb-10 italic text-slate-100">
              "At SIET Panchkula, we foster a culture of technical rigor and moral integrity. Our students are prepared to be solution-providers for a global society."
            </p>
            <div className="border-l-4 border-[#FFB800] pl-6">
              <p className="text-xl font-bold uppercase tracking-tight leading-none">Prof. Anil Kumar</p>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Director-Principal</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. NEWS & GALLERY (RESTORED) */}
      <section className="py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-12 flex items-center gap-3">
              <Bell className="text-[#FFB800]" /> Notifications
            </h3>
            <div className="space-y-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-8 border-b border-slate-100 pb-8 group cursor-pointer hover:bg-slate-50 transition-colors p-4 -ml-4 rounded-sm duration-300">
                  <div className="text-center min-w-[70px]">
                    <p className="text-3xl font-light text-slate-300 group-hover:text-[#003366] transition-colors uppercase">1{i}</p>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Feb 2026</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 group-hover:text-[#003366] transition-colors">Semester Examination Schedule: Autumn 2026</h4>
                    <p className="text-sm text-slate-500 mt-2 leading-relaxed font-light">The official schedule for all B.Tech branches has been uploaded for student reference...</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 h-[500px]">
            <div className="overflow-hidden bg-slate-100 group">
              <img src={siet1} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Campus 1" />
            </div>
            <div className="grid grid-rows-2 gap-4">
              <div className="overflow-hidden bg-slate-100 group">
                <img src={siet2} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Campus 2" />
              </div>
              <div className="bg-[#003366] text-white flex flex-col justify-center p-10 border-b-8 border-[#FFB800] shadow-xl">
                <h4 className="text-2xl font-bold italic mb-6 text-[#FFB800]">Campus Gallery</h4>
                <button className="flex items-center gap-3 text-xs font-black uppercase tracking-widest group text-white">
                  EXPLORE ALL <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}