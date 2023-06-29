export default function cartesian(...a) {
  return a.reduce((a, b) => a.flatMap((d) => b.map((e) => [d, e].flat())))
}
