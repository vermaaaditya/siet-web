import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Search, Globe, Phone, Mail } from 'lucide-react';
import logo from '../../assets/logo.png';

const aboutUsLinks = [
  { title: 'Vision and Mission', path: '/about/vision-mission' },
  { title: 'History', path: '/about/history' },
  { title: 'Governance', path: '/about/governance' },
  { title: 'Accreditation', path: '/about/accreditation' },
];

const academicsLinks = [
  { title: 'Programs Offered', path: '/departments' },
  { title: 'Academic Calendar', path: '/students/academic-calendar' },
  { title: 'Examinations', path: '/students/examinations' },
  { title: 'Library', path: '/students/library' },
];

const admissionsLinks = [
  { title: 'Undergraduate', path: '/students/admissions' },
  { title: 'Postgraduate', path: '/students/admissions' },
  { title: 'Scholarships', path: '/students/scholarships' },
];

export function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* 1. TOP UTILITY BAR - Increased py-3 for more height */}
      <div className="bg-[#001A33] text-[11px] text-slate-300 py-3 border-b border-white/5 hidden md:block">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center tracking-[0.2em] uppercase font-bold">
          <div className="flex gap-8">
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <Phone size={12} /> +91 1733 266333
            </span>
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <Mail size={12} /> info@sietpanchkula.ac.in
            </span>
          </div>
          <div className="flex gap-6 items-center">
            <a href="#" className="hover:text-white transition-colors">Tenders</a>
            <a href="#" className="hover:text-[#FFB800] transition-colors">Portal Login</a>
            <button className="flex items-center gap-2 text-[#FFB800] border-l border-white/10 pl-6">
              <Globe size={12} /> ENG / हिन्दी
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN BRANDING SECTION - Increased py-6 and logo h-20 */}
      <div className="bg-white py-6 shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-6 group">
            <img src={logo} alt="SIET Logo" className="h-20 w-20 transition-transform group-hover:scale-105 duration-300" />
            <div className="border-l-2 border-slate-100 pl-6">
              <h1 className="text-2xl md:text-3xl font-black text-[#001A33] leading-none tracking-tight uppercase">
                State Institute of Engineering
                <span className="block text-[#003366] font-light mt-1.5">& Technology, Panchkula</span>
              </h1>
              <p className="text-[11px] text-slate-500 mt-2 font-bold uppercase tracking-[0.2em]">
                Approved by AICTE & Affiliated to Kurukshetra University
              </p>
            </div>
          </Link>

          {/* Haryana Govt Emblem */}
          <div className="hidden lg:flex items-center gap-5">
            <div className="text-right">
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Department of</p>
              <p className="text-sm font-black text-[#001A33] uppercase">Technical Education</p>
            </div>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Emblem_of_Haryana.svg/1200px-Emblem_of_Haryana.svg.png" 
              className="h-14 w-auto grayscale opacity-80" 
              alt="Haryana Emblem" 
            />
          </div>
        </div>
      </div>

      {/* 3. NAVIGATION BAR - Increased height to py-5 */}
      <nav className="bg-[#00284D] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <ul className="flex items-center">
            <li>
              <Link
                to="/"
                className={`px-8 py-5 text-[12px] font-black uppercase tracking-[0.15em] transition-all border-b-4 flex items-center gap-2 ${
                  isActive('/') ? 'border-[#FFB800] text-[#FFB800]' : 'border-transparent text-slate-200 hover:text-white hover:bg-white/5'
                }`}
              >
                Home
              </Link>
            </li>

            {[
              { id: 'about', label: 'About Us', links: aboutUsLinks },
              { id: 'academics', label: 'Academics', links: academicsLinks },
              { id: 'admissions', label: 'Admissions', links: admissionsLinks },
            ].map((menu) => (
              <li
                key={menu.id}
                className="relative"
                onMouseEnter={() => setActiveDropdown(menu.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`px-8 py-5 text-[12px] font-black uppercase tracking-[0.15em] transition-all border-b-4 flex items-center gap-2 ${
                    activeDropdown === menu.id ? 'border-[#FFB800] text-[#FFB800]' : 'border-transparent text-slate-200 hover:text-white'
                  }`}
                >
                  {menu.label}
                  <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === menu.id ? 'rotate-180' : ''}`} />
                </button>
                
                {activeDropdown === menu.id && (
                  <div className="absolute top-full left-0 bg-[#001A33] text-slate-300 min-w-[260px] shadow-2xl border-t-4 border-[#FFB800] py-4">
                    {menu.links.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="block px-8 py-4 text-[11px] font-bold uppercase tracking-widest hover:bg-[#00284D] hover:text-[#FFB800] transition-colors border-b border-white/5 last:border-0"
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center px-6">
            <button className="text-slate-300 hover:text-[#FFB800] transition-all p-2 hover:scale-110">
              <Search size={22} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}