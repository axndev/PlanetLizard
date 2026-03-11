import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";

const Roadmap = () => {
  gsap.registerPlugin(ScrollTrigger);

  const roadmap = [
    {
      title: "Launching our NFT collection",
      para1:
        "we believe in the power of play and imagination, and we're committed to helping you unlock your inner child.",
      para2:
        "Introducing the first wave of lizards, available for collection. Gather feedback and ideas from our community and colleagues. Engage with our audience and build a strong foundation of collectors.",
      img: "./images/roadmap-1.png",
    },
    {
      title: "Get the insights we need to grow",
      para1:
        "After publishing our first wave of unique characters, our goal is to get feedback from collectors to develop a second wave that will be based on real requirements and user requests.",
      para2:
        "Owners of the first wave of lizards will receive an additional bonus when buying NFT from the second wave.",
      img: "./images/roadmap-2.png",
    },
    {
      title: "Part of money ‘ll go to charity",
      para1:
        "we strive to change the world and make it a little better. Do good and collect art at the same time! With every NFT purchase, part of your money goes to charity funds that help protect some of our planet's most beloved species.",
      para2:
        "Finally, you can feel great about collecting art knowing that you're helping make a difference.",
      img: "./images/roadmap-3.png",
    },
    {
      title: "3d collection, motion, merch",
      para1:
        "After the second wave of our new collection, we planning to create something new and outstanding: 3d, animation and visualization, our own clothing brand.",
      para2:
        "we also would be happy to Collaborate with artists and creators to bring new unique and exciting content to the collection. Be happy! Be lizard! peace!",
      img: "./images/roadmap-4.png",
    },
  ];
  useGSAP(() => {
    gsap.to(".txtCircle", {
      rotate: -90,
      ease: "none",
      scrollTrigger: {
        trigger: "#roadmap",
        scrub: 1,
        start: "0% 30%",
        end: "29% top",
      },
    });
    let steps = gsap.utils.toArray(".roadmapCard");
    steps.forEach((step) => {
      gsap.from(step.querySelector("img"), {
        opacity: 0,
        y: 100,
        ease: "elastic.out(1,0.3)",
        duration: 1,
        scrollTrigger: {
          trigger: step,
          start: "top 20%",
          end: "80% 20%",
          scrub: 1,
        },
      });
    });
  });

  useEffect(() => {
    const wheelHandler = (e) => {
      let yValue = Math.floor(e.deltaY);
      let rightCards = document.querySelectorAll(".roadMapRight");
      let leftCards = document.querySelectorAll(".roadMapLeft");

      rightCards.forEach((card) => {
        card.classList.remove("rotateRight", "rotateLeft");
        void card.offsetWidth;
        card.classList.add(yValue > 0 ? "rotateRight" : "rotateLeft");
      });

      leftCards.forEach((card) => {
        card.classList.remove("rotateRight", "rotateLeft");
        void card.offsetWidth;
        card.classList.add(yValue < 0 ? "rotateRight" : "rotateLeft");
      });
    };
    document.addEventListener("wheel", wheelHandler);
    return () => {
      document.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  return (
    <div className="lg:pt-35 pt-15" id="roadmap">
      <div className="lg:text-8xl text-4xl text-center relative">
        <h2 className="max-w-300 m-auto">
          Here’s our content roadmap for 2023
        </h2>
        <div className="absolute txtCircle bg-(--dark) gap-16 -top-[1px] left-1/2 right-1/2 -translate-x-1/2 flex flex-col justify-start items-center border border-[#49494999] rounded-full lg:w-80 lg:h-80 w-40 h-40 overflow-hidden ">
          <h2 className="lg:min-w-300">Here’s our content roadmap for 2023</h2>
          <img
            src="./images/Arrow2.svg"
            alt=""
            className="max-w-15 rotate-90"
          />
        </div>
      </div>
      <div className="max-w-273 m-auto lg:mt-50 mt-10 gap-25 flex flex-col px-10">
        {roadmap.map((step, key) => (
          <div
            key={key}
            id={`step${key + 1}`}
            className={`p-10 gap-5 border border-[#494949]  rounded-3xl grid lg:grid-cols-2 roadmapCard ${key % 2 == 0 ? "roadMapRight" : "roadMapLeft"}`}
          >
            <div className="flex flex-col justify-between items-start lg:gap-20 gap-10">
              <span className="px-4 py-2 rounded-lg bg-red-600">
                Step {key + 1}
              </span>
              <div className="space-y-4">
                <h3 className="lg:text-[58px] text-5xl leading-13 lg:leading-15 mb-7">{step.title}</h3>
                <p>{step.para1}</p>
                <p>{step.para2}</p>
              </div>
            </div>
            <div className="bg-[#FFF9C5] overflow-hidden rounded-3xl flex items-end pt-10 flex items-end justify-center">
              <img src={step.img} className="md:max-w-130 max-w-60" alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
