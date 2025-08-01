"use client";

import type { Transition, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import { cn } from "@/lib/utils";

export interface PanelRightHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface PanelRightProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const defaultTransition: Transition = {
  type: "tween",
  ease: "linear",
  duration: 0.2,
};

const pathVariants: Variants = {
  normal: { width: 4, x: 0 },
  animate: { width: 0, x: 4 },
};

const PanelRight = forwardRef<PanelRightHandle, PanelRightProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const controls = useAnimation();
    const isControlledRef = useRef(false);

    useImperativeHandle(ref, () => {
      isControlledRef.current = true;
      return {
        startAnimation: () => controls.start("animate"),
        stopAnimation: () => controls.start("normal"),
      };
    });

    const handleMouseEnter = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          controls.start("animate");
        } else {
          onMouseEnter?.(e);
        }
      },
      [controls, onMouseEnter]
    );

    const handleMouseLeave = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isControlledRef.current) {
          controls.start("normal");
        } else {
          onMouseLeave?.(e);
        }
      },
      [controls, onMouseLeave]
    );

    return (
      <div
        className={cn(className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.rect
            initial={{
              width: 4,
              x: 0,
            }}
            transition={defaultTransition}
            variants={pathVariants}
            animate={controls}
            fill="currentColor"
            stroke="currentColor"
            width="4"
            height="16"
            x="16"
            y="4"
          />
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M15 3v18" />
        </svg>
      </div>
    );
  }
);

PanelRight.displayName = "PanelRight";

export { PanelRight };
