"use client";
import Discount from "./Components/Discount";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Popular_topics from "./Components/Popular_topics";
import ProducetSection from "./Components/ProducetSection";
import Team from "./Components/Team";
import Cookies from "./Components/Cookies";

export default function Home() {

  return (
    <div>
      <Hero />
      <Header />
      <Discount />
      <Cookies />
      <ProducetSection />
      <Popular_topics />
      <Team />
      <Footer />
    </div>
  );
}
