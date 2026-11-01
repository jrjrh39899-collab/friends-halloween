"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  type: "star" | "ghost" | "sparkle";
  opacity: number;
  baseOpacity: number;
  pulseSpeed: number;
  angle: number;
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Particle[] = [];

    // Stars
    for (let i = 0; i < 60; i++) {
      const opacity = Math.random() * 0.7 + 0.3;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 2 + 1,
        type: "star",
        opacity,
        baseOpacity: opacity,
        pulseSpeed: Math.random() * 0.03 + 0.01,
        angle: Math.random() * Math.PI * 2,
      });
    }

    // Floating Ghosts
    for (let i = 0; i < 9; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: -Math.random() * 0.4 - 0.1,
        size: Math.random() * 12 + 18,
        type: "ghost",
        opacity: Math.random() * 0.4 + 0.25,
        baseOpacity: 0.35,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        angle: Math.random() * Math.PI * 2,
      });
    }

    // Golden sparkles
    for (let i = 0; i < 25; i++) {
      const opacity = Math.random() * 0.6 + 0.2;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.8,
        type: "sparkle",
        opacity,
        baseOpacity: opacity,
        pulseSpeed: Math.random() * 0.04 + 0.02,
        angle: Math.random() * Math.PI * 2,
      });
    }

    let animId: number;
    let time = 0;

    const animate = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.angle += p.pulseSpeed;

        if (p.x < -30) p.x = width + 30;
        if (p.x > width + 30) p.x = -30;
        if (p.y < -30) p.y = height + 30;
        if (p.y > height + 30) p.y = -30;

        const dynamicOpacity = Math.max(
          0.1,
          Math.min(1, p.baseOpacity + Math.sin(p.angle) * 0.25)
        );

        if (p.type === "star") {
          ctx.save();
          ctx.globalAlpha = dynamicOpacity;
          ctx.fillStyle = "#F2E8FF";
          ctx.shadowBlur = 8;
          ctx.shadowColor = "#F5C842";
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        } else if (p.type === "sparkle") {
          ctx.save();
          ctx.globalAlpha = dynamicOpacity;
          ctx.fillStyle = "#F5C842";
          ctx.shadowBlur = 6;
          ctx.shadowColor = "#FF6B2B";
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        } else {
          ctx.save();
          ctx.globalAlpha = dynamicOpacity;
          ctx.font = `${p.size}px serif`;
          const wobbleX = p.x + Math.sin(time + p.angle) * 4;
          ctx.fillText("👻", wobbleX, p.y);
          ctx.restore();
        }
      });

      animId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-4 pt-16 sm:pt-20 pb-12 sm:pb-16 overflow-hidden">
      {/* Background canvas particles (Ghosts, Stars, Sparkles) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Atmospheric misty purple & amber glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none blur-[120px] opacity-30 -z-10"
        style={{
          background: "radial-gradient(circle, #9B5CF6 0%, #FF6B2B 40%, transparent 70%)",
        }}
      />
      <div className="absolute top-12 left-10 w-72 h-72 bg-purple-600/15 rounded-full blur-[90px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-600/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* SVG Mystical Moon in top right corner */}
      <motion.div
        className="absolute top-6 right-4 sm:top-10 sm:right-12 z-10 pointer-events-none"
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      >
        <div className="relative group">
          <div className="absolute inset-0 rounded-full animate-moon-halo blur-lg pointer-events-none" />
          <svg
            className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 drop-shadow-[0_0_35px_rgba(245,200,66,0.65)]"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="46" fill="url(#moonGlowF)" />
            <circle cx="50" cy="50" r="44" fill="url(#moonTextureF)" />
            <circle cx="36" cy="38" r="9" fill="#E4BA3B" opacity="0.45" />
            <circle cx="37" cy="37" r="7.5" fill="#D4A72B" opacity="0.35" />
            <circle cx="62" cy="32" r="6" fill="#D4A72B" opacity="0.3" />
            <circle cx="48" cy="65" r="11" fill="#E4BA3B" opacity="0.4" />
            <circle cx="68" cy="58" r="7.5" fill="#D4A72B" opacity="0.35" />
            <circle cx="28" cy="58" r="4.5" fill="#C99B22" opacity="0.35" />
            <path
              d="M 50 6 A 44 44 0 0 0 50 94 A 36 36 0 0 1 50 6 Z"
              fill="#26102E"
              opacity="0.25"
            />
            {/* Flying Bat / Witch silhouette */}
            <path
              d="M 62 48 Q 56 46 51 47 L 46 45 Q 48 43 53 43 L 57 41 Q 52 39 44 44 L 38 46 L 33 46 Q 30 45 32 48 L 39 49 L 43 51 Q 40 54 44 55 Q 49 54 53 52 L 64 50 Z"
              fill="#130718"
              opacity="0.75"
            />
            <defs>
              <radialGradient id="moonGlowF" cx="50%" cy="50%" r="50%" fx="40%" fy="35%">
                <stop offset="0%" stopColor="#FFF9E0" />
                <stop offset="60%" stopColor="#F5C842" />
                <stop offset="100%" stopColor="#E29A18" />
              </radialGradient>
              <radialGradient id="moonTextureF" cx="35%" cy="30%" r="65%">
                <stop offset="0%" stopColor="#FFFDF0" />
                <stop offset="45%" stopColor="#F8D468" />
                <stop offset="85%" stopColor="#E5B235" />
                <stop offset="100%" stopColor="#B87D18" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </motion.div>

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-orange-500/30 text-orange-300 text-xs sm:text-sm font-medium mb-6 shadow-[0_0_20px_rgba(255,107,43,0.3)]"
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
        className="relative z-10 max-w-4xl mx-auto"
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
        className="relative z-10 max-w-2xl mx-auto text-sm sm:text-lg text-[#D8CEE8] leading-relaxed mb-8 sm:mb-10 font-normal px-2"
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
        className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 max-w-3xl w-full"
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

      {/* Decorative Flying Bats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="relative z-10 mt-8 sm:mt-10 flex items-center justify-center gap-4 sm:gap-6 text-[#9B5CF6]/70"
      >
        <span className="text-lg sm:text-xl animate-bounce">🦇</span>
        <div className="h-[1px] w-10 sm:w-16 bg-gradient-to-r from-transparent via-[#9B5CF6]/50 to-transparent" />
        <span className="text-[10px] sm:text-xs tracking-widest text-[#F5C842]/80 uppercase font-sans">
          31 Октября • Halloween Party
        </span>
        <div className="h-[1px] w-10 sm:w-16 bg-gradient-to-r from-transparent via-[#9B5CF6]/50 to-transparent" />
        <span className="text-lg sm:text-xl animate-bounce">🦇</span>
      </motion.div>
    </section>
  );
}
