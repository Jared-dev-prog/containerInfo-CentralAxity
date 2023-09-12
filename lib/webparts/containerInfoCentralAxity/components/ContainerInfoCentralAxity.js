import * as React from "react";
import styles from "./ContainerInfoCentralAxity.module.scss";
import CardInfo from "./CardInfo";
import "bootstrap/dist/css/bootstrap.min.css";
var ContainerInfoCentralAxity = function (props) {
    var collectionData = props.collectionData;
    return (React.createElement("div", { className: "row ".concat(styles.container) }, collectionData !== undefined ? (collectionData.map(function (item, index) { return (React.createElement(CardInfo, { title: item.title, text: item.text, lengthCard: item.lengthCard, key: index, link: item.link, typeOpen: item.typeOpen })); })) : (React.createElement("div", null,
        React.createElement("p", { className: styles.warning__text }, "No existen elementos, empieze a editar el componente para agregarlos.")))));
};
export default ContainerInfoCentralAxity;
//# sourceMappingURL=ContainerInfoCentralAxity.js.map