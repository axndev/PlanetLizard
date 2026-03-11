import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Header = () => {
  const menu = [
    {
      title: "About us  ",
      link: "#",
    },
    {
      title: "Collection",
      link: "#",
    },
    {
      title: "Roadmap",
      link: "#",
    },
    {
      title: "team",
      link: "#",
    },
    {
      title: "faq",
      link: "#",
    },
  ];
  useGSAP(()=>{
    gsap.from('header',{
      top:'130px',
      opacity:0,
      delay:.7,
      duration:.8,
    ease: "power1.in",
    })
  })
  return (
    <header className="absolute z-1 top-7 left-12 right-12 flex ms:justify-between justify-center items-center text-[15px]">
      <div className="bg-[#1F2024] rounded flex items-center justify-between">
        <img src="./images/logo.svg" alt="" className="p-3 px-4" />
        <ul className="lg:flex gap-5 border-l border-[#494949] p-3 px-4 hidden">
          {menu.map((item, key) => (
            <li key={key} className="hover:text-[#eb0dd5] -mb-1">
              <a href={item.link}> {item.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:flex items-center h-full gap-3 hidden">
        <a
          href=""
          className="bg-[#0D31EB] w-9 h-9 flex items-center justify-center outline-4 outline-(--dark) rounded nav-btn group"
        >
          <img
            src="./images/x.svg"
            alt=""
            className="w-5 group-hover:scale-90"
          />
        </a>
        <a
          href=""
          className="bg-[#0D31EB] w-9 h-9 flex items-center justify-center outline-4 outline-(--dark) rounded nav-btn group"
        >
          <img
            src="./images/discord.svg"
            alt=""
            className="w-5 group-hover:scale-90"
          />
        </a>
        <a
          href=""
          className="bg-[#0D31EB] px-6 h-9 flex text-[14px] ml-5 items-center justify-center outline-4 outline-(--dark) rounded nav-btn group"
        >
          <div className="btn-text ">View on opensia</div>
        </a>
      </div>
    </header>
  );
};

export default Header;
