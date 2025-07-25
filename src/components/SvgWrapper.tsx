"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Svg from "@/components/Svg";
import type { Viewbox } from "@/types/Viewbox";
import type { SvgDimensions } from "@/types/Svg";
import { formatNumber } from "@/utils/path";
import SvgActions from "./svg-actions";
import { cn } from "@/lib/utils";

export default function SvgWrapper() {
  const [viewbox, setViewbox] = useState<Viewbox>({
    x: 0,
    y: 0,
    width: 1000,
    height: 1000,
  });

  const [svgDimensions, setSvgDimensions] = useState<SvgDimensions>({
    width: 1,
    height: 1,
  });

  const [isSidebarOpen, setisSidebarOpen] = useState(true);

  // Type for updateViewbox function
  const updateViewbox = (
    newObject: Viewbox,
    adaptAspectRatio: Boolean = false
  ) => {
    setViewbox((prevState) => {
      const { height: oldHeight, width: oldWidth } = prevState;
      if (adaptAspectRatio) {
        const aspectRatio = oldHeight / oldWidth || 0;

        if (newObject.height !== oldHeight) {
          newObject.width = newObject.height / aspectRatio;
          newObject.width = newObject.height / aspectRatio;
        } else {
          newObject.height = newObject.width * aspectRatio;
          newObject.height = newObject.width * aspectRatio;
        }
      }

      return {
        ...prevState,
        x: parseFloat(formatNumber(newObject.x, 2)),
        y: parseFloat(formatNumber(newObject.y, 2)),
        width: parseFloat(formatNumber(Math.max(newObject.width, 0), 2)),
        height: parseFloat(formatNumber(Math.max(newObject.height, 0), 2)),
      };
    });
  };

  return (
    <>
      <div
        className={cn(
          "relative h-full w-[calc(100%-var(--aside-width))] transition-[width] ease-out-sidebar duration-500",
          !isSidebarOpen && "w-full"
        )}
      >
        <Svg
          svgDimensions={svgDimensions}
          setSvgDimensions={setSvgDimensions}
          viewbox={viewbox}
          updateViewbox={updateViewbox}
        ></Svg>
        <SvgActions
          viewbox={viewbox}
          updateViewbox={updateViewbox}
          setSvgDimensions={setSvgDimensions}
        ></SvgActions>
      </div>
      <Sidebar
        svgDimensions={svgDimensions}
        viewbox={viewbox}
        updateViewbox={updateViewbox}
        open={isSidebarOpen}
        setOpen={setisSidebarOpen}
        setSvgDimensions={setSvgDimensions}
      />
    </>
  );
}
