/**
 * Asymmetric 12-column bento spans. Items are laid out in pairs that always
 * fill a row (7/5, 5/7, 6/6, 4/8, 8/4); an odd last item spans the full row,
 * so there is never an empty cell.
 */
const PAIRS = [
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-7",
  "md:col-span-6",
  "md:col-span-6",
  "md:col-span-4",
  "md:col-span-8",
  "md:col-span-8",
  "md:col-span-4",
];

export function bentoSpan(i: number, n: number) {
  if (n % 2 === 1 && i === n - 1) return "md:col-span-12";
  return PAIRS[i % PAIRS.length];
}

/** Rotates plate surfaces so a grid is not 6 identical tiles. */
export function bentoTone(i: number) {
  return ["", "core-accent", "core-grid"][i % 3];
}

/** Each floating card starts at a different point of the loop so they never move in lockstep. */
let phase = 0;
export function nextPhase() {
  phase += 1;
  return `-${((phase * 2.3) % 9).toFixed(1)}s`;
}

/** Prefix a root-relative path with the site's base (e.g. "/software-engineering-portfolio"). */
export function withBase(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
