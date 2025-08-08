"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils"; // Ensure you have a utils.ts with a cn() helper or replace with your className logic

export function LavaLamp({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let circles: any[] = [];

    for (let i = 0; i < 20; i++) {
      circles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 100 + 20,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2
      });
    }

    const animate = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, width, height);

      for (let circle of circles) {
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(circle.x, circle.y, 0, circle.x, circle.y, circle.r);
        gradient.addColorStop(0, "rgba(255, 0, 150, 0.5)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = gradient;
        ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2);
        ctx.fill();

        circle.x += circle.dx;
        circle.y += circle.dy;

        if (circle.x + circle.r > width || circle.x - circle.r < 0) circle.dx *= -1;
        if (circle.y + circle.r > height || circle.y - circle.r < 0) circle.dy *= -1;
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn("fixed top-0 left-0 -z-10 w-full h-full", className)}
    />
  );
}
