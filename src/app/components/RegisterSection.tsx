import { motion } from "motion/react";
import { useInView } from "./useInView";

const eventDetails = [
  { icon: "📅", label: "วันที่", value: "6 June 2026", sub: "วันเสาร์" },
  { icon: "📍", label: "สถานที่", value: "NEXUS Bangkok", sub: "กรุงเทพมหานคร" },
  { icon: "🕙", label: "เวลา", value: "09.30 – 15.00 น.", sub: "ลงทะเบียนได้ตั้งแต่ 09.00 น." },
];

function DetailCard({ item, index }: { item: typeof eventDetails[0]; index: number }) {
  const [ref, inView] = useInView({ once: true, margin: "-40px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative rounded-2xl p-6 flex items-start gap-4" style={{ background: "rgba(200,160,80,0.05)", border: "1px solid rgba(200,160,80,0.15)" }}>
      <span className="text-2xl leading-none mt-1">{item.icon}</span>
      <div>
        <p className="text-[#8a7a60] text-xs mb-1">{item.label}</p>
        <p className="text-[#f0e4cc] font-bold text-base mb-0.5">{item.value}</p>
        <p className="text-[#9a8a6a] text-xs">{item.sub}</p>
      </div>
    </motion.div>
  );
}

export function RegisterSection() {
  const [ref, inView] = useInView({ once: true, margin: "-80px" });
  return (
    <section id="register" className="py-28 relative overflow-hidden" style={{ backgroundImage: "linear-gradient(134deg, rgb(26,20,9) 0%, rgb(13,11,7) 50%, rgb(26,20,9) 100%)" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(ellipse 70% 60% at 50% 30%, rgba(200,160,80,0.08) 0%, transparent 70%)" }} />
      <div className="max-w-3xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full mb-6 relative" style={{ background: "rgba(200,160,80,0.12)" }}>
            <div className="absolute inset-0 rounded-full border border-[rgba(200,160,80,0.25)]" />
            <span className="text-[#c8a050] text-xs font-bold tracking-wide">✦ REGISTRATION IS NOW OPEN</span>
          </div>
          <h2 className="mb-2 leading-tight">
            <span className="block text-[#f5efe6] text-4xl md:text-5xl font-bold">มาร่วมค้นหา</span>
            <span className="block text-[#c8a050] text-4xl md:text-5xl font-bold">ความหมายของชีวิต</span>
          </h2>
          <p className="text-[#c4b49a] text-base mt-4 mb-8 leading-relaxed">
            ฟัง แบ่งปัน และเปิดใจรู้จักพระเจ้ามากขึ้น<br />
            แอด Line OA เพื่อลงทะเบียน — <span className="text-[#e8d5b0] font-bold">ฟรี ไม่มีค่าใช้จ่าย</span>
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
          <motion.a href="https://line.me/R/ti/p/@527rqgau?oat_content=qr" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center px-14 py-5 rounded-full text-white font-bold text-lg"
            style={{ backgroundImage: "linear-gradient(128deg, rgb(212,160,23) 0%, rgb(184,125,30) 100%)", boxShadow: "0 8px 20px rgba(200,140,20,0.45)" }}
            whileHover={{ scale: 1.05, boxShadow: "0 12px 30px rgba(200,140,20,0.6)" }} whileTap={{ scale: 0.97 }}>ลงทะเบียนเลย</motion.a>
        </motion.div>
      </div>
      <div className="max-w-4xl mx-auto px-6 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {eventDetails.map((item, i) => <DetailCard key={item.label} item={item} index={i} />)}
        </div>
      </div>
    </section>
  );
}
