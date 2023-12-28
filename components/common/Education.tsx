import React, { useContext } from 'react';
import FadeIn from 'react-fade-in';
import { InfoContext } from "../../pages/_app";


export const Education = () => {
   const info = useContext(InfoContext);
   return (
      <>
         <div className="bg-base-200">
            <FadeIn>
               <div className=" pb-14 flex  items-center flex-col pt-5 border-b border-base-300" id="Education">
                  <h2 className="sm:text-3xl text-2xl font-bold pb-7">Education</h2>
                  <div className="flex flex-row max-w-lg text-center">
                     <ul>
                        <li className="pb-6 border-b border-base-300">
                           <h3 className="text-base font-bold">{info.education[0].degree} - {info.education[0].university}</h3>
                           <p className="text-base font-medium">{info.education[0].yearStart} - {info.education[0].yearEnd}</p>
                        </li>
                        <li className="pt-6">
                           <h3 className="text-base font-bold">{info.education[1].degree} - {info.education[1].university}</h3>
                           <p className="text-base font-medium">{info.education[1].yearStart} - {info.education[1].yearEnd}</p>
                        </li>
                     </ul>
                  </div>                  
               </div>
            </FadeIn>
         </div>
      </>
   );
};
