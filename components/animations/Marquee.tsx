"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  pauseOnHover?: boolean;
  direction?: "left" | "right";
}

export function Marquee({
  children,
  className,
  speed = 30,
  pauseOnHover = true,
  direction = "left",
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "overflow-hidden",
        pauseOnHover && "group",
        className
      )}
    >
      <div
        className={cn(
          "flex gap-16",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{
          animation: `marquee ${speed}s linear infinite`,
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        {/* First copy */}
        <div className="flex gap-16 shrink-0">{children}</div>
        {/* Second copy for seamless loop */}
        <div className="flex gap-16 shrink-0">{children}</div>
      </div>
    </div>
  );
}

export default Marquee;
