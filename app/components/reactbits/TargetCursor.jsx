import { useEffect, useState } from 'react';

export default function TargetCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: '32px',
        height: '32px',
        border: '2px solid #ffffff',
        borderRadius: '50%',
        transform: `translate(-50%, -50%) scale(${clicked ? 0.8 : 1})`,
        transition: 'transform 0.1s ease',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
}
