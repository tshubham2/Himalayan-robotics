// Mountain-ridge mark. The peak is filled in safety yellow.
export function Logo({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden>
      <path d="M14 19 L20 8 L25.5 18 Z" fill="#f5b800" />
      <path
        d="M2 26 L10 14 L14 19 L20 8 L30 26 Z"
        fill="none"
        stroke="#1b1f24"
        strokeWidth="2.25"
        strokeLinejoin="round"
      />
    </svg>
  );
}
