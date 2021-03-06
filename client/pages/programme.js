import Header from "../components/shared/Header/Header";
import Footer from "../components/shared/Footer/Footer";
import Hero from "../components/shared/Hero/Hero";

import Slideshow from "../components/Programmation/Slideshow";
import api from "../services/api";

import styles from "../styles/pages/Programmation.module.scss";
import Link from "next/link";
import Image from "next/image";

import BigArrow from "../assets/icons/bigArrow.svg";

import moment from "moment";
import Head from "next/head";

export async function getServerSideProps(context) {
  const res = await api.get("/events?populate=*");
  const pageData = await api.get("/programme?populate=*");

  return {
    props: { data: res.data.data, pageData: pageData.data.data.attributes }, // will be passed to the page component as props
  };
}

const Program = ({ data, pageData }) => {
  return (
    <>
      <Head>
        <title>Lucky Fox | Programme</title>
      </Head>
      <Header />
      <Hero
        imageURL={`https://api.bdeluckyfox.fr${pageData.bannerImg.data.attributes.url}`}
        shadow={true}
        isProgram={true}
        title={pageData.bannerTitle}
      />
      <main>
        {data.length > 0 && <Slideshow events={data} />}

        <section className="dark section">
          <h2 className="sectionTitle">Événements à venir :</h2>
          <ul className={styles.eventList}>
            {data.length > 0 ? (
              data.map((event) => (
                <li className={styles.event} key={event.id}>
                  <Link href={`/event/${event.id}`}>
                    <a className={styles.eventImage}>
                      <Image
                        unoptimized={true}
                        objectFit={"cover"}
                        src={`https://api.bdeluckyfox.fr${event.attributes.mobileImage.data.attributes.url}`}
                        layout="fill"
                      />
                    </a>
                  </Link>
                  <div>
                    <Link
                      href={`/event/${event.id}`}
                      className={styles.sectionLink}
                    >
                      <a>
                        <h3 className={styles.eventName}>
                          {event.attributes.name}
                        </h3>
                      </a>
                    </Link>
                    <time
                      className={styles.eventDate}
                      dateTime={event.attributes.startDate}
                    >
                      {event.attributes.startDate === event.attributes.endDate
                        ? `${moment(event.attributes.startDate).format(
                            "DD MMMM"
                          )}
                          de
                          ${event.attributes.startTime.replace(
                            ":00.000",
                            ""
                          )} à ${event.attributes.endTime.replace(
                            ":00.000",
                            ""
                          )}`
                        : moment(event.attributes.startDate).format("MMMM") ===
                          moment(event.attributes.endDate).format("MMMM")
                        ? `${moment(event.attributes.startDate).format(
                            "DD"
                          )} - ${moment(event.attributes.endDate).format(
                            "DD MMMM"
                          )}`
                        : `${moment(event.attributes.startDate).format(
                            "DD MMMM"
                          )} - ${moment(event.attributes.endDate).format(
                            "DD MMMM"
                          )}`}
                    </time>
                    <Link href={`/event/${event.id}`}>
                      <a className={styles.sectionLink}>
                        <span className="sectionLink">Voir les détails</span>
                        <BigArrow className={styles.arrow} />
                      </a>
                    </Link>
                  </div>
                </li>
              ))
            ) : (
              <li>
                <h3>
                  Pas d'événements à venir pour le moment ! Revenez plus tard 😏
                </h3>
              </li>
            )}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Program;
