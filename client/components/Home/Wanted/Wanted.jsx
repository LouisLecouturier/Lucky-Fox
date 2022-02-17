import styles from "./Wanted.module.scss";

import Poster from "../../../assets/misc/poster.svg";

import useSound from "use-sound";
import { useState } from "react";
import Member from "../Member/Member";

const Wanted = ({ image, name, position, text }) => {
  const [isShown, setIsShown] = useState(null);

  const [first] = useSound("/sounds/first.mp3", {
    volume: 0.25,
  });
  const [second] = useSound("/sounds/second.mp3", {
    volume: 0.25,
  });
  const [third] = useSound("/sounds/third.mp3", {
    volume: 0.25,
  });
  const [fourth] = useSound("/sounds/fourth.mp3", {
    volume: 0.25,
  });
  const [fifth] = useSound("/sounds/fifth.mp3", {
    volume: 0.25,
  });

  const handleClick = () => {
    setIsShown(true);
    let array = [first, second, third, fourth, fifth];
    var sound = array[Math.floor(Math.random() * array.length)];

    sound();
  };

  return (
    <>
      {isShown && (
        <Member
          name={name}
          position={position}
          text={text}
          setIsShown={setIsShown}
        />
      )}
      <div className={styles.thumbnailContainer} onClick={() => handleClick()}>
        <article className={styles.thumbnail}>
          <Poster className={styles.background} />
          <h2 className={styles.wanted}>WANTED</h2>
          <div className={styles.img}></div>
          <div className={styles.thumbnailContent}>
            <span className={styles.thumbnailName}>{name && name}</span>
            <span className={styles.thumbnailText}>{position && position}</span>
          </div>
        </article>
      </div>
    </>
  );
};

export default Wanted;
