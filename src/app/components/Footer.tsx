import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
  Globe 
} from 'lucide-react';
import logo from '../../assets/logo.png';

// Named Export to match: import { Footer } from './components/Footer'
export function Footer() {
  return (
    <footer className="bg-[#001A33] text-white pt-20 pb-10 px-6 border-t-8 border-[#FFB800] mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
        
        {/* Column 1: Institute Branding */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-4 mb-8 font-black text-2xl tracking-tighter uppercase">
            <div className="w-12 h-12 bg-white text-[#003366] flex items-center justify-center rounded-sm">
              <img src={logo} alt="S" className="w-10 h-10 object-contain" />
            </div>
            <div className="leading-none">
              <span className="block text-xl">SIET</span>
              <span className="text-[10px] font-bold text-slate-400 tracking-[0.2em]">Panchkula</span>
            </div>
          </div>
          <p className="text-slate-400 text-sm italic mb-8 max-w-sm font-light leading-relaxed">
            State Institute of Engineering and Technology, Panchkula. A premier government center for excellence in engineering education and industrial innovation.
          </p>
          <div className="space-y-4 text-slate-300 text-sm font-medium">
            <div className="flex gap-3 items-start hover:text-white transition-colors">
              <MapPin size={18} className="text-[#FFB800] shrink-0" />
              <p>Sector 26, Panchkula, Haryana - 134109</p>
            </div>
            <div className="flex gap-3 items-center hover:text-white transition-colors">
              <Phone size={18} className="text-[#FFB800] shrink-0" />
              <p>+91-172-2560000</p>
            </div>
            <div className="flex gap-3 items-center hover:text-white transition-colors">
              <Mail size={18} className="text-[#FFB800] shrink-0" />
              <p>info@sietpanchkula.ac.in</p>
            </div>
          </div>
        </div>

        {/* Column 2: Academic Links */}
        <div>
          <h5 className="font-black uppercase tracking-[0.2em] text-[11px] mb-8 text-[#FFB800]">Academic Portals</h5>
          <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-400">
            <li><Link to="/students/admissions" className="hover:text-white transition-colors">Admissions 2026</Link></li>
            <li><Link to="/students/academic-calendar" className="hover:text-white transition-colors">Academic Calendar</Link></li>
            <li><Link to="/departments" className="hover:text-white transition-colors">Syllabus & Downloads</Link></li>
            <li><Link to="/faculty/directory" className="hover:text-white transition-colors">Faculty Directory</Link></li>
            <li><Link to="/students/library" className="hover:text-white transition-colors">Digital Library</Link></li>
          </ul>
        </div>

        {/* Column 3: Administration */}
        <div>
          <h5 className="font-black uppercase tracking-[0.2em] text-[11px] mb-8 text-[#FFB800]">Administration</h5>
          <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-400">
            <li><Link to="/about/governance" className="hover:text-white transition-colors">Mandatory Disclosures</Link></li>
            <li><Link to="/about/accreditation" className="hover:text-white transition-colors">RTI Information</Link></li>
            <li><Link to="/updates" className="hover:text-white transition-colors">Tenders & Auctions</Link></li>
            <li><Link to="/about/history" className="hover:text-white transition-colors">History & Heritage</Link></li>
            <li><Link to="/tpc" className="hover:text-white transition-colors">Placement Cell (TPC)</Link></li>
          </ul>
        </div>

        {/* Column 4: Connect */}
        <div>
          <h5 className="font-black uppercase tracking-[0.2em] text-[11px] mb-8 text-[#FFB800]">Connect With Us</h5>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-6 leading-loose">
            AICTE Approved Institution<br />
            Affiliated to Kurukshetra University
          </p>
          <div className="flex gap-3 mb-8">
            {[
              { Icon: Facebook, label: 'FB' },
              { Icon: Twitter, label: 'TW' },
              { Icon: Linkedin, label: 'LN' },
              { Icon: Instagram, label: 'IG' },
              { Icon: Youtube, label: 'YT' }
            ].map((social, i) => (
              <a 
                key={i}
                href="#" 
                className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-[#FFB800] hover:text-[#001A33] transition-all cursor-pointer"
                aria-label={social.label}
              >
                <social.Icon size={18} />
              </a>
            ))}
          </div>
          <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#FFB800] hover:text-white transition-colors">
            <Globe size={14} /> Global Alumni Portal
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.3em] font-black text-slate-500">
        <p>&copy; {new Date().getFullYear()} STATE INSTITUTE OF ENGINEERING & TECHNOLOGY, PANCHKULA.</p>
        <div className="flex gap-10 mt-6 md:mt-0">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Accessibility</Link>
        </div>
      </div>
    </footer>
  );
}
