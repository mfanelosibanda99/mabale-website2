// Decoration for the page banner: rails (thin lines) and ring lines.
// It is hidden from screen readers because it is only decoration.

// ---- Look: tune these numbers (0 = invisible, 1 = solid) ----
const RAIL = 0.1 // the thin lines
const RING = 0.15 // the white rings
const RING_ACCENT = 0.55 // the royal blue ring and its dot

// Where the rings are centered, in the drawing's own units (the drawing is 800 wide, 400 tall)
const CX = 660
const CY = 200
const ORIGIN = `${CX}px ${CY}px` // the point the dots turn around

// A point on a ring: used to place the small dots
const onRing = (radius, angle) => ({
  x: CX + radius * Math.cos(angle),
  y: CY + radius * Math.sin(angle),
})

const blueDot = onRing(120, -0.6)
const whiteDot = onRing(225, 2.4)

// Lines fade out toward the left, so they never touch the title
const fadeLeft = 'linear-gradient(to left, black 30%, transparent 95%)'

export default function BannerDecor() {
  const white = (strength) => `rgba(255,255,255,${strength})`

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Rails: a hairline at the top, and a ruler with tick marks near the bottom */}
      <div
        className="absolute inset-x-0 top-[26%] h-px"
        style={{ backgroundColor: white(RAIL) }}
      />
      <div
        className="absolute inset-x-0 bottom-[22%] h-px"
        style={{ backgroundColor: white(RAIL) }}
      />
      <div
        className="absolute inset-x-0 bottom-[calc(22%+1px)] h-2"
        style={{
          backgroundImage: `repeating-linear-gradient(to right, ${white(
            RAIL * 1.6
          )} 0 1px, transparent 1px 24px)`,
          maskImage: fadeLeft,
          WebkitMaskImage: fadeLeft,
        }}
      />

      {/* Two faint vertical rails on the right (not on phones) */}
      {['58%', '74%'].map((left) => (
        <div
          key={left}
          className="absolute bottom-0 top-0 hidden w-px md:block"
          style={{
            left,
            backgroundImage: `linear-gradient(to bottom, transparent, ${white(
              RAIL
            )} 30%, ${white(RAIL)} 70%, transparent)`,
          }}
        />
      ))}

      {/* Rings, anchored on the right side */}
      <svg
        className="absolute inset-y-0 right-0 h-full w-full opacity-60 md:w-3/4 md:opacity-100"
        viewBox="0 0 800 400"
        preserveAspectRatio="xMaxYMid slice"
        fill="none"
      >
        {/* Rings that stay still */}
        <circle cx={CX} cy={CY} r="70" stroke={white(RING)} strokeWidth="1.5" />
        <circle
          cx={CX}
          cy={CY}
          r="120"
          stroke={`rgba(6,108,244,${RING_ACCENT})`}
          strokeWidth="2"
        />
        <circle cx={CX} cy={CY} r="225" stroke={white(RING)} strokeWidth="1.5" />
        <circle
          cx={CX}
          cy={CY}
          r="285"
          stroke={white(RING * 0.7)}
          strokeWidth="1.5"
        />

        {/* The dashed ring and the blue dot turn slowly together */}
        <g
          className="animate-orbit motion-reduce:animate-none"
          style={{ transformOrigin: ORIGIN }}
        >
          <circle
            cx={CX}
            cy={CY}
            r="170"
            stroke={white(RING)}
            strokeWidth="1.5"
            strokeDasharray="3 9"
          />
          <circle
            cx={blueDot.x}
            cy={blueDot.y}
            r="5"
            fill={`rgba(6,108,244,${Math.min(RING_ACCENT + 0.3, 1)})`}
          />
        </g>

        {/* The white dot turns the other way, even more slowly */}
        <g
          className="animate-orbit-reverse motion-reduce:animate-none"
          style={{ transformOrigin: ORIGIN }}
        >
          <circle cx={whiteDot.x} cy={whiteDot.y} r="4" fill={white(RING + 0.2)} />
        </g>
      </svg>
    </div>
  )
}