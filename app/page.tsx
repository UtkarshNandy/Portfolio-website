"use client"; // Only needed in App Router for client components

import dynamic from "next/dynamic";
import Intro from "@/components/Intro";
import Aboutme from "@/components/Aboutme";

// Dynamically import the Vanta background component
const VantaGlobe = dynamic(() => import("@/components/Background"), {
  ssr: false,
});

export default function Home() {
  return (
    <main style={{ position: "relative" }}>
      {/* The Vanta background is positioned absolutely */}
      <VantaGlobe />

      {/* Stack your content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Landing Section */}
        <section
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Intro />
        </section>

        {/* About Me Section */}
        <section
          style={{
            minHeight: "100vh",
            padding: "2rem", // Optional padding for Aboutme content
          }}
        >
          <Aboutme />
        </section>
      </div>
    </main>
  );
}
