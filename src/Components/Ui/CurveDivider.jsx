// Curved bottom edge for a banner: a royal blue curve behind, and a curve
// in the next section's color in front, so the banner flows into the page.

// How tall the curve is on phones, and on larger screens
const CURVE_HEIGHT = 'h-14 md:h-20'

// The front curve must match the background of the section that follows
const FRONT = {
  white: 'fill-white',
  'blue-50': 'fill-blue-50',
}

export default function CurveDivider({ next = 'white' }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      className={`absolute inset-x-0 -bottom-px w-full ${CURVE_HEIGHT}`}
    >
      {/* Back curve: royal blue */}
      <path d="M0,100 L0,28 Q720,92 1440,28 L1440,100 Z" className="fill-royal" />

      {/* Front curve: the next section's color */}
      <path
        d="M0,100 L0,48 Q720,106 1440,48 L1440,100 Z"
        className={FRONT[next] ?? FRONT.white}
      />
    </svg>
  )
}