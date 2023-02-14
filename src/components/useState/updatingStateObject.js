import { useState } from 'react';
export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  return (
    <div
      onPointerMove={e => {
        setPosition({
          x: e.clientX,
          y: e.clientY
        });
      }}
      style={{
        position: 'relative',
        width: '300px',
        height: '300px',
        backgroundColor: 'b`lack'
      }}>
      <div style={{
        position: 'relative',
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,
        top:'-155px',
        left:'-75px',
        width: 20,
        height: 20,
      }} />
    </div>
  );
}