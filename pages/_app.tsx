import '../styles/globals.css';
import type {AppProps} from 'next/app';
import MainLayout from '../components/layout/MainLayout';
import React from "react";


import info from "../info/info";

export const InfoContext = React.createContext(info);

function MyApp({Component, pageProps}: AppProps) {
   return (
      <>
         <MainLayout>
            <Component {...pageProps} />
         </MainLayout>
      </>
   );
}

export default MyApp;
