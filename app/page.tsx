import Hero from "@/components/Hero";
import PotionBar from "@/components/PotionBar";
import FortunePumpkins from "@/components/FortunePumpkins";
import FriendsToast from "@/components/FriendsToast";
import Closing from "@/components/Closing";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)] selection:bg-orange-500/30 selection:text-orange-200 relative overflow-hidden">
      <Hero />
      <PotionBar />
      <FortunePumpkins />
      <FriendsToast />
      <Closing />
    </main>
  );
}
