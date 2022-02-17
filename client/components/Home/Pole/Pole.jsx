import styles from "./Pole.module.scss";

import Wanted from "../Wanted/Wanted";

const Pole = ({ title }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Communication</h2>

      <div className={styles.listContainer}>
        <div className={styles.list}>
          <Wanted name={"Lucas Lacoste"} position="Président" />
          <Wanted name={"Romain Roux"} position="Vice-Président" />
        </div>
      </div>
    </div>
  );
};

export default Pole;
