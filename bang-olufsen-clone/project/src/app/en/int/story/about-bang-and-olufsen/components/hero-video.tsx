"use client";
import { useRef, useState } from "react";

export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);

  function toggle() {
    if (!ref.current) return;
    if (ref.current.paused) { ref.current.play(); setPaused(false); }
    else { ref.current.pause(); setPaused(true); }
  }

  return (
    <div className="relative w-full aspect-video max-md:aspect-[9/16] overflow-hidden">
      <video
        ref={ref}
        className="w-full h-full object-cover"
        autoPlay loop muted playsInline
        poster="/assets/cloned/images/0a10a48e50af.jpg"
        preload="auto"
      >
        <source src="/assets/cloned/videos/199456e98835.mp4" type="video/mp4" />
      </video>
      <button
        onClick={toggle}
        className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-black/40 flex items-center justify-center z-10"
        aria-label={paused ? "Play" : "Pause"}
      >
        {paused ? (
          <svg width="14" height="16" viewBox="0 0 14 16" fill="white"><path d="M0 0l14 8-14 8V0z"/></svg>
        ) : (
          <svg width="12" height="14" viewBox="0 0 12 14" fill="white"><rect x="0" y="0" width="4" height="14"/><rect x="8" y="0" width="4" height="14"/></svg>
        )}
      </button>
    </div>
  );
}
