import Link from "next/link";
import Head from "next/head";
// import { client } from "../utils/client";
import { useState } from "react";
import { motion } from "framer-motion";

import LayoutNav from "../components/LayoutNav/LayoutNav";
import LayoutText from "../components/LayoutText/LayoutText";

import styles from "../styles/Home.module.scss";

export default function Home({ projects }: { projects: any }) {
  const [Home, setHome] = useState(false);
  const [Projects, setProjects] = useState(false);
  const [Skills, setSkills] = useState(false);
  const [Contact, setContact] = useState(false);

  const turnOffAnimation = (setstate: Function) => {
    const timeOutOffAnimation = setTimeout(() => {
      setstate(false);
    }, 600);
  };

  return (
    <motion.div
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      initial={{ y: "100%" }}
      transition={{
        duration: 0.75,
        ease: "easeOut",
      }}
      style={{
        position: "absolute",
        top: "0px",
        left: "0px",
        height: "100%",
        width: "100%",
        backgroundColor: "#f0eeb9",
      }}
    >
      <Head>
        <title>PortFolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.main_top}>
          <LayoutText delay={0.25} lineHeight={4} timeAnimation={0.025}>
            <h1 className={styles.main_top_h1}>
              Hello, I'm Matthieu, a front-end developer with a passion for
              creating beautiful and functional websites.
            </h1>
          </LayoutText>

          <div>
            <nav>
              <Link
                onMouseEnter={() => setHome(true)}
                onMouseLeave={() => turnOffAnimation(setHome)}
                className={styles.container_rollingText}
                href="/contact"
              >
                <LayoutNav Anim={Home}>
                  <h1>HOME</h1>
                </LayoutNav>
              </Link>
              <Link
                onMouseEnter={() => setProjects(true)}
                onMouseLeave={() => turnOffAnimation(setProjects)}
                className={styles.container_rollingText}
                href="/projects"
              >
                <LayoutNav Anim={Projects}>
                  <h1>PROJECTS</h1>
                </LayoutNav>
              </Link>
              <Link
                onMouseEnter={() => setSkills(true)}
                onMouseLeave={() => turnOffAnimation(setSkills)}
                className={styles.container_rollingText}
                href="/skills"
              >
                <LayoutNav Anim={Skills}>
                  <h1>SKILLS</h1>
                </LayoutNav>
              </Link>
              <Link
                onMouseEnter={() => setContact(true)}
                onMouseLeave={() => turnOffAnimation(setContact)}
                className={styles.container_rollingText}
                href="/contact"
              >
                <LayoutNav Anim={Contact}>
                  <h1>CONTACT</h1>
                </LayoutNav>
              </Link>
            </nav>
          </div>
        </div>

        <div className={styles.main_middle}>
          <LayoutText delay={0.7} lineHeight={3.5} timeAnimation={0.0075}>
            <h2>
              I am specialized with modern technologies built around the
              JavaScript framework, such as React, Next.js and TypeScript. I
              have a passion for CSS and strive to create visually appealing
              designs. Additionally, I have experience working with back-end
              technologies like Node.js
            </h2>
          </LayoutText>
        </div>
        <div className={styles.main_bottom}>
          <div className={styles.main_bottom_date}>
            ©2023 <span>Open to work</span>
          </div>
        </div>
      </main>
    </motion.div>
  );
}

// export async function getStaticProps() {
//   const projects = await client.fetch(`*[_type == "projects"]`);

//   return {
//     props: {
//       projects,
//     },
//   };
// }
