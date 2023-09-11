"use client";
import { useEffect } from "react";

interface OverlayProps {
  children: React.ReactNode;
  className?: string;
}

const Overlay = ({ children, className }: OverlayProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      className={
        `absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-neutral-900/70` +
        ` ${className}`
      }
    >
      {children}
    </div>
  );
};

export default Overlay;
