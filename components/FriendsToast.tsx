"use client";

import { motion } from "framer-motion";

const cards = [
  {
    icon: "🔥",
    title: "Дикого Драйва",
    text: "Чтобы жизнь бурлила событиями, путешествиями, мощными тусовками и яркими моментами, о которых не стыдно вспомнить!",
  },
  {
    icon: "💎",
    title: "Железной Верности",
    text: "Пусть рядом всегда будут преданные люди, готовые подставить плечо в любую погоду и разделить каждый успех!",
  },
  {
    icon: "🚀",
    title: "Бешеных Успехов",
    text: "Чтобы все поставленные цели сдавались без боя, доходы росли в геометрической прогрессии, а любые трудности вызывали лишь улыбку!",
  },
];

export default function FriendsToast() {
  return (
    <section className="py-14 sm:py-20 px-4 relative max-w-5xl mx-auto">
      <div className="text-center mb-10 sm:mb-16">
        <span className="text-[11px] sm:text-xs uppercase font-mono tracking-[0.25em] sm:tracking-[0.3em] text-purple-400 font-semibold">
          From Me To All of You
        </span>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-cinzel text-glow-purple text-white font-bold mt-2">
          За Нас, За Дружбу, За Движ! 🥂🎃
        </h2>
        <p className="text-purple-200/80 max-w-xl mx-auto mt-2.5 sm:mt-3 text-xs sm:text-base px-2">
          Спасибо каждому, кто делает эту жизнь ярче и интереснее
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {cards.map((c, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
            className="glass p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-purple-500/30 hover:border-orange-500/50 transition-all duration-300 relative group overflow-hidden"
          >
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 p-2.5 sm:p-3 w-fit rounded-xl sm:rounded-2xl glass border border-purple-400/20 group-hover:scale-110 transition-transform">
              {c.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-bold font-cinzel text-amber-200 mb-1.5 sm:mb-2">
              {c.title}
            </h3>
            <p className="text-xs sm:text-sm text-purple-200/90 leading-relaxed">
              {c.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
