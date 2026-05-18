import { motion } from "motion/react";
import { useState } from "react";
import { useInView } from "./useInView";

const stories = [
  { id: 1, chapter: "บทที่ 1 · พ่อกับลูก", quote: "มีคำค้าง... ที่เราไม่เคยพูด", image: "https://placehold.co/400x300/1a1409/c8a050?text=บทที่+1", description: "เมื่อเวลาผ่านไป คำบางคำก็ค้างอยู่ในใจ รอคอยวันที่จะได้พูดออกมา" },
  { id: 2, chapter: "บทที่ 2 · แม่กับลูก", quote: "ความทรงจำ... ยังคงอยู่ในใจ", image: "https://placehold.co/400x300/1a1409/c8a050?text=บทที่+2", description: "ความรักที่ไม่ต้องการคำพูด แต่ก็ต้องการการแสดงออก" },
  { id: 3, chapter: "บทที่ 3 · การจากลา", quote: "บางข้อความ... ส่งไม่ทัน", image: "https://placehold.co/400x300/1a1409/c8a050?text=บทที่+3", description: "บางครั้งเราไม่รู้ว่านั้นคือครั้งสุดท้าย จนกระทั่งมันเกิดขึ้นแล้ว" },
  { id: 4, chapter: "บทที่ 4 · ความหวัง", quote: "เมื่อเราเปิดใจ... เราจะไม่เดียวดาย", image: "https://placehold.co/400x300/1a1409/c8a050?text=บทที่+4", description: "ในความเงียบของความสูญเสีย มีเสียงหนึ่งที่ยังคงกล่าวว่า ฉันอยู่ที่นี่" },
];

function StoryCard({ story, index }: { story: typeof stories[0]; index: number }) {
  const [ref, inView] = useInView({ once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: index * 0.15 }}
      className="relative rounded-2xl overflow-hidden cursor-pointer" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ border: "1px solid rgba(200,160,80,0.15)" }}>
      <div className="relative h-56 overflow-hidden">
        <motion.img src={story.image} alt={story.chapter} className="w-full h-full object-cover" animate={{ scale: hovered ? 1.08 : 1 }} transition={{ duration: 0.6 }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0805] via-[#0a0805]/40 to-transparent" />
        <div className="absolute top-4 left-4"><span className="text-[#c8a050] text-xs font-semibold tracking-wide">{story.chapter}</span></div>
      </div>
      <div className="p-5" style={{ background: "linear-gradient(135deg, rgba(200,160,80,0.05) 0%, rgba(255,255,255,0.01) 100%)" }}>
        <p className="text-[#f5efe6] text-base font-semibold mb-2">"{story.quote}"</p>
        <p className="text-[#9a8a6a] text-sm leading-relaxed">{story.description}</p>
      </div>
    </motion.div>
  );
}

export function StoriesSection() {
  const [titleRef, titleInView] = useInView({ once: true, margin: "-60px" });
  return (
    <section id="stories" className="py-24 bg-[#0a0805] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div ref={titleRef} initial={{ opacity: 0, y: 30 }} animate={titleInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-14">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full mb-6 relative" style={{ background: "rgba(200,160,80,0.12)" }}>
            <div className="absolute inset-0 rounded-full border border-[rgba(200,160,80,0.25)]" />
            <span className="text-[#c8a050] text-xs font-semibold">✦ เรื่องราวที่แท้จริง</span>
          </div>
          <h2 className="text-[#f5efe6] text-3xl md:text-4xl font-bold mb-4">เรื่องราวที่หลายคนเก็บไว้คนเดียว</h2>
          <p className="text-[#c4b49a] text-base max-w-xl mx-auto leading-relaxed">ในงานนี้ คุณจะได้พบกับเรื่องราวจริงที่พาคุณสำรวจคำถามสำคัญของชีวิต</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stories.map((story, i) => <StoryCard key={story.id} story={story} index={i} />)}
        </div>
      </div>
    </section>
  );
}
