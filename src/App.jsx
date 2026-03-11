import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import Home from "./pages/Home";
import Loader from "./components/ui/Loader";
import Header from "./components/ui/Header";

const App = () => {
  const wrapper = useRef()
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      autoRaf: true,
    });
  });
  return (
    <main className="relative">
      <Loader />
      <Header />
      <Home />
    </main>
  );
};

export default App;
