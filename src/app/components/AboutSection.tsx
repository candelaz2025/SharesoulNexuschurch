import { motion } from "motion/react";
import { useInView } from "./useInView";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [ref, inView] = useInView({ once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }} className={className}>
      {children}
    </motion.div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="relative py-28 overflow-hidden" style={{ background: "linear-gradient(to bottom, #0a0805, #14110a 50%, #0a0805)" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(200,160,80,0.06) 0%, transparent 70%)" }} />
      <div className="max-w-3xl mx-auto px-6 flex flex-col items-center text-center">
        <FadeIn delay={0}>
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full mb-8 relative" style={{ background: "rgba(200,160,80,0.12)" }}>
            <div className="absolute inset-0 rounded-full border border-[rgba(200,160,80,0.25)]" />
            <span className="text-[#c8a050] text-xs font-semibold">✦ เกี่ยวกับงาน</span>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mb-8">
            <span className="text-[#c8a050] text-3xl md:text-4xl font-bold">ShareSouls</span>
            <span className="text-[#f5efe6] text-3xl md:text-4xl font-bold">{` คืออะไร?`}</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-[#c4b49a] text-base leading-relaxed mb-4">ShareSouls คือพื้นที่ปลอดภัยสำหรับพูดคุยเรื่องที่หลายคนหลีกเลี่ยง — ชีวิต ความตาย ความสูญเสีย และการจากลา เราเชื่อว่าการเปิดใจพูดคุยเรื่องเหล่านี้ ช่วยให้เราค้นพบความหมายที่แท้จริง และเชื่อมโยงกับคนที่เรารักได้ลึกซึ้งยิ่งขึ้น</p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p className="text-[#c4b49a] text-base leading-relaxed">ร่วมกันฟัง แบ่งปัน และเปิดใจรู้จักพระเจ้ามากขึ้น ในบรรยากาศอบอุ่น ไม่ตัดสิน และเต็มไปด้วยความหวัง</p>
        </FadeIn>
        <FadeIn delay={0.4} className="w-full mt-16">
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[rgba(200,160,80,0.3)]" />
            <span className="text-[#c8a050] text-lg">✦</span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[rgba(200,160,80,0.3)]" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
