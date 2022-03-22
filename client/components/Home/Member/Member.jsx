import styles from "./Member.module.scss";

import Close from "../../../assets/icons/close.svg";

import { useState, useEffect } from "react";
import Image from "next/image";

const Member = ({ name, img, position, text, setIsShown }) => {
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  const handleClose = () => {
    document.body.style.overflow = "unset";
    setIsClosed(true);
    setTimeout(() => {
      setIsShown(false);
    }, 500);
  };

  return (
    <article className={`${styles.container} ${isClosed && styles.hidden}`}>
      <header className={styles.header}>
        <h1 className={styles.wanted}>WANTED</h1>
      </header>
      <div className={styles.imgContainer}>
        {img && (
          <Image
            src={img}
            unoptimized={true}
            className={styles.image}
            layout="fill"
          />
        )}
      </div>
      <article className={styles.content}>
        <Close className={styles.close} onClick={handleClose} />
        <header className={styles.contentHeader}>
          <h2 className={styles.name}>{name}</h2>
          <h3 className={styles.position}>{position}</h3>
        </header>
        <p className={styles.text}>{text}</p>
      </article>
    </article>
  );
};

export default Member;
