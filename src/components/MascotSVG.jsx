/* Cleany — Clenza's original cartoon cleaning mascot.
   Mickey-inspired: round ears, white gloves, red shorts,
   yellow shoes. Both hands raised triumphantly holding
   a vacuum cleaner above. Original SVG — not a Disney asset. */

export function MascotFull({ width = 94 }) {
  const height = width * 195 / 200
  return (
    <svg
      viewBox="0 0 200 195"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Cleany the cleaning mascot"
    >
      {/* ── VACUUM held high — drawn first so arms overlay it ── */}
      {/* Vacuum body (central canister) */}
      <rect x="72" y="42" width="56" height="22" rx="7" fill="#2288ee" />
      {/* Sheen on vacuum top */}
      <rect x="74" y="44" width="52" height="9" rx="5" fill="#55aaff" />
      {/* Power button */}
      <circle cx="117" cy="57" r="4" fill="#ffd700" />
      {/* Brand stripe */}
      <rect x="74" y="55" width="20" height="3" rx="1.5" fill="#0055bb" opacity="0.5" />
      {/* Suction hose going down from center */}
      <path d="M 100 64 Q 100 78 100 88"
            stroke="#555" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* Nozzle at hose bottom */}
      <rect x="86" y="86" width="28" height="8" rx="4" fill="#333" />
      <circle cx="92"  cy="90" r="2" fill="#555" />
      <circle cx="100" cy="90" r="2" fill="#555" />
      <circle cx="108" cy="90" r="2" fill="#555" />
      {/* Left wand connecting glove to vacuum */}
      <path d="M 40 75 Q 56 60 72 54"
            stroke="#666" strokeWidth="4.5" fill="none" strokeLinecap="round" />
      {/* Right wand connecting glove to vacuum */}
      <path d="M 160 75 Q 144 60 128 54"
            stroke="#666" strokeWidth="4.5" fill="none" strokeLinecap="round" />

      {/* ── EARS ── */}
      <circle cx="63"  cy="110" r="27" fill="#111111" />
      <circle cx="137" cy="110" r="27" fill="#111111" />

      {/* ── HEAD ── */}
      <circle cx="100" cy="132" r="36" fill="#111111" />

      {/* ── FACE ── */}
      <ellipse cx="100" cy="137" rx="27" ry="24" fill="#f5b896" />

      {/* ── EYEBROWS (raised — excited!) ── */}
      <path d="M 80 122 Q 87 117 94 121" stroke="#111" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M 106 121 Q 113 117 120 122" stroke="#111" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* ── LEFT EYE ── */}
      <ellipse cx="88"  cy="130" rx="8" ry="9" fill="white" />
      <circle  cx="89"  cy="131" r="5.5" fill="#111111" />
      <circle  cx="91"  cy="128" r="2"   fill="white" />

      {/* ── RIGHT EYE ── */}
      <ellipse cx="112" cy="130" rx="8" ry="9" fill="white" />
      <circle  cx="113" cy="131" r="5.5" fill="#111111" />
      <circle  cx="115" cy="128" r="2"   fill="white" />

      {/* ── NOSE ── */}
      <ellipse cx="100" cy="141" rx="5" ry="3.5" fill="#c47a52" />

      {/* ── BIG HAPPY OPEN MOUTH ── */}
      <path d="M 80 148 Q 100 167 120 148 L 118 154 Q 100 174 82 154 Z" fill="#cc2222" />
      <path d="M 80 148 Q 100 156 120 148 L 117 151 Q 100 158 83 151 Z" fill="white" />
      <ellipse cx="100" cy="165" rx="11" ry="6" fill="#e8747a" />

      {/* ── LEFT ARM raised upward ── */}
      <path d="M 76 158 C 62 140 50 110 40 80"
            stroke="#111111" strokeWidth="14" fill="none" strokeLinecap="round" />

      {/* ── LEFT GLOVE ── */}
      <circle cx="38" cy="75" r="14" fill="white" />
      <path d="M 27 67 Q 24 59 29 57" stroke="#ccc" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M 33 64 Q 31 56 36 55" stroke="#ccc" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M 39 63 Q 39 55 44 55" stroke="#ccc" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* ── RIGHT ARM raised upward ── */}
      <path d="M 124 158 C 138 140 150 110 160 80"
            stroke="#111111" strokeWidth="14" fill="none" strokeLinecap="round" />

      {/* ── RIGHT GLOVE ── */}
      <circle cx="162" cy="75" r="14" fill="white" />
      <path d="M 173 67 Q 176 59 171 57" stroke="#ccc" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M 167 64 Q 169 56 164 55" stroke="#ccc" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M 161 63 Q 161 55 156 55" stroke="#ccc" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* ── BODY / TORSO ── */}
      <rect x="76" y="166" width="48" height="22" rx="9" fill="#111111" />

      {/* ── RED SHORTS ── */}
      <rect x="68" y="180" width="64" height="20" rx="8" fill="#cc2222" />
      <rect x="68" y="180" width="64" height="5"  rx="4" fill="#aa1111" />
      <circle cx="90"  cy="194" r="3.5" fill="#ffd700" />
      <circle cx="110" cy="194" r="3.5" fill="#ffd700" />

      {/* ── LEGS ── */}
      {/* (cropped at bottom for compact fit — shoes visible) */}
      <ellipse cx="78"  cy="195" rx="22" ry="10" fill="#ffd700" />
      <ellipse cx="122" cy="195" rx="22" ry="10" fill="#ffd700" />
    </svg>
  )
}

/* Head crop — used in the chat window header */
export function MascotHead({ size = 44 }) {
  return (
    <svg
      viewBox="35 88 130 82"
      width={size}
      height={size * 82 / 130}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="63"  cy="110" r="27" fill="#111111" />
      <circle cx="137" cy="110" r="27" fill="#111111" />
      <circle cx="100" cy="132" r="36" fill="#111111" />
      <ellipse cx="100" cy="137" rx="27" ry="24" fill="#f5b896" />
      <path d="M 80 122 Q 87 117 94 121" stroke="#111" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M 106 121 Q 113 117 120 122" stroke="#111" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <ellipse cx="88"  cy="130" rx="8" ry="9" fill="white" />
      <circle  cx="89"  cy="131" r="5.5" fill="#111111" />
      <circle  cx="91"  cy="128" r="2"   fill="white" />
      <ellipse cx="112" cy="130" rx="8" ry="9" fill="white" />
      <circle  cx="113" cy="131" r="5.5" fill="#111111" />
      <circle  cx="115" cy="128" r="2"   fill="white" />
      <ellipse cx="100" cy="141" rx="5" ry="3.5" fill="#c47a52" />
      <path d="M 80 148 Q 100 167 120 148 L 118 154 Q 100 174 82 154 Z" fill="#cc2222" />
      <path d="M 80 148 Q 100 156 120 148 L 117 151 Q 100 158 83 151 Z" fill="white" />
      <ellipse cx="100" cy="165" rx="11" ry="6" fill="#e8747a" />
    </svg>
  )
}
