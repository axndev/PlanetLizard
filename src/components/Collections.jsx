import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

const Collections = () => {
  const trImages = [
    "./images/tr-1.png",
    "./images/tr-2.png",
    "./images/tr-3.png",
    "./images/tr-4.png",
    "./images/tr-5.png",
    "./images/tr-6.png",
    "./images/tr-7.png",
    "./images/tr-8.png",
    "./images/tr-9.png",
  ];
  const brImages = [
    "./images/br-1.png",
    "./images/br-2.png",
    "./images/br-3.png",
    "./images/br-4.png",
    "./images/br-5.png",
    "./images/br-6.png",
    "./images/br-7.png",
    "./images/br-8.png",
    "./images/br-9.png",
  ];

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to(".topImage", {
      top: -100,
      duration: 10,
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "300% bottom",
        scrub: 1,
      },
    });
    gsap.to(".bottomImage", {
      top: 160,
      duration: 10,
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "300% bottom",
        scrub: 1,
      },
    });

    gsap.from(".marque-img", {
      opacity: 0,
      y: 50,
      ease: "elastic.out(1,0.3)",
      duration: 10,
      stagger: {
        amount: 5,
        from: "start",
      },
      scrollTrigger: {
        trigger: ".marqueWrapper",
        start: "top 80%",
        end: "100% 20%",
        scrub: 1,
      },
    });
    gsap.from(".right-marque-img", {
      opacity: 0,
      y: 50,
      ease: "elastic.out(1,0.3)",
      duration: 10,
      stagger: {
        amount: 5,
        from: "start",
      },
      scrollTrigger: {
        trigger: ".rightMarque",
        start: "top 80%",
        end: "100% 20%",
        scrub: 1,
      },
    });
  });

  return (
    <div id="collections">
      <div className="max-w-300 m-auto flex lg:flex-row flex-col items-center md:py-38 py-20 gap-15 text-center lg:text-left lg:px-0  px-20">
        <div className="md:w-[55%] relative">
          <h2 className="text-7xl">Discover our nft collection</h2>
          <img
            src="./images/collection-head-1.png"
            alt=""
            className="topImage absolute max-w-15 top-10 left-2/3"
          />
          <img
            src="./images/collection-head-2.png"
            alt=""
            className="bottomImage absolute max-w-15 top-20 right-2/3"
          />
        </div>
        <div className="md:w-[45%] gap-6 md:items-start flex flex-col items-center">
          <p>
            Enter the fascinating world of the Planet Lizard, where 1111 unique
            digital characters await your collection. From rare and exotic
            species to common and colorful critters, the Planet Lizard NFT
            collection offers a diverse and dynamic ecosystem of lizards.
          </p>
          <p>
            Whether you're a seasoned collector or new to the world of nfts, the
            Planet Lizard nft collection is sure to capture your imagination and
            spark your curiosity. Start building your own digital reptilian
            paradise today and discover the magic of the Planet Lizard!
          </p>
          <a
            href=""
            className="bg-[#0D31EB] px-13 py-3 flex  text-[14px] outline-4 outline-(--dark) rounded-md nav-btn group"
          >
            <div className="btn-text ">View on opensia</div>
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="marqueWrapper flex">
          <div className="flex gap-5 marqueSlider">
            {trImages.map((item, key) => (
              <div
                key={key}
                className="bg-blue-100 marqueItem md:min-w-65 min-w-40 rounded"
              >
                <img src={item} alt="" className="marque-img" />
              </div>
            ))}
          </div>
          <div aria-hidden className="flex gap-5 marqueSlider">
            {trImages.map((item, key) => (
              <div
                key={key}
                className="bg-blue-100 marqueItem md:min-w-65  min-w-40 rounded"
              >
                <img src={item} alt="" className="marque-img" />
              </div>
            ))}
          </div>
        </div>
        <div className="marqueWrapper flex rightMarque">
          <div className="flex gap-5 marqueSlider right">
            {brImages.map((item, key) => (
              <div
                key={key}
                className="bg-blue-100 marqueItem  md:min-w-65 min-w-40rounded"
              >
                <img src={item} alt="" className="right-marque-img" />
              </div>
            ))}
          </div>
          <div aria-hidden className="flex gap-5 marqueSlider right">
            {brImages.map((item, key) => (
              <div
                key={key}
                className="bg-blue-100 marqueItem  md:min-w-65 min-w-40 rounded"
              >
                <img src={item} alt="" className="right-marque-img" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
