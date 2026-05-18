import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";

const navLinks = [
  { label: "เกี่ยวกับ", href: "#about" },
  { label: "กิจกรรม", href: "#activities" },
  { label: "เรื่องราว", href: "#stories" },
  { label: "ลงทะเบียน", href: "#register" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 60);
  });

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ backgroundColor: "rgba(10,8,5,0)" }}
      animate={{ backgroundColor: scrolled ? "rgba(10,8,5,0.92)" : "rgba(10,8,5,0)" }}
      style={{ backdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: scrolled ? "1px solid rgba(200,160,80,0.1)" : "none" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-[#c8a050] tracking-[4px] uppercase text-sm font-bold">SHARESOULS</a>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-[#c4b49a] hover:text-[#c8a050] transition-colors text-sm"
              onClick={(e) => { e.preventDefault(); document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" }); }}>
              {link.label}
            </a>
          ))}
          <motion.a href="https://line.me/R/ti/p/@527rqgau?oat_content=qr" target="_blank" rel="noopener noreferrer"
            className="px-5 py-2 rounded-full text-white text-sm font-semibold"
            style={{ backgroundImage: "linear-gradient(125deg, rgb(212,160,23), rgb(184,125,30))" }}
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>ลงทะเบียน</motion.a>
        </nav>
        <button className="md:hidden flex flex-col gap-1.5 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <motion.span className="block w-6 h-0.5 bg-[#c8a050]" animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }} />
          <motion.span className="block w-6 h-0.5 bg-[#c8a050]" animate={{ opacity: menuOpen ? 0 : 1 }} />
          <motion.span className="block w-6 h-0.5 bg-[#c8a050]" animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }} />
        </button>
      </div>
      <motion.div className="md:hidden overflow-hidden" animate={{ height: menuOpen ? "auto" : 0 }} transition={{ duration: 0.3 }}>
        <div className="bg-[#0a0805]/95 backdrop-blur-lg px-6 pb-6 flex flex-col gap-4 border-t border-[rgba(200,160,80,0.1)]">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-[#c4b49a] hover:text-[#c8a050] transition-colors py-2"
              onClick={(e) => { e.preventDefault(); setMenuOpen(false); document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" }); }}>
              {link.label}
            </a>
          ))}
          <a href="https://line.me/R/ti/p/@527rqgau?oat_content=qr" target="_blank" rel="noopener noreferrer"
            className="px-5 py-3 rounded-full text-white text-sm font-semibold text-center"
            style={{ backgroundImage: "linear-gradient(125deg, rgb(212,160,23), rgb(184,125,30))" }}>ลงทะเบียน</a>
        </div>
      </motion.div>
    </motion.header>
  );
}
