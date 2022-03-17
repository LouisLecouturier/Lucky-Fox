import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.scss";

import Instagram from "../../../assets/icons/socials/instagram.svg";
import Facebook from "../../../assets/icons/socials/facebook.svg";
import Tiktok from "../../../assets/icons/socials/tiktok.svg";

import Logo from "../../../assets/images/logo/logo.webp";

const Footer = ({ dark }) => {
  return (
    <footer
      className={`${styles.footer} ${dark && "dark"} ${dark && styles.dark}`}
    >
      <div className={styles.upperFooter}>
        <div className={styles.left}>
          <div>
            <div className={styles.logo}>
              <Image src={Logo} />
            </div>
            <div className={styles.mobileSocials}>
              <a href="/">
                <Instagram className={styles.social} />
              </a>
              <a href="/">
                <Facebook className={styles.social} />
              </a>

              <a href="/">
                <Tiktok className={styles.social} />
              </a>
            </div>
          </div>
          <div className={`${styles.section} ${styles.navigate}`}>
            <h2 className={styles.title}>Naviguer</h2>
            <nav className={styles.nav}>
              <Link href="/">
                <a className={styles.headerLink}>Accueil</a>
              </Link>
              <Link href="/programmation">
                <a className={styles.headerLink}>Programmation</a>
              </Link>

              <Link href="/equipe">
                <a className={styles.headerLink}>Équipes</a>
              </Link>

              <Link href="/partenaires">
                <a className={styles.headerLink}>Partenaires</a>
              </Link>
              <Link href="/contact">
                <a className={styles.headerLink}>Contact</a>
              </Link>
            </nav>
          </div>
        </div>
        <div className={`${styles.section} ${styles.follow}`}>
          <h2 className={styles.title}>Nous suivre</h2>
          <nav className={styles.socials}>
            <a href="/">
              <Instagram className={styles.social} />
            </a>
            <a href="/">
              <Facebook className={styles.social} />
            </a>

            <a href="/">
              <Tiktok className={styles.social} />
            </a>
          </nav>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>Lucky Fox™ - 2022 Tous droits réservés</span>
        <span>
          Site réalisé par&nbsp;
          <a
            className={styles.bottomLink}
            href="https://www.linkedin.com/in/louis-lecouturier-21b90b204/"
          >
            Louis Lecouturier
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
