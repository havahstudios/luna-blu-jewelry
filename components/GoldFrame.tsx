// Hand-drawn artsy frame — light gold strokes, turbulence filter for organic feel

const W = 480;
const H = 640;
const T = 48;
const GOLD = 'rgba(190,150,55,0.72)';
const GOLD_F = 'rgba(190,150,55,0.38)';

export default function GoldFrame({ className }: { className?: string }) {
  const iX = T, iY = T;
  const iW = W - T * 2;
  const iH = H - T * 2;
  const mx = W / 2;
  const my = H / 2;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
      style={{ pointerEvents: 'none', display: 'block' }}
    >
      <defs>
        {/* Hand-drawn wobble — makes every line feel like a real pencil stroke */}
        <filter id="hd" x="-4%" y="-4%" width="108%" height="108%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.022 0.018"
            numOctaves="4"
            seed="11"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="2.8"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>

      <g filter="url(#hd)">
        {/* ── outer border — two thin lines ── */}
        <rect x="5"  y="5"  width={W-10} height={H-10}
          fill="none" stroke={GOLD} strokeWidth="1.4" />
        <rect x="10" y="10" width={W-20} height={H-20}
          fill="none" stroke={GOLD_F} strokeWidth="0.8" />

        {/* ── inner border — one line ── */}
        <rect x={iX} y={iY} width={iW} height={iH}
          fill="none" stroke={GOLD} strokeWidth="1.4" />

        {/* ── corner flourishes — just a few gestural strokes ── */}
        {/* top-left */}
        <path d={`M${iX},${iY-6} C${iX-6},${iY-6} ${iX-6},${iY} ${iX-6},${iY}`}
          fill="none" stroke={GOLD} strokeWidth="1.1" strokeLinecap="round"/>
        <path d={`M${iX-12},${iY} C${iX-8},${iY-8} ${iX},${iY-12} ${iX},${iY-18}`}
          fill="none" stroke={GOLD} strokeWidth="0.9" strokeLinecap="round"/>
        <path d={`M${iX-18},${iY-6} C${iX-14},${iY-14} ${iX-6},${iY-18} ${iX-4},${iY-26}`}
          fill="none" stroke={GOLD_F} strokeWidth="0.8" strokeLinecap="round"/>
        <circle cx={iX-5} cy={iY-27} r="1.4" fill={GOLD} />

        {/* top-right */}
        <path d={`M${W-iX},${iY-6} C${W-iX+6},${iY-6} ${W-iX+6},${iY} ${W-iX+6},${iY}`}
          fill="none" stroke={GOLD} strokeWidth="1.1" strokeLinecap="round"/>
        <path d={`M${W-iX+12},${iY} C${W-iX+8},${iY-8} ${W-iX},${iY-12} ${W-iX},${iY-18}`}
          fill="none" stroke={GOLD} strokeWidth="0.9" strokeLinecap="round"/>
        <path d={`M${W-iX+18},${iY-6} C${W-iX+14},${iY-14} ${W-iX+6},${iY-18} ${W-iX+4},${iY-26}`}
          fill="none" stroke={GOLD_F} strokeWidth="0.8" strokeLinecap="round"/>
        <circle cx={W-iX+5} cy={iY-27} r="1.4" fill={GOLD} />

        {/* bottom-left */}
        <path d={`M${iX},${H-iY+6} C${iX-6},${H-iY+6} ${iX-6},${H-iY} ${iX-6},${H-iY}`}
          fill="none" stroke={GOLD} strokeWidth="1.1" strokeLinecap="round"/>
        <path d={`M${iX-12},${H-iY} C${iX-8},${H-iY+8} ${iX},${H-iY+12} ${iX},${H-iY+18}`}
          fill="none" stroke={GOLD} strokeWidth="0.9" strokeLinecap="round"/>
        <path d={`M${iX-18},${H-iY+6} C${iX-14},${H-iY+14} ${iX-6},${H-iY+18} ${iX-4},${H-iY+26}`}
          fill="none" stroke={GOLD_F} strokeWidth="0.8" strokeLinecap="round"/>
        <circle cx={iX-5} cy={H-iY+27} r="1.4" fill={GOLD} />

        {/* bottom-right */}
        <path d={`M${W-iX},${H-iY+6} C${W-iX+6},${H-iY+6} ${W-iX+6},${H-iY} ${W-iX+6},${H-iY}`}
          fill="none" stroke={GOLD} strokeWidth="1.1" strokeLinecap="round"/>
        <path d={`M${W-iX+12},${H-iY} C${W-iX+8},${H-iY+8} ${W-iX},${H-iY+12} ${W-iX},${H-iY+18}`}
          fill="none" stroke={GOLD} strokeWidth="0.9" strokeLinecap="round"/>
        <path d={`M${W-iX+18},${H-iY+6} C${W-iX+14},${H-iY+14} ${W-iX+6},${H-iY+18} ${W-iX+4},${H-iY+26}`}
          fill="none" stroke={GOLD_F} strokeWidth="0.8" strokeLinecap="round"/>
        <circle cx={W-iX+5} cy={H-iY+27} r="1.4" fill={GOLD} />

        {/* ── mid-side tick marks ── */}
        <line x1={mx-8} y1="6"   x2={mx+8} y2="6"   stroke={GOLD} strokeWidth="1.0"/>
        <line x1={mx-4} y1="11"  x2={mx+4} y2="11"  stroke={GOLD_F} strokeWidth="0.7"/>
        <line x1={mx-8} y1={H-6} x2={mx+8} y2={H-6} stroke={GOLD} strokeWidth="1.0"/>
        <line x1={mx-4} y1={H-11} x2={mx+4} y2={H-11} stroke={GOLD_F} strokeWidth="0.7"/>
        <line x1="6"   y1={my-8} x2="6"   y2={my+8} stroke={GOLD} strokeWidth="1.0"/>
        <line x1="11"  y1={my-4} x2="11"  y2={my+4} stroke={GOLD_F} strokeWidth="0.7"/>
        <line x1={W-6} y1={my-8} x2={W-6} y2={my+8} stroke={GOLD} strokeWidth="1.0"/>
        <line x1={W-11} y1={my-4} x2={W-11} y2={my+4} stroke={GOLD_F} strokeWidth="0.7"/>
      </g>
    </svg>
  );
}
