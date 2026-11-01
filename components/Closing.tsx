"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Closing() {
  const [lit, setLit] = useState(true);

  return (
    <footer className="py-16 sm:py-24 px-4 text-center relative overflow-hidden border-t border-purple-500/10">
      <div className="max-w-xl mx-auto flex flex-col items-center">
        {/* Pumpkin / Candle Light */}
        <div className="relative mb-6 cursor-pointer" onClick={() => setLit(!lit)}>
          {lit && (
            <div className="candle-flame mx-auto mb-1 relative">
              <div className="w-5 h-8 bg-gradient-to-t from-orange-500 via-amber-300 to-white rounded-full mx-auto animate-pulse filter blur-[0.6px] shadow-[0_0_20px_#FFA726,0_0_40px_#FF6B2B]" />
            </div>
          )}
          {/* Candle Body */}
          <div className="w-7 sm:w-8 h-16 sm:h-20 bg-gradient-to-b from-orange-200 to-orange-400 rounded-t-sm mx-auto shadow-inner relative border border-white/20">
            <div className="absolute top-0 inset-x-0 h-1 bg-orange-300 rounded-t-sm" />
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-neutral-800" />
          </div>
          {/* Stand */}
          <div className="w-16 sm:w-20 h-2.5 sm:h-3 bg-gradient-to-r from-purple-900 via-purple-700 to-purple-900 rounded-full mx-auto -mt-1 shadow-md" />
        </div>

        <button
          onClick={() => setLit(!lit)}
          className="text-[11px] sm:text-xs uppercase tracking-widest text-amber-300/80 hover:text-amber-200 transition-colors mb-6 cursor-pointer px-4 py-2 rounded-full glass border border-amber-400/20"
        >
          {lit ? "🕯️ Задуть хеллоуинскую свечу" : "🔥 Зажечь костёр дружбы"}
        </button>

        <h3 className="text-2xl sm:text-4xl font-cinzel text-glow-orange text-white font-bold mb-3 sm:mb-4 px-2">
          Happy Halloween, Crew! 🎃👻
        </h3>
        <p className="text-sm sm:text-base text-purple-200/80 font-cormorant italic max-w-md mx-auto mb-6 sm:mb-8 px-2">
          «Хорошие друзья знают твои лучшие истории. Настоящие друзья прожили их вместе с тобой!»
        </p>

        <div className="text-xs text-purple-400/60 font-mono tracking-wider">
          Made for all my friends with ❤️ • Halloween 2026
        </div>
      </div>
    </footer>
  );
}
