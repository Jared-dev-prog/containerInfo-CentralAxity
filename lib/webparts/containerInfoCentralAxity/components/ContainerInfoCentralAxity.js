import * as React from "react";
import styles from "./ContainerInfoCentralAxity.module.scss";
import CardInfo from "./CardInfo";
import "bootstrap/dist/css/bootstrap.min.css";
var ContainerInfoCentralAxity = function (props) {
    var cards = [
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
    return (React.createElement("div", { className: "row ".concat(styles.container) }, cards.map(function (item, index) { return (React.createElement(CardInfo, { title: item.title, text: item.text, lengthCard: item.lengthCard, key: index })); })));
};
export default ContainerInfoCentralAxity;
//# sourceMappingURL=ContainerInfoCentralAxity.js.map