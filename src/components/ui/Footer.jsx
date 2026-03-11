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
    <div className="mt-30 h-[95vh] bg-[#EB0D18] mx-4 my-4 rounded-2xl flex items-center justify-end pb-7 flex-col gap-10">
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
              className="bg-[#0D31EB] w-17 h-17 flex items-center justify-center outline-5 outline-(--dark) rounded nav-btn group"
            >
              <img
                src={social.icon}
                alt=""
                className={`w-8 group-hover:scale-90 ${key == 2 ? '!w-6':''}`}
              />
            </a>
          );
        })}
      </div>
      <div className="flex justify-between w-full max-w-6xl mt-7">
        <span>All rights reserved</span>
        <span>© 2026</span>
        <a href="#" className="hover:opacity-80 transition-all duration-400">Terms & privacy policy</a>
      </div>
    </div>
  );
};

export default Footer;
