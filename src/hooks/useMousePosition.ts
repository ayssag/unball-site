import { useEffect, useState } from "react";

/** Posição do mouse (throttle via rAF). `enabled=false` desativa o listener. */
export function useMousePosition(enabled = true) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!enabled) return;

    let frame = 0;
    const handleMove = (event: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setCoords({ x: event.clientX, y: event.clientY });
      });
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(frame);
    };
  }, [enabled]);

  return coords;
}
