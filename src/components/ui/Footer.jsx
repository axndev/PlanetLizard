import React from "react";

const Footer = () => {
  const socials = [
    {
      url: "#",
      icon: "./images/x.svg",
    },
    {
      url: "#",
      icon: "./images/discord.svg",
    },
    {
      url: "#",
      icon: "./images/tiktok.svg",
    },
    {
      url: "#",
      icon: "./images/opensea.svg",
    },
  ];
  return (
    <div className="mt-30 md:h-[95vh] bg-[#EB0D18] mx-4 my-4 rounded-2xl flex items-center justify-end py-7 flex-col gap-10">
      <span>Planet Lizard</span>
      <h2 className="text-[7.5vw] leading-[7.7vw] text-center">
        follow us <br /> on social media
      </h2>
      <div className="flex gap-7 items-center">
        {socials.map((social, key) => {
          return (
            <a
              key={key}
              href={social.url}
              className="bg-[#0D31EB] md:w-17 md:h-17 h-8 w-8 flex items-center justify-center outline-5 outline-(--dark) rounded nav-btn group"
            >
              <img
                src={social.icon}
                alt=""
                className={`md:w-8 w-5 group-hover:scale-90 ${key == 2 ? '!w-4':''}`}
              />
            </a>
          );
        })}
      </div>
      <div className="flex justify-between md:flex-row flex-col items-center gap-3 w-full max-w-6xl mt-7">
        <span>All rights reserved</span>
        <span>© 2026</span>
        <a href="#" className="hover:opacity-80 transition-all duration-400">Terms & privacy policy</a>
      </div>
    </div>
  );
};

export default Footer;
