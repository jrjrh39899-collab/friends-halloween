"use client";

import { motion } from "framer-motion";

const potions = [
  {
    icon: "🧪",
    name: "Эликсир Бесконечного Вайба",
    effect: "+100 к настроению",
    description:
      "Моментально рассеивает любую осеннюю хандру, дарует железобетонную уверенность в себе и заряд энергии до самого утра.",
    color: "from-orange-500/20 to-pink-500/10",
    border: "border-orange-500/30",
    glow: "hover:shadow-[0_0_25px_rgba(255,107,43,0.35)]",
  },
  {
    icon: "🎃",
    name: "Тыквенный Денежный Фарт",
    effect: "+500% к балансу карты",
    description:
      "Приманивает лёгкие деньги, удачные сделки, солидный кэш и закрытие всех материальных хотелок в кратчайшие сроки.",
    color: "from-amber-500/20 to-yellow-500/10",
    border: "border-amber-500/30",
    glow: "hover:shadow-[0_0_25px_rgba(245,200,66,0.35)]",
  },
  {
    icon: "🛡️",
    name: "Призрачный Анти-Токсик",
    effect: "Абсолютная защита",
    description:
      "Невидимый барьер, отражающий скучных людей, душные разговоры, проблемы и пустые переживания.",
    color: "from-purple-500/20 to-indigo-500/10",
    border: "border-purple-500/30",
    glow: "hover:shadow-[0_0_25px_rgba(155,92,246,0.35)]",
  },
  {
    icon: "⚡",
    name: "Сыворотка Верной Дружбы",
    effect: "Связь навсегда",
    description:
      "Гарантия того, что сколько бы лет ни прошло, мы всегда сможем собраться, посмеяться до слёз и поддержать друг друга.",
    color: "from-emerald-500/20 to-cyan-500/10",
    border: "border-emerald-500/30",
    glow: "hover:shadow-[0_0_25px_rgba(52,211,153,0.35)]",
  },
];

export default function PotionBar() {
  return (
    <section className="py-20 px-4 relative max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-xs uppercase tracking-[0.3em] text-orange-400 font-semibold mb-2"
        >
          Spooky Brews & Buffs
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-cinzel text-glow-gold text-white font-bold"
        >
          Хеллоуинский Бар для Друзей 🍸
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-purple-200/80 max-w-xl mx-auto mt-4 text-sm sm:text-base"
        >
          Выбирай своё магическое зелье на эту праздничную ночь
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {potions.map((potion, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.6 }}
            className={`glass p-6 sm:p-8 rounded-3xl border ${potion.border} bg-gradient-to-br ${potion.color} transition-all duration-300 ${potion.glow}`}
          >
            <div className="flex items-start gap-4">
              <span className="text-4xl p-3 rounded-2xl glass border border-white/10 shrink-0">
                {potion.icon}
              </span>
              <div>
                <div className="text-xs font-mono tracking-wider text-amber-300 font-semibold uppercase mb-1">
                  {potion.effect}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-cinzel text-white mb-2">
                  {potion.name}
                </h3>
                <p className="text-sm sm:text-base text-[#D4C8E8] leading-relaxed">
                  {potion.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
