import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

const Team = () => {
  const team = [
    {
      profile: "./images/team-cd.png",
      name: "Benjamin Adams",
      work: "Creative Director",
      about:
        "Our resident innovator who always has his head in the clouds and his heart in the creativity.",
    },
    {
      profile: "./images/team-dev.png",
      name: "Mick Davis",
      work: "web developer",
      about:
        "With a passion for all coding things, can write code in sleep and is always up-to-date with the latest trends.",
    },
    {
      profile: "./images/team-illustrator.png",
      name: "Ellie Scott",
      work: "illustrator",
      about:
        "Mastermind who can bring any idea to life and turn even the most mundane concept into a work of art.",
    },
  ];
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".member-pfp", {
      y: 50,
      opacity: 0,
      stagger:1,
      ease: "elastic.out(1,0.3)",
      duration:15,
      scrollTrigger:{
        trigger:'#team',
        start:'60% bottom',
        end:'150% bottom',
        // markers:true,
        scrub:1
      }
    });
  });
  return (
    <div className="max-w-320 m-auto px-10">
      <h2 className="text-7xl">Meet the team</h2>
      <div className="grid lg:grid-cols-3 gap-5 mt-10" id="team">
        {team.map((member, key) => {
          return (
            <div
              key={key}
              className="p-5 border border-[#494949] rounded-md space-y-4 "
            >
              <div className="bg-[#FFF9C5] rounded-md flex item-end justify-center overflow-hidden">
                <img
                  src={member.profile}
                  className="max-w-77 member-pfp"
                  alt=""
                />
              </div>
              <h3 className="text-3xl">{member.name}</h3>
              <span className="px-5 py-3 rounded-md bg-red-600 font-[ragern]">
                {member.work}
              </span>
              <p className="mt-7 max-w-[93%]">{member.about}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
