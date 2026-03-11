import React from "react";
import Hero from "../components/hero";
import Collections from "../components/Collections";
import Roadmap from "../components/Roadmap";
import Marque from "../components/Marque";
import Team from "../components/Team";
import Footer from "../components/ui/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Collections />
      <Roadmap />
      <Marque />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
