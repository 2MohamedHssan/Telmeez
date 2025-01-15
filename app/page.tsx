"use client";
import Discount from "./Components/Discount";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Popular_topics from "./Components/Popular_topics";
import ProducetSection from "./Components/ProducetSection";
import Team from "./Components/Team";

export default function Home() {

  return (
    <div>
      <Hero />
      <Header />
      <Discount />
      <ProducetSection />
      <Popular_topics />
      <Team />
    </div>
  );
}
