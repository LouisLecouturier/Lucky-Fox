import Image from "next/image";

import styles from "./Hero.module.scss";

import Mouse from "../../../assets/icons/mouse.svg";
import Sound from "../../../assets/icons/sound.svg";

import useSound from "use-sound";

const Hero = ({ imageURL, shadow, title, text, isIndex }) => {
  const [playSound, { stop }] = useSound("/sounds/onloadSound.mp3", {
    volume: 0.25,
  });

  const play = () => {
    stop();
    playSound();
  };

  return (
    <section className={styles.hero}>
      <Image className={styles.heroImg} src={imageURL} layout="fill" />
      {shadow && <div className={styles.shadow}></div>}
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <div className={styles.textContainer}>
            <h1 className={styles.heroTitle}>{title}</h1>
          </div>
          {text && (
            <div className={styles.textContainer}>
              <h2 className={styles.heroSubTitle}>{text}</h2>
            </div>
          )}
        </div>

        <div className={styles.heroShadow}></div>
      </div>
      {isIndex && <Sound onClick={() => play()} className={styles.soundIcon} />}

      <Mouse className={styles.mouse} />
    </section>
  );
};

export default Hero;
