import * as React from "react";
import { ICardInfoProps } from "./IContainerInfoCentralAxityProps";
import styles from "./ContainerInfoCentralAxity.module.scss";

import "bootstrap/dist/css/bootstrap.min.css";

const CardInfo: React.FC<ICardInfoProps> = (props) => {
  const { title, text, lengthCard } = props;

  return (
    <div className={`${lengthCard} `}>
      <div className={`${styles.background_card} ${styles.font_size} shadow-sm`}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default CardInfo;
