import React, { useContext } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs/index";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "react-fade-in";
import { InfoContext } from "../../pages/_app";

export const About = () => {
  const info = useContext(InfoContext);
  return (
    <section className="bg-base-200">
      <FadeIn>
      <div className=" pb-14 flex  items-center flex-col pt-5 border-b border-base-300 ">
          <div className="hero-content flex-col lg:flex-row max-w-screen-lg mx-auto mt-20 lg:mt-0">
            <Image
              src="/.png"
              className="max-w-sm rounded-lg shadow-2xl"
              alt=""
              width="500"
              height="500"
            />
            <div className="p-1 lg:ml-6">
              <h1 className="text-5xl font-bold">About Me</h1>
              <p className="py-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
                aspernatur! Aliquam veniam velit hic perferendis deserunt
                ducimus esse soluta consequuntur.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};
