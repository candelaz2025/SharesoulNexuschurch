import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import svgPaths from "../../imports/ShareSoulCampaign/svg-66l370w6r2";
import imgDesktop from "../../imports/Section/1f173d34be7cae5b0923fc90263add8dbe9798d0.png";
import imgMobile from "../../imports/ChatGPT_Image_May_18__2026__04_04_41_PM.png";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section ref={ref} className="relative h-screen overflow-hidden bg-[#0a0805]">
      {/* Parallax background */}
      <motion.div style={{ y }} className="absolute inset-0">
        {/* Mobile portrait image — fills full screen */}
        <img src={imgMobile} alt="" className="md:hidden absolute inset-0 w-full h-full object-cover object-top" />
        {/* Desktop landscape image */}
        <img src={imgDesktop} alt="" className="hidden md:block absolute inset-0 w-full h-full object-contain opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0805]" />
      </motion.div>

      {/* Decorative cross pattern — desktop only */}
      <div className="hidden md:flex absolute inset-0 items-center justify-center opacity-5 pointer-events-none">
        <div className="w-[340px] h-[420px] relative">
          <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 340 420" preserveAspectRatio="none">
            <path d={svgPaths.p2fe1c400} fill="#C8A050" />
          </svg>
        </div>
      </div>

      {/* CTA + scroll indicator — pinned to bottom */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex flex-col items-center gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="https://line.me/R/ti/p/@527rqgau?oat_content=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-12 py-4 rounded-full text-white font-bold text-lg cursor-pointer select-none"
            style={{ backgroundImage: "linear-gradient(125deg, rgb(212,160,23) 0%, rgb(184,125,30) 100%)", boxShadow: "0 9px 19px rgba(200,140,20,0.4)" }}
            whileHover={{ scale: 1.05, boxShadow: "0 12px 28px rgba(200,140,20,0.6)" }}
            whileTap={{ scale: 0.97 }}
          >
            ลงทะเบียนเลย
          </motion.a>
        </motion.div>

        <motion.button
          onClick={scrollToNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center gap-1 text-[#8a7a60] text-xs cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="18" height="18" fill="none" viewBox="0 0 16.57 15.5">
              <path d={svgPaths.p225e18c0} stroke="#8a7a60" strokeWidth="1.5" />
            </svg>
          </motion.div>
          <span>เลื่อนลงเพื่อดูเพิ่มเติม</span>
        </motion.button>
      </div>
    </section>
  );
}
