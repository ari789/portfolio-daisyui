import Link from "next/link";
import React, { useContext } from "react";
import { BsGithub } from "react-icons/bs/index";
import { BiLinkExternal } from "react-icons/bi/index";
import Image from "next/image";
import FadeIn from "react-fade-in";
import { InfoContext } from "../../pages/_app";


export const Projects = () => {
  const info = useContext(InfoContext);
  return (
    <>
      <section className="bg-base-200">
        <FadeIn>
          <div className=" pb-14 flex  items-center flex-col pt-5 border-b border-base-300 ">
            <h2 className="sm:text-3xl text-2xl font-bold pb-7">Projects</h2>
            <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14 sm:px-2 md:px-2 px-2 ">
              {info.projects.map((project, index) => (
                <div
                  className="card w-full md:w-80  shadow-2xl image-full shadow-primary"
                  key={index}
                >
                  <figure className="relative">
                    <Image
                      quality={100}
                      layout="fill"
                      src={project.image}
                      alt="Project Tile"
                      className="blur-sm"
                      priority
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title mx-auto font-bold">
                      {project.title}
                    </h2>
                    <p className="font-semibold ">{project.description}</p>
                    <div className="card-actions justify-center">
                      <Link href={project.preview} aria-label="Visit project demo">
                        <a className="btn btn-ghost" target="_blank">
                          <BiLinkExternal className="w-7 h-7 " />
                        </a>
                      </Link>
                      <Link href={project.github} aria-label="Visit Github page">
                        <a className="btn btn-ghost" target="_blank">
                          <BsGithub className="w-7 h-7 " />
                        </a>
                      </Link>
                      {/* <a href="#my_modal_8" className="btn">Open Modal</a> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>
      <div id="Skills"></div>
    </>
  );
};
