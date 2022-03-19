import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Header from "../components/shared/Header/Header";

import styles from "../styles/pages/Home.module.scss";

import BigArrow from "../assets/icons/bigArrow.svg";

import Hero from "../components/shared/Hero/Hero";
import Footer from "../components/shared/Footer/Footer";
import api from "../services/api";
import { useEffect, useState } from "react";

export async function getStaticProps() {
  const res = await api.get("/accueil?populate=*");

  return {
    props: { data: res.data.data.attributes }, // will be passed to the page component as props
  };
}

export default function Home({ data }) {
  const [moveX, setMoveX] = useState(0);
  const [moveY, setMoveY] = useState(0);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  const handleMouseMove = (e) => {
    setMoveX((width / 2 - e.clientX) * 0.025);
    setMoveY((height / 2 - e.clientY) * 0.025);
  };

  return (
    <div onMouseMove={handleMouseMove}>
      <Head>
        <title>Lucky Fox</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Hero
        imageURL={`http://localhost:1337${data.bannerImg.data.attributes.url}`}
        title={data.heroTitle}
        text={data.heroSubtitle}
        isIndex={true}
        moveX={moveX}
        moveY={moveY}
      />

      <main className="main">
        <section className="section">
          <h2 className={`sectionTitle ${styles.mobileTitle}`}>
            {data.eventTitle}
          </h2>
          <div className="sectionRow">
            <div>
              <h2 className={`sectionTitle ${styles.desktopTitle}`}>
                {data.eventTitle}
              </h2>

              <p className={styles.paragraph}>{data.eventText}</p>
              <Link href="/equipe">
                <a className={styles.sectionLink}>
                  <span className="sectionLink">Voir les événements</span>
                  <BigArrow className={styles.arrow} />
                </a>
              </Link>
            </div>
            <div className={styles.sectionImgContainer}>
              <Image
                className={styles.sectionImg}
                src={`http://localhost:1337${data.eventImage.data.attributes.url}`}
                layout="fill"
              />
            </div>
          </div>
        </section>
        <section className="section dark">
          <h2 className={`sectionTitle ${styles.mobileTitle}`}>
            {data.teamTitle}
          </h2>
          <div className="sectionRow">
            <div className={styles.sectionImgContainer}>
              <Image
                className={styles.sectionImg}
                src={`http://localhost:1337${data.teamImage.data.attributes.url}`}
                layout="fill"
              />
            </div>
            <div>
              <h2 className={`sectionTitle ${styles.desktopTitle}`}>
                {data.teamTitle}
              </h2>

              <p className={styles.paragraph}>{data.teamText}</p>
              <Link href="/equipe">
                <a className={styles.sectionLink}>
                  <span className="sectionLink">Voir notre équipe</span>
                  <BigArrow className={styles.arrow} />
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section className="section">
          <h2 className={`sectionTitle ${styles.mobileTitle}`}>
            {data.partnersTitle}
          </h2>
          <div className="sectionRow">
            <div>
              <h2 className={`sectionTitle ${styles.desktopTitle}`}>
                {data.partnersTitle}
              </h2>

              <p className={styles.paragraph}>{data.partnersText}</p>
              <Link href="/partenaires">
                <a className={styles.sectionLink}>
                  <span className="sectionLink">Voir nos partenaires</span>
                  <BigArrow className={styles.arrow} />
                </a>
              </Link>
            </div>
            <div className={styles.sectionImgContainer}>
              <Image
                className={styles.sectionImg}
                src={`http://localhost:1337${data.partnersImage.data.attributes.url}`}
                layout="fill"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer dark={true} />
    </div>
  );
}
