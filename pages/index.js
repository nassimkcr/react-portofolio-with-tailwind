import Head from "next/head";
import {
  AiFillLinkedin,
  AiFillGithub
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import frontend from "../public/frontend.jpg";
import backend from "../public/backend.jpg"
import tools from "../public/tools.jpg"
import Image from "next/image";
import guild from "../public/guild.png";
import restaurant from "../public/restaurant.png"
import movies from "../public/movies.png"
import flash from "../public/flash.png";
import kajabi from "../public/kajabi.png";
import mypic from "../public/mypic.jpeg"
import quiz from "../public/quiz.png"

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Nassim Kecira</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
         <a target='_blank' rel='noreferrer' href="https://drive.google.com/file/d/1RQ9omPH39kjg2hgAmZ9Rt-HHlZ_wmO8_/view?usp=sharing"
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8" 
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Nassim Kecira
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Software Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Software engineer who is focused in web developement, built and worked on many web applications, both on the front-end and back-end.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Currently an intern in a gaming startup, working with in the UX/UI team, building the next big social Gaming App.
            </p>
            <div className="text-5xl flex justify-center gap-8 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://www.linkedin.com/in/nassim-kecira/" rel="noreferrer" target="_blank" className="transition duration-500 hover:-translate-y-1 hover:scale-125">
              <AiFillLinkedin />
              </a>
              <a href="https://github.com/nassimkcr" target="_blank" rel="noreferrer" className="transition duration-500 hover:-translate-y-1 hover:scale-125">
              <AiFillGithub />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={mypic} alt="" layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Skills I Have</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Since the beginning of my journey as a web developer , I learned and acquired many technical skills.
            </p>
            
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={frontend} width={150} height={150} />
              <h3 className="text-xl font-medium pt-8 pb-2  ">
                Front-End
              </h3>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">HTML/CSS</p>
              <p className="text-gray-800 py-1">BootStrap/TailWind/SaaS </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={backend} width={150} height={150} />
              <h3 className="text-xl font-medium pt-8 pb-2 ">
                Back-End
              </h3>

              <p className="text-gray-800 py-1">NodeJs</p>
              <p className="text-gray-800 py-1">ExpressJs</p>
              <p className="text-gray-800 py-1">RESTful APIs</p>
              <p className="text-gray-800 py-1">Knex/PostgreSQL</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={tools} width={150} height={150} />
              <h3 className="text-xl font-medium pt-8 pb-2 ">Tools</h3>
             
              <p className="text-gray-800 py-1">Heroku/Vercel</p>
              <p className="text-gray-800 py-1">Git/GitHub/GitLab</p>
              <p className="text-gray-800 py-1">Mocha/Chai</p>
              <p className="text-gray-800 py-1">Jest</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            I am  someone who learn by doing, I have built and participated on interesting projects, working on the Front-End (UX/UI), the Back-end or even full-stack web development on some projects.
            </p>
            
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          
            <a href="https://guildgaming.gg/" rel="noreferrer" target="_blank" className="basis-1/3 flex-1 transition duration-500 hover:-translate-y-1 hover:scale-110 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"60%"}
                layout="responsive"
                src={guild}
                alt=""
              />
            </a>
            <a href="https://nk-restaurant-client.herokuapp.com/dashboard" rel="noreferrer" target="_blank" className="basis-1/3 flex-1 transition duration-500 hover:-translate-y-1 hover:scale-110">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"60%"}
                layout="responsive"
                src={restaurant}
                alt=""
              />
            </a>
            <a href="https://floating-cliffs-28544.herokuapp.com/" rel="noreferrer" target="_blank" className="basis-1/3 flex-1 transition duration-500 hover:-translate-y-1 hover:scale-110">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"60%"}
                layout="responsive"
                src={movies}
                alt=""
              />
            </a>
            <a href="https://github.com/nassimkcr/Flashcard-App" rel="noreferrer" target="_blank" className="basis-1/3 flex-1 transition duration-500 hover:-translate-y-1 hover:scale-110">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"60%"}
                layout="responsive"
                src={flash}
                alt=""
              />
            </a>
            <a href="https://nassimkcr.github.io/KajabiClone/" rel="noreferrer" target="_blank" className="basis-1/3 flex-1 transition duration-500 hover:-translate-y-1 hover:scale-110">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"60%"}
                layout="responsive"
                src={kajabi}
                alt=""
              />
            </a>
            <a href="https://nassimkcr.github.io/QuizApp/" rel="noreferrer" target="_blank" className="basis-1/3 flex-1 transition duration-500 hover:-translate-y-1 hover:scale-110">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"60%"}
                layout="responsive"
                src={quiz}
                alt=""
              />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
