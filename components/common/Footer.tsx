import Link from 'next/link';
import React, {useCallback} from 'react';
import { useContext } from "react";
import { InfoContext } from "../../pages/_app";


export const Footer = () => {
   const info = useContext(InfoContext);
   const handleClick = useCallback((e) => {
      e.preventDefault();
      const pathSplit = e.target.href.split('#');
      const destination = document.querySelector('#' + pathSplit[1]);
      if (destination) {
         destination.scrollIntoView({
            behavior: 'smooth',
         });
      }
   }, []);
   return (
      <footer className="footer footer-center p-10 bg-base-100 text-base-content rounded ">
         <div className="grid grid-flow-col gap-4">
            <Link href="/#About">
               <a className="link link-hover" onClick={handleClick}>
                  Home
               </a>
            </Link>
            <Link href="/#Education">
               <a className="link link-hover" onClick={handleClick}>
                  Education
               </a>
            </Link>
            <Link href="/#Projects">
               <a className="link link-hover" onClick={handleClick}>
                  Projects
               </a>
            </Link>
            <Link href="/#Skills">
               <a className="link link-hover" onClick={handleClick}>
                  Skills
               </a>
            </Link>
            <Link href="/#Contact">
               <a className="link link-hover" onClick={handleClick}>
                  Contact
               </a>
            </Link>
            <Link href={info.resume}>
               <a className="link link-hover" target="_blank">
                  Resume 
               </a>
            </Link>
         </div>
      </footer>
   );
};
