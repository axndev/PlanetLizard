import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect } from "react";

const Marque = () => {
  const images = [
    "./images/head-1.png",
    "./images/head-2.png",
    "./images/head-3.png",
    "./images/head-4.png",
    "./images/head-5.png",
    "./images/head-6.png",
    "./images/head-7.png",
    "./images/head-8.png",
  ];

  useEffect(() => {
    let animation;
    const wheelHandler = (e) => {
      if (e.deltaY > 0) {
        animation = gsap.to(".imagesMarque", {
          x: "-100%",
          repeat: -1,
          duration: 10,
          ease: "none",
        });
      } else {
        animation = gsap.to(".imagesMarque", {
          x: "10px",
          duration: 10,
          ease: "none",
        });
      }
    };
    
    window.addEventListener("wheel", wheelHandler);
  });

  return (
    <div
      className="marqueWrapper imagesWrapper relative py-3 group rounded-full bg-[#0D31EB] text-white my-20 mx-5 flex"
    >
      <div className="imagesMarque flex gap-5 items-center z-1">
        {images.map((img, key) => (
          <div key={key} className="flex gap-5 items-center">
            <img src={img} alt="" className="max-w-14 group-hover:scale-90 " />
            <span className="text-nowrap font-[ragern] text-3xl -mb-2">
              Mint Now
            </span>
          </div>
        ))}
      </div>
      <div aria-hidden className="imagesMarque flex gap-5 items-center z-1">
        {images.map((img, key) => (
          <div key={key} className="flex gap-5 items-center">
            <img src={img} alt="" className="max-w-14 group-hover:scale-90 " />
            <span className="text-nowrap font-[ragern] text-3xl -mb-2">
              Mint Now
            </span>
          </div>
        ))}
      </div>

      <div className="absolute bg-[#eb0dd5] w-full h-full top-full group-hover:top-0 imagesWrapperOverlay rounded-full"></div>
    </div>
  );
};

export default Marque;
