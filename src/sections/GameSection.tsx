import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SnakeGame from "../components/SnakeGame";
import TitleHeader from "../components/TitleHeader";

const GameSection = () => {
  useGSAP(() => {
    gsap.from(".game-section", {
      opacity: 0,
      y: 80,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      id="game"
      className="game-section section-padding w-full"
    >
      <div className="md:px-20 px-5">
        <TitleHeader
          title="🎮 Mini Snake Game"
          sub="Take a short break and see if you can beat your high score!"
        />

        <div className="mt-16 flex justify-center">
          <div className="rounded-3xl border border-[#74D802]/30 bg-[#111111] p-8 shadow-[0_0_30px_rgba(116,216,2,0.15)]">
            <SnakeGame />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameSection;