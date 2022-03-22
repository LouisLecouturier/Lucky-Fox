import styles from "./Wanted.module.scss";

import Poster from "../../../assets/misc/poster.svg";

import useSound from "use-sound";
import { useEffect, useState } from "react";
import Member from "../Member/Member";
import inAppApi from "../../../services/inAppApi";
import Image from "next/image";

const Wanted = ({ id, name, position, text }) => {
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

  const [imageUrl, setImageUrl] = useState(null);

  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    inAppApi.get(`/membres/${id}?populate=*`).then((res) => {
      setImageUrl(
        `https://api.bdeluckyfox.fr${res.data.data.attributes.image.data.attributes.url}`
      );
    });
  }, [id]);

  return (
    <>
      {isShown && (
        <Member
          name={name}
          img={imageUrl}
          position={position}
          text={text}
          setIsShown={setIsShown}
        />
      )}
      <div
        className={`${styles.thumbnailContainer} ${
          animation && styles.animate
        }`}
        onMouseEnter={() => setAnimation(true)}
        onAnimationEnd={() => setAnimation(false)}
        onClick={() => handleClick()}
      >
        <article className={styles.thumbnail}>
          <Poster className={styles.background} />
          <h2 className={styles.wanted}>WANTED</h2>
          <div className={styles.imgContainer}>
            {imageUrl && (
              <Image
                className={styles.img}
                unoptimized={true}
                src={imageUrl}
                layout="fill"
              />
            )}
          </div>
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
