import Image from "next/image";
import Header from "../../components/shared/Header/Header";
import api from "../../services/api";

import styles from "../../styles/pages/Event.module.scss";

import moment from "moment";
import Footer from "../../components/shared/Footer/Footer";
import Head from "next/head";

export async function getServerSideProps({ query }) {
  const { id } = query;

  let res = await api.get(`/events/${id}?populate=*`);

  return {
    props: { data: res.data.data.attributes },
  };
}

const Event = ({ data }) => {
  return (
    <>
      <Head>
        <title>Lucky Fox | {data.name}</title>
      </Head>
      <Header />
      <div className={styles.hero}>
        <div className={styles.imageContainer}>
          <div className={styles.mobileImageContainer}>
            <Image
              unoptimized={true}
              className={styles.image}
              src={`https://api.bdeluckyfox.fr${data.mobileImage.data.attributes.url}`}
              layout="fill"
            />
          </div>
          <div className={styles.desktopImageContainer}>
            <Image
              unoptimized={true}
              className={styles.image}
              src={`https://api.bdeluckyfox.fr${data.desktopImage.data.attributes.url}`}
              layout="fill"
            />
          </div>
        </div>
      </div>
      <main className="dark">
        <section className="section">
          <h1 className={`sectionTitle ${styles.name}`}>{data.name}</h1>
          <div className={styles.eventSection}>
            <h3 className={styles.date}>
              {data.startDate === data.endDate
                ? `${moment(data.startDate).format("DD MMMM")}
                          de
                          ${data.startTime.replace(
                            ":00.000",
                            ""
                          )} à ${data.endTime.replace(":00.000", "")}`
                : moment(data.startDate).format("MMMM") ===
                  moment(data.endDate).format("MMMM")
                ? `${moment(data.startDate).format("DD")} - ${moment(
                    data.endDate
                  ).format("DD MMMM")}`
                : `${moment(data.startDate).format("DD MMMM")} - ${moment(
                    data.endDate
                  ).format("DD MMMM")}`}{" "}
              - {data.location}
            </h3>
          </div>
          {data.address && (
            <div className={styles.eventSection}>
              <h3>Adresse</h3>
              <p>{data.address}</p>
            </div>
          )}
          {data.description && (
            <div className={styles.eventSection}>
              <h3>Description</h3>
              <p>{data.description}</p>{" "}
            </div>
          )}
          {data.price && (
            <div className={`row ${styles.eventSection}`}>
              {data.price && (
                <div>
                  <h3>Prix</h3>
                  <p>{data.price}</p>{" "}
                </div>
              )}
              {data.guestPrice && (
                <div>
                  <h3>Prix Non-FGES</h3>
                  <p>{data.guestPrice}</p>
                </div>
              )}
            </div>
          )}
          {data.dressCode && (
            <div className={styles.eventSection}>
              <h3>Dress code</h3>
              <p>{data.dressCode}</p>
            </div>
          )}
          {data.notes && (
            <div className={styles.eventSection}>
              <h3>Notes</h3>
              <p>{data.notes}</p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Event;
