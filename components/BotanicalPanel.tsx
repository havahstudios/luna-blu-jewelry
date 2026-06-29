// Hand-drawn botanical — turbulence filter + thin sketchy strokes, artsy feel

const SAGE   = 'rgba(82,100,62,0.70)';
const SAGE_L = 'rgba(110,130,82,0.50)';
const TERRA  = 'rgba(180,115,72,0.62)';
const MAUVE  = 'rgba(175,138,148,0.60)';
const PEACH  = 'rgba(195,168,128,0.58)';
const GOLD   = 'rgba(190,152,58,0.55)';

export default function BotanicalPanel({
  className,
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 220 560"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      style={{
        display: 'block',
        transform: flip ? 'scaleX(-1)' : undefined,
        overflow: 'visible',
      }}
    >
      <defs>
        {/* Same hand-drawn filter as the frame */}
        <filter id="hd2" x="-6%" y="-6%" width="112%" height="112%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.025 0.020"
            numOctaves="4"
            seed="5"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="3.0"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>

      <g filter="url(#hd2)">

        {/* ── TULIP 1 — tall, terracotta, center ── */}
        {/* stem */}
        <path d="M112,560 C110,460 113,340 112,98"
          fill="none" stroke={SAGE} strokeWidth="1.6" strokeLinecap="round"/>
        {/* leaf A */}
        <path d="M112,390 C88,374 62,340 52,304 C78,306 104,366 112,390 Z"
          fill="none" stroke={SAGE} strokeWidth="1.1"/>
        <path d="M112,390 C88,362 68,330 54,306"
          fill="none" stroke={SAGE_L} strokeWidth="0.7"/>
        {/* leaf B */}
        <path d="M112,278 C138,260 162,224 150,188 C132,200 110,264 112,278 Z"
          fill="none" stroke={SAGE} strokeWidth="1.1"/>
        {/* small bud */}
        <path d="M106,196 C103,184 106,173 112,165 C118,173 121,184 118,196 Z"
          fill="none" stroke={TERRA} strokeWidth="1.0"/>
        {/* flower */}
        <path d="M90,102 C86,76 89,52 112,34 C135,52 138,76 134,102 Z"
          fill="none" stroke={TERRA} strokeWidth="1.5"/>
        <path d="M99,102 C96,80 99,60 112,46 C125,60 128,80 125,102 Z"
          fill="none" stroke={TERRA} strokeWidth="0.9" opacity="0.6"/>
        {/* center line */}
        <line x1="112" y1="100" x2="112" y2="38"
          stroke={TERRA} strokeWidth="0.7" opacity="0.4"/>

        {/* ── TULIP 2 — medium, mauve, left ── */}
        <path d="M60,560 C58,470 61,360 60,208"
          fill="none" stroke={SAGE} strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M60,348 C82,330 102,296 90,262 C72,274 58,336 60,348 Z"
          fill="none" stroke={SAGE} strokeWidth="1.0"/>
        <path d="M43,212 C39,188 42,168 60,152 C78,168 81,188 77,212 Z"
          fill="none" stroke={MAUVE} strokeWidth="1.4"/>
        <path d="M51,212 C48,192 51,174 60,162 C69,174 72,192 69,212 Z"
          fill="none" stroke={MAUVE} strokeWidth="0.8" opacity="0.55"/>
        <line x1="60" y1="210" x2="60" y2="154"
          stroke={MAUVE} strokeWidth="0.6" opacity="0.38"/>

        {/* ── TULIP 3 — shorter, peach, right ── */}
        <path d="M168,560 C166,480 169,390 168,288"
          fill="none" stroke={SAGE} strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M168,428 C144,410 122,378 130,344 C148,354 166,414 168,428 Z"
          fill="none" stroke={SAGE} strokeWidth="1.0"/>
        <path d="M152,292 C148,270 151,252 168,238 C185,252 188,270 184,292 Z"
          fill="none" stroke={PEACH} strokeWidth="1.4"/>
        <path d="M159,292 C156,273 159,257 168,246 C177,257 180,273 177,292 Z"
          fill="none" stroke={PEACH} strokeWidth="0.8" opacity="0.55"/>

        {/* ── SMALL ACCENT LEAF bottom-left ── */}
        <path d="M30,484 C14,460 8,430 18,408 C26,420 32,468 30,484 Z"
          fill="none" stroke={SAGE_L} strokeWidth="1.0"/>
        <path d="M30,484 L30,560"
          stroke={SAGE} strokeWidth="1.3" strokeLinecap="round"/>

        {/* ── GOLD ACCENT DOTS — tiny gestural marks ── */}
        <circle cx="112" cy="32"  r="2.2" fill={GOLD}/>
        <circle cx="60"  cy="150" r="1.8" fill={GOLD}/>
        <circle cx="168" cy="236" r="1.8" fill={GOLD}/>
        <circle cx="112" cy="163" r="1.4" fill={GOLD} opacity="0.6"/>

      </g>
    </svg>
  );
}
