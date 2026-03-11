import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import React from "react";

const Hero = () => {
  gsap.registerPlugin({ SplitText, ScrollTrigger });
  useGSAP(() => {
    let splite = SplitText.create(".hero-title", { type: "chars" });
    gsap.from(splite.chars, {
      delay: 1.2,
      duration: 1,
      y: 100,
      autoAlpha: 0,
      stagger: 0.05,
    });
    gsap.from(".hero-text", {
      y: 100,
      opacity: 0,
      duration: 1.9,
      delay: 1.5,
    });
    gsap.from(".heroImg", {
      delay: 1.5,
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: {
        from: "center",
        amount: 0.5,
      },
    });
    gsap.to(".heroImages", {
      y: 30,
      duration:10,
      scrollTrigger: {
        trigger: "#hero",
        start: "55% 50%",
        end: "150% bottom",
        scrub: 1,
      },
    });
  });
  return (
    <div
      className="h-[95vh] bg-[#EB0D18] mx-4 my-4 rounded-2xl  overflow-hidden relative"
      id="hero"
    >
      <div className="flex  flex-col md:justify-center justify-start gap-0 h-screen max-w-350 m-auto">
        <h2 className="hero-title md:text-[6.5em] md:leading-23 text-5xl text-center  md:max-w-230 max-w-100 mx-auto overflow-hidden h-50">
          Planet lizard is waiting for you
        </h2>
        <div className="flex justify-center md:justify-between items-center py-10 -mt-10 px-15 hero-text">
          <p className="max-w-45 text-center hidden md:block">
            A NEW WAVE OF COLLECTIBLES IS ABOUT TO HIT THE BLOCKCHAIN.
          </p>
          <p className="max-w-40 text-center">
            is an NFT collection of 1111 unique lizard characters.
          </p>
        </div>
        <div className="heroImages px-10 flex gap-4 w-full  items-end justify-center absolute bottom-0 left-1/2 right-1/2">
          <img src="./images/hero-1.png" alt="" className="heroImg" />
          <img src="./images/hero-2.png" alt="" className="heroImg" />
          <img src="./images/hero-3.png" className="!max-w-75 heroImg" alt="" />
          <img src="./images/hero-4.png" alt="" className="heroImg" />
          <img src="./images/hero-5.png" alt="" className="heroImg" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
