// Stepped-cross motif drawn from the Milagro symbol. Pure outline so it can
// be layered, rotated and tinted anywhere as a decorative element.

const STEP_CROSS =
  "M38 3H62V15H74V26H85V38H97V62H85V74H74V85H62V97H38V85H26V74H15V62H3V38H15V26H26V15H38Z";

// 12-point sun, like the star inside the logo
const SUN = Array.from({ length: 24 }, (_, i) => {
  const a = (Math.PI * 2 * i) / 24 - Math.PI / 2;
  const r = i % 2 === 0 ? 27 : 22;
  return `${(50 + r * Math.cos(a)).toFixed(2)},${(50 + r * Math.sin(a)).toFixed(2)}`;
}).join(" ");

type Props = {
  className?: string;
  strokeWidth?: number;
  detailed?: boolean;
};

export default function Chakana({
  className,
  strokeWidth = 0.6,
  detailed = true,
}: Props) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      aria-hidden="true"
    >
      <path d={STEP_CROSS} strokeLinejoin="round" />
      {detailed && (
        <>
          <circle cx="50" cy="50" r="33" />
          <polygon points={SUN} strokeLinejoin="round" />
          <circle cx="50" cy="50" r="15" />
        </>
      )}
    </svg>
  );
}
