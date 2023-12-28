import React, {useEffect} from 'react';
const {themeChange} = require('theme-change');

export const SwapThemes = () => {
   useEffect(() => {
      themeChange(false);
   }, []);
   return (
      <div title="Change Theme" className="dropdown dropdown-end ">
         <div tabIndex={0} className="btn gap-2 normal-case btn-ghost">
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-primary md:h-6 md:w-6">
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
               ></path>
            </svg>
            <span className="hidden md:inline p-1 bg-gradient-to-r from-primary via-secondary to-primary inline-block text-transparent bg-clip-text">
               Change Theme
            </span>
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" className="ml-1 inline-block h-4 w-4 fill-primary">
               <path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"></path>
            </svg>
         </div>
         <div className="dropdown-content bg-base-100 text-base-content rounded-t-box rounded-b-box top-px h-85 w-52 overflow-y-auto shadow-2xl mt-16">
            <ul className="menu menu-compact p-4" tabIndex={0}>
               
               <li>
                  <button data-set-theme="cmyk" data-act-classname="active">
                     🌝 light
                  </button>
               </li>
               <li>
                  <button data-set-theme="dark" data-act-classname="active">
                     🌚 dark
                  </button>
               </li>
               <li>
                  <button data-set-theme="valentine" data-act-classname="active">
                     🌸 rose
                  </button>
               </li>                
               <li>
                  <button data-set-theme="mytheme" data-act-classname="active" className="">
                     🐛 caterpillar
                  </button>
               </li>       
               <li>
                  <button data-set-theme="winter" data-act-classname="active">
                     ❄️ snowfall
                  </button>
               </li>
               <li>
                  <button data-set-theme="coffee" data-act-classname="active">
                     ☕️ coffee
                  </button>
               </li> 
            </ul>
         </div>
      </div>
   );
};
