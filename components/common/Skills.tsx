import React, { useContext } from 'react';
import {AiFillHtml5} from 'react-icons/ai/index';
import {DiCss3} from 'react-icons/di/index';
import {SiDotnet, SiJavascript, SiPostgresql, SiTailwindcss, SiVuedotjs} from 'react-icons/si/index';
import {FaReact} from 'react-icons/fa/index';
import {BsGithub} from 'react-icons/bs';
import FadeIn from 'react-fade-in';
import { InfoContext } from "../../pages/_app";

export const Skills = () => {
   const info = useContext(InfoContext);
   return (
      <section className="bg-base-200">
         <FadeIn>
            <div className="pb-14 flex  items-center flex-col pt-5 border-b border-base-300">
               <h2 className="sm:text-3xl text-2xl font-bold pb-7 ">Skills</h2>
               <div className="flex max-w-2xl bg-base-300  rounded-2xl shadow-lg">
                  {/* <div className="w-[4324px] bg-error">  <DiCss3 className="w-12 h-12 "color="699bf7" />
                        <span className="self-center">CSS</span></div> */}
                  <div className="grid sm:grid-cols-2 grid-cols-1 w-full sm:gap-20  self-center px-20 py-10">
                     <div className="flex  flex-col w-full">
                        <div className="flex flex-col  items-start ">
                           <div className="py-2 flex">
                              <AiFillHtml5 className="w-10 h-10 " color="f24e1e" />
                              <span className="self-center font-medium ml-1">HTML</span>
                           </div>
                           {/* <h1 className="pb-3 "> */}
                           {/* </h1> */}
                           <div className="py-2 flex">
                              <DiCss3 className="w-10 h-10 " color="699bf7" />
                              <span className="self-center  font-medium ml-1">CSS</span>
                           </div>

                           <div className="py-2 flex">
                              <SiTailwindcss className="w-10 h-10 " color="38bdf8" />
                              <span className="self-center  font-medium ml-1">TailwindCSS</span>
                           </div>

                           <div className="py-2 flex">
                              <FaReact className="w-10 h-10 " color="699bf7" />
                              <span className="self-center font-medium ml-1">React</span>
                           </div>

                           <div className="py-2 flex">
                              <svg xmlns="http://www.w3.org/2000/svg" version="1.0" className="w-9 h-9" viewBox="0 0 1024.000000 1024.000000" preserveAspectRatio="xMidYMid meet">
                                 <metadata></metadata>
                                 <g transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                    <path d="M4785 10234 c-22 -2 -92 -9 -155 -14 -1453 -131 -2814 -915 -3676 -2120 -480 -670 -787 -1430 -903 -2235 -41 -281 -46 -364 -46 -745 0 -381 5 -464 46 -745 278 -1921 1645 -3535 3499 -4133 332 -107 682 -180 1080 -224 155 -17 825 -17 980 0 687 76 1269 246 1843 539 88 45 105 57 93 67 -8 6 -383 509 -833 1117 l-818 1105 -1025 1517 c-564 834 -1028 1516 -1032 1516 -4 1 -8 -673 -10 -1496 -3 -1441 -4 -1499 -22 -1533 -26 -49 -46 -69 -88 -91 -32 -16 -60 -19 -211 -19 l-173 0 -46 29 c-30 19 -52 44 -67 73 l-21 45 2 2005 3 2006 31 39 c16 21 50 48 74 61 41 20 57 22 230 22 204 0 238 -8 291 -66 15 -16 570 -852 1234 -1859 664 -1007 1572 -2382 2018 -3057 l810 -1227 41 27 c363 236 747 572 1051 922 647 743 1064 1649 1204 2615 41 281 46 364 46 745 0 381 -5 464 -46 745 -278 1921 -1645 3535 -3499 4133 -327 106 -675 179 -1065 223 -96 10 -757 21 -840 13z m2094 -3094 c48 -24 87 -70 101 -118 8 -26 10 -582 8 -1835 l-3 -1798 -317 486 -318 486 0 1307 c0 845 4 1320 10 1343 16 56 51 100 99 126 41 21 56 23 213 23 148 0 174 -2 207 -20z" />
                                    <path d="M7843 789 c-35 -22 -46 -37 -15 -20 22 13 58 40 52 41 -3 0 -20 -10 -37 -21z" />
                                    <path d="M7774 744 c-18 -14 -18 -15 4 -4 12 6 22 13 22 15 0 8 -5 6 -26 -11z" />
                                    <path d="M7724 714 c-18 -14 -18 -15 4 -4 12 6 22 13 22 15 0 8 -5 6 -26 -11z" />
                                    <path d="M7674 684 c-18 -14 -18 -15 4 -4 12 6 22 13 22 15 0 8 -5 6 -26 -11z" />
                                    <path d="M7598 644 c-38 -20 -36 -28 2 -9 17 9 30 18 30 20 0 7 -1 6 -32 -11z" />
                                 </g>
                              </svg>
                              {/* <DiCss3 className="w-10 h-10 "color="699bf7" /> */}
                              <span className="self-center font-medium ml-1">Nextjs</span>
                           </div>
                           <div className="py-2 flex">
                              <SiVuedotjs className="w-10 h-10 " color="41b883" />
                              <span className="self-center font-medium ml-1">Vue JS</span>
                           </div>
                        </div>
                        {/* <div className="flex justify-start pl-20 pt-5">as</div> */}
                     </div>
                     <div className="flex flex-col  ">
                        <div className="py-2 flex">
                           <SiDotnet className="w-10 h-10 " color="699bf7" />
                           <span className="self-center font-medium ml-1">C#</span>
                        </div>
                        <div className="py-2 flex">
                           <SiJavascript className="w-9 h-9 " color="efd81d" />
                           <span className="self-center font-medium ml-1">JavaScript</span>
                        </div>
                        <div className="py-2 flex">
                           <SiPostgresql className="w-10 h-10 " color="316192" />
                           <span className="self-center font-medium ml-1">SQL</span>
                        </div>
                        <div className="py-2 flex">
                           <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 306 344.35">
                              <path fill="#00599C" d="M302.107,258.262c2.401-4.159,3.893-8.845,3.893-13.053V99.14c0-4.208-1.49-8.893-3.892-13.052L153,172.175  L302.107,258.262z" />
                              <path
                                 fill="#004482"
                                 d="M166.25,341.193l126.5-73.034c3.644-2.104,6.956-5.737,9.357-9.897L153,172.175L3.893,258.263  c2.401,4.159,5.714,7.793,9.357,9.896l126.5,73.034C147.037,345.401,158.963,345.401,166.25,341.193z"
                              />
                              <path
                                 fill="#659AD2"
                                 d="M302.108,86.087c-2.402-4.16-5.715-7.793-9.358-9.897L166.25,3.156c-7.287-4.208-19.213-4.208-26.5,0  L13.25,76.19C5.962,80.397,0,90.725,0,99.14v146.069c0,4.208,1.491,8.894,3.893,13.053L153,172.175L302.108,86.087z"
                              />
                              <g>
                                 <path
                                    fill="#FFFFFF"
                                    d="M153,274.175c-56.243,0-102-45.757-102-102s45.757-102,102-102c36.292,0,70.139,19.53,88.331,50.968   l-44.143,25.544c-9.105-15.736-26.038-25.512-44.188-25.512c-28.122,0-51,22.878-51,51c0,28.121,22.878,51,51,51   c18.152,0,35.085-9.776,44.191-25.515l44.143,25.543C223.142,254.644,189.294,274.175,153,274.175z"
                                 />
                              </g>
                              <g>
                                 <polygon
                                    fill="#FFFFFF"
                                    points="255,166.508 243.666,166.508 243.666,155.175 232.334,155.175 232.334,166.508 221,166.508    221,177.841 232.334,177.841 232.334,189.175 243.666,189.175 243.666,177.841 255,177.841  "
                                 />
                              </g>
                              <g>
                                 <polygon
                                    fill="#FFFFFF"
                                    points="297.5,166.508 286.166,166.508 286.166,155.175 274.834,155.175 274.834,166.508 263.5,166.508    263.5,177.841 274.834,177.841 274.834,189.175 286.166,189.175 286.166,177.841 297.5,177.841  "
                                 />
                              </g>
                           </svg>
                           <span className="self-center font-medium ml-1">C++</span>
                        </div>
                        <div className="py-2 flex">
                           <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" version="1.2" viewBox="0 0 442.37 270.929">
                              <defs>
                                 <clipPath id="a">
                                    <path d="M239.03 226.605l-42.13 24.317c-1.578.91-2.546 2.59-2.546 4.406v48.668c0 1.817.968 3.496 2.546 4.406l42.133 24.336c1.575.907 3.517.907 5.09 0l42.126-24.336c1.57-.91 2.54-2.59 2.54-4.406v-48.668c0-1.816-.97-3.496-2.55-4.406l-42.12-24.317c-.79-.453-1.67-.68-2.55-.68-.88 0-1.76.227-2.55.68" />
                                 </clipPath>
                                 <linearGradient id="b" x1="-.348" x2="1.251" gradientTransform="rotate(116.114 53.1 202.97) scale(86.48)" gradientUnits="userSpaceOnUse">
                                    <stop offset=".3" stopColor="#3E863D" />
                                    <stop offset=".5" stopColor="#55934F" />
                                    <stop offset=".8" stopColor="#5AAD45" />
                                 </linearGradient>
                                 <clipPath id="c">
                                    <path d="M195.398 307.086c.403.523.907.976 1.5 1.316l36.14 20.875 6.02 3.46c.9.52 1.926.74 2.934.665.336-.027.672-.09 1-.183l44.434-81.36c-.34-.37-.738-.68-1.184-.94l-27.586-15.93-14.582-8.39c-.414-.24-.863-.41-1.32-.53zm0 0" />
                                 </clipPath>
                                 <linearGradient id="d" x1="-.456" x2=".582" gradientTransform="rotate(-36.46 550.846 -214.337) scale(132.798)" gradientUnits="userSpaceOnUse">
                                    <stop offset=".57" stopColor="#3E863D" />
                                    <stop offset=".72" stopColor="#619857" />
                                    <stop offset="1" stopColor="#76AC64" />
                                 </linearGradient>
                                 <clipPath id="e">
                                    <path d="M241.066 225.953c-.707.07-1.398.29-2.035.652l-42.01 24.247 45.3 82.51c.63-.09 1.25-.3 1.81-.624l42.13-24.336c1.3-.754 2.19-2.03 2.46-3.476l-46.18-78.89c-.34-.067-.68-.102-1.03-.102-.14 0-.28.007-.42.02" />
                                 </clipPath>
                                 <linearGradient id="f" x1=".043" x2=".984" gradientTransform="translate(192.862 279.652) scale(97.417)" gradientUnits="userSpaceOnUse">
                                    <stop offset=".16" stopColor="#6BBF47" />
                                    <stop offset=".38" stopColor="#79B461" />
                                    <stop offset=".47" stopColor="#75AC64" />
                                    <stop offset=".7" stopColor="#659E5A" />
                                    <stop offset=".9" stopColor="#3E863D" />
                                 </linearGradient>
                              </defs>
                              <path
                                 fill="#689f63"
                                 d="M218.647 270.93c-1.46 0-2.91-.383-4.19-1.12l-13.337-7.896c-1.992-1.114-1.02-1.508-.363-1.735 2.656-.93 3.195-1.14 6.03-2.75.298-.17.688-.11.993.07l10.246 6.08c.37.2.895.2 1.238 0l39.95-23.06c.37-.21.61-.64.61-1.08v-46.1c0-.46-.24-.87-.618-1.1l-39.934-23.04c-.37-.22-.86-.22-1.23 0l-39.926 23.04c-.387.22-.633.65-.633 1.09v46.1c0 .44.24.86.62 1.07l10.94 6.32c5.94 2.97 9.57-.53 9.57-4.05v-45.5c0-.65.51-1.15 1.16-1.15h5.06c.63 0 1.15.5 1.15 1.15v45.52c0 7.92-4.32 12.47-11.83 12.47-2.31 0-4.13 0-9.21-2.5l-10.48-6.04c-2.59-1.5-4.19-4.3-4.19-7.29v-46.1c0-3 1.6-5.8 4.19-7.28l39.99-23.07c2.53-1.43 5.89-1.43 8.4 0l39.94 23.08c2.58 1.49 4.19 4.28 4.19 7.28v46.1c0 2.99-1.61 5.78-4.19 7.28l-39.94 23.07c-1.28.74-2.73 1.12-4.21 1.12"
                              />
                              <path
                                 fill="#689f63"
                                 d="M230.987 239.164c-17.48 0-21.145-8.024-21.145-14.754 0-.64.516-1.15 1.157-1.15h5.16c.57 0 1.05.415 1.14.978.78 5.258 3.1 7.91 13.67 7.91 8.42 0 12-1.902 12-6.367 0-2.57-1.02-4.48-14.1-5.76-10.94-1.08-17.7-3.49-17.7-12.24 0-8.06 6.8-12.86 18.19-12.86 12.79 0 19.13 4.44 19.93 13.98.03.33-.09.65-.31.89-.22.23-.53.37-.85.37h-5.19c-.54 0-1.01-.38-1.12-.9-1.25-5.53-4.27-7.3-12.48-7.3-9.19 0-10.26 3.2-10.26 5.6 0 2.91 1.26 3.76 13.66 5.4 12.28 1.63 18.11 3.93 18.11 12.56 0 8.7-7.26 13.69-19.92 13.69m48.66-48.89h1.34c1.1 0 1.31-.77 1.31-1.22 0-1.18-.81-1.18-1.26-1.18h-1.38zm-1.63-3.78h2.97c1.02 0 3.02 0 3.02 2.28 0 1.59-1.02 1.92-1.63 2.12 1.19.08 1.27.86 1.43 1.96.08.69.21 1.88.45 2.28h-1.83c-.05-.4-.33-2.6-.33-2.72-.12-.49-.29-.73-.9-.73h-1.51v3.46h-1.67zm-3.57 4.3c0 3.58 2.89 6.48 6.44 6.48 3.58 0 6.47-2.96 6.47-6.48 0-3.59-2.93-6.44-6.48-6.44-3.5 0-6.44 2.81-6.44 6.43m14.16.03c0 4.24-3.47 7.7-7.7 7.7-4.2 0-7.7-3.42-7.7-7.7 0-4.36 3.58-7.7 7.7-7.7 4.15 0 7.69 3.35 7.69 7.7"
                              />
                              <path
                                 fill="#333"
                                 fillRule="evenodd"
                                 d="M94.936 90.55c0-1.84-.97-3.53-2.558-4.445l-42.356-24.37c-.715-.42-1.516-.64-2.328-.67h-.438c-.812.03-1.613.25-2.34.67L2.562 86.105C.984 87.025 0 88.715 0 90.555l.093 65.64c0 .91.47 1.76 1.27 2.21.78.48 1.76.48 2.54 0l25.18-14.42c1.59-.946 2.56-2.618 2.56-4.44V108.88c0-1.83.97-3.52 2.555-4.43l10.72-6.174c.796-.46 1.67-.688 2.56-.688.876 0 1.77.226 2.544.687l10.715 6.172c1.586.91 2.56 2.6 2.56 4.43v30.663c0 1.82.983 3.5 2.565 4.44l25.164 14.41c.79.47 1.773.47 2.56 0 .776-.45 1.268-1.3 1.268-2.21zm199.868 34.176c0 .457-.243.88-.64 1.106l-14.548 8.386c-.395.227-.883.227-1.277 0l-14.55-8.386c-.4-.227-.64-.65-.64-1.106V107.93c0-.458.24-.88.63-1.11l14.54-8.4c.4-.23.89-.23 1.29 0l14.55 8.4c.4.23.64.652.64 1.11zM298.734.324c-.794-.442-1.76-.43-2.544.027-.78.46-1.262 1.3-1.262 2.21v65c0 .64-.34 1.23-.894 1.55-.55.32-1.235.32-1.79 0L281.634 63c-1.58-.914-3.526-.914-5.112 0l-42.37 24.453c-1.583.91-2.56 2.6-2.56 4.42v48.92c0 1.83.977 3.51 2.56 4.43l42.37 24.47c1.582.91 3.53.91 5.117 0l42.37-24.48c1.58-.92 2.56-2.6 2.56-4.43V18.863c0-1.856-1.01-3.563-2.63-4.47zm141.093 107.164c1.574-.914 2.543-2.602 2.543-4.422V91.21c0-1.824-.97-3.507-2.547-4.425l-42.1-24.44c-1.59-.92-3.54-.92-5.13 0l-42.36 24.45c-1.59.92-2.56 2.6-2.56 4.43v48.9c0 1.84.99 3.54 2.58 4.45l42.09 23.99c1.55.89 3.45.9 5.02.03l25.46-14.15c.8-.45 1.31-1.3 1.31-2.22 0-.92-.49-1.78-1.29-2.23l-42.62-24.46c-.8-.45-1.29-1.3-1.29-2.21v-15.34c0-.916.48-1.76 1.28-2.216l13.26-7.65c.79-.46 1.76-.46 2.55 0l13.27 7.65c.79.45 1.28 1.3 1.28 2.21v12.06c0 .91.49 1.76 1.28 2.22.79.45 1.77.45 2.56-.01zm0 0"
                              />
                              <path
                                 fill="#689f63"
                                 fillRule="evenodd"
                                 d="M394.538 105.2c.3-.177.676-.177.98 0l8.13 4.69c.304.176.49.5.49.85v9.39c0 .35-.186.674-.49.85l-8.13 4.69c-.304.177-.68.177-.98 0l-8.125-4.69c-.31-.176-.5-.5-.5-.85v-9.39c0-.35.18-.674.49-.85zm0 0"
                              />
                              <g clipPath="url(#a)" transform="translate(-78.306 -164.016)">
                                 <path fill="url(#b)" d="M331.363 246.793l-118.715-58.19-60.87 124.174L270.49 370.97zm0 0" />
                              </g>
                              <g clipPath="url(#c)" transform="translate(-78.306 -164.016)">
                                 <path fill="url(#d)" d="M144.07 264.004l83.825 113.453 110.86-81.906-83.83-113.45zm0 0" />
                              </g>
                              <g clipPath="url(#e)" transform="translate(-78.306 -164.016)">
                                 <path fill="url(#f)" d="M197.02 225.934v107.43h91.683v-107.43zm0 0" />
                              </g>
                           </svg>{' '}
                           <span className="self-center font-medium ml-1">Node JS</span>
                        </div>
                        <div className="py-2 flex">
                           <BsGithub className="w-10 h-10 " color="fafafa" />
                           <span className="self-center font-medium ml-1">Github</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </FadeIn>
      </section>
   );
};
