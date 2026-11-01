"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-4 pt-20 pb-16 overflow-hidden">
      {/* Background ambient glowing spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-purple-900/35 via-orange-600/25 to-pink-500/15 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-12 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-[90px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-600/20 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Floating Halloween particles */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              top: `${(i * 17) % 94}%`,
              left: `${(i * 23) % 95}%`,
              width: `${(i % 3) * 3 + 3}px`,
              height: `${(i % 3) * 3 + 3}px`,
              backgroundColor: i % 2 === 0 ? "#FF6B2B" : "#A855F7",
              boxShadow: i % 2 === 0 ? "0 0 12px #FF6B2B" : "0 0 12px #A855F7",
            }}
            animate={{
              y: [0, -35, 0],
              opacity: [0.2, 0.95, 0.2],
              scale: [0.8, 1.25, 0.8],
            }}
            transition={{
              duration: 3.5 + (i % 4),
              repeat: Infinity,
              ease: "easeInOut",
              delay: (i % 5) * 0.6,
            }}
          />
        ))}
      </div>

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-orange-500/30 text-orange-300 text-xs sm:text-sm font-medium mb-6 shadow-[0_0_20px_rgba(255,107,43,0.3)]"
      >
        <span className="text-base">👻</span>
        <span>Friends & Crew Edition 2026</span>
        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
        <span className="text-purple-300 font-semibold">Halloween Party Night</span>
      </motion.div>

      {/* Main Title */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-[11px] sm:text-sm tracking-[0.25em] sm:tracking-[0.35em] text-purple-300 uppercase font-medium mb-3">
          Happy Halloween, My People!
        </h2>
        <h1 className="text-4xl sm:text-7xl md:text-8xl font-black tracking-tight font-cinzel text-glow-orange text-transparent bg-clip-text bg-gradient-to-b from-[#FFF0E6] via-[#FF7A18] to-[#FF3E00] leading-[1.1] sm:leading-[1.05] mb-4">
          С ХЕЛЛОУИНОМ!
        </h1>
        <p className="font-cormorant italic text-xl sm:text-3xl md:text-4xl text-amber-200/90 font-light mb-6">
          Всем моим друзьям, банде и знакомым 🎃🔥
        </p>
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-2xl mx-auto text-sm sm:text-lg text-[#D8CEE8] leading-relaxed mb-8 sm:mb-10 font-normal px-2"
      >
        Сегодня ночь, когда можно шуметь, веселиться, зажигать тыквы и отрываться по полной!
        Это поздравление — каждому из вас: моим лучшим бро, подругам, знакомым и тем, с кем мы на одной волне.
        Пусть этот Хеллоуин принесёт горы сладостей, безумного фарта и топовых воспоминаний!
      </motion.p>

      {/* Stat Pills */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 max-w-3xl w-full"
      >
        <div className="glass p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-purple-500/20 text-center hover:border-orange-500/40 transition-colors">
          <div className="flex items-center justify-center text-orange-400 mb-1 text-lg sm:text-xl">
            🎃
          </div>
          <div className="text-lg sm:text-2xl font-bold font-cinzel text-white">100%</div>
          <div className="text-[11px] sm:text-xs text-purple-200/80">Хеллоуинский вайб</div>
        </div>

        <div className="glass p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-purple-500/20 text-center hover:border-orange-500/40 transition-colors">
          <div className="flex items-center justify-center text-amber-400 mb-1 text-lg sm:text-xl">
            🍬
          </div>
          <div className="text-lg sm:text-2xl font-bold font-cinzel text-white">Treats</div>
          <div className="text-[11px] sm:text-xs text-purple-200/80">Без всяких Trick</div>
        </div>

        <div className="glass p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-purple-500/20 text-center hover:border-orange-500/40 transition-colors">
          <div className="flex items-center justify-center text-purple-400 mb-1 text-lg sm:text-xl">
            ⚡
          </div>
          <div className="text-lg sm:text-2xl font-bold font-cinzel text-white">24 / 7</div>
          <div className="text-[11px] sm:text-xs text-purple-200/80">Связь с бандой</div>
        </div>

        <div className="glass p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-purple-500/20 text-center hover:border-orange-500/40 transition-colors">
          <div className="flex items-center justify-center text-emerald-400 mb-1 text-lg sm:text-xl">
            👑
          </div>
          <div className="text-lg sm:text-2xl font-bold font-cinzel text-white">Crew</div>
          <div className="text-[11px] sm:text-xs text-purple-200/80">Лучшие люди</div>
        </div>
      </motion.div>
    </section>
  );
}
