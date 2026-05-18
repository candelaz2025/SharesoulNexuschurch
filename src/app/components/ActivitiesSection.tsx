import { motion } from "motion/react";
import { useState } from "react";
import { useInView } from "./useInView";

const activities = [
  { icon: "🎤", title: "นิทรรศการ", description: "ประสบการณ์เชิงสัมผัสที่พาคุณสำรวจคำถามสำคัญของชีวิต ผ่านศิลปะและเรื่องราวที่แท้จริง", color: "#c8a050" },
  { icon: "💬", title: "เสวนา", description: "บทสนทนาเปิดใจกับผู้เชี่ยวชาญและผู้มีประสบการณ์จริง เรื่องความตาย ความสูญเสีย และความหวัง", color: "#d4c080" },
  { icon: "👥", title: "Workshop", description: "กิจกรรมกลุ่มเล็กที่เปิดพื้นที่ให้คุณได้แบ่งปันและรับฟังในบรรยากาศที่ปลอดภัย", color: "#e0b870" },
];

function ActivityCard({ activity, index }: { activity: typeof activities[0]; index: number }) {
  const [ref, inView] = useInView({ once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: index * 0.2 }}
      className="relative rounded-2xl p-8 flex flex-col items-center text-center"
      style={{ backgroundImage: "linear-gradient(135deg, rgba(200,160,80,0.08) 0%, rgba(255,255,255,0.02) 100%)", border: "1px solid rgba(200,160,80,0.2)", boxShadow: "0 4px 32px rgba(0,0,0,0.4)" }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <motion.div className="absolute inset-0 rounded-2xl pointer-events-none" animate={{ opacity: hovered ? 1 : 0 }} transition={{ duration: 0.4 }}
        style={{ boxShadow: "0 0 40px rgba(200,160,80,0.15), inset 0 0 0 1px rgba(200,160,80,0.35)" }} />
      <motion.div className="text-4xl mb-5" animate={{ scale: hovered ? 1.15 : 1, y: hovered ? -4 : 0 }} transition={{ duration: 0.3 }}>{activity.icon}</motion.div>
      <h3 className="font-bold text-lg mb-3" style={{ color: activity.color }}>{activity.title}</h3>
      <p className="text-[#c4b49a] text-sm leading-relaxed">{activity.description}</p>
      <motion.div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full"
        style={{ background: `linear-gradient(90deg, transparent, ${activity.color}, transparent)` }}
        animate={{ width: hovered ? "80%" : "0%" }} transition={{ duration: 0.4 }} />
    </motion.div>
  );
}

export function ActivitiesSection() {
  const [titleRef, inView] = useInView({ once: true, margin: "-60px" });
  return (
    <section id="activities" className="py-28 relative overflow-hidden" style={{ background: "linear-gradient(to bottom, #0a0805, #14110a 50%, #0a0805)" }}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div ref={titleRef} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full mb-6 relative" style={{ background: "rgba(200,160,80,0.12)" }}>
            <div className="absolute inset-0 rounded-full border border-[rgba(200,160,80,0.25)]" />
            <span className="text-[#c8a050] text-xs font-semibold">✦ รูปแบบกิจกรรม</span>
          </div>
          <h2 className="text-[#f5efe6] text-3xl md:text-4xl font-bold">สิ่งที่คุณจะได้รับ</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((a, i) => <ActivityCard key={a.title} activity={a} index={i} />)}
        </div>
      </div>
    </section>
  );
}
