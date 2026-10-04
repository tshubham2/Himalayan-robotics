/**
 * Clean monochrome line-art of an industrial robotic arm.
 * Used as the hero illustration — no fills, no colour theatrics.
 */
export function HeroVisual({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 480"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* Floor reference grid */}
      <g stroke="#d3d9df" strokeWidth="1">
        <line x1="40"  y1="400" x2="440" y2="400" />
        <line x1="40"  y1="420" x2="440" y2="420" />
        <line x1="80"  y1="380" x2="80"  y2="440" />
        <line x1="160" y1="380" x2="160" y2="440" />
        <line x1="240" y1="380" x2="240" y2="440" />
        <line x1="320" y1="380" x2="320" y2="440" />
        <line x1="400" y1="380" x2="400" y2="440" />
      </g>

      {/* Base plate */}
      <rect x="120" y="380" width="120" height="20" rx="2"
            stroke="#1b1f24" strokeWidth="1.5" />
      <rect x="160" y="368" width="40" height="12" rx="1"
            stroke="#1b1f24" strokeWidth="1.5" />

      {/* Shoulder joint */}
      <circle cx="180" cy="362" r="9" stroke="#1b1f24" strokeWidth="1.5" />
      <circle cx="180" cy="362" r="2.5" fill="#1b1f24" />

      {/* Lower arm */}
      <line x1="180" y1="362" x2="240" y2="220"
            stroke="#1b1f24" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="186" y1="358" x2="246" y2="216"
            stroke="#1b1f24" strokeOpacity="0.25" strokeWidth="1" />

      {/* Elbow joint */}
      <circle cx="240" cy="220" r="9" stroke="#1b1f24" strokeWidth="1.5" />
      <circle cx="240" cy="220" r="2.5" fill="#1b1f24" />

      {/* Upper arm */}
      <line x1="240" y1="220" x2="340" y2="170"
            stroke="#1b1f24" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="244" y1="226" x2="344" y2="176"
            stroke="#1b1f24" strokeOpacity="0.25" strokeWidth="1" />

      {/* Wrist joint */}
      <circle cx="340" cy="170" r="7" stroke="#1b1f24" strokeWidth="1.5" />
      <circle cx="340" cy="170" r="2" fill="#1b1f24" />

      {/* End effector */}
      <line x1="340" y1="170" x2="372" y2="158"
            stroke="#1b1f24" strokeWidth="2" strokeLinecap="round" />
      <line x1="372" y1="158" x2="380" y2="148"
            stroke="#1b1f24" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="372" y1="158" x2="384" y2="166"
            stroke="#1b1f24" strokeWidth="1.5" strokeLinecap="round" />

      {/* Workpiece on conveyor */}
      <rect x="300" y="395" width="60" height="14"
            stroke="#1b1f24" strokeWidth="1.5" />
      <line x1="290" y1="412" x2="370" y2="412"
            stroke="#1b1f24" strokeWidth="1" strokeOpacity="0.5" />

      {/* Subtle reach arc */}
      <path d="M180 362 Q 180 230 380 148"
            stroke="#1b1f24" strokeWidth="1" strokeDasharray="3 4" strokeOpacity="0.35" />

      {/* Status indicator */}
      <g transform="translate(380 80)">
        <circle r="5" fill="#f5b800" stroke="#1b1f24" strokeWidth="1" />
        <text x="12" y="4" fontSize="11" fill="#56616c" fontFamily="inherit">
          Active cycle, 12 s
        </text>
      </g>
    </svg>
  );
}
