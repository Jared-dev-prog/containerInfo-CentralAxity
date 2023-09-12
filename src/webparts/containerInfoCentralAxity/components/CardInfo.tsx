import * as React from "react";
import { ICardInfoProps } from "./IContainerInfoCentralAxityProps";
import styles from "./ContainerInfoCentralAxity.module.scss";

import "bootstrap/dist/css/bootstrap.min.css";

const CardInfo: React.FC<ICardInfoProps> = (props) => {
  const { title, text, lengthCard, typeOpen, link } = props;

  console.log(link);

  const handleRedirect = (): void => {
    if (typeOpen === "popup") {
      window.open(link, "", typeOpen);
    } else {
      window.open(link, typeOpen);
    }
  };

  return (
    <div className={`${lengthCard} ${styles.cursor_pointer}`}>
      <div
        className={`${styles.background_card} ${styles.font_size} shadow-sm`}
        onClick={handleRedirect}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.container__text}>
          <p className={styles.text}>{text}</p>
        </div>

        {link !== null ? (
          <div className={styles.button}>
            <a onClick={handleRedirect}>Ver más detalles</a>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CardInfo;
