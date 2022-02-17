import styles from "./Member.module.scss";

import Close from "../../../assets/icons/close.svg";

import { useState } from "react";

const Member = ({ name, img, position, text, setIsShown }) => {
  const [isClosed, setIsClosed] = useState(false);

  const handleClose = () => {
    setIsClosed(true);
    setTimeout(() => {
      setIsShown(false);
    }, 500);
  };

  return (
    <article className={`${styles.container} ${isClosed && styles.hidden}`}>
      <Close className={styles.close} onClick={handleClose} />
      <header className={styles.header}>
        <h1 className={styles.wanted}>WANTED</h1>
      </header>
      <div className={styles.img}></div>
      <article className={styles.content}>
        <header className={styles.contentHeader}>
          <h2 className={styles.name}>{name}</h2>
          <h3 className={styles.position}>{position}</h3>
        </header>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas ullam,
          eius nobis nulla id, pariatur, at culpa aut asperiores ut accusamus in
          maxime eveniet mollitia. Dolor enim quibusdam repudiandae magni sed
          accusamus voluptate suscipit aut excepturi similique possimus aperiam
          alias libero hic cumque repellat culpa in esse eum, voluptas
          repellendus nostrum dolores provident? Error hic, modi maxime quia ea
          est rerum ex, corrupti perferendis aspernatur molestias culpa
          excepturi consequatur dignissimos vitae quisquam, doloremque provident
          ullam aperiam vero fuga sunt distinctio reiciendis amet. Officiis
          officia voluptatum alias nam quidem aperiam fugit accusantium optio,
          deleniti, veniam exercitationem repellat. Iusto earum ad officia.
        </p>
      </article>
    </article>
  );
};

export default Member;
