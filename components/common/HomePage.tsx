import Link from "next/link";
import React, { useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs/index";
import FadeIn from "react-fade-in";
import { useContext } from "react";
import { InfoContext } from "../../pages/_app";

export const HomePage = () => {
  const info = useContext(InfoContext);
  return (
    <div
      className="hero bg-base-200 sm:pt-20 pt-5 border-b border-base-300"
      id="About"
    >
      <div className="hero-content text-center ">
        <div className="max-w-4xl ">
          <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold pb-7 estils sm:border-r-4 border-r border-base-300 ">
            {" "}
            Hi, my name is {info.name}.
          </h1>
          <FadeIn>
            <h1 className="sm:text-3xl text-2xl font-bold ">
              {info.title}
            </h1>

            <div className="max-w-md mx-auto">
              <p className="py-6 w-auto ">
                {info.bio}
              </p>
            </div>

            <div className="flex justify-center gap-2" id="Education">
              <Link href={info.githubLink}>
                <a className="btn btn-ghost" target="_blank">
                  <BsGithub className="w-7 h-7 " />
                </a>
              </Link>
              <Link href={info.linkedinLink}>
                <a className="btn btn-ghost" target="_blank">
                  <BsLinkedin className="w-7 h-7" />
                </a>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};
