import { forwardRef } from 'react';

export const CustomCursor = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      ref={ref}
      className="custom-cursor fixed w-5 h-5 rounded-full pointer-events-none z-[9999] mix-blend-difference"
      style={{
        background: 'var(--gradient-primary)',
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
});