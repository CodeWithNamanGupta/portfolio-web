'use client';
import PatternWaves from '../../portfolio-nextjs/app/components/reactbits/PatternWaves';

export default function Background() {
  return (
    <div className="site-background" aria-hidden="true">
      <PatternWaves preset="silk" color="#777777" backgroundColor="#0d0d0d" opacity={0.34} fade="edges" speed={0.3} interactive={true} cursorSize={70} cursorStrength={0.35} />
    </div>
  );
}
