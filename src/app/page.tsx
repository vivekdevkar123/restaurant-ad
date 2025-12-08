import React from "react";
import Hero from "@/components/Home/Hero";
import Features from "@/components/Home/Features";
import Cook from "@/components/Home/Cook";
// Expert section removed
import Gallery from "@/components/Home/Gallery";
import Newsletter from "@/components/Home/Newsletter";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Kitchen",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Cook />
      <Gallery />
      <Newsletter />
    </main>
  );
}
