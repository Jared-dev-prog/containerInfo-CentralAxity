import * as React from "react";
import styles from "./ContainerInfoCentralAxity.module.scss";
import { IContainerInfoCentralAxityProps } from "./IContainerInfoCentralAxityProps";
import CardInfo from "./CardInfo";

import "bootstrap/dist/css/bootstrap.min.css";

const ContainerInfoCentralAxity: React.FC<IContainerInfoCentralAxityProps> = (props) => {
  const cards = [
    {
      title: "Arquitectura ",
      text: "Evaluamos, analizamos y definimos modelos de arquitectura que permitirán a nuestros clientes definir un rumbo tecnológico y de diseño de aplicaciones",
      lengthCard: "col-3",
    },
    {
      title: "Arquitectura ",
      text: "Evaluamos, analizamos y definimos modelos de arquitectura que permitirán a nuestros clientes definir un rumbo tecnológico y de diseño de aplicaciones",
      lengthCard: "col-3",
    },
    {
      title: "Arquitectura ",
      text: "Evaluamos, analizamos y definimos modelos de arquitectura que permitirán a nuestros clientes definir un rumbo tecnológico y de diseño de aplicaciones",
      lengthCard: "col-3",
    },
    {
      title: "Arquitectura ",
      text: "Evaluamos, analizamos y definimos modelos de arquitectura que permitirán a nuestros clientes definir un rumbo tecnológico y de diseño de aplicaciones",
      lengthCard: "col-3",
    },
  ];
  return (
    <div className={`row ${styles.container}`}>
      {cards.map((item, index) => (
        <CardInfo title={item.title} text={item.text} lengthCard={item.lengthCard} key={index} />
      ))}
    </div>
  );
};

export default ContainerInfoCentralAxity;
