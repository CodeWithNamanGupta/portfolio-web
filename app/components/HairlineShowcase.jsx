import { Terrain } from "@lucasmarkes/hairline/react";

export default function HairlineShowcase() {
  return (
    <div className="hairline-figure" aria-label="Interactive isometric line illustration">
      <Terrain intensity={0.65} theme="dark" label="Interactive terrain illustration that responds to pointer movement" />
    </div>
  );
}
