import Head from "next/head";
import Header from "../components/shared/Header/Header";
import Hero from "../components/shared/Hero/Hero";

import heroImage from "../assets/images/home/group.jpg";
import Pole from "../components/Home/Pole/Pole";
import Footer from "../components/shared/Footer/Footer";
import api from "../services/api";

export async function getStaticProps() {
  const res = await api.get("/poles?populate=*");
  const pageData = await api.get("/equipe?populate=*");

  return {
    props: { poles: res.data.data, pageData: pageData.data.data.attributes },
    revalidate: 10,
  };
}

const Equipe = ({ poles, pageData }) => {
  return (
    <>
      <Head>
        <title>Lucky Fox | L'équipe</title>
      </Head>
      <Header />

      <Hero
        imageURL={`http://localhost:1337${pageData.bannerImg.data.attributes.url}`}
        title={pageData.bannerTitle}
      />

      <main className="main">
        <section className="section dark">
          <h2 className="sectionTitle">Notre équipe</h2>
          {pageData.text && <p>{pageData.text}</p>}
          {poles.map((pole) => {
            return (
              <Pole
                key={pole.id}
                name={pole.attributes.name}
                members={pole.attributes.membres.data}
              />
            );
          })}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Equipe;
