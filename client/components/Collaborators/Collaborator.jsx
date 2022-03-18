import styles from "./Collaborator.module.scss";

import useClickedOutside from "../../hooks/useClickOutside";
import { useEffect } from "react";

import Close from "../../assets/icons/close.svg";

const Collaborator = ({
  name,
  logoURL,
  field,
  description,
  advantages,
  setCollaborator,
}) => {
  const { target, button, isShown, setIsShown } = useClickedOutside(true);

  useEffect(() => {
    !isShown &&
      setTimeout(() => {
        setCollaborator(false);
      }, 1500);
  }, [isShown]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  const handleClose = () => {
    document.body.style.overflow = "unset";
    setIsShown(false);
    setTimeout(() => {
      setCollaborator(false);
    }, 1500);
  };

  return (
    <div
      ref={target}
      className={`${styles.container} ${!isShown && styles.vanish}`}
    >
      <div className={styles.closeContainer}>
        <div className={styles.headClose}>
          <Close className={styles.close} onClick={() => handleClose()} />
        </div>
        <article className={styles.popup}>
          <div ref={button}></div>
          <header className={styles.header}>
            
            <img className={styles.logo} src={logoURL} />

            <div className={styles.headerContent}>
              <h2>{name}</h2>
              <p>{field}</p>
            </div>
          </header>
          <p className={styles.description}>{description}</p>

          {advantages && (
            <div className={styles.advantages}>
              <h2>Tes avantages :</h2>
              <p>{advantages}</p>
            </div>
          )}
        </article>
      </div>
    </div>
  );
};

export default Collaborator;
