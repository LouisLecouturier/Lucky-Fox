import Image from "next/image";

import styles from "./Hero.module.scss";

import Mouse from "../../../assets/icons/mouse.svg";
import Sound from "../../../assets/icons/sound.svg";

import useSound from "use-sound";

import logo from "../../../assets/images/logo/logo.webp";
import { useState } from "react";

import cactus1 from "../../../assets/images/hero/cactus1.png";
import cactus2 from "../../../assets/images/hero/cactus2.png";

const Hero = ({
  imageURL,
  shadow,
  title,
  text,
  isIndex,
  isProgram,
  moveX,
  moveY,
}) => {
  const [playSound, { stop }] = useSound("/sounds/onloadSound.mp3", {
    volume: 0.25,
  });

  const [loaded, setLoaded] = useState(false);

  const play = () => {
    stop();
    playSound();
  };

  const handleLoad = (e) => {
    if (e.target.srcset) {
      setLoaded(true);
    }
  };

  return (
    <section className={styles.hero}>
      {isIndex ? (
        <div
          className={styles.imageContainer}
          style={{ left: moveX, top: moveY }}
        >
          <Image
            className={styles.heroImg}
            onLoad={handleLoad}
            src={imageURL}
            layout="fill"
          />
        </div>
      ) : (
        <div className={styles.imageContainer}>
          <Image
            className={styles.heroImg}
            onLoad={handleLoad}
            src={imageURL}
            layout="fill"
          />
        </div>
      )}

      {isIndex && loaded && (
        <div className={`${styles.cactusContainer} ${styles.a}`}>
          <div
            className={styles.cactus}
            style={{ left: -moveX * 6, top: -moveY * 8 }}
          >
            <Image className={styles.cactusImg} src={cactus2} layout="fill" />
          </div>
        </div>
      )}
      {isIndex && loaded && (
        <div className={`${styles.cactusContainer} ${styles.b}`}>
          <div
            className={styles.cactus}
            style={{ left: -moveX * 12, top: -moveY * 3 }}
          >
            <Image className={styles.cactusImg} src={cactus1} layout="fill" />
          </div>
        </div>
      )}
      <div className={styles.heroContainer}>
        {loaded && shadow && <div className={styles.shadow}></div>}
        {loaded && (
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.textContainer}>
                <h1
                  className={`${styles.heroTitle} ${
                    isProgram && styles.program
                  }`}
                >
                  {title}
                </h1>
              </div>
              {text && (
                <div className={styles.textContainer}>
                  <h2 className={styles.heroSubTitle}>{text}</h2>
                </div>
              )}
            </div>
            {isIndex && (
              <div className={styles.logoContainer}>
                <Image src={logo} className={styles.logo} />
              </div>
            )}
            <div className={styles.heroShadow}></div>
          </div>
        )}
        {isIndex && loaded && (
          <Sound onClick={() => play()} className={styles.soundIcon} />
        )}
        {loaded && <Mouse className={styles.mouse} />}
      </div>
    </section>
  );
};

export default Hero;
