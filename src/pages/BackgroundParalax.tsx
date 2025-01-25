import { useEffect } from "react";
import Simple from "../components/BackgorundParalax/Simple";
import Lenis from "lenis";
import DummySection from "../components/BackgorundParalax/DummySection";
import Advanced from "../components/BackgorundParalax/Advanced";

function BackgroundParalax() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div>
      <Simple />
      <DummySection />
      <Advanced />
      <div className="h-screen bg-black" />
    </div>
  );
}

export default BackgroundParalax;
