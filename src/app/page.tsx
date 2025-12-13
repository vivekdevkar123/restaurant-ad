import React from "react";
import Hero from "@/components/Home/Hero";
import Features from "@/components/Home/Features";
import Cook from "@/components/Home/Cook";
import Gallery from "@/components/Home/Gallery";
import Newsletter from "@/components/Home/Newsletter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Sopu's Cloud Kitchen | Authentic Biryani Online",
  description: "Welcome to Sopu's Cloud Kitchen! Order authentic handcrafted biryani online. Experience traditional slow-cooked biryani with aromatic spices and premium ingredients. Available on Zomato & Swiggy.",
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
