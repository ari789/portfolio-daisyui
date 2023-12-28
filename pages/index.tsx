import type {NextPage} from 'next';
import Head from 'next/head';
import {Contact} from '../components/common/Contact';
import {Education} from '../components/common/Education';
import {HomePage} from '../components/common/HomePage';
import {Projects} from '../components/common/Projects';
import {Skills} from '../components/common/Skills';
import { About } from '../components/common/About';


const Home: NextPage = () => {
   return (
      <main id="main">
         <Head>
            <title>Arielle Clapp | Portfolio</title>
            <meta name="description" content="My portfolio. Including skills, projects and details about me. " />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <HomePage />
         <Projects />
         {/* <About /> */}
         <Education />
         <Skills />
         <Contact />
      </main>
   );
};

export default Home;
