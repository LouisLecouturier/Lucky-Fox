import Head from "next/head";
import Footer from "../components/shared/Footer/Footer";
import Header from "../components/shared/Header/Header";
import api from "../services/api";

import styles from "../styles/pages/Contact.module.scss";

export async function getStaticProps() {
  const res = await api.get("/section-contacts?populate=*");

  return {
    props: {
      sections: res.data.data,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 1000, // In seconds
  };
}

const Contact = ({ sections }) => {
  return (
    <>
      <Head>
        <title>Lucky Fox | Contact</title>
      </Head>
      <Header />
      <section className="section dark">
        <h2 className="sectionTitle">Contact</h2>
        <div className={styles.row}>
          {sections &&
            sections.map((section) => (
              <div className={styles.contact} key={section.id}>
                <h2>{section.attributes.name}</h2>
                <div className={styles.members}>
                  {section.attributes.contacts.data.map((contact) => (
                    <div key={contact.id}>
                      <h4>
                        {contact.attributes.name} | {contact.attributes.role}
                      </h4>
                      <span>{contact.attributes.email}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
