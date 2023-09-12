import * as React from "react";
import styles from "./ContainerInfoCentralAxity.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
var CardInfo = function (props) {
    var title = props.title, text = props.text, lengthCard = props.lengthCard, typeOpen = props.typeOpen, link = props.link;
    console.log(link);
    var handleRedirect = function () {
        if (typeOpen === "popup") {
            window.open(link, "", typeOpen);
        }
        else {
            window.open(link, typeOpen);
        }
    };
    return (React.createElement("div", { className: "".concat(lengthCard, " ").concat(styles.cursor_pointer) },
        React.createElement("div", { className: "".concat(styles.background_card, " ").concat(styles.font_size, " shadow-sm"), onClick: handleRedirect },
            React.createElement("h1", { className: styles.title }, title),
            React.createElement("div", { className: styles.container__text },
                React.createElement("p", { className: styles.text }, text)),
            link !== null ? (React.createElement("div", { className: styles.button },
                React.createElement("a", { onClick: handleRedirect }, "Ver m\u00E1s detalles"))) : (""))));
};
export default CardInfo;
//# sourceMappingURL=CardInfo.js.map