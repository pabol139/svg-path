import { useState, useEffect } from "react";

export function Circle({
  id,
  radius,
  cx,
  cy,
  fill,
  handleMove,
}: {
  id: string;
  radius: string;
  cx: string;
  cy: string;
  fill: string;
  handleMove: ({ id, x, y }: { id: string; x: number; y: number }) => any;
}) {
  const [dragging, setDragging] = useState(false);

  const handlePointerDown = (event) => {
    setDragging(true);
    event.target.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!dragging) {
      return;
    }

    // Get the SVG element
    const svg = event.target.closest("svg");
    if (!svg) return;

    const point = svg.createSVGPoint();
    point.x = event.clientX;
    point.y = event.clientY;
    const svgPoint = point.matrixTransform(svg.getScreenCTM().inverse());

    handleMove({
      id: id,
      x: parseFloat(svgPoint.x.toFixed(2)),
      y: parseFloat(svgPoint.y.toFixed(2)),
    });
  };

  return (
    <circle
      className="hover:cursor-pointer"
      onPointerLeave={() => {
        setDragging(false);
      }}
      onPointerUp={(event) => {
        setDragging(false);
        event.target.releasePointerCapture(event.pointerId);
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      r={radius}
      cx={cx}
      cy={cy}
      fill={fill}
    ></circle>
  );
}
