import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
// import { AboutUs } from './pages/AboutUs';
// import { Students } from './pages/Students';
// import { Faculty } from './pages/Faculty';
// import { Departments } from './pages/Departments';
// import { Media } from './pages/Media';
// import { Placeholder } from './pages/Placeholder';

// Temporary placeholder component
const TempPlaceholder = () => <div className="p-8">Coming Soon</div>;

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-[#003366] focus:text-white focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to main content
      </a>
      <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
        <Header />
        <main id="main-content" className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<TempPlaceholder />} />
            <Route path="/students" element={<TempPlaceholder />} />
            <Route path="/faculty" element={<TempPlaceholder />} />
            <Route path="/departments" element={<TempPlaceholder />} />
            <Route path="/media" element={<TempPlaceholder />} />
            <Route path="/events" element={<TempPlaceholder />} />
            <Route path="/updates" element={<TempPlaceholder />} />
            <Route path="/jobs" element={<TempPlaceholder />} />
            <Route path="/tpc" element={<TempPlaceholder />} />
            <Route path="/about/:slug" element={<TempPlaceholder />} />
            <Route path="/students/:slug" element={<TempPlaceholder />} />
            <Route path="/faculty/:slug" element={<TempPlaceholder />} />
            <Route path="/departments/:slug" element={<TempPlaceholder />} />
            <Route path="/media/:slug" element={<TempPlaceholder />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}