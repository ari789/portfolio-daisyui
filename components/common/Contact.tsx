import React, { useContext } from 'react';
import { BsGithub, BsLinkedin, BsEnvelope } from "react-icons/bs/index";
import Link from "next/link";
import FadeIn from 'react-fade-in';
import { InfoContext } from "../../pages/_app";

export const Contact = () => {
   const info = useContext(InfoContext);
   return (
      <section className="bg-base-200 ">
         <FadeIn>
            <div className="pb-14 flex  items-center flex-col pt-5 border-b border-base-300" id="Contact">
               <h2 className="sm:text-3xl text-2xl font-bold pb-7 ">Contact</h2>
                <div className="mt-5 space-x-1">
                  <Link href={info.linkedinLink}>
                    <a className="btn btn-ghost" target="_blank">
                      <BsLinkedin className="w-7 h-7" />
                    </a>
                  </Link>
                  <Link href={info.githubLink}>
                    <a className="btn btn-ghost" target="_blank">
                      <BsGithub className="w-7 h-7 " />
                    </a>
                  </Link>
                  <Link href={"mailto:" + info.email}>
                    <a className="btn btn-ghost" target="_blank">
                      <BsEnvelope className="w-7 h-7 " />
                    </a>
                  </Link>
                </div>               
            </div>
         </FadeIn>
      </section>
   );
};
