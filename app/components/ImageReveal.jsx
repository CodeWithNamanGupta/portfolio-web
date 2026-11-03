'use client';

import { useRef } from 'react';

export default function ImageReveal() {
  const revealRef = useRef(null);

  function movePointer(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const reveal = revealRef.current;
    if (!reveal) return;

    const mask = `radial-gradient(circle 135px at ${x}px ${y}px, #000 0%, #000 72%, transparent 100%)`;
    reveal.style.webkitMaskImage = mask;
    reveal.style.maskImage = mask;
  }

  function resetPointer() {
    const reveal = revealRef.current;
    if (!reveal) return;
    reveal.style.webkitMaskImage = 'radial-gradient(circle 0px at -1000px -1000px, #000 0%, transparent 100%)';
    reveal.style.maskImage = 'radial-gradient(circle 0px at -1000px -1000px, #000 0%, transparent 100%)';
  }

  return (
    <div className="reveal-container" onPointerMove={movePointer} onPointerLeave={resetPointer}>
      <img
        src="/images/Naman.png"
        className="image-layer"
        alt="Naman Gupta portrait"
        draggable="false"
      />
      <img
        ref={revealRef}
        src="/images/OctopusMan.png"
        className="image-layer masked"
        alt="Masked character revealed on hover"
        draggable="false"
      />
    </div>
  );
}
