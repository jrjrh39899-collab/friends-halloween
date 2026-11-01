"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fortunes = [
  {
    id: 1,
    title: "Предсказание на год",
    badge: "Big Future",
    text: "«Тебя ждёт дикий взлёт в делах, солидный плюс на счету и грандиозные победы, о которых все будут говорить!»",
    subtext: "Хеллоуинские духи обещают максимальный фарт во всех твоих проектах.",
    glowColor: "#FF6B2B",
  },
  {
    id: 2,
    title: "Твой Хеллоуин-статус",
    badge: "Main Character",
    text: "«Главная искра и душа любой компании. Там, где ты — всегда движ, смех и лучшие истории!»",
    subtext: "Без твоей энергетики эта осень была бы в разы скучнее.",
    glowColor: "#F5C842",
  },
  {
    id: 3,
    title: "Секретный совет",
    badge: "Wisdom of Night",
    text: "«Не бойся рисковать и забирать своё! Всё, что ты задумал — обязательно сбудется, главное не тормозить!»",
    subtext: "Любые преграды сейчас исчезают, как тыквенный дым на рассвете.",
    glowColor: "#9B5CF6",
  },
  {
    id: 4,
    title: "Тост за дружбу",
    badge: "Bros & Sisters",
    text: "«За то, чтобы мы всегда были на связи, ценили моменты, поднимали бокалы за успехи и никогда не терялись!»",
    subtext: "Настоящие друзья — это самое ценное сокровище в любом мире.",
    glowColor: "#34D399",
  },
];

export default function FortunePumpkins() {
  const [activeFortune, setActiveFortune] = useState<number>(1);

  return (
    <section className="py-20 px-4 relative max-w-5xl mx-auto">
      <div className="text-center mb-14">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-orange-400 font-semibold">
          Interactive Pumpkins
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel text-glow-orange text-white font-bold mt-2">
          Тыквы Предсказаний 🎃✨
        </h2>
        <p className="text-purple-200/80 max-w-lg mx-auto mt-3 text-sm sm:text-base">
          Нажми на любую тыкву, чтобы зажечь её и забрать своё личное предсказание
        </p>
      </div>

      {/* Selector */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 mb-6 sm:mb-8">
        {fortunes.map((f) => {
          const isSelected = activeFortune === f.id;
          return (
            <button
              key={f.id}
              onClick={() => setActiveFortune(f.id)}
              className={`p-3 sm:p-5 rounded-xl sm:rounded-2xl glass transition-all duration-300 text-center relative overflow-hidden flex flex-col items-center cursor-pointer border ${
                isSelected
                  ? "border-orange-500 shadow-[0_0_30px_rgba(255,107,43,0.4)] scale-102 sm:scale-105"
                  : "border-purple-500/20 hover:border-purple-400/40"
              }`}
            >
              {isSelected && (
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{ backgroundColor: f.glowColor }}
                />
              )}
              {/* Pumpkin SVG */}
              <div className="w-12 h-12 sm:w-20 sm:h-20 mb-2 sm:mb-3 relative">
                <svg
                  viewBox="0 0 100 100"
                  className={`w-full h-full transition-all duration-300 ${
                    isSelected ? "filter drop-shadow-[0_0_12px_#FF6B2B]" : "opacity-75"
                  }`}
                >
                  <path d="M 47 18 Q 48 6 58 10 Q 54 18 50 20 Z" fill="#4E8752" />
                  <ellipse cx="50" cy="58" rx="38" ry="32" fill={isSelected ? "#E65100" : "#7C320A"} />
                  <ellipse cx="36" cy="58" rx="26" ry="30" fill={isSelected ? "#F57C00" : "#8D3B0E"} />
                  <ellipse cx="64" cy="58" rx="26" ry="30" fill={isSelected ? "#F57C00" : "#8D3B0E"} />
                  <ellipse cx="50" cy="58" rx="18" ry="29" fill={isSelected ? "#FFA726" : "#A04512"} />

                  <polygon
                    points="34,48 42,48 38,40"
                    fill={isSelected ? "#FFF3B0" : "#240E04"}
                    className={isSelected ? "animate-pulse" : ""}
                  />
                  <polygon
                    points="66,48 58,48 62,40"
                    fill={isSelected ? "#FFF3B0" : "#240E04"}
                    className={isSelected ? "animate-pulse" : ""}
                  />
                  <polygon
                    points="48,56 52,56 50,51"
                    fill={isSelected ? "#FFF3B0" : "#240E04"}
                  />
                  <path
                    d="M 32 68 Q 40 76 50 74 Q 60 76 68 68 Q 60 71 50 70 Q 40 71 32 68 Z"
                    fill={isSelected ? "#FFF3B0" : "#240E04"}
                  />
                </svg>
              </div>

              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-purple-300 line-clamp-1">
                {f.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Display */}
      <AnimatePresence mode="wait">
        {fortunes
          .filter((f) => f.id === activeFortune)
          .map((f) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="glass p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-orange-500/40 text-center relative overflow-hidden shadow-[0_0_40px_rgba(255,107,43,0.2)]"
            >
              <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium text-orange-300 bg-orange-500/20 border border-orange-500/30 mb-3 sm:mb-4">
                {f.badge}
              </span>
              <p className="text-xl sm:text-3xl font-cormorant italic text-amber-200 font-semibold mb-2 sm:mb-3">
                {f.text}
              </p>
              <p className="text-xs sm:text-base text-purple-200/90 max-w-xl mx-auto leading-relaxed">
                {f.subtext}
              </p>
            </motion.div>
          ))}
      </AnimatePresence>
    </section>
  );
}
