"use client"; // Only needed in App Router for client components

import dynamic from "next/dynamic";
import Intro from "@/components/Intro";

// Dynamically import the Vanta background component
const VantaGlobe = dynamic(() => import("@/components/Background"), {
  ssr: false,
});

export default function Home() {
  return (
    <main style={{ position: "relative", minHeight: "100vh" }}>
      {/* The Vanta background is positioned absolutely */}
      <VantaGlobe />

      {/* Your foreground content (Intro) is stacked on top */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Intro />
      </div>
    </main>
  );
}
