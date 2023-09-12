import * as React from "react";
import styles from "./ContainerInfoCentralAxity.module.scss";
import { IContainerInfoCentralAxityProps } from "./IContainerInfoCentralAxityProps";
import CardInfo from "./CardInfo";

import "bootstrap/dist/css/bootstrap.min.css";

const ContainerInfoCentralAxity: React.FC<IContainerInfoCentralAxityProps> = (props) => {
  const { collectionData } = props;

  return (
    <div className={`row ${styles.container}`}>
      {collectionData !== undefined ? (
        collectionData.map((item, index) => (
          <CardInfo
            title={item.title}
            text={item.text}
            lengthCard={item.lengthCard}
            key={index}
            link={item.link}
            typeOpen={item.typeOpen}
          />
        ))
      ) : (
        <div>
          <p className={styles.warning__text}>
            No existen elementos, empieze a editar el componente para agregarlos.
          </p>
        </div>
      )}
    </div>
  );
};

export default ContainerInfoCentralAxity;
