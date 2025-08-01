import type { OverlappedPath } from "@/utils/overlapped-paths";

export default function OverlappedPaths({
  overlappedPaths,
  viewboxWidth,
  svgDimensionsWidth,
}: {
  overlappedPaths: OverlappedPath[];
  viewboxWidth: number;
  svgDimensionsWidth: number;
}) {
  return (
    <>
      {overlappedPaths.map(({ color, overlappedPath }, index) => (
        <path
          role="presentation"
          aria-hidden="true"
          key={index}
          d={overlappedPath}
          stroke={color}
          fill="transparent"
          strokeWidth={String((1.5 * viewboxWidth) / svgDimensionsWidth)}
        ></path>
      ))}
    </>
  );
}
