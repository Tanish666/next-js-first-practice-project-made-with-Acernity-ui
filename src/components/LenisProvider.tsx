// components/LenisProvider.tsx
"use client"; // Required for client-side rendering in Next.js 13+

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const LenisProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Customize settings
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
       smoothWheel:true
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Clean up on unmount
    };
  }, []);

  return <>{children}</>;
};

export default LenisProvider;
