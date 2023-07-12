import Head from 'next/head';
import Image from 'next/image';
import {AiFillTwitterCircle, AiFillLinkedin, AifillGithub, AiFillGithub} from "react-icons/ai";

export default function Home() {
  return (
    <div>
    <Head>
      <title>France Point Du Jour Portfolio</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="bg-white px-10">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <a className="text-xl "href="#aboutme">About me</a>
          <ul className="flex items-center">
            <li><a href="#skills">Skills</a></li>
            <li><a className="ml-4"href="#projects">Projects</a></li>
            <li><a className="bg-cyan-500 text-white px-4 py-2 rounded-md ml-4"href="#">Resume</a></li>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-400 font-medium">France Point Du Jour</h2>
          <h3 className="text-2xl py-2">Software Developer</h3>
          < Image  src="/Snapchat-1334284873.jpg" width={200} height={500}/>
          <p className="text-md py-5 text-gray-800">Hi I am France, a carribean, sun and nature lover Software Developer based in New York, US </p>
        </div>
        <div className="flex justify-center gap-16 py-4">
        <a><AiFillTwitterCircle className="w-10 h-10"/></a>
        <a><AiFillLinkedin  className="w-10 h-10"/></a>
        <a><AiFillGithub className="w-10 h-10"/></a>
        </div>
      </section>
      <section id="aboutme" className="shadow-lg p-10 rounded-xl my-10">
        <div>
          <h2 className="text-3xl py-1 text-teal-400 font-medium">About me</h2>
          <p className="text-md py-2 leading-6 text-gray-800">A carribean, sun and nature lover, software developer based in NY,
            with previous experience in healthcare as a direct support professional
             and personal care acting as a liaison between patients, family and nursing staff. </p>
             <p className="text-md py-2 leading-6 text-gray-800">Always interested in technologies as a kid, I gained the opportunity
              to transition into Web Development when completed a full stack bootcamp and a Web dev fellowship with TKH in 2022.
             </p>
             <p className="text-md py-2 leading-6 text-gray-800">Creative and open-minded, I enjoy working on different projects, I enjoy being part of a team and value feedbacks.
               I see myself as a techrole model/mentor for kids in my community and working in a software development role that
               allows me to apply and develop my skills in projects that are fulfilling.</p>
               <div className="py-2">
                <h3 className="text-xl ">3 interesting things about me</h3>
                <ol className="">
                  <li>
                    I am fascinated by the idea of traveling, however I am afraid of heights and hate planes.
                    </li>
                    
                    <li>
                      I grew up in the carribean but never been to the beach.
                  </li>
                  <li>
                      When I am not coding, I am inventing a new recipe in the kitchen.
                      </li>
                </ol>
                </div>
              </div>
   </section>
   <section id="skills"className="shadow-lg p-10 rounded-xl my-10">
    <div>
    <h2 className="text-3xl py-1 text-teal-400 font-medium">Technical Skills</h2>
    <nav className="py-10 mb-12 flex justify-between">
      <ul className="text-xl py-2">
      <li>Java</li>
      <li>JavaScript</li>
      <li>ReactJS</li>
      <li>Node JS</li>
      <li>REST API's</li>
      </ul>
      <ul className="text-xl py-2">
      <li>SQL</li>
      <li>Spring Boot</li>
      <li>Bootstrap</li>
      <li>Unit Testing(JUnit, Mockito)</li>
      <li>Spring Security(JWT)</li>
      </ul>
    
    </nav>
    </div>
   </section>

   <section id="projects"className="shadow-lg p-10  my-10">
   <h2 className="text-3xl py-1 text-teal-400 font-medium">Projects</h2>
   <div className="flex justify-center gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Project1
              </h3>
              <p className="py-2">
              This is an small website where I talk a bit about me, my passion and my goals.
               I enjoyed making it while getting more practice on HTML5 and CSS.
              </p>
              <a className="text-xl text-teal-400 font-medium"href="#">View here</a>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Project2
              </h3>
              <p className="py-2">
              This is an small website where I talk a bit about me, my passion and my goals. 
              I enjoyed making it while getting more practice on HTML5 and CSS.
              </p>
              <a className="text-xl text-teal-400 font-medium"href="#">View here</a>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Project3
              </h3>
              <p className="py-2">
              This is an small website where I talk a bit about me, my passion and my goals. 
              I enjoyed making it while getting more practice on HTML5 and CSS.
              </p>
              <a className="text-xl text-teal-400 font-medium"href="https://capstone-group-3-imkewlhuh.vercel.app/home?authuser=0">View here</a>
            </div>
   </div>
   </section>
   <div className="text-center p-10">
    <h1 className="text-xl py-5 text-gray-800">Contact me</h1>
    <a className="text-xl" href="#">francepointdujour@gmail.com</a>
   </div>
   
    </main>
    </div>
  );
}