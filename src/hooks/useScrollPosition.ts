import { useEffect, useState } from "react";

/** Posição de scroll da janela (throttle via rAF). `enabled=false` desativa o listener. */
export function useScrollPosition(enabled = true) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!enabled) return;

    let frame = 0;
    const update = () => setCoords({ x: window.scrollX, y: window.scrollY });
    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(frame);
    };
  }, [enabled]);

  return coords;
}
