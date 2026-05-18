import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="bg-[#0a0805] relative py-10 px-6" style={{ borderTop: "1px solid rgba(200,160,80,0.1)" }}>
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-3">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}
          className="text-[#c8a050] text-xs tracking-[4px] uppercase">SHARESOULS</motion.p>
        <p className="text-[#6a5a40] text-xs">คริสตจักรสานสัมพันธ์กรุงเทพ ร่วมกับแชร์โซล</p>
        <p className="text-[#5a4a30] text-xs">© 2026 ShareSouls. All rights reserved.</p>
        <p className="text-[#3a2a18] text-xs tracking-[2px] uppercase mt-2">Let Hope Meet Your Heart</p>
      </div>
    </footer>
  );
}
