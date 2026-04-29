"use client";
import { Card } from "@/components/ui/container-scroll-animation";
import { motion, useMotionValue } from "framer-motion";

export function HeroScrollDemo() {
  const rotate = useMotionValue(0);
  const scale = useMotionValue(1);

  return (
    <div className="relative z-10 w-full bg-black">
      <div className="relative flex h-fit w-full items-start justify-center px-3 pt-4 perspective-midrange sm:px-12 lg:pt-6">
        <motion.div
          className="relative h-100 w-full max-w-6xl rounded-[13px] sm:h-128 lg:aspect-[1.7] lg:h-auto"
          initial={{ opacity: 0, y: 84, scale: 0.86, rotateX: 14, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0, filter: "blur(0px)" }}
          transition={{ type: "spring", stiffness: 110, damping: 18, mass: 0.9 }}
          style={{ transformOrigin: "center top" }}
        >
          <Card rotate={rotate} scale={scale} translate={useMotionValue(0)}>
            {null}
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
