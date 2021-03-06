import styles from "./Header.module.scss";

import useClickedOutside from "../../../hooks/useClickOutside";
import Link from "next/link";
import Image from "next/image";

import logo from "../../../assets/images/logo/logoMin.webp";

const Header = () => {
  const { target, button, isShown, setIsShown } = useClickedOutside();
  return (
    <div
      className={`${styles.headerContainer} ${
        isShown && styles.mobileNavIsShown
      }`}
    >
      <div className={styles.headerShadow}></div>
      <header className={styles.header}>
        <div
          ref={button}
          onClick={() => setIsShown(!isShown)}
          className={`${styles.hamburger} ${isShown && styles.checked}`}
        >
          <div className={styles.firstDiagonal}></div>
          <div className={styles.lastDiagonal}></div>
          <div className={styles.firstLine}></div>
          <div className={styles.secondLine}></div>
          <div className={styles.thirdLine}></div>
        </div>

        <nav className={styles.desktopNav}>
          <ul>
            <li>
              <Link href="/">
                <a className={styles.headerLink}>Accueil</a>
              </Link>
            </li>
            <li>
              <Link href="/programme">
                <a className={styles.headerLink}>Programme</a>
              </Link>
            </li>
            <li>
              <Link href="/equipe">
                <a className={styles.headerLink}>Équipes</a>
              </Link>
            </li>
            <li>
              <Link href="/partenaires">
                <a className={styles.headerLink}>Partenaires</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className={styles.headerLink}>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.headerRight}>
          <div className={styles.headerLogo}>
            <Image src={logo} layout="fill" />
          </div>
          <h2 className={styles.headerLogoText} ref={target}>
            Lucky Fox
          </h2>
        </div>
      </header>
      <div
        ref={target}
        className={`${styles.mobileNavContainer} ${
          isShown && styles.mobileNavIsShown
        }`}
      >
        <nav className={styles.mobileNav}>
          <Link href="/">
            <a className={styles.headerLink}>Accueil</a>
          </Link>
          <Link href="/programme">
            <a className={styles.headerLink}>Programme</a>
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
  );
};

export default Header;
