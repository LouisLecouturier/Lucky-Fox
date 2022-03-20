import Head from "next/head";
import Header from "../components/shared/Header/Header";
import Hero from "../components/shared/Hero/Hero";

import heroImage from "../assets/images/home/partenaires.jpg";

import styles from "../styles/pages/Collaborators.module.scss";
import { useState } from "react";
import Collaborator from "../components/Collaborators/Collaborator";

import BigArrow from "../assets/icons/bigArrow.svg";
import Link from "next/link";
import Footer from "../components/shared/Footer/Footer";
import api from "../services/api";
import Image from "next/image";

export async function getStaticProps() {
  const res = await api.get("/collaborateurs?populate=*");
  const pageData = await api.get("/partenaire?populate=*");

  return {
    props: {
      collaborators: res.data.data,
      pageData: pageData.data.data.attributes,
    },
    revalidate: 10,
  };
}

const Collaborators = ({ collaborators, pageData }) => {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <Head>
        <title>Lucky Fox | Partenaires</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Hero
        imageURL={`http://localhost:1337${pageData.bannerImg.data.attributes.url}`}
        title={pageData.bannerTitle}
      />

      <main className="main">
        {pageData.textTitle && pageData.text && (
          <section className="section dark">
            <h2 className="sectionTitle">{pageData.textTitle}</h2>
            <p className="paragraph">{pageData.text}</p>
          </section>
        )}
        <section className="section">
          <h2 className="sectionTitle">Nos partenaires</h2>
          <div className={styles.list}>
            {collaborators.map((collaborator) => (
              <div
                className={styles.logo}
                key={collaborator.id}
                onClick={() => setSelected(collaborator)}
              >
                {console.log(
                  `http://localhost:1337${collaborator.attributes.logo.data[0].attributes.url}`
                )}
                <Image
                  layout="fill"
                  title={collaborator.attributes.name}
                  src={`http://localhost:1337${collaborator.attributes.logo.data[0].attributes.url}`}
                />
              </div>
            ))}
          </div>

          <div className={styles.contact}>
            <h2>Et peut-être vous !</h2>
            <Link href="/contact">
              <a className={styles.sectionLink}>
                <span className="sectionLink">Nous contacter</span>
                <BigArrow className={styles.arrow} />
              </a>
            </Link>
          </div>
        </section>
        {selected && (
          <>
            {console.log(selected.attributes.logo.data[0].attributes.url)}
            <Collaborator
              key={selected.id}
              logoURL={`http://localhost:1337${selected.attributes.logo.data[0].attributes.url}`}
              name={selected.attributes.name}
              field={selected.attributes.service}
              description={selected.attributes.description}
              advantages={selected.attributes.advantages}
              setCollaborator={setSelected}
            />
          </>
        )}
      </main>
      <Footer dark={true} />
    </>
  );
};

export default Collaborators;
